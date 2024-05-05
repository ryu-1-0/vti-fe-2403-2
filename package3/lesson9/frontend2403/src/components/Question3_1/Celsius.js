
const Celsius = (props) => {
  // const [celsius, setCelsius] = useState('')

  return (
    <div>
      Celsius:
      <input type="number"
        onChange={(e) => { props.onChange(e.target.value) }}
        value={props.data}

      />
    </div>
  )
}

export default Celsius