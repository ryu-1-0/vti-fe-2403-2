
import { useEffect, useState } from 'react';
import './App.css';
import Lifecycle from './components/Lifecycle/Lifecycle';
import InfoPage from './components/Question2_1/InfoPage';
import InfoPageCF from './components/Question3_1/InfoPageCF';
import SwapUsd from './components/USD/SwapUsd';
import FormPage from './components/bt19.4/FormPage';
import OuterComponent from './components/Api/OuterComponent';
import Home from './components/Context/Practise1/Home';
import Home1 from './components/Context/Practise2/Home1';
import Home3 from './components/Context/Practise3/Home3';

function App() {
  console.log('App component ...')
  const [counter, setCounter] = useState(0)
  const [data, setData] = useState(null)
  console.log('first', data)
  async function fetchData() {
    const data = await fetch('https://reqres.in/api/users?page=2')
    const result = await data.json()
    setData(result)
  }
  useEffect(() => {

    fetchData()
  }, [])
  const content = (
    data?.data.map((item) => {
      return (
        <div>
          <ul key={item.id}>
            <li>{item.email}</li>
            <li>{item.first_name}</li>
            <li>{item.last_name}</li>
          </ul>
        </div>
      )
    })
  )
  return (
    <>
      {/* Buoi 11 */}
      {/* <Home /> */}
      {/* <Home1 /> */}
      <Home3 />
      {/* buoi 10 */}
      {/* <OuterComponent /> */}
      {/* <Lifecycle counter={counter} />
      <h2>{counter}</h2>
      <button onClick={() => { setCounter((preStae) => preStae + 1) }}>Update Counter</button>
      {content} */}
      {/* buoi 9 */}
      {/* <SwapUsd /> */}
      {/* <InfoPageCF /> */}
      {/* <InfoPage /> */}
      {/* <FormPage /> */}
    </>
  );
}

export default App;
