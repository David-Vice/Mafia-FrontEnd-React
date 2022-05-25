import React, {  useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { getCookie, parseJwt } from './Helpers'
import Axios from 'axios'
import axios from 'axios'
import { useState } from "react";


const Lobby = ({ joinRoom, sessionId }) => {
    const [jsonData]=useState(parseJwt(getCookie('token')))
    const [room, setRoom] = useState();
    
    const [url] = useState("https://localhost:44313/api/Sessions");
    const [listItems,setListItems]=useState(null);
    
    console.log(listItems);
    function AddUserToRoom(roomName,id){
        axios.put(`https://localhost:44313/api/Sessions/PlayerJoined/${id}`)
        .then(res=>{
            console.log(roomName);
            console.log(jsonData.UserName);
            joinRoom(jsonData.UserName, roomName,id);
            
        }).catch(e=>{
            console.log(e);
        });


    }
        
        
        
    function handleSubmit(e) {
            e.preventDefault();
            console.log(room + "  " + jsonData.Id);
            
            Axios.post(url, {
            sessionName: room,
            adminId: jsonData.Id
        })
        .then(res => {
            
            console.log(res);

            joinRoom(jsonData.UserName, room,res.data);
        }).catch(error=>{
            console.log(error)
        })
        ;
    }

    const getData = async () => {
        const res=(await axios.get("https://localhost:44313/api/Sessions/GetActiveSessions"))
        console.log(res);
        setListItems(Array.from(res.data).map((d) => <li key={d.id} className='list-group-item mt-1'> {d.sessionName}  {d.numberOfPlayers}/{d.maxNumberOfPlayers} <button onClick={() => AddUserToRoom(d.sessionName,d.id)}>Join</button> </li>))
    };
    useEffect(() => {
        getData();
    },[]);
    return (
        <div>
        <Form className='lobby'
        onSubmit={handleSubmit}
        >
            <Form.Group>
                <Form.Control placeholder="Room name" onChange={e => setRoom(e.target.value)} />
            </Form.Group>
            <Button variant="success" type="submit" disabled={!room}>Create room</Button>


        </Form>

            <div className="row mt-2">
            <div className='col-3'></div>
                <div className='col-6'>
                    <h3>Active Rooms</h3>
                </div>
                <div className='col-3'></div>
            </div>
            <div className='row mt-1 '>
            
                <div className='col-3'></div>
                <div className='col-6 '>
                    <ul className="list-group overflow-hidden" >{listItems}</ul>
                </div>
                <div className='col-3'></div>
            </div>
        
         </div>

   )
}

export default Lobby;