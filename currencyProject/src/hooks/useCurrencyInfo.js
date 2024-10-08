import { useState, useEffect } from "react"

function useCurrencyInfo(currency)
{   const [data, setData]= useState({})
    useEffect(()=>{
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]) )
    }, [currency])
    return data
}

export default useCurrencyInfo;

//useEffect
//import { useEffect } from 'react';
//import { createConnection } from './chat.js';

//function ChatRoom({ roomId }) {
//  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

//  useEffect(() => {
//  	const connection = createConnection(serverUrl, roomId);
//    connection.connect();
//  	return () => {
//      connection.disconnect();
//  	};
//  }, [serverUrl, roomId]);
//  // ...
//}

//You need to pass two arguments to useEffect:

//A setup function with setup code that connects to that system.
//It should return a cleanup function with cleanup code that disconnects from that system.
//A list of dependencies including every value from your component used inside of those functions.
//React calls your setup and cleanup functions whenever it’s necessary, which may happen multiple times:

//Your setup code runs when your component is added to the page (mounts).
//After every re-render of your component where the dependencies have changed:
//First, your cleanup code runs with the old props and state.
//Then, your setup code runs with the new props and state.
//Your cleanup code runs one final time after your component is removed from the page (unmounts).

//Let’s illustrate this sequence for the example above.

//When the ChatRoom component above gets added to the page, it will connect to the chat room with 
//the initial serverUrl and roomId. If either serverUrl or roomId change as a result of a re-render 
//(say, if the user picks a different chat room in a dropdown), your Effect will disconnect from the 
//previous room, and connect to the next one. When the ChatRoom component is removed from the page, 
//your Effect will disconnect one last time.
//returns undefined