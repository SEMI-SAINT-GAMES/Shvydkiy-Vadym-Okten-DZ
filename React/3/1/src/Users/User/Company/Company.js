export  const Company = (props) => {
    const comp = props.company
  return(
      <div className="Company">
          <h1>COMPANY:</h1>
        <h3>{comp.name}</h3>
          <p>{comp.catchPhrase}</p>
          <p>{comp.bs}</p>
      </div>
  )
}