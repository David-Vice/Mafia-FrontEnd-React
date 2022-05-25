import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import ConnectedUsers from './ConnectedUsers';
import { Button } from 'react-bootstrap';
import axios from 'axios'
const Chat = ({ sendMessage, messages, users,sessionId, closeConnection }) =>{ 

// if (sessionId==null) {
//     closeConnection();
// }
function endUserConnection(){
    axios.put(`https://localhost:44313/api/Sessions/PlayerLeft/${sessionId}`)
        .then(res=>{

            closeConnection()
            
        }).catch(e=>{
            console.log(e);
        });
}

return(
<div>
    <div className='leave-room'>
        <Button variant='danger' onClick={() => endUserConnection()}>Leave Room</Button>
    </div>
    <ConnectedUsers users={users} />
    <div className='chat'>
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </div>
</div>
)

}
export default Chat;