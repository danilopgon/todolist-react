const Task = ({ task, onClick }) => {
  return (
    <li className="task">
      {task}
      <button onClick={onClick}>X</button>
    </li>
  );
};

export default Task;
