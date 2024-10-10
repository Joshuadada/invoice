import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import { Dashboard, Invoice, Login, NotFound } from '.'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement:  <NotFound />,
    },
    {
      path: 'main',
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Navigate to="getting-started" replace={true} />
        },
        {
          path: 'getting-started',
          element: <h3>Getting started works!</h3>
        },
        {
          path: 'overview',
          element: <h3>Overview works!</h3>
        },
        {
          path: 'accounts',
          element: <h3>Accounts works!</h3>
        },
        {
          path: 'invoice',
          element: <Invoice />
        },
        {
          path: 'beneficiary-management',
          element: <h3>Beneficiary management works!</h3>
        },
        {
          path: 'help-center',
          element: <h3>Help center works!</h3>
        },
        {
          path: 'settings',
          element: <h3>Settings works!</h3>
        },
      ]
    },
    // {
    //   path: '*',
    //   element: <NotFound />
    // }
  ]);

  return (
    <GoogleOAuthProvider clientId="113580051962-mr2a9l9bf8b2fooq58plfc35f2ittri1.apps.googleusercontent.com">
      <div className='max-w-[1412px] mx-auto bg-[#F5F6FA] h-screen overflow-y-hidden'>
        <RouterProvider router={router} />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
