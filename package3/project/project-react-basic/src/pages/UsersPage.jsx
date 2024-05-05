import React, { useEffect, useState } from 'react'
import TableComponent from '../components/TableComponent/TableComponent'
import './style.css';
import EditUser from '../components/EditUser/EditUser';

const UsersPage = () => {
  const BASE_API_USER = 'http://localhost:3001/users'
  const [data, setData] = useState(null)
  const [openCreateUser, setOpenCreateUser] = useState(false)
  const [openEditUser, setOpenEditUser] = useState(false)
  const [user, setUser] = useState({
    id: '', email: '', userName: '', fullName: '', department: '', position: ''
  })
  const getUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }

  }
  const getUserById = async (userId) => {
    try {
      const response = await fetch(`${BASE_API_USER}/${userId}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error get user by id:', error);
    }
  }
  const editUser = async (updatedUser) => {
    try {
      const res = await fetch(`${BASE_API_USER}/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      })
      return res.ok
    } catch (error) {
      console.error('Error edit user:', error);
    }

  }
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE',
      });
      return response.ok;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      return false
    }
  }
  const createUser = async () => {
    // console.log('user', user)
    const newUser = user
    try {
      const res = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
      setOpenCreateUser(false)
      return res.ok
    } catch (error) {
      console.error(`Error creating user: `, error);

      return false
    }

  }
  const content = (
    // { id, email, userName, fullName, department, position }
    <div id='form'>
      < div className="form-content" >
        <div className='user-detail'>
          <h3>Creat new User</h3>
          <div >
            <label>id: </label>
            <input type="text" value={user.id}
              onChange={(e) => {
                e.preventDefault()

                setUser({
                  ...user,
                  id: e.target.value,
                })
              }}
            />

          </div>
          <div>
            <label>Email: </label>
            <input type="text" value={user.email} onChange={(e) => {
              e.preventDefault()
              setUser({
                ...user,
                email: e.target.value,
              })
            }} />
          </div>
          <div>
            <label>userName:</label>
            <input type="text" value={user.userName} onChange={(e) => {
              e.preventDefault()

              setUser({
                ...user,
                userName: e.target.value,
              })
            }} />
          </div>
          <div>
            <label>fullName: </label>
            <input type="text" value={user.fullName} onChange={(e) => {
              e.preventDefault()
              setUser({
                ...user,
                fullName: e.target.value,
              })
            }
            } />
          </div>
          <div>
            <label>department: </label>
            <input type="text" value={user.department} onChange={(e) => {
              e.preventDefault()

              setUser({
                ...user,
                department: e.target.value,
              })
            }} />
          </div>
          <div>
            <label>position: </label>
            <input type="text" value={user.position} onChange={(e) => {
              e.preventDefault()

              setUser({
                ...user,
                position: e.target.value,
              })
            }} />
          </div>
          <div>
            <button className='btn-create' onClick={createUser}>Create</button>
            <button className='btn-cancel' onClick={() => setOpenCreateUser(false)}>Cancel</button>
          </div>

        </div >
      </div >
    </div>

  )

  const handleCreateUser = () => {
    setOpenCreateUser(true)

  }
  const [detailsUser, setDetailsUser] = useState(null)
  const openModalEditUser = async (userID) => {
    setOpenEditUser(true)
    const detailsUser = await getUserById(userID)
    console.log('detailsUser', detailsUser)
    setDetailsUser(detailsUser)
  }
  const handleEditUser = async (editedUser) => {
    console.log('editedUser', editedUser)
    const isEdited = await editUser(editedUser)
    // if (isEdited) {
    //   location.reload()
    // } else {
    //   alert("Edit Failed")
    // }
  }
  const handleCancelEditUser = () => {
    setOpenEditUser(false)

  }
  useEffect(() => {
    getUsers()

  }, [])

  return (
    <div>UsersPage
      <div>
        <button className='btn-create' onClick={handleCreateUser}>Create new user</button>
        {openCreateUser && content}
        {openEditUser && <EditUser
          detailsUser={detailsUser}
          handleEditUser={handleEditUser}
          handleCancelEditUser={handleCancelEditUser}
        />}
      </div>
      < TableComponent data={data} deleteUser={deleteUser} handleEditUser={openModalEditUser} />


    </div>
  )
}

export default UsersPage