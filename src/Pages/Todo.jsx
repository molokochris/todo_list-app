import React, { useContext, useEffect, useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../components/TodoItem";
import { UserContext } from "../context/authContext";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../api/todos";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [user, _] = useContext(UserContext);
  const [temps, setTemps] = useState([])
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");

  const handleTodoInput = (event) => {
    const value = event.target.value;
    setTodo(value);
  };

  const handleCompleteTodo = (todoId) => {
    // const todo
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      const response = await deleteTodo(todoId);
      if (response) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
        setTemps((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
      }
    } catch (error) {}
  };

  const handlePriority = (event) => {
    setPriority(event.target.value)
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();

    if(todo === "" || priority === "") return;

    const newId = uuidv4();

    const newTodo = {
      id: newId,
      value: todo,
      priority,
      userId: user.id,
    };

    try {
      const response = await addTodo(newTodo);
      if (!response) {
        return;
      }

      setTodos([...todos, newTodo]);
      setTemps([...todos, newTodo]);
    } catch (error) {
      console.log(error);
    }
    setTodo("");
  };

  const handleEditTodo = async (todo, todoId) => {
    try {
      const response = await updateTodo(todo, todoId);
      if(response) {
        setTodos((prevTodos) => {
          return prevTodos.map((td) => {
            if (td.id === todoId) {
              return {
                ...todo,
              };
            }
            return td;
          });
        });
      }
      setTemps(todos);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const myTodos = await getTodos(user.id);
        setTodos(myTodos);
        setTemps(myTodos);
      } catch (error) {
        setTodos([]);
      }
    };

    fetchTodos();
  }, []);


  const handleSearch = event => {
      
    const value = event.target.value;

    if(value === "") {
      setTodos(temps);
      return;
    }

    const newTodos = temps.filter(todo => {
      if(todo.value.toLowerCase().includes(value.toLowerCase())) {
        return todo
      }
    });


    setTodos(newTodos)
  }

  return (
    user && (
      <div className="bg-green-950 text-white w-screen h-screen flex flex-col py-5 items-center">
        <div className="md:w-[700px] w-full">
          <h2 className="font-bold text-3xl px-3 my-3 w-full">
            Welcome, {user.username}
          </h2>
          <Form onSubmit={handleAddTodo}>
            <Input
              name={"todo"}
              setValue={handleTodoInput}
              placeholder={"Task name"}
              type={"text"}
            />
            <label className="font-bold" htmlFor="priority">
              Set Priority
            </label>
            <div>
              <input
                name={"priority"}
                value={"1"}
                type={"radio"}
                onChange={handlePriority}
                className="mr-2 text-xs text-slate-900 rounded-lg border border-teal-700 px-3 py-2 outline-none my-1"
              />
              <label htmlFor="priority">High</label>
            </div>
            <div>
              <input
                value={"2"}
                name={"priority"}
                type={"radio"}
                onChange={handlePriority}
                className="mr-2 text-xs text-slate-900 rounded-lg border border-teal-700 px-3 py-2 outline-none my-1"
              />
              <label htmlFor="priority">Medium</label>
            </div>
            <div>
              <input
                value={"3"}
                type={"radio"}
                name={"priority"}
                onChange={handlePriority}
                className="mr-2 text-xs text-slate-900 rounded-lg border border-teal-700 px-3 py-2 outline-none my-1"
              />
              <label htmlFor="priority">Low</label>
            </div>
            <Button />
          </Form>
          <div className="border border-green-900 shadow-lg rounded-lg py-5 my-3 mx-3">
            <Form onSubmit={handleAddTodo}>
              <input
                type={"text"}
                onChange={handleSearch}
                className="text-slate-900 focus:outline focus:outline-green-700 rounded-lg border border-teal-700 px-3 py-2 outline-none my-1"
                placeholder={"Search task"}
              />
            </Form>
            <h2 className="text-xl text-white px-3 my-3">Todos</h2>
            {todos.map((todo) => {
              return (
                <TodoItem
                  handleCompleteTodo={handleCompleteTodo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleEditTodo={handleEditTodo}
                  todo={todo}
                  key={todo.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Todo;
