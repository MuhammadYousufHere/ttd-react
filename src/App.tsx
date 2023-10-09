import BrowserRouter from './common/BrowserRouter'
import AppRoutes from './routes/AppRoutes'
import { history } from './common/history'
import './App.css'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'

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
