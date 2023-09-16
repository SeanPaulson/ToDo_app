import useSelector from '../useSelector'
import {activeListTasksSelector} from '../../reducers/listReducer';

function Todos() {
  const todos = useSelector(activeListTasksSelector)
  const tasksLists = (todos)
    ? todos.map(({ content }, index) => (
        <li id="todo--li" key={index}>
          <p>{content}</p>
        </li>
      ))
    : null;

  return (
    <div>
      <ul>{tasksLists}</ul>
    </div>
  );
}

export default Todos;
