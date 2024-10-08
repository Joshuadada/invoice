import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard, Invoice, NotFound } from '.'

function App() {
  return (
    <div className='max-w-[1412px] mx-auto bg-[#F5F6FA] h-screen'>
      <BrowserRouter>
        <Routes>
          {/* Login */}
          {/* <Route path="/" element={<Login />} /> */}

          {/* Edit Information */}
          <Route path="main" element={<Dashboard />}>
            <Route index element={<Invoice />} />
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
