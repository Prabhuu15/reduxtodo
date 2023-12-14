import {ADD_TODO , REMOVE_TODO} from "./action"

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(), // Generate a unique ID (for simplicity)
            text: action.payload.text,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
   
  
    default:
      return state;
  }
};

export default todoReducer;
