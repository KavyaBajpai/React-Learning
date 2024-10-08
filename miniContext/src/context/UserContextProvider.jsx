import React from "react";
import UserContext from "./UserContext";

const UserContextProvider= ({children}) =>
{  const [user, setUser]= React.useState(null)
   return (
      <UserContext.Provider value={{user, setUser}}>
      { children }
      </UserContext.Provider>
   )
   
}

export default UserContextProvider






// 1- children here means all the divs and all the components that are passed to the function
// 2- UserContext.Provider is the value that we need to get the work done
// 3- inside the val property, we can pass all the states that we will be needing
// 4- here we have passed an object that contains one variable and one function
// 5- setUser comes from the UserContextProvider jaha pe value ke ander object pass kra hai
