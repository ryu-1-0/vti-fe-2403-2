import React from 'react';
import './style.css';

const TableComponent = (props) => {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>FullName</th>
            <th>Department</th>
            <th>Position</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {props?.data?.map((user) => (
            <tr key={user?.id}>
              <td>{user?.id}</td>
              <td>{user?.email}</td>
              <td>{user?.userName}</td>
              <td>{user?.fullName}</td>
              <td>{user?.department}</td>
              <td>{user?.position}</td>
              <td>
                <button className='btn-edit' onClick={() => { props?.handleEditUser(user.id) }}>Edit</button>
              </td>
              <td>
                <button className='btn-edit' onClick={() => { props?.deleteUser(user.id) }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;