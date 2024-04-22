import React, { useState } from 'react'
import './styles/search.css'
const Search = () => {
  const [inputSearch, setInputSearch] = useState('')
  const [errText, setErrorText] = useState('')
  const [display, setDisplay] = useState('')
  const onChangeInputSearch = (e) => {
    setInputSearch(e.target.value)
  }
  const handleSubmit = () => {
    if (!inputSearch.length) {
      setErrorText('Please enter a search')
    } else {
      setErrorText('')
      setDisplay(inputSearch)
    }

  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }
  return (
    <div className='search'>
      <h2>7-Event Question3</h2>
      <input type="text"
        value={inputSearch}
        placeholder='Input your content here'
        onChange={onChangeInputSearch}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}
      >Submit</button>
      <div>
        <p>{errText ? errText : null}</p>
      </div>
      <div>
        {display}
      </div>
    </div>

  )
}

export default Search