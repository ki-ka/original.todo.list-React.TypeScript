/* eslint-disable @typescript-eslint/no-use-before-define */

import { FC } from "react";
import styled from "styled-components";

type Props = {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
  onClickReturn: (index: number) => void;
};

export const MemoList: FC<Props> = (props) => {
  const { todos, onClickComplete, onClickDelete, onClickReturn } = props;

  return (
    <div>
      <SContainer>
        <p>未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <SMemoWrapper>
                <p>{todo}</p>
                <SButton onClick={() => onClickComplete(index)}>完了</SButton>
                <SButton onClick={() => onClickDelete(index)}>削除</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>

      <SContainer>
        <p>完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <SMemoWrapper>
                <p>{todo}</p>
                <SButton onClick={() => onClickReturn(index)}>戻す</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
