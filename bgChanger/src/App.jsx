import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
           <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
           <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
           <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
           <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
        </div>
      </div>

    </div>
  )
}

export default App

//onClick takes a fnction as an input.
//oncClick={setColor}: this is passing the reference of the function to it. this is also accepted.
//but we cannot pass a function that needs arguements because then we will have to write the code as this
//onClick={setColor("arguement")}.- incorrect
//the above code returns to the onClick whatever the function returns to it after running.
//thus this is incorrect way of writing. 
//the second one doesn't run correctly.
//hence whn we have to pass arguement necessarily, we use the syntax with callback
//onClick={()=> setColor("red")}