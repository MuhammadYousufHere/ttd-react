import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
    </Routes>
  )
}
