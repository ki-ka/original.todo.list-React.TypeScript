import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [todos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const addTodo = useCallback(
    (text: string) => {
      const newTodos = [...todos];
      newTodos.push(text);
      setIncompleteTodos(newTodos);
    },
    [todos]
  );

  const completedTodo = (index: number) => {
    const newIncompleteTodos = [...todos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, todos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const deleteTodo = useCallback(
    (index: number) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setIncompleteTodos(newTodos);
    },
    [todos]
  );

  const returnTodo = (index: number) => {
    const reCompleteTodos = [...completeTodos];
    reCompleteTodos.splice(index, 1);

    const reIncompleteTodos = [...todos, completeTodos[index]];

    setCompleteTodos(reCompleteTodos);
    setIncompleteTodos(reIncompleteTodos);
  };

  return {
    todos,
    addTodo,
    completedTodo,
    deleteTodo,
    returnTodo
  };
};
