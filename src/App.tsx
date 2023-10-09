import BrowserRouter from './common/BrowserRouter'
import { history } from './common/history'
import './App.css'

function App() {
  return (
    <BrowserRouter history={history}>
      <h1>Hello world! I am using React</h1>
      <div className='input-group'>
        <label htmlFor='love'>
          Do You Love Testing?
          <input type='checkbox' name='love' id='love' />
        </label>
      </div>
    </BrowserRouter>
  )
}

export default App
