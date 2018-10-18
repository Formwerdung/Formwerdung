import React from 'react'
import Obfuscate from 'react-obfuscate'
import { X } from 'react-feather'
import { css } from 'emotion'
import styled from 'react-emotion'
import tw from 'tailwind.macro'

import config from '../../../tailwind'
import Container from '../Container'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const dialogSection = css(tw`p-1 relative`)

const dialogIcon = css(tw`absolute pin-t pin-r p-1 w-4 h-4 cursor-pointer hover:text-white stroke-current transition`)

const DialogTitle = styled('h3')`
  ${tw`m-0 leading-2`};
`

const Dialog = ({ title, description, dismissHandler, bgColor }) => (
  <section className={css(dialogSection, { 'background-color': bgColor })}>
    <DialogTitle>{title}</DialogTitle>
    <X onClick={dismissHandler} className={dialogIcon} />
    <p>{description}</p>
  </section>
)

const contactInput = css(tw`text-input hover:border-border focus:outline-none focus:border-blue`)

const contactTextArea = css(tw`text-input hover:border-border focus:outline-none focus:border-blue h-12`)

const contactSubmit = css(
  tw`rounded bg-blue text-white p-1 text-md h-4 leading-none transition hover:bg-blue-dark focus:bg-blue-dark focus:outline-none cursor-pointer mr-1 border-transparent border-blue border border-solid hover:border-blue-dark focus:border-blue-dark`
)

const contactReset = css(
  tw`rounded p-1 h-4 text-blue text-md leading-none border-blue border border-solid hover:border-blue-dark focus:border-blue-dark focus:outline-none cursor-pointer hover:text-blue-dark focus:text-blue-dark`
)

const contactColophonObfuscate = css(tw`text-blue hover:text-black`)

const ContactWrapper = styled('div')`
  ${tw`max-w-contact`};
`

const ContactTitle = styled('h2')`
  ${tw`m-0 px-1 leading-3`};
`

const ContactGraf = styled('p')`
  ${tw`px-1 pt-0 pb-1`};
`

const ContactLabel = styled('label')`
  ${tw`font-semibold`};
`

const ContactBox = styled('p')`
  ${tw`pt-2`};
`

const ContactFlexBox = styled(ContactBox)`
  ${tw`flex justify-end`};
`

const ContactColophon = styled('div')`
  ${tw`mt-1 pt-1 px-1 border-t border-l-0 border-b-0 border-r-0 border-solid border-border-light text-right`};
`

const ContactColophonGraf = styled('p')`
  ${tw`md:w-4/5 ml-auto`};
`

class Contact extends React.Component {

  _isMounted = false

  constructor(props) {
    super(props)
    this.state = { error: false, success: false }
  }

  dismiss(message) {

    if (this._isMounted) {
      this.setState({ [ message ]: false })
    }
  }

  handleChange(e) {

    if (this._isMounted) {
      this.setState({ [ e.target.name ]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    const form = e.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {

        if (this._isMounted) {
          this.setState({ success: true })
        }
      })
      .catch(() => {

        if (this._isMounted) {
          this.setState({ error: true })
        }
      })
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <section id={'contact'}>
        <Container>
          <ContactWrapper>
            <ContactTitle>Kontaktieren Sie uns!</ContactTitle>
            <ContactGraf>
              Wir freuen uns, von Ihnen zu hören. Senden Sie uns eine Email, um
              ein unverbindliches Treffen zu verabreden.
            </ContactGraf>
            {this.state.success && (
              <Dialog
                title={'Senden erfolgreich'}
                description={
                  'Vielen Dank für Ihre Kontaktaufnahme! Wir melden uns sobald wie möglich bei Ihnen.'
                }
                dismissHandler={e => this.dismiss('success')}
                bgColor={config.colors.green}
              />
            )}
            {this.state.error && (
              <Dialog
                title={'Senden fehlgeschlagen'}
                description={
                  'Leider ist die Übermittlung des Formulars fehlgeschlagen. Versuchen Sie es doch bitte noch einmal.'
                }
                dismissHandler={e => this.dismiss('error')}
                bgColor={config.colors.red}
              />
            )}
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
              className={css(tw`p-1`)}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <ContactLabel>
                  Name
                  <br />
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    className={contactInput}
                  />
                </ContactLabel>
              </p>
              <ContactBox>
                <ContactLabel>
                  Email
                  <br />
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    className={contactInput}
                  />
                </ContactLabel>
              </ContactBox>
              <ContactBox>
                <ContactLabel>
                  Was möchten Sie besprechen?
                  <br />
                  <textarea
                    name="message"
                    id="message"
                    onChange={this.handleChange}
                    className={contactTextArea}
                  />
                </ContactLabel>
              </ContactBox>
              <ContactFlexBox>
                <input
                  type="submit"
                  value={'Senden'}
                  className={contactSubmit}
                />
                <input type="reset" value="Löschen" className={contactReset} />
              </ContactFlexBox>
            </form>
            <ContactColophon>
              <ContactColophonGraf>
                Wenn Sie das Formular nicht ausfüllen möchten, können Sie uns
                auch gerne ein Email an{' '}
                <Obfuscate
                  email="mail@formwerdung.ch"
                  headers={{ subject: 'Anfrage von formwerdung.ch' }}
                  className={contactColophonObfuscate}
                />{' '}
                senden.
              </ContactColophonGraf>
            </ContactColophon>
          </ContactWrapper>
        </Container>
      </section>
    )
  }
}

export default Contact
