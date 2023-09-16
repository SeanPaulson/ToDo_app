import { useReducer, useEffect, createContext } from "react";
import * as utils from "../utils/index";
import combineReducers from "../utils/combineReducers";
import listsReducer from "../reducers/listReducer";
import taskReducer from "../reducers/taskReducer";

const initialState = {
  lists: [],
  activeList: {},
};




export const ContextApp = createContext(null);

const rootReducer = combineReducers(initialState, listsReducer, taskReducer);

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await utils.fetchLists();
      dispatch({ type: "initialize", payload: { lists: res } });
    };

    fetchData().catch((error) => console.log({ message: error }));
  }, []);

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      {children}
    </ContextApp.Provider>
  );
}


