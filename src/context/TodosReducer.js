import {
  GET_TODOS,
  ADD_CONTACT,
  DELETE_TODO,
  CHECKED_TODO,
  SHOW_MODAL,
  HIDE_MODAL,
  UPDATE_TODO,
} from "./types";
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                id: todo.id,
                todo: action.payload.text,
                completed: todo.completed,
              }
            : todo
        ),
        modal: false,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case CHECKED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                id: todo.id,
                todo: todo.todo,
                completed: !todo.completed,
              }
            : todo
        ),
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: true,
        modalText: action.payload.todo,
        ModalID: action.payload.id,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: false,
        modalText: "",
        ModalID: null,
      };
    default:
      return state;
  }
};
