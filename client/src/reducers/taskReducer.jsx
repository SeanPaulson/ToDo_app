
export default function taskReducer (state, action) {
    switch (action.type) {
      case "addTask": {
        const { content, id } = action.payload;
        const newList = state.lists.map((list) => {
          if (list._id === id) {
            return { ...list, tasks: [...list.tasks, { content }] };
          }
          return list;
        });
        return {
          ...state,
          lists: newList,
        };
      }
      default:
        return state;
    }
  };