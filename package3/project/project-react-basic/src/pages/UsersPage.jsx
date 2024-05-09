import React, { useEffect, useState } from 'react'
import TableComponent from '../components/TableComponent/TableComponent'
import './style.css';
import EditUser from '../components/EditUser/EditUser';
import CreateUser from '../components/CreateUser/CreateUser';

const UsersPage = () => {
  const BASE_API_USER = 'http://localhost:3001/users'
  const [data, setData] = useState(null)
  const [openCreateUser, setOpenCreateUser] = useState(false)
  const [openEditUser, setOpenEditUser] = useState(false)
  const initUser = { email: '', userName: '', fullName: '', department: '', position: '' }
  const [createUserData, setCreateUser] = useState(initUser)
  const [detailsUser, setDetailsUser] = useState(null)

  //============================================================================
  // call api
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
        // body: JSON.stringify({...updatedUser}),
      })
      await getUsers()
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
      await getUsers()

      return response.ok;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      return false
    }
  }
  const createUser = async (user) => {
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
      await getUsers()
      // setUser(initUser);

      setOpenCreateUser(false)
      return res.ok
    } catch (error) {
      console.error(`Error creating user: `, error);

      return false
    }

  }


  //============================================================================
  // createUser
  const openModalCreateUser = async (userID) => {
    setOpenCreateUser(true)
  }
  const handleCreateUser = async (user) => {
    await createUser(user)
    setOpenCreateUser(false)

  }
  const handleCancelCreateUser = () => {
    setOpenCreateUser(false)

  }
  //============================================================================
  // edit user
  const openModalEditUser = async (userID) => {
    setOpenEditUser(true)
    const detailsUser = await getUserById(userID)
    console.log('detailsUser', detailsUser)
    setDetailsUser(detailsUser)
  }
  const handleEditUser = async (editedUser) => {
    console.log('editedUser', editedUser)
    const isEdited = await editUser(editedUser)
    setOpenEditUser(false)

  }
  const handleCancelEditUser = () => {
    setOpenEditUser(false)

  }


  useEffect(() => {
    getUsers()

  }, [data])

  return (
    <div style={{ margin: '5px' }}>
      <div>
        <button className='btn-create' onClick={openModalCreateUser}>Create new user</button>
        {openCreateUser && <CreateUser
          // createUser={createUserData}
          handleCreateUser={handleCreateUser}
          handleCancelCreateUser={handleCancelCreateUser}
        />}
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