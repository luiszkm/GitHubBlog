import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { PostDetails } from '../pages/PostDetails'



export function AppRoutes() {

  return (
    <Routes >
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<PostDetails />} />
      </Route>
    </Routes>
  )
}