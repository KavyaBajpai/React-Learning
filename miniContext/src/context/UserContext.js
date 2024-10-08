import React from "react";

const UserContext= React.createContext();

export default UserContext;


























//STEPS
//  1- create usercontext file
//  2- create a 'context' using createContext() method
//  3- this is a method
//  4- we throw this in the output
//  5- each context is a provider that provides us the variables when needed
//  6- then we wrap the components in the UserContext 
//  7- after wrapping, all the components will have access to the variables
//  8- next we create a UserProvider
//  9- after this all components will be able to use the states
// 10- send the usercontext to userprovider (this is a method)