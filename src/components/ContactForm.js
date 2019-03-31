import React, { Component } from "react";
import axios from "axios";
import { css } from "emotion";

const inputStyle = css`
  display: block;
  text-align: left;
  width: 100%;
  padding: 4px 10px;
  margin-top: 4px;
  background-color: rgba(39, 51, 63, 0.5);
  border: 2px solid rgba(181, 210, 234, 0.2);
  color: #eee;
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
  background-color: rgba(39, 51, 63, 0.5);
  color: #eee;
  border: 2px solid rgba(181, 210, 234, 0.2);
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(181, 210, 234, 0.25);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: rgba(181, 210, 234, 0.25);
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
              border: 2px solid rgba(181, 210, 234, 0.2);
              background-color: ${error ? "#500" : "#050"};
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
