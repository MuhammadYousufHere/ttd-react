import BrowserRouter from './common/BrowserRouter'
import { history } from './common/history'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
  return (
    <BrowserRouter history={history}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
