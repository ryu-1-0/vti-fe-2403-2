import React, { useEffect, useState } from 'react'
import InnerComponent from './InnerComponent'
import InnerComponent2 from './InnerComponent2'

const OuterComponent = (props) => {
  const [data, setData] = useState(null)
  const [page, setPage] = useState(1)
  async function fetchData() {
    const data = await fetch(`https://reqres.in/api/users?page=${page}`)
    const result = await data.json()
    setData(result)
  }
  useEffect(() => {

    fetchData()
  }, [page])
  console.log('2', props)

  const handleClick = (number) => {
    console.log('number', number)
    setPage(number)

  }
  return (
    <div>
      <InnerComponent item={data} handleClick={handleClick} />
      {/* <InnerComponent2 /> */}

    </div>
  )
}

export default OuterComponent