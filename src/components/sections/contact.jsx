import React, { Component } from "react";

import PostMail from "../../datastore/postMail.json";

export default class Contact extends Component {
  state = {
    emailInfo: null,
  };

  constructor() {
    super();

    this.emailRef = React.createRef();
    this.messageRef = React.createRef();
  }

  componentDidMount() {
    fetch("datastore/email.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ emailInfo: result });
      });
  }

  render() {
    const { id } = this.props;

    return (
      <section className="contact section" id={id}>
        <h2 className="section-title">Contact</h2>

        <div className="contact_container grid">
          <form
            id="contact_form"
            onSubmit={this.handleSubmit}
            className="contact_form"
          >
            <label htmlFor="email">
              <span>Email</span>
            </label>
            <input
              name="email"
              ref={this.emailRef}
              required
              type="email"
              className="contact_input"
            />
            <label htmlFor="message">
              <span>Message</span>
            </label>
            <textarea
              name="message"
              ref={this.messageRef}
              required
              autoComplete="off"
              cols="0"
              rows="3"
              className="contact_input contact_text"
            ></textarea>
            <button
              type="submit"
              id="contact_send"
              className="contact_button button"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }

  handleSubmit = (e) => {
    const { emailInfo } = this.state;
    e.preventDefault();

    var sendButton = document.getElementById("contact_send");
    sendButton.value = "Sending...";
    sendButton.disabled = true;
    sendButton.classList.toggle("disabled");

    const email = this.emailRef.current.value;
    const message = this.messageRef.current.value;
    const subject = "".concat(emailInfo.subject, ": ", email);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        alert(
          "Email sent successfully. I will reach out to " + email + " shortly."
        );
        sendButton.value = "Email Sent";
      } else {
        if (request.readyState == 4) {
          alert("Email failed to send. " + request.response);
          sendButton.disabled = false;
          sendButton.classList.toggle("disabled");
        }
      }
    };

    const data = {
      access_token: PostMail.access_token,
      subject: subject,
      text: message,
    };

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );

    request.send(this.toParams(data));
  };

  toParams(data) {
    var form_data = [];

    for (var key in data)
      form_data.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      );

    return form_data.join("&");
  }
}
