import styled, { css } from 'astroturf'
import React from 'react'
import { X } from 'react-feather'
import Obfuscate from 'react-obfuscate'

import config from '../../../tailwind.config'
import Container from '../Container'
import { SubTitle } from '../Type'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const DialogTitle = styled('h3')`
  @apply m-0 leading-2x;
`

const Dialog = ({ title, description, dismissHandler, bgColor }) => (
  <section>
    <DialogTitle>{title}</DialogTitle>
    <X onClick={dismissHandler} />
    <p>{description}</p>
  </section>
)

const ContactWrapper = styled('div')`
  @apply max-w-contact;
`

const ContactTitle = styled(SubTitle)`
  @apply px-1x;
`

const ContactGraf = styled('p')`
  @apply px-1x pt-0 pb-1x;
`

const ContactLabel = styled('label')`
  @apply font-semibold;
`

const ContactBox = styled('p')`
  @apply pt-2x;
`

const ContactFlexBox = styled(ContactBox)`
  @apply flex justify-end;
`

const ContactColophon = styled('div')`
  @apply mt-1x pt-1x px-1x border-t border-l-0 border-b-0 border-r-0 border-solid border-border-light text-right;
`

const ContactColophonGraf = styled('p')`
  @apply w-4/5 ml-auto;
`

class Contact extends React.Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.state = { error: false, success: false }
  }

  dismiss(message) {
    if (this._isMounted) {
      this.setState({ [message]: false })
    }
  }

  handleChange(e) {
    if (this._isMounted) {
      this.setState({ [e.target.name]: e.target.value })
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
                dismissHandler={() => this.dismiss('success')}
                bgColor={config.theme.extends.colors.green}
              />
            )}
            {this.state.error && (
              <Dialog
                title={'Senden fehlgeschlagen'}
                description={
                  'Leider ist die Übermittlung des Formulars fehlgeschlagen. Versuchen Sie es doch bitte noch einmal.'
                }
                dismissHandler={() => this.dismiss('error')}
                bgColor={config.theme.extends.colors.red}
              />
            )}
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={e => this.handleSubmit(e)}
              css={css`
                @apply p-1x;
              `}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input
                    name="bot-field"
                    onChange={e => this.handleChange(e)}
                  />
                </label>
              </p>
              <p>
                <ContactLabel>
                  Name
                  <br />
                  <input
                    type="text"
                    name="name"
                    onChange={e => this.handleChange(e)}
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
                    onChange={e => this.handleChange(e)}
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
                    onChange={e => this.handleChange(e)}
                  />
                </ContactLabel>
              </ContactBox>
              <ContactFlexBox>
                <input type="submit" value={'Senden'} />
                <input type="reset" value="Löschen" />
              </ContactFlexBox>
            </form>
            <ContactColophon>
              <ContactColophonGraf>
                Wenn Sie das Formular nicht ausfüllen möchten, können Sie uns
                auch gerne ein Email an{' '}
                <Obfuscate
                  email="mail@formwerdung.ch"
                  headers={{ subject: 'Anfrage von formwerdung.ch' }}
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
