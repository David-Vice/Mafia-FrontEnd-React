import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getCookie, parseJwt } from './Helpers'
import Axios from 'axios'

const Lobby = ({ joinRoom }) => {
    const [username, setUsername] = useState();
    const [userid, setUserid] = useState();
    const [room, setRoom] = useState();
    const [url, setUrl] = useState();
    const [data, setData] = useState({
        sessionName: "",
        adminId: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        // console.log();
        // setUserid(parseJwt(getCookie('token')).Id);
        // setUsername(parseJwt(getCookie('token')).UserName)
        setUrl("https://localhost:44313/api/Sessions");
        // joinRoom(user, room);

        console.log(room + "  " + parseJwt(getCookie('token')).Id);
        console.log(room + "  " + userid);
        console.log(room + "  " + parseJwt(getCookie('token')).Id);

        Axios.post(url, {
            sessionName: room,
            adminId: parseJwt(getCookie('token')).Id
        })
            .then(res => {
                console.log(res);
            })
            .catch((error) => {
                if (error.response !== null) {
                    console.log(error)
                }
            });

    }


    // setUser(parseJwt(getCookie('token')).UserName);
    // console.log(parseJwt(getCookie('token')).Id);
    return (
        // <div className='home-container'>
        <Form className='lobby'
            onSubmit={handleSubmit}
        >
            <Form.Group>
                {/* <Form.Control placeholder="name" onChange={e => setUser(parseJwt(getCookie('token')).UserName)} /> */}
                <Form.Control placeholder="Room name" onChange={e => setRoom(e.target.value)} />
            </Form.Group>
            <Button variant="success" type="submit" disabled={!room}>Create room</Button>
        </Form>
        // </div>

    )
}

export default Lobby;