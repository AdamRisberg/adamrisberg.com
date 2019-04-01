import React from "react";
import { css } from "emotion";

import { useInView } from "../utils";

const listCardStyle = css`
  margin-bottom: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  transform-origin: 0 0;
  transition: transform 1s;
`;

const titleStyle = css`
  margin-bottom: 15px;
  padding-bottom: 4px;
  background-color: #27333f;
  font-weight: 500;
  padding: 8px 20px;
  margin-bottom: 0;
`;

export function ListCard({ title, list = [] }) {
  const ref = React.useRef();
  const show = useInView(ref, 100);

  return (
    <div
      ref={ref}
      className={css`
        ${listCardStyle}
        transform: scaleY(${show ? "1" : "0"});
      `}
    >
      <h4 className={titleStyle}>{title}</h4>
      <ul
        className={css`
          list-style: none;
          border: 2px solid #27333f;
          padding: 10px 20px;
          flex-grow: 1;
          & li {
            margin-bottom: 8px;
          }
          & li:last-of-type {
            margin-bottom: 0;
          }
        `}
      >
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function TextCard({ title, paragraphs = [] }) {
  const ref = React.useRef();
  const show = useInView(ref, 100);

  return (
    <div
      ref={ref}
      className={css`
        ${listCardStyle}
        transform: scaleY(${show ? "1" : "0"});
      `}
    >
      <h4 className={titleStyle}>{title}</h4>
      <div
        className={css`
          border: 2px solid #27333f;
          padding: 15px 20px;
          text-align: left;
          & p {
            margin-bottom: 15px;
          }
          & p:last-of-type {
            margin-bottom: 0;
          }
        `}
      >
        {paragraphs.map(paragraph => (
          <p key={paragraph.substr(0, 10)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
