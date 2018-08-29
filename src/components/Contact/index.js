/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Container from '../Container';
import Obfuscate from 'react-obfuscate';
import config from '../../../tailwind';
import { css } from 'emotion';
import { X } from 'react-feather';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Dialog = ({ title, description, dismissHandler, bgColor }) =>
  <section className={css(tw('p-1 relative'), {'background-color': bgColor})}>
    <h3 className={css(tw('m-0 leading-2'))}>{ title }</h3>
    <X onClick={dismissHandler} className={css(tw('absolute pin-t pin-r p-1 w-4 h-4 cursor-pointer hover:text-white stroke-current transition'))} />
    <p>{ description }</p>
  </section>;


class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: false, success: false };
  }

  dismiss(message) {
    this.setState({ [message]: false });
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
        <Container>
          <div className={css(tw('max-w-contact'))}>
            <h2 className={css(tw('m-0 px-1 pt-1 leading-3'))}>Kontaktieren Sie uns!</h2>
            <p className={css(tw('px-1 pt-0 pb-1'))}>Wir freuen uns, von Ihnen zu hören. Senden Sie uns eine Email, um ein unverbindliches Treffen zu verabreden.</p>
            { this.state.success &&
              <Dialog title={'Senden erfolgreich'}
                      description={'Vielen Dank für Ihre Kontaktaufnahme! Wir melden uns sobald wie möglich bei Ihnen.'}
                      dismissHandler={(e) => this.dismiss('success')}
                      bgColor={config.colors.green} />
            }
            { this.state.error &&
              <Dialog title={'Senden fehlgeschlagen'}
                      description={'Leider ist die Übermittlung des Formulars fehlgeschlagen. Versuchen Sie es doch bitte noch einmal.'}
                      dismissHandler={(e) => this.dismiss('error')}
                      bgColor={config.colors.red} />
            }
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
              className={css(tw('p-1'))}>
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label className={css(tw('font-semibold'))}>
                  Name<br />
                  <input type="text"
                         name="name"
                         onChange={this.handleChange}
                         className={css(tw('text-input hover:border-border focus:outline-none focus:border-blue'))} />
                </label>
              </p>
              <p>
                <label className={css(tw('font-semibold'))}>
                  Email<br />
                  <input type="email"
                         name="email"
                         onChange={this.handleChange}
                         className={css(tw('text-input hover:border-border focus:outline-none focus:border-blue'))} />
                </label>
              </p>
              <p>
                <label className={css(tw('font-semibold'))}>
                  Was möchten Sie besprechen?<br />
                  <textarea name="message"
                            id="message"
                            onChange={this.handleChange}
                            className={css(tw('text-input hover:border-border focus:outline-none focus:border-blue h-12'))} />
                </label>
              </p>
              <div className={css(tw('flex pt-3 justify-end'))}>
                <input type="submit" value={'Senden'}
                       className={css(tw('rounded bg-blue text-white p-1 text-md h-4 leading-none transition hover:bg-blue-dark focus:bg-blue-dark focus:outline-none cursor-pointer mr-1 border-transparent border-blue border border-solid hover:border-blue-dark focus:border-blue-dark'))} />
                <input type="reset" value="Löschen"
                       className={css(tw('rounded p-1 h-4 text-blue text-md leading-none border-blue border border-solid hover:border-blue-dark focus:border-blue-dark focus:outline-none cursor-pointer hover:text-blue-dark focus:text-blue-dark'))}/>
              </div>
            </form>
            <p className={css(tw('mt-3 px-1 border-t border-l-0 border-b-0 border-r-0 border-solid border-border-light text-right'))}>
              Wenn Sie das Formular nicht ausfüllen möchten, können Sie uns auch gerne ein Email an <Obfuscate
                email="mail@formwerdung.ch"
                headers={{ subject: 'Anfrage von formwerdung.ch' }}
                className={css(tw('text-blue hover:text-black'))} /> senden.
            </p>
          </div>
        </Container>
      </section>
    );
  }
}

export default Contact;
