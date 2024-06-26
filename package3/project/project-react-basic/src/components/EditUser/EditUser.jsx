import React, { useEffect, useState } from 'react'
import './style.css'
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
  const getPositionOptions = () => {
    // Xây dựng một đối tượng map các lựa chọn vị trí dựa trên bộ phận
    const positionOptionsByDepartment = {
      sales: ['Sales Associate', 'Sales Manager'],
      marketing: ['Marketing Manager', 'Marketing Coordinator'],
      it: ['Software Engineer', 'IT Manager']
    }

    // Trả về lựa chọn vị trí phù hợp với bộ phận được chọn
    return positionOptionsByDepartment[user?.department] || []
  }
  const handleClick = () => {
    props.handleEditUser(user)
  }
  return (
    <div id='form'>
      < div className="form-content" >
        <div className='user-detail'>
          <h3>Edit User</h3>
          {/* <div>
            <label>id: </label>
            <input type="text" value={user?.id}
              name='id'
              onChange={handleUserChange}
              disabled
            />

          </div> */}
          <div>
            <label>Email*: </label>
            <input type="text" value={user?.email}
              onChange={handleUserChange}
              name='email'
            />
          </div>
          <div>
            <label>UserName*:</label>
            <input type="text" value={user?.userName}
              onChange={handleUserChange}
              name='userName'
            />
          </div>
          <div>
            <label>FullName*: </label>
            <input type="text" value={user?.fullName}
              onChange={handleUserChange}
              name='fullName'
            />
          </div>

          <div>
            <label>Department: </label>
            <select
              name='department'
              onChange={handleUserChange}

              value={user?.department}
            >
              <option value='' selected>Select Department</option>
              <option value='sales'>Sales</option>
              <option value='marketing'>Marketing</option>
              <option value='it'>IT</option>
            </select>
          </div>
          <div>
            <label>Position: </label>
            <select
              name='position'
              onChange={handleUserChange}

              value={user?.position}
            >
              <option value="" selected>Select Position</option>
              {getPositionOptions().map((position) => (
                <option key={position} value={position}>{position}</option>
              ))}
            </select>
          </div>
          <div className='btn-group'>
            <button className='btn-create' onClick={handleClick}>Edit</button>
            <button className='btn-cancel' onClick={props.handleCancelEditUser}>Cancel</button>
          </div>

        </div >
      </div >
    </div>
  )
}

export default EditUser   