import React, { useContext, useEffect, useState } from "react";
import { ContextApp } from "../ContextApp";
import { useForm } from "react-hook-form";
import { createList, removeListsById } from "../../utils";
import "./Sidebar.css";
/************materialUI components****************/
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Sidebar() {
  const { register, handleSubmit, setValue } = useForm();
  const { state, dispatch } = useContext(ContextApp);
  const [listState, setListState] = useState()

  useEffect(() => {
    setListState(state.lists)
  }, [state])
  // { listName }
  const submit = ({ listName }) => {
    createList(listName).then((res) => {
      const newListItem = res;
      if (newListItem) {
        dispatch({ type: "createList", payload: newListItem });
      }
    });
  };

  const handleClickDelete = (id) => {
    dispatch({type: "deleteList", payload: id});
    removeListsById(id)
    .then((res) =>  {
      return null;
    })
    .catch((error) => console.log(error));

    if (id === state.activeList._id) {
      console.log(id + " " + state.activeList._id)
      dispatch({type: 'setActiveList', payload: {}})
    }
  }

  function selectList(id) {
    const selectedList = state.lists.find(list => list._id === id);
    dispatch({type: 'setActiveList', payload: selectedList})
  }
  /**
   * @var const listItems = []
   * maps over lists to create list components
   * Each list item contains a close button and a <h2> tag.
   * @returns an array of list items components
   */
  const listsItems = listState
    ? listState.map(({ _id, name }, index) => (
        <li id="todo--li" key={_id ? _id : index} >
          <h2 onClick={() => selectList(_id, name)}>{name}</h2>
          <button id="todos--rmbtn" onClick={() => handleClickDelete(_id)}>
            <DeleteOutlineIcon></DeleteOutlineIcon>
          </button>
        </li>
      ))
    : null;
  return (
    <div className="sidebar">
      <h1 style={{ color: "white" }}>Welcome User</h1>
      <div className="sidebar lists">
        <ul id="sidebar--ul">{listsItems}</ul>
        <form onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="Create A list"
            value={setValue("listName", "")}
            {...register("listName", { min: 1, maxLength: 20, required: true })}
          />
        </form>
      </div>
    </div>
  );
}
