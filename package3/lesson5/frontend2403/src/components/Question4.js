import { useState } from 'react'

const Question4 = () => {
  const [inputSearch, setInputSearch] = useState('')
  const [errText, setErrorText] = useState('')
  const [display, setDisplay] = useState('')
  const onChangeInputSearch = (e) => {
    setInputSearch(capitalize(e.target.value))
  }
  const capitalize = (str) => {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1)
  }
  const capitalizeSentence = (str) => {
    const inputSplit = str.split(' ')

    return inputSplit.map((item) => capitalize(item)).join(' ')
  }
  const handleSubmit = () => {
    if (!inputSearch.length) {
      setErrorText('Please enter a search')
    } else {
      setErrorText('')

      // console.log(inputSplit)
      setDisplay(capitalizeSentence(inputSearch))
    }

  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className='search'>
      <h2>7-Event Question4</h2>
      <input type="text"
        value={inputSearch}
        placeholder='Input your content here'
        onChange={onChangeInputSearch}
        onKeyDown={handleKeyDown}
      />
      {/* <button onClick={handleSubmit}
      >Submit</button> */}
      <div>
        <p>{errText ? errText : null}</p>
      </div>
      <div>
        {display}
      </div>
    </div>
  )
}

export default Question4