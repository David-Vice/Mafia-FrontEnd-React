import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import ConnectedUsers from './ConnectedUsers';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { parseJwt, getCookie } from './Helpers';
import axios from 'axios'
import classNames from 'classnames'
const Chat = ({ sendMessage, messages, users,userRoles,bot, sessionId, closeConnection, informRoleDistribution }) => {

    // if (sessionId==null) {
    //     closeConnection();
    // }
    const [jsonData] = useState(parseJwt(getCookie('token')))
    const [flagAd, setFlagAd] = useState(false);
    const [flagUs, setFlagUs] = useState(true);
    //const [flagRoleHide, setFlagRoleHide] = useState(true);
    var flagRoleHide=true;
    const [errorMes, seterrorMes] = useState(null);
    const [roleName, setRoleName] = useState(null);

    const [roleDescription, setRoleDescription] = useState(null);
    const [rolePhoto, setRolePhoto] = useState(null);
    useEffect(() => {
        window.addEventListener('beforeunload', () =>{
            endUserConnection();
        })
    }
    , []);
    function endUserConnection() {
        
        axios.put(`https://localhost:44313/api/Sessions/PlayerLeft/${sessionId}`)
            .then(res => {
                closeConnection()
                setRoleName(null);
                setRoleDescription(null);
                setRolePhoto(null);
            }).catch(e => {
                console.log(e);
            });
    }
    var classes = classNames({
        'mx-2': true,
        'admin-button': flagAd,
        'user-button': flagUs
    })
    useEffect(() => {
        showButton();
    }, []);
    
    function showButton() {
        axios.get(`https://localhost:44313/api/Sessions/GetAdmin/${sessionId}`)
        .then(res => {
            
                if (res.data == jsonData.Id) {
                    setFlagAd(true);
                    setFlagUs(false);

                }
                
            }).catch(e => {
                console.log(e);
            });
            
    }
    if (userRoles) {
        var roleId=null;
        for (let index = 0; index < userRoles.length; index++) {
                   if (userRoles[index].userId ==jsonData.Id) {
                       roleId=userRoles[index].roleId;
                   }
                } 
       if(roleId!=null){
            if (roleId!=3) {
                flagRoleHide=false;
                axios.get(`https://localhost:44313/api/Roles/${roleId}`)
                .then(res => {
                    
                    setRoleName(res.data.role1)
                setRoleDescription(res.data.roleDescription)
                setRolePhoto(res.data.rolePhoto)
                console.log(rolePhoto)
                }).catch(e => {
                    console.log(e);
                });
            }
        }
    }
    var img_class = classNames({
        'invisible-img': flagRoleHide,
    })
    function startGame() {
        axios.put(`https://localhost:44313/api/GameSessionsUsersRoles/DistributeRoles?sessionId=${sessionId}`)
            .then(res => {
                seterrorMes(res.data);
                informRoleDistribution();
            }).catch(e => {
                console.log(e);
            });
    }
    return (
        <div className='mx-5 mb-3'>
            <div className='row'>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col mx-3'>
                            <h3>{errorMes}</h3>
                        </div>
                        <div className='col'>
                            <div className='leave-room mx-5'>
                                <Button variant='primary' className={classes} onClick={() => startGame()}>Start Game</Button>
                                <Button variant='danger' onClick={() => endUserConnection()}>Leave Room</Button>
                            </div>

                        </div>
                    </div>
                    <ConnectedUsers users={users} userId={jsonData.Id} sessionId = {sessionId} />
                    <div className='chat mx-5'>
                        <MessageContainer messages={messages} />
                        <SendMessageForm sendMessage={sendMessage} />
                    </div>
                </div>
                <div className='col-2 mx-1'>
                        <h2>{roleName}</h2>       
                        <p className='roledisc'>{roleDescription}</p> 
                        <img className={img_class} width='150' height='200' src={`data:image/png;base64,${rolePhoto}`}
                            />      
                </div>
            </div>
            

        </div>
    )

}
export default Chat;