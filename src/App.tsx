import BrowserRouter from './common/BrowserRouter'
import AppRoutes from './routes/AppRoutes'
import { history } from './common/history'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import './App.css'

function App() {
  return (
    <BrowserRouter history={history}>
      <ReduxProvider store={store}>
        <AppRoutes />
      </ReduxProvider>
    </BrowserRouter>
  )
}

export default App
