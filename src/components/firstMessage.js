import React from 'react';
  const FirstMessage = (props) => {
  return (
    <>
      <div>
        <h3>{props.message} </h3>
        <img src={props.image} alt="header-img" />
      </div>
    </>
  )
}

export default FirstMessage


