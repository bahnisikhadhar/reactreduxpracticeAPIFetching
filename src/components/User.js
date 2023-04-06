import React from 'react'

export default function User({users}) {
  return (
    <div>
      <h1>User List</h1>
      <table border="1">
        <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
      
      <tbody>
        {users.map(user=>(
            <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>
            </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
}
