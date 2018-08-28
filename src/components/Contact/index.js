/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import { css } from 'emotion';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: false, success: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /* Here’s the juicy bit for posting the form submission */
  handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      })
    })
      .then(() => {
        this.setState({ success: true });
        // alert("Success!");
      })
      .catch(error => {
        this.setState({ error: true });
        // console.log(error);
      });
  };

  // handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {

    return (
      <section id={'contact'}>
        <h2 className={css(tw('m-0'))}>Kontakt</h2>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </p>
        </form>
        { this.state.success &&
          <div>Success</div>
        }
        { this.state.success &&
        <div>Success</div>
        }
        <div>Error</div>
      </section>
    );
  }
}

export default Contact;