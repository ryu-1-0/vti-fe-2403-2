import React, { useState } from 'react'
import './styles/register.css'

function Register() {
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [selectedObject, setSelectedObject] = useState('')
  const [selectedFavorite, setSelectedFavorite] = useState([])
  const [dateTime, setDateTime] = useState(null)
  const [pathFile, setPathFile] = useState('no file')

  const onChangeFullName = (event) => {
    setFullName(event.target.value)
  }

  const onChangeUserName = (event) => {
    setUserName(event.target.value)

  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)

  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)

  }

  const onChangePhoneNumber = (event) => {
    setPhone(event.target.value)

  }
  const onChangeAddress = (event) => {
    setAddress(event.target.value)

  }
  const handleInputObject = (event) => {
    setSelectedObject(event.target.value)

  }
  const onChangeDate = (event) => {
    setDateTime(event.target.value)

  }
  const onChangePathFile = (event) => {
    const file = event.target.files[0]
    const path = URL.createObjectURL(file)
    setPathFile(path)

  }
  const handleOnchangeFavorite = (event) => {
    const value = event.target.value
    const isChecked = event.target.checked

    if (isChecked) {
      setSelectedFavorite([...selectedFavorite, value])
    } else {
      setSelectedFavorite(selectedFavorite.filter((role) => role !== value))
    }
  }



  const handleSubmit = () => {
    setIsSubmit(true)


  }
  const handleClear = () => {
    setIsSubmit(false)
    setFullName('')
    setUserName('')
    setPassword('')
    setEmail('')
    setPhone('')
    setAddress('')
    setSelectedObject('')
    setDateTime('')
    setPathFile('no file')
    setSelectedFavorite([])
  }
  const content = (
    <div className='form-register'>
      <h1>Register</h1>
      <p>Please fill in this form to create an account</p>
      <div>
        <p><strong>Full Name: </strong>{fullName}</p>

      </div>
      <div>
        <p><strong>User Name: </strong>{userName}</p>

      </div>
      <div>
        <p><strong>Password: </strong>{password}</p>

      </div>
      <div>
        <p><strong>Email: </strong>{email}</p>

      </div>
      <div>
        <p><strong>Telephone Number: </strong>{phone}</p>

      </div>

      <div>
        <div>
          <p><strong>Input Object</strong></p>
          <label>
            <input
              type='radio'
              checked
              disabled
            />
            {selectedObject}
          </label>
        </div>
      </div>

      <div>
        <div>
          <p><strong>Favorite</strong></p>

          {selectedFavorite.map((select) => (
            <label>
              <input
                type="checkbox"
                name="roles"
                checked
                disabled
              />{select}
            </label>
          ))}
        </div>
      </div>
      <div>
        <p><strong>Address</strong></p>

        <select
          name='address'
          onChange={onChangeAddress}
          value={address}
          disabled
        >
          <option value='' selected>Select Address</option>
          <option value='1'>Long An</option>
          <option value='2'>Tien Giang</option>
          <option value='3'>Thanh pho HCM</option>
        </select>
      </div>

      <div>
        <label for='date'><strong>Chọn ngày:</strong></label>

        <input type='date' id='date'
          name='date' value={dateTime} disabled></input>
      </div>

      <div>

        <label for='file'><strong>Chọn file: </strong></label>

        {pathFile}
      </div>

    </div >
  )
  return (
    <>
      {isSubmit ? content : null}
      <div className='form-register'>
        <h1>Register</h1>
        <p>Please fill in this form to create an account</p>
        <div>
          <p><strong>Full Name</strong></p>
          <input
            placeholder='Input your fullname'
            onChange={onChangeFullName}
            value={fullName}
          />
        </div>
        <div>
          <p><strong>User Name</strong></p>

          <input
            placeholder='Input your username'
            onChange={onChangeUserName}
            value={userName}
          />
        </div>
        <div>
          <p><strong>Password</strong></p>

          <input
            placeholder='Input your passsword'
            onChange={onChangePassword}
            value={password}
            type='password'
          />
        </div>
        <div>
          <p><strong>Email</strong></p>

          <input
            placeholder='Input your email'
            onChange={onChangeEmail}
            value={email}
          />
        </div>
        <div>
          <p><strong>Telephone Number</strong></p>

          <input
            placeholder='Input your phone number'
            onChange={onChangePhoneNumber}
            value={phone}
          />
        </div>

        <div>
          <p><strong>Input Object</strong></p>

          <label>
            <input
              type='radio'
              name='object'
              value='Student'
              checked={selectedObject === 'Student'}
              onChange={handleInputObject}
            />
            Student
          </label>
          <label>
            <input
              type='radio'
              name='object'
              value='Teacher'
              checked={selectedObject === 'Teacher'}
              onChange={handleInputObject}
            />
            Teacher
          </label>
        </div>

        <div>
          <p><strong>Favorite</strong></p>

          <label>
            <input
              type='checkbox'
              name='favorite'
              value='Badminton'
              checked={selectedFavorite.includes('Badminton')}
              onChange={handleOnchangeFavorite}
            />
            Badminton
          </label>
          <label>
            <input
              type='checkbox'
              name='favorite'
              value='Volleyball'
              checked={selectedFavorite.includes('Volleyball')}
              onChange={handleOnchangeFavorite}
            />
            Volleyball
          </label>
          <label>
            <input
              type='checkbox'
              name='favorite'
              value='Football'
              checked={selectedFavorite.includes('Football')}
              onChange={handleOnchangeFavorite}
            />
            Football
          </label>
        </div>
        <div>
          <p><strong>Address</strong></p>

          <select
            name='address'
            onChange={onChangeAddress}
            value={address}
          >
            <option value='' selected>Select Address</option>
            <option value='1'>Long An</option>
            <option value='2'>Tien Giang</option>
            <option value='3'>Thanh pho HCM</option>
          </select>
        </div>

        <div>
          <label for='date'><strong>Chọn ngày:</strong></label>
          <input type='date'
            id='date' name='date'
            value={dateTime}
            onChange={onChangeDate}
          ></input>
        </div>

        <div>

          <label for='file'><strong>Chọn file:</strong></label>
          <input type='file' id='file'
            onChange={onChangePathFile}></input>
        </div>

        <div className='button'>
          <button className='btn-submit'
            onClick={handleSubmit}>Submit</button>
          <button onClick={handleClear}>Clear</button>

        </div>
      </div >
    </>
  )
}
export default Register