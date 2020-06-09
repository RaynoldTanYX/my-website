import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Recaptcha from 'react-recaptcha';
import {recaptchaKey} from './Constants';
import {contactFormLink} from './Constants';

class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      verified: false,
      inputDisabled: false,
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onCaptchaVerify = this.onCaptchaVerify.bind(this)
    this.onCaptchaExpire = this.onCaptchaExpire.bind(this)
  }

  onChange(event) {
    const target = event.target
    const name = target.id
    const value = target.value
    this.setState({
      [name]: value
    })
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.state.verified === false)
    {
      alert("Please check the reCAPTCHA box")
      return false;
    }
    else
    {
      this.setState({
        inputDisabled: true
      });
      fetch(contactFormLink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(this.state)
      })
        .then(function(response) {
          console.log(response)
          alert("Email sent successfully!")
        })
        .catch(function(error) {
          console.error(error)
          alert("Error " + error.status + "; Please try again later")
        })
    }
  }

  onCaptchaVerify(response) {
    if (response)
    {
      console.log("Captcha has been successfully verified")
      this.setState({
        verified: true
      });
    }
    else
    {
      console.log("Captcha has failed")
    }
  }

  onCaptchaExpire() {
    console.log("Captcha has expired, reseting widget")
    Recaptcha.reset();
  }

  render() {
    return (
        <form onSubmit={this.onSubmit}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
                spacing={2}
                >
                <Grid item>
                    <TextField 
                      required 
                      id="name" 
                      label="Name" 
                      variant="outlined" 
                      fullWidth={true} 
                      value={this.state.name} 
                      onChange={this.onChange}
                      disabled={this.state.inputDisabled}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                      required 
                      id="email" 
                      label="Email" 
                      variant="outlined" 
                      fullWidth={true} 
                      value={this.state.email} 
                      onChange={this.onChange}
                      disabled={this.state.inputDisabled}/>
                </Grid>
                <Grid item xs={12}>
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
                      disabled={this.state.inputDisabled}/>
                </Grid>
                <Grid item container justify="flex-end" spacing={2}>
                    <Grid item>
                      <Recaptcha
                        sitekey={recaptchaKey}
                        render="onload"
                        theme="dark"
                        verifyCallback={this.onCaptchaVerify}
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                          variant="contained" 
                          color="secondary" 
                          type="submit"
                          disabled={this.state.inputDisabled}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
  }
}
export default ContactForm