import React from "react";
import "./styles.scss";

import { useState } from "react";

import Modal from "../Modal/Modal";
import Checkbox from "../Buttons/Checkbox/Checkbox";
import EditBtn from "../Buttons/EditBtn/EditBtn";
import RemoveBtn from "../Buttons/RemoveBtn/RemoveBtn";

const Todolist = () => {
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);

  const [todo, setTodo] = useState([]);

  const [todoInput, setTodoInput] = useState("");

  const [todoIndex, setTodoIndex] = useState(null);

  const clickEdit = (index) => {
    setVisible(true);
    setEdit(true);
    setTodoIndex(index);
  };

  const clickRemove = (index) => {
    setVisible(true);
    setEdit(false);
    setTodoIndex(index);
  };

  const closeModal = (accepted, newTodoName) => {
    setVisible(false);

    if (accepted) {
      if (edit) {
        const newTodo = [...todo];
        newTodo[todoIndex].name = newTodoName;
      } else {
        const newTodo = [...todo];
        newTodo.splice(todoIndex, 1);
        setTodo(newTodo);
      }
    }
  };

  const check = (index, checked) => {
    const newTodo = [...todo];
    newTodo[index].finished = checked;

    setTodo(newTodo);
  };

  const todoCreate = () => {
    if (todoInput === "") {
      alert("Erro! Digite um nome para sua tarefa.");
    } else {
      setTodo([...todo, { name: todoInput, finished: false }]);
      setTodoInput("");
    }
  };

  const handleTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleTodoInputKey = (e) => {
    if (e.key === "Enter") {
      todoCreate();
    }
  };

  return (
    <div className="todolist">
      {visible && (
        <Modal
          isVisible={visible}
          setVisible={setVisible}
          edit={edit}
          todoIndex={todoIndex}
          closeModal={closeModal}
          todoData={todo[todoIndex]}
        />
      )}
      <table>
        <thead>
          <tr>
            <th className="todolist__table__left">Tarefas</th>
            <th className="todolist__table__center">Status</th>
            <th className="todolist__table__right">Opções</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((item, index) => {
            return (
              <tr key={index}>
                <td className="todolist__table__left">{item.name}</td>
                <td className="todolist__table__center">
                  <Checkbox
                    checked={item.finished}
                    check={(checked) => check(index, checked)}
                  />
                </td>
                <td className="todolist__table__right">
                  <EditBtn click={() => clickEdit(index)} />
                  <RemoveBtn click={() => clickRemove(index)} />
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="todolist__table__left">
              <input
                type="text"
                value={todoInput}
                placeholder="Nova Tarefa..."
                onChange={handleTodoInput}
                onKeyUp={handleTodoInputKey}
              />
            </td>
            <td className="todolist__table__center"></td>
            <td className="todolist__table__right">
              <button
                type="button"
                onClick={todoCreate}
                className="todolist__create__button"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
