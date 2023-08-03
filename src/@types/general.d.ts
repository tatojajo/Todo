type Todo = {
    id:number;
    userId:number;
    completed:boolean;
    todo:string
}

type EditMode = {
    id:number
    title:string
}

type InitialState = {
    todos:Todo[]
    editableTodo: EditMode
}