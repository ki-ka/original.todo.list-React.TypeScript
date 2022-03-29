/* eslint-disable @typescript-eslint/no-use-before-define */

import { ChangeEvent, FC, useCallback, useState } from "react";
import styled from "styled-components";
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  const {
    todos,
    addTodo,
    completedTodo,
    deleteTodo,
    returnTodo
  } = useMemoList();

  const [text, setText] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const onClickAdd = () => {
    addTodo(text);
    setText("");
  };

  const onClickComplete = useCallback(
    (index: number) => {
      completedTodo(index);
    },
    [completedTodo]
  );

  const onClickDelete = useCallback(
    (index: number) => {
      deleteTodo(index);
    },
    [deleteTodo]
  );

  const onClickReturn = useCallback(
    (index: number) => {
      returnTodo(index);
    },
    [returnTodo]
  );

  return (
    <div>
      <h1>TODOリスト</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <MemoList
        todos={todos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        onClickReturn={onClickReturn}
      />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
