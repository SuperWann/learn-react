import './App.css'
import Home from './pages/Index'
import { GlobalContext } from './context'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers'

function App() {
  // const value = true
  const user = {
    name: "setiawan"
  }

  return (
    <div className='App'>
      {/*{value ? 'Benar' : 'Salah'} Conditional Rendering */}
      {/* {value && 'Benar'} */}
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App;
