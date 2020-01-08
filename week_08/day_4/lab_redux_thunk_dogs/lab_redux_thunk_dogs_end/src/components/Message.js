import React from 'react';

const Message = (props) => {
  const message = props.notFound ? "Breed Not Found" : null;
  return <h5>{message}</h5>;
};

export default Message;
