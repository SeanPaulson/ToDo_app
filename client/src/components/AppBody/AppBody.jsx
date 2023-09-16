import { useContext } from "react";
import { ContextApp } from "../ContextApp";
import { useForm } from "react-hook-form";
import NavBar from "../NavBar/NavBar";
import Todos from "../Todos/Todos";
import "./AppBody.css";

const AppBody = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { state, dispatch } = useContext(ContextApp);
  const id = state.activeList ? state.activeList._id : null

  const onSubmit = (data) => {
    console.log(state.activeList);
    if (state.activeList !== null) {
      dispatch({type: 'addTask', payload: {content: data.content, id}})
    }
    setValue("content", "");
  };

  return (
    <div className="TodoBody">
      <NavBar></NavBar>
      <Todos/>
      {state.activeList && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Add a task Item"
            {...register("content")}
          ></input>
        </form>
      )}
    </div>
  );
};

export default AppBody;
