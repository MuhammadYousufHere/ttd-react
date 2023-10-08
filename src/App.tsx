import './App.css'

function App() {
  return (
    <div>
      <h1>Hello world! I am using React</h1>
      <div className='input-group'>
        <label htmlFor='love'>
          Do You Love Testing?
          <input type='checkbox' name='love' id='love' />
        </label>
      </div>
    </div>
  )
}

export default App
