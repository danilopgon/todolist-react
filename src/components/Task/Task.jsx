const Task = ({ task, onClick }) => {
  return (
    <li>
      {task}
      <span onClick={onClick}>X</span>
    </li>
  );
};

export default Task;
