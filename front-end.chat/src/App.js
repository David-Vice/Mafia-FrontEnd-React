import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import Lobby from './components/Lobby';
import Chat from './components/Chat';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
const App = () => {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const joinRoom = async (user, room, id) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:44364/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user, message) => {
        setMessages(messages => [...messages, { user, message }]);
      });

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      });
      setSessionId(id);
      connection.onclose(e => {
        setConnection();
        setMessages([]);
        setUsers([]);
      });
      await connection.start();
      await connection.invoke("JoinRoom", { user, room });
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  }
  ////////////////////////////////////////////
  const informRoleDistribution = async () => {
    try {
      console.log(sessionId);
      await connection.invoke("InformRoleDistribution", sessionId);
    } catch (e) {
      console.log(e);
    }
  }
  ////////////////////////////////////////////

  const sendMessage = async (message) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  }

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  }
  function redirectToMain() {
    closeConnection();
    window.location.href = "http://localhost:3000/";
  }
  return <div className='app container-fluid'>
    <div className='row w-100'>

      <div className='col-12'>
        <a onClick={redirectToMain}>
          <img
            alt="image"
            src="/playground_assets/1-removebg-preview-200h.png"
            className="profile-image"
          />
        </a>
      </div>

      {/* <div className='col-8'>
        <h2>MafiaChat</h2>
        <hr className='line' />
      </div> */}
      <div className='col-2'>

      </div>
    </div>

    {!connection
      ? <Lobby joinRoom={joinRoom} />
      // : <Chat sendMessage={sendMessage} messages={messages} users={users} sessionId={sessionId} closeConnection={closeConnection} />}
      : <Chat sendMessage={sendMessage} messages={messages} users={users}
        sessionId={sessionId} closeConnection={closeConnection} informRoleDistribution={informRoleDistribution} />}
  </div>
}

export default App;
