import React, { useEffect, useState } from 'react'

const EditUser = (props) => {
  // console.log('props?.detailsUser', props?.detailsUser)
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(props?.detailsUser)

  }, [props?.detailsUser])
  // console.log('firstName', user)
  const handleUserChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }))
  }
  const handleClick = () => {
    props.handleEditUser(user)
  }
  return (
    <div id='form'>
      < div className="form-content" >
        <div className='user-detail'>
          <h2>Creat new User</h2>
          <div>
            <label>id: </label>
            <input type="text" value={user?.id}
              name='id'
              onChange={handleUserChange}
              disabled
            />

          </div>
          <div>
            <label>Email: </label>
            <input type="text" value={user?.email}
              onChange={handleUserChange}
              name='email'
            />
          </div>
          <div>
            <label>userName:</label>
            <input type="text" value={user?.userName}
              onChange={handleUserChange}
              name='userName'
            />
          </div>
          <div>
            <label>fullName: </label>
            <input type="text" value={user?.fullName}
              onChange={handleUserChange}
              name='fullName'
            />
          </div>
          <div>
            <label>department: </label>
            <input type="text" value={user?.department}
              onChange={handleUserChange}
              name='department'
            />
          </div>
          <div>
            <label>position: </label>
            <input type="text" value={user?.position}
              onChange={handleUserChange}
              name='position'
            />
          </div>

          <button onClick={handleClick}>Edit</button>
          <button onClick={props.handleCancelEditUser}>Cancel</button>
        </div >
      </div >
    </div>
  )
}

export default EditUser