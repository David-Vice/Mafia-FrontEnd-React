import axios from 'axios'

const ConnectedUsers = ({ users,userId,sessionId }) => 
{ 
function Kill(sessionId, userId) 
{
    const res = axios.put(`https://localhost:44313/api/GameSessionsUsersRoles/Kill?sessionId=${sessionId}&userId=${userId}`,)
    console.log(res);
}
return (
<div className='user-list'>
    <h4>Connected Users</h4>
    {users.map((u, idx) => <div onClick={() => Kill(sessionId,userId)}><h6 key={idx} className='user'>{u}</h6></div>)}
</div>)
}

export default ConnectedUsers;