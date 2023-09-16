export default function listsReducer (state, action) {
    switch (action.type) {
      case "createList":
        return {
          ...state,
          lists: [...state.lists, action.payload],
        };
      case "deleteList":
        const id = action.payload;
        const newList = state.lists.filter((list) => list._id !== id);
        return {
          ...state,
          lists: newList,
        };
      case "setActiveList": {
        const activeList = action.payload;
        if (!activeList) {
          return { ...state, activeList: {} };
        }
        return { ...state, activeList };
      }
      case "initialize":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };


  export const activeListTasksSelector = (state) => {
    const list = state.lists.find((list) => list._id === state.activeList._id);
  
    if (list && list.tasks) {
      return list.tasks;
    }
  };