import { memo } from "react";

const Todo = ({ todos }) => {
  console.log("child render: ");
  const myStyle = {
    color: "green",
    backgroundColor: "yellow",
    fontFamily: "Helvetica",
    fontSize: "50px",
    padding: "50px",
    margin:"20px",
    cursor: "move"
  };
  return (
    <>
      <h2 style={myStyle}>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todo);
