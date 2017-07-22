/* @flow */
import React from 'react';

type ListProps = {
  leftItems?: [string],
  rightItems?: [string]
};

const List = ({leftItems = [], rightItems = []}:ListProps) => {
  return (
    <div className="list">
      <div className="list-container">
        <ul className="list-left">
          {leftItems.map(item => <li className="list-item">{item}</li>)}
        </ul>
        <ul className="list-right">
          {rightItems.map(item => <li className="list-item">{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default List;
