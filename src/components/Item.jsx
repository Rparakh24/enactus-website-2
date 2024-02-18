import React from "react";
import { Link } from 'react-router-dom';

function Item(props) {
  return (
    <div>
      <li className="main-item">
        <Link className="main-item-text" to={props.link}>
          {props.name}
        </Link>
      </li>
    </div>
  );
}

export default Item;