import React, { Component } from "react";
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

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    honeypot: false,
    buttonEnabled: true,
    error: false,
    successErrorMessage: ""
  };

  onTextChange = key => e => {
    const value = e.target.value;
    this.setState({ [key]: value });
  };

  onCheckboxChange = () => {
    this.setState(state => ({ honeypot: !state.honeypot }));
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.honeypot) return;
    this.setState({ buttonEnabled: false });

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post("https://usebasi.com/f/ddbe35ae8070.json", data)
      .then(_ => {
        this.setState({
          error: false,
          successErrorMessage: "Message successfully sent!",
          buttonEnabled: true
        });
      })
      .catch(_ => {
        this.setState({
          error: true,
          successErrorMessage: "Error: Message could not be sent.",
          buttonEnabled: true
        });
      });
  };

  render() {
    const {
      name,
      email,
      message,
      honeypot,
      buttonEnabled,
      successErrorMessage,
      error
    } = this.state;

    return (
      <form
        className={css`
          text-align: right;
        `}
        onSubmit={this.handleSubmit}
      >
        <label className={labelStyle}>
          Name
          <input
            className={inputStyle}
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={this.onTextChange("name")}
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
            value={email}
            onChange={this.onTextChange("email")}
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
            value={message}
            onChange={this.onTextChange("message")}
            required
          />
        </label>
        <input
          style={{ display: "none" }}
          id="agree-to-terms"
          tabIndex="-1"
          autoComplete="off"
          type="checkbox"
          name="agree-to-terms"
          checked={honeypot}
          onChange={this.onCheckboxChange}
        />
        {successErrorMessage && (
          <div
            className={css`
              text-align: left;
              margin-bottom: 10px;
              padding: 5px 15px;
              border: 2px solid ${error ? colors.errorLight : colors.successLight};
              background-color: ${error ? colors.error : colors.success};
            `}
          >
            {successErrorMessage}
          </div>
        )}
        <button type="submit" className={buttonStyle} disabled={!buttonEnabled}>
          {buttonEnabled ? "Send Message" : "Sending..."}
        </button>
      </form>
    );
  }
}

export default ContactForm;
