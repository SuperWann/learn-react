import './App.css'
import Home from './pages/index'
import { GlobalContext } from './context'

function App() {
  const value = true
  const user = {
    name: "setiawan"
  }

  return (
    <div className='App'>
      {/*{value ? 'Benar' : 'Salah'} Conditional Rendering */}
      {value && 'Benar'}
      <GlobalContext.Provider value={user}>
        <Home />
      </GlobalContext.Provider>
    </div>
  )
}

export default App;
