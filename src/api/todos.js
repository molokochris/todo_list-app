import { myAxios } from "../axios/axios";

export const addTodo = async (todo) => {
  const { data } = await myAxios().post("/todos", todo, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const getTodos = async (id) => {
  const { data } = await myAxios().get("/todos", {
    params: {
      userId: id,
    },
  });
  return data;
};

export const deleteTodo = async (todoId) => {
  const { data } = await myAxios().delete(`/todos/${todoId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const updateTodo = async (todo, todoId) => {
  const { data } = await myAxios().put(
    `/todos/${todoId}`,
    todo,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};
