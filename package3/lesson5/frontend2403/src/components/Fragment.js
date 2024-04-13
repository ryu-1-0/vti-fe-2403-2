// import React from 'react'
import { useState } from 'react'
import './styles/fragment.css'
const Fragment = () => {
  const [count, setCount] = useState(1)
  const increase = () => {
    setCount((preState) => preState + 1)
  }
  const decrease = () => {
    setCount((preState) => preState - 1)

  }
  const [name, setNamed] = useState('')
  const onChangeName = (event) => {
    setNamed(event.target.value)
  }
  console.log(name)
  const submit = () => {
    alert(`Hi ${name}`)
    setNamed('')
  }
  const [fullName, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [selectedSkill, setSelectedSkill] = useState([])
  const [aboutYou, setAboutYou] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleCheckboxSkill = (event) => {
    const value = event.target.value
    const isChecked = event.target.checked

    if (isChecked) {
      setSelectedSkill([...selectedSkill, value])
    } else {
      setSelectedSkill(selectedSkill.filter((role) => role !== value))
    }
  }
  const handleOnChangeFullName = (event) => {
    setName(event.target.value)
  }
  const handleOnChangeAge = (event) => {
    setAge(event.target.value)

  }
  const handleOnChangeGender = (event) => {
    setGender(event.target.value)

  }
  const handleOnChangeAboutYou = (event) => {
    setAboutYou(event.target.value)

  }
  const handleSubmit = () => {
    setIsSubmitted(true)


  }
  const handleClear = () => {
    setIsSubmitted(false)
    setName('')
    setAge('')
    setGender('')
    setAboutYou('')
    setSelectedSkill([])
  }
  const content = (
    <div className='form-btvn' style={{ border: '1px solid gray', borderRadius: '6px', padding: '10px' }}>
      <div>
        <h3>Full Name:{fullName}</h3>

      </div>
      <div>
        <h3>Age: {age}</h3>
      </div>
      <div>
        <h3>Gender:</h3>
        <select className="input-render" name="myDrop"
          onChange={handleOnChangeGender}
          value={gender}
          disabled
        >
          <option value="default">Select Render</option>
          <option value="giatri1">Male</option>
          <option value="giatri2">Female</option>
          <option value="giatri3">Others</option>

        </select>

      </div>
      <div className='skill'>

        <h3>Skill:</h3>
        {selectedSkill.map((select) => (
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
      <div>
        <h3>About You:</h3>
        <p>{aboutYou}</p>
      </div>
    </div>
  )
  return (
    < >
      <div className='form-btvn'>
        <div>
          <h3>Full Name:</h3>
          <input
            className='input'
            type='text'
            value={fullName}
            placeholder='Enter Full Name'
            onChange={handleOnChangeFullName}
          />
        </div>
        <div>
          <h3>Age:</h3>
          <input
            className='input'
            type='text'
            value={age}
            placeholder='Enter age'
            onChange={handleOnChangeAge}
          />
        </div>
        <div>
          <h3>Gender:</h3>
          <select className="input-render" name="myDrop"
            onChange={handleOnChangeGender}
            value={gender}
          >
            <option value="default">Select Render</option>
            <option value="giatri1">Male</option>
            <option value="giatri2">Female</option>
            <option value="giatri3">Others</option>

          </select>

        </div>
        <div className='skill'>

          <h3>Skill:</h3>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="Programming"
              checked={selectedSkill.includes('Programming')}
              onChange={handleCheckboxSkill}
            />
            Programming
          </label>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="Development"
              checked={selectedSkill.includes('Development')}
              onChange={handleCheckboxSkill}
            />
            Development
          </label>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="Design"
              checked={selectedSkill.includes('Design')}
              onChange={handleCheckboxSkill}
            />
            Design
          </label>
          <label>
            <input
              type="checkbox"
              name="roles"
              value="Testing"
              checked={selectedSkill.includes('Testing')}
              onChange={handleCheckboxSkill}
            />
            Testing
          </label>


        </div>
        <div>
          <h3>About You:</h3>
          <textarea
            type='text'
            value={aboutYou}
            placeholder='Enter about you'
            onChange={handleOnChangeAboutYou}
          ></textarea>
        </div>
        <div>
          <button className='form__btn' onClick={handleSubmit}>Submit</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
      {isSubmitted ? content : null}
      <div className='form'>

        <div >
          <h2>Full Name: {name}</h2>
          <input className='form__input' id='input' type='text'
            placeholder='Enter your name'
            onChange={onChangeName}
            value={name}
          />
        </div>

      </div>
      <div className='form'>

        <div >
          <label>Your Name:</label>
          <input className='form__input' id='input' type='text'
            placeholder='Enter your name'
            onChange={onChangeName}
            value={name}
          />
        </div>
        <div >
          <button className='form__btn' onClick={submit}>Submit</button>
        </div>

      </div>

      <h1 className={`title ${count % 2 === 0 ? 'even' : 'odd'}`}>
        Count: {count}
      </h1>
      <h1 className='title' >
        <button className='btn' onClick={increase} disabled={count >= 10}>
          Increase count ➕
        </button>
      </h1>
      <h1 className='title'>
        <button className='btn btn-decrease' onClick={decrease} disabled={count <= 0}>
          Decrease count ➖
        </button>
      </h1>
      {/* <p>
        Some text.
      </p>
      
      <h3>
        This is a fragment
      </h3>
      <p>
        More text.
      </p>
      <h3>
        Another heading.

      </h3>
      <p>
        Even more text.
      </p>
      <p>
        <a>https://codepen.io/reactjs/pen/VrEbjE?editors=1000</a>

      </p> */}
    </>
  )
}

export default Fragment