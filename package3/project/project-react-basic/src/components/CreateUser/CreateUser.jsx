import React, { useEffect, useState } from 'react'
import './style.css'
const CreateUser = (props) => {
  // console.log('props?.createUser', props?.createUser)
  const [user, setUser] = useState(null)
  const [inputErrors, setInputErrors] = useState(
    { email: false, userName: false, fullName: false }
  )
  useEffect(() => {
    setUser(props?.createUser)

  }, [props?.createUser])
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
    const errors = {}
    let hasError = false

    // Kiểm tra xem các input có được điền đầy đủ hay không
    if (!user?.email) {
      errors.email = true
      hasError = true
    }
    if (!user?.userName) {
      errors.userName = true
      hasError = true
    }
    if (!user?.fullName) {
      errors.fullName = true
      hasError = true
    }

    // Nếu có lỗi, cập nhật trạng thái inputErrors để hiển thị thông báo lỗi
    if (hasError) {
      setInputErrors(errors)
    } else {
      // Nếu không có lỗi, gọi hàm handleCreateUser từ props
      props.handleCreateUser(user)
    }
  }
  return (
    <div id='form'>
      < div className="form-content" >
        <div className='user-detail'>
          <h3>Create new User</h3>

          <div>
            <label>Email*: </label>
            <input type="text" value={user?.email}
              onChange={handleUserChange}
              name='email'
            />
            {inputErrors.email &&
              <span className="error-message">Please enter an email</span>}
          </div>
          <div>
            <label>UserName*:</label>
            <input type="text" value={user?.userName}
              onChange={handleUserChange}
              name='userName'
            />
            {inputErrors.email &&
              <span className="error-message">Please enter an email</span>}
          </div>
          <div>
            <label>FullName*: </label>
            <input type="text" value={user?.fullName}
              onChange={handleUserChange}
              name='fullName'
            />
            {inputErrors.email &&
              <span className="error-message">Please enter an email</span>}
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
            <button className='btn-create' onClick={handleClick}>Create</button>
            <button className='btn-cancel' onClick={props.handleCancelCreateUser}>Cancel</button>
          </div>

        </div >
      </div >
    </div>
  )
}

export default CreateUser   