import React, { useState } from 'react'
import Vnd from './Vnd';
import Usd from './Usd';

const SwapUsd = () => {
  const [vnd, setVnd] = useState('');
  const onChangeVnd = (value) => {

    setVnd((value / 23_000).toFixed(2))


  }
  return (
    <div>
      <Vnd onChange={onChangeVnd} />
      <Usd data={vnd}  />
    </div>
  )
}

export default SwapUsd