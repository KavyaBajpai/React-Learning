import { createContext, useContext } from "react";

export const TodoContext= createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
   
    addTodo: (todo)=> {},
    updateTodo: (id, todo)=> {},
    deleteTodo: (id)=> {},
    toggleComplete: (id)=> {}
})

//this is written to simply avoiding writing 
//const { updateTodo, deleteTodo, toggleComplete } = useContext(TodoContext);
//instead of this we write 
//const { updateTodo, deleteTodo, toggleComplete } = useTodo();
export const useTodo= () => {
    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider