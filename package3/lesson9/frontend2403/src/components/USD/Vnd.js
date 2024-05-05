
const Vnd = (props) => {

  return (
    <div>
      VND:
      <input type="number"
        onChange={(e) => { props.onChange(e.target.value) }}

      />
    </div>
  )
}

export default Vnd