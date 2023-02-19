import React from "react";

const CardBody = (props) => {
  return (
    <div className= {props.className}>
      {props.children}
    </div>
  )
}

export default CardBody;