export function Todos({Todos}){
    return <div>
        {Todos.map(function(Todo){  
            return <div>
                <h1>{todo.tittle}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
            </div>
        })}
    </div>
}