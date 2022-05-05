const Filter = (props) => {
    return (
      <div id="case-insensitive-search">
        Search for an entry < input value={props.query} onChange={props.handleQuery} />
      </div>
      
    )
  }

  export default Filter