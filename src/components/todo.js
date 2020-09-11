import React from 'react';

const Todo = ({ children, id, title, description }) => {
  return (
    <div className="todo" id={id}>
      <h4>{title}</h4>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Todo;
