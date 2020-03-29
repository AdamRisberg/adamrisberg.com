import React from "react";
import { css } from "emotion";

import { breakpoints, colors } from "../theme";

const listCardStyle = css`
  margin-bottom: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  transform-origin: 0 0;
  transition: transform 1s;
  @media (max-width: ${breakpoints.small}) {
    transform: scaleY(1);
  }
`;

const listStyle = css`
  list-style: none;
  border: 2px solid ${colors.primary};
  padding: 10px 20px;
  flex-grow: 1;
  & li {
    margin-bottom: 8px;
  }
  & li:last-of-type {
    margin-bottom: 0;
  }
`;

const titleStyle = css`
  margin-bottom: 15px;
  padding-bottom: 4px;
  background-color: ${colors.primary};
  font-weight: 500;
  padding: 8px 20px;
  margin-bottom: 0;
`;

function ListCard({ title, list = [], cardStyle }) {
  const ref = React.useRef();

  return (
    <div
      ref={ref}
      className={css`
        ${listCardStyle} ${cardStyle}
      `}
    >
      <h4 className={titleStyle}>{title}</h4>
      <ul className={listStyle}>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListCard;
