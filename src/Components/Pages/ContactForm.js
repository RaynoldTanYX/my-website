import React, { Component } from "react";
import {TextField, Button} from "@material-ui/core";
import Recaptcha from "react-recaptcha";
import { recaptchaKey, contactFormLink } from "../../Constants";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      verified: false,
      inputDisabled: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCaptchaVerify = this.onCaptchaVerify.bind(this);
    this.onCaptchaExpire = this.onCaptchaExpire.bind(this);
  }

  onChange(event) {
    const target = event.target;
    const name = target.id;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.verified === false) {
      alert("Please check the reCAPTCHA box");
      return false;
    } else {
      this.setState({
        inputDisabled: true,
      });
      fetch(contactFormLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then(function (response) {
          console.log(response);
          alert("Email sent successfully!");
        })
        .catch(function (error) {
          console.error(error);
          alert("Error " + error.status + "; Please try again later");
        });
    }
  }

  onCaptchaVerify(response) {
    if (response) {
      console.log("Captcha has been successfully verified");
      this.setState({
        verified: true,
      });
    } else {
      console.log("Captcha has failed");
    }
  }

  onCaptchaExpire() {
    console.log("Captcha has expired, reseting widget");
    Recaptcha.reset();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="checkbox"
          name="_honeypot"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />
            <TextField
              required
              id="name"
              label="Name"
              variant="outlined"
              fullWidth={true}
              value={this.state.name}
              onChange={this.onChange}
              disabled={this.state.inputDisabled}
            />
            <div style={{height:"10px"}}/>
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              fullWidth={true}
              value={this.state.email}
              onChange={this.onChange}
              disabled={this.state.inputDisabled}
            />
            <div style={{height:"10px"}}/>
            <TextField
              required
              multiline
              rows={4}
              id="message"
              label="Message"
              variant="outlined"
              fullWidth={true}
              value={this.state.message}
              onChange={this.onChange}
              disabled={this.state.inputDisabled}
            />
            <div style={{height:"10px"}}/>
              <Recaptcha
                sitekey={recaptchaKey}
                render="onload"
                theme="dark"
                verifyCallback={this.onCaptchaVerify}
              />
              <div style={{height:"10px"}}/>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={this.state.inputDisabled}
                style={{float:"right"}}
              >
                Submit
              </Button>
              <div style={{height:"30px"}}/>
      </form>
    );
  }
}
export default ContactForm;
