import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
      </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
