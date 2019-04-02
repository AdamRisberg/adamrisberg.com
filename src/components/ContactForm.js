import React from "react";
import axios from "axios";
import { css } from "emotion";

import { colors } from "../theme";

const inputStyle = css`
  display: block;
  text-align: left;
  width: 100%;
  padding: 4px 10px;
  color: ${colors.text};
  margin-top: 4px;
  background-color: ${colors.primaryDark};
  border: 2px solid ${colors.secondaryDarkest};
`;

const labelStyle = css`
  display: block;
  text-align: left;
  margin-bottom: 20px;
  text-align: left;
`;

const buttonStyle = css`
  padding: 6px 15px;
  font-weight: 500;
  margin-top: 10px;
  background-color: ${colors.primaryDark};
  color: ${colors.text};
  border: 2px solid ${colors.secondaryTrans};
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${colors.secondaryDarker};
    color: ${colors.white};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.secondaryDarker};
  }
`;

function axiosPostReducer(state, action) {
  switch (action.type) {
    case "sending":
      return {
        sending: true,
        response: "",
        error: false
      };
    case "success":
      return {
        sending: false,
        response: "Message successfully sent!",
        error: false
      };
    case "failed":
      return {
        sending: false,
        response: "Message could not be sent.",
        error: true
      };
    default:
      throw new Error(`Unknown type: ${action.type}`);
  }
}

function useAxiosPost(url, body) {
  const [state, dispatch] = React.useReducer(axiosPostReducer, {
    sending: false,
    response: "",
    error: false
  });

  React.useEffect(() => {
    if (body) {
      dispatch({ type: "sending" });

      axios
        .post(url, body)
        .then(_ => dispatch({ type: "success" }))
        .catch(_ => dispatch({ type: "failed" }));
    }
  }, [body]);

  return state;
}

function ContactForm() {
  const [body, setBody] = React.useState(null);
  const { sending, response, error } = useAxiosPost(
    "https://usebasin.com/f/ddbe35ae8070.json",
    body
  );

  function handleSubmit(e) {
    e.preventDefault();
    setBody(getFormData(e.target));
  }

  return (
    <form
      className={css`
        text-align: right;
      `}
      onSubmit={handleSubmit}
    >
      <label className={labelStyle}>
        Name
        <input
          className={inputStyle}
          id="name"
          type="text"
          name="name"
          required
        />
      </label>
      <label className={labelStyle}>
        Email Address
        <input
          className={inputStyle}
          id="email"
          type="email"
          name="email"
          required
        />
      </label>
      <label className={labelStyle}>
        Message
        <textarea
          className={inputStyle}
          id="message"
          name="message"
          rows="5"
          required
        />
      </label>
      {response && (
        <div
          className={css`
            text-align: left;
            margin-bottom: 10px;
            padding: 5px 15px;
            border: 2px solid ${error ? colors.errorLight : colors.successLight};
            background-color: ${error ? colors.error : colors.success};
          `}
        >
          {response}
        </div>
      )}
      <button type="submit" className={buttonStyle} disabled={sending}>
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function getFormData(formNode) {
  return Object.getOwnPropertyNames(formNode.elements).reduce((obj, key) => {
    const formControl = formNode.elements[key];
    const name = formControl.getAttribute("name");
    if (name && !obj[name]) {
      obj[name] = formControl.value;
    }
    return obj;
  }, {});
}

export default ContactForm;
