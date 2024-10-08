
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>
     <h1>React Context API</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App

//login





// 1- inside this wrap of the UserContextProvider, we will get access in all components