import { useContext } from "react";
import { ContextApp } from "../ContextApp";
import "./NavBar.css";

const NavBar = () => {
  const { state } = useContext(ContextApp);
  if (Object.keys(state.activeList).length) {
    const activeListName = state.activeList.name
    return <h1 className="taskUl">{activeListName}</h1>;
  }
  return <h1>Select a List from the sidebar</h1>;
};

export default NavBar;
