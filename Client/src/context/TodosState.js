import { useReducer } from "react";
import TodosContext from "./TodosContext";
import TodosReducer from "./TodosReducer";

import {
  GET_TODOS,
  ADD_CONTACT,
  DELETE_TODO,
  CHECKED_TODO,
  SHOW_MODAL,
  HIDE_MODAL,
  UPDATE_TODO,
  FILTER_TODO,
  CLEAR_FILTER,
} from "./types";

const TodosState = (props) => {
  const initialState = {
    todos: [],

    modal: false,

    modalText: "",

    ModalID: null,

    test: null,

    filtered: [],

    filteredResult: false,
  };

  const [state, dispatch] = useReducer(TodosReducer, initialState);
  // Get todos from Local storage
  const getTodos = () => {
    if (localStorage.hasOwnProperty("todos")) {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      dispatch({ type: GET_TODOS, payload: storedTodos });
    }
  };
  // Add todo to Local storage
  const addTodo = (todo) => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos === null) {
      const newTodos = [todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
    } else {
      const newTodos = [todo, ...savedTodos];
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }

    dispatch({ type: ADD_CONTACT, payload: todo });
  };

  // Update todo
  const upDateTodo = (modalTodo) => {
    dispatch({ type: UPDATE_TODO, payload: modalTodo });
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    const newTodos = savedTodos.map((todo) =>
      todo.id === modalTodo.id
        ? {
            id: todo.id,
            todo: modalTodo.text,
            completed: todo.completed,
          }
        : todo
    );

    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  // delete Todo
  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    const newTodos = savedTodos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // Checked Todo

  const checkedTodos = (id) => {
    dispatch({ type: CHECKED_TODO, payload: id });
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    const newTodos = savedTodos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            todo: todo.todo,
            completed: !todo.completed,
          }
        : todo
    );
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  //Filter Todos

  const filterTodos = (filterText) => {
    dispatch({ type: FILTER_TODO, payload: filterText });
  };

  //Unfilter

  const unfilter = () => {
    dispatch({ type: CLEAR_FILTER, payload: null });
  };

  const showModal = (todo) => {
    dispatch({ type: SHOW_MODAL, payload: todo });
  };

  const hideModal = () => {
    dispatch({ type: HIDE_MODAL, payload: null });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        modal: state.modal,
        modalText: state.modalText,
        ModalID: state.ModalID,
        test: state.test,
        filtered: state.filtered,
        filteredResult: state.filteredResult,
        getTodos,
        addTodo,
        deleteTodo,
        checkedTodos,
        showModal,
        hideModal,
        upDateTodo,
        filterTodos,
        unfilter,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosState;
