
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  //these functions are setting the theme that we are recieving from the button
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  //The useEffect hook monitors changes to themeMode. Every time themeMode is updated, 
  //the hook removes the current theme (light or dark) from the <html> tag's class list and adds the new theme. 
  useEffect(() => {
    //remove both before adding any
    document.querySelector('html').classList.remove("light", "dark")
    //adding the new theme to the class list
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    
    //The ThemeProvider is used to wrap the entire app, providing the theme state and 
    //the functions (themeMode, lightTheme, darkTheme) to switch between themes to all 
    //child components. These values are passed via the value prop to ThemeProvider, 
    //so any component within the provider can access them.


    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App

//code flow:
//1- user toggles the themebtn checkbox
//2- onchange fnc in themebtn runs
//3- it checks the status of the checkbox
//4- if it is checked, it calls darkmode func and sets the value of thememode state to dark using setthememode func as defined by the usestate hook
//5- once thememode state undergoes any change, it triggers the useeffect hook bcz thememode is a dependency of that hook.
//6- useeffect hook now goes on to change the class in the html tag to dark or light accordingly.
//7- the class once updated in the html tag uses the tailwind to switch colors.
