import React, { Children } from "react";

const CardFooter = ({children}) => {
  return (
    <div className="card-footer">
      {children}
    </div>
  )
}

export default CardFooter;