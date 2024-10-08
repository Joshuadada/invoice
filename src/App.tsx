import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard, Invoice, Login, NotFound } from '.'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  return (
    <GoogleOAuthProvider clientId="113580051962-mr2a9l9bf8b2fooq58plfc35f2ittri1.apps.googleusercontent.com">
      <div className='max-w-[1412px] mx-auto bg-[#F5F6FA] h-screen'>
        <BrowserRouter>
          <Routes>
            {/* Login */}
            <Route path="/" element={<Login />} />

            {/* Edit Information */}
            <Route path="main" element={<Dashboard />}>
              <Route index element={<Invoice />} />
            </Route>

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
