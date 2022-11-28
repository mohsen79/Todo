export default function TodoReducer(state, action) {
    switch (action.type) {
        case 'initialTodo':
            return initialTodo(state, action);
        case 'logIn':
            return logIn(state, action);
        case 'addTodo':
            return addTodo(state, action);
        case 'deleteTodo':
            return deleteTodo(state, action);
        case 'editTodo':
            return editTodo(state, action);
        case 'todoStatus':
            return todoStatus(state, action);
        case 'loading':
            return loading(state, action);
        default:
            return state;
    }
}

let initialTodo = (state, action) => {
    let { todos } = action.payload;
    return { ...state, todos };
};

let logIn = (state, action) => {
    return { ...state, auth: action.payload.auth };
};

let addTodo = (state, action) => {
    return {
        ...state, todos: [...state.todos, { done: false, text: action.payload.text }]
    };
};

let deleteTodo = (state, action) => {
    let newTodos = state.todos.filter(todo => todo.id !== action.payload.id);
    return { ...state, todos: newTodos };
};

let editTodo = (state, action) => {
    let todo = state.todos.find(todo => todo.id === action.payload.id);
    todo.text = action.payload.text;
    return { ...state, todos: state.todos };
};

let todoStatus = (state, action) => {
    let todo = state.todos.find(todo => todo.id === action.payload.id);
    todo.done = !todo.done;
    return { ...state, todos: state.todos };
};

let loading = (state, action) => {
    return { ...state, loading: action.payload.loading };
};