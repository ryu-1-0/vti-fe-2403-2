
const Usd = (props) => {
  return (
    <div>
      Usd:

      <input type="text"
        disabled={props.data > 1_000_000_000_000 || props.data < 0.86}
        value={props.data > 1_000_000_000_000 ? 'too large' : props.data
          || props.data < 0.86 ? "Please enter a vnd > 20.000" : props.data}
      />
      
    </div>
  )
}

export default Usd