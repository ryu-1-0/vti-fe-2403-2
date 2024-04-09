import React from 'react'
import './App.css'
import CardComponent from './components/CardComponent'
import CardComponent1 from './components/CardComponent1'
import CardComponent2 from './components/CardComponent2'
import CardComponent3 from './components/CardComponent3'
import CardComponentBtvn from './components/CardComponentBtvn'

const App = () => {
  const element = React.createElement(
    'div',
    { className: 'ques1' },
    React.createElement('h1', null, 'Hj World'),
    React.createElement('p', null, 'My first paragraph')
  )
  const showMessage = () => {
    console.log("hell world")
  }
  const styleObject = {
    color: "blue",
    backgroundColor: " red",
    padding: "20px 30px",
    fontSize: "20px",
  }
  const user = {
    firstName: 'Duy',
    lastName: 'Bao',
    showFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  const FullName = () => {
    const firstName = 'Duy'
    const lastName = 'Bao'
    const fullName = `${firstName} ${lastName}`
    return `${fullName}    ${firstName}    ${lastName}`
  }
  return (
    <>
      <div>
        {element}
      </div>
      <div className='ques2'>
        <h1>Hj World</h1>
        <p>My first paragraph</p>
      </div>
      <div className='ques3'>
        <h2>DANH SÁCH LỚP HỌC</h2>
        <ol>
          <li>Nguyễn Ngọc Duy</li>
          <li>Tống Quang Anh</li>
          <li>Đinh Thu Loan</li>
          <li>Hà Văn Tiến</li>
          <li>Nguyễn Hải Đăng</li>
          <li>Nguyễn Tiến Quang</li>
          <li>Nguyễn Văn Chiến</li>
        </ol>
      </div>
      <div>
        <ol>
          <li>Cơm trưa
            <ul>
              <li>đậu bắp</li>
              <li>1</li>
              <li>2</li>

            </ul>
          </li>
          <li>Tráng miệng</li>

        </ol>
      </div>
      <div>
        <p>
          <button type="button" onClick={showMessage}>Show hello world button</button>
        </p>
        <p style={{
          color: "white",
          background: "red"
        }}>This is text 1</p>
        <p style={styleObject}>This is text 2</p>
        <p className="text-3">This is text 3</p>

      </div>
      <div>
        showFullName: {user.showFullName()}
      </div>
      <div>
        showFullName: {FullName()}
      </div>

      <CardComponent />
      <div className="group-card">
        <CardComponent1 />
        <CardComponent2 />
        <CardComponent3 />

      </div>
      <CardComponentBtvn />
    </>
  )
}

export default App
