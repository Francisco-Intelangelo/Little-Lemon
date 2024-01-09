
import { Route, Routes } from 'react-router-dom'
import { BookingPage } from './pages/BookingPage'
import { Index } from './pages/Index'

function App() {
   return (
      <Routes>
         <Route path='/' element={<Index/>}/>
         <Route path="/booking" element={<BookingPage/>}/>
      </Routes>
   )
}

export default App
