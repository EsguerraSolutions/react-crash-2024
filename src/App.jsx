import React from 'react'

const App = () => {
  const name = 'John';
  const names = ['Brad','Mary','Joe'];
  const loggedIn = false;
  const styles = {
    color: 'red',
    fontSize: '55px',
  }

  return (
    <>
      <div className="text-5xl">App</div>
      <p style={styles}>Hello {name}</p>
      <ul>
        {names.map((name,index)=> (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {loggedIn ? <h1> Hello Member</h1> : <h1>Hello Guess</h1>}
    </>

  )
}

export default App