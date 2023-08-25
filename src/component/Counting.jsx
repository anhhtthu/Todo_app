export default function Counting(props) {
  const { countTodo } = { ...props };

  return (
    <div className="counting">
      <h5 className="count-todo">{countTodo}</h5>
      <h6 className="count-todo-note">Remain tasks</h6>
    </div>
  );
}
