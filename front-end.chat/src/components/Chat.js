import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import ConnectedUsers from './ConnectedUsers';
import { Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { parseJwt,getCookie } from './Helpers';
import axios from 'axios'
import classNames from 'classnames'
const Chat = ({ sendMessage, messages, users,sessionId, closeConnection }) =>{ 

// if (sessionId==null) {
//     closeConnection();
// }
const [jsonData]=useState(parseJwt(getCookie('token')))
const [flagAd, setFlagAd] = useState(false);
const [flagUs, setFlagUs] = useState(true);
const [errorMes, seterrorMes] = useState(null);
function endUserConnection(){
    
    axios.put(`https://localhost:44313/api/Sessions/PlayerLeft/${sessionId}`)
        .then(res=>{

            closeConnection()
            
        }).catch(e=>{
            console.log(e);
        });
}
var classes = classNames( {
    'mx-2':true,
    'admin-button': flagAd,
    'user-button': flagUs
})
useEffect(() => {
    showButton();
},[]);

function showButton(){

    axios.get(`https://localhost:44313/api/Sessions/GetAdmin/${sessionId}`)
        .then(res=>{

            if(res.data==jsonData.Id){
                setFlagAd(true);
                setFlagUs(false);
                
            }
            
        }).catch(e=>{
            console.log(e);
        });

}
function startGame(){

    axios.put(`https://localhost:44313/api/GameSessionsUsersRoles/DistributeRoles?sessionId=${sessionId}`)
        .then(res=>{

            seterrorMes(res.data);
            
            
        }).catch(e=>{
            console.log(e);
        });



}
return(
<div className='mx-5 mb-3'>
    <div className='row'>
        <div className='col'>
            <h3>{errorMes}</h3>
        </div>
        <div className='col'>
        <div className='leave-room mx-5'>
            <Button variant='primary' className={classes} onClick={() => startGame()}>Start Game</Button><Button variant='danger' onClick={() => endUserConnection()}>Leave Room</Button>
        </div>

        </div>
    </div>
    <ConnectedUsers users={users} />
    <div className='chat mx-5'>
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </div>

</div>
)

}
export default Chat;