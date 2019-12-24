/** @jsx jsx */
import React from 'react'
import Obfuscate from 'react-obfuscate'
import { X } from 'react-feather'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import config from '../../../tailwind.config'
import Container from '../Container'
import { textInput, transition } from '../../utils/style'
import { SubTitle } from '../Type/index'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const dialogSection = css(tw`p-1x relative`)

const dialogIcon = tw`absolute top-0 right-0 p-1x w-4x h-4x cursor-pointer hover:text-white stroke-current`

const DialogTitle = styled('h3')`
  ${tw`m-0 leading-2x`};
`

const Dialog = ({ title, description, dismissHandler, bgColor }) => (
  <section css={[dialogSection, { 'background-color': bgColor }]}>
    <DialogTitle>{title}</DialogTitle>
    <X onClick={dismissHandler} css={[dialogIcon, transition]} />
    <p>{description}</p>
  </section>
)

const contactInput = tw`hover:border-border focus:outline-none focus:border-blue`

const contactTextArea = tw`h-12x`

const contactSubmit = tw`rounded bg-blue text-white p-1x text-md h-4x leading-none hover:bg-blue-dark focus:bg-blue-dark focus:outline-none cursor-pointer mr-1x border-transparent border-blue border border-solid hover:border-blue-dark focus:border-blue-dark`

const contactReset = tw`rounded bg-white p-1x h-4x text-blue text-md leading-none border-blue border border-solid hover:border-blue-dark focus:border-blue-dark focus:outline-none cursor-pointer hover:text-blue-dark focus:text-blue-dark`

const contactColophonObfuscate = css(
  tw`text-blue-dark hover:text-black`,
  transition
)

const ContactWrapper = styled('div')`
  ${tw`max-w-contact`};
`

const ContactTitle = styled(SubTitle)`
  ${tw`px-1x`};
`

const ContactGraf = styled('p')`
  ${tw`px-1x pt-0 pb-1x`};
`

const ContactLabel = styled('label')`
  ${tw`font-semibold`};
`

const ContactBox = styled('p')`
  ${tw`pt-2x`};
`

const ContactFlexBox = styled(ContactBox)`
  ${tw`flex justify-end`};
`

const ContactColophon = styled('div')`
  ${tw`mt-1x pt-1x px-1x border-t border-l-0 border-b-0 border-r-0 border-solid border-border-light text-right`};
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
                bgColor={config.theme.colors.green}
              />
            )}
            {this.state.error && (
              <Dialog
                title={'Senden fehlgeschlagen'}
                description={
                  'Leider ist die Übermittlung des Formulars fehlgeschlagen. Versuchen Sie es doch bitte noch einmal.'
                }
                dismissHandler={() => this.dismiss('error')}
                bgColor={config.theme.colors.red}
              />
            )}
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={e => this.handleSubmit(e)}
              css={tw`p-1x`}
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
                    css={[textInput, contactInput]}
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
                    css={[textInput, contactInput]}
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
                    css={[textInput, contactInput, contactTextArea]}
                  />
                </ContactLabel>
              </ContactBox>
              <ContactFlexBox>
                <input
                  type="submit"
                  value={'Senden'}
                  css={[contactSubmit, transition]}
                />
                <input
                  type="reset"
                  value="Löschen"
                  css={[contactReset, transition]}
                />
              </ContactFlexBox>
            </form>
            <ContactColophon>
              <ContactColophonGraf>
                Wenn Sie das Formular nicht ausfüllen möchten, können Sie uns
                auch gerne ein Email an{' '}
                <Obfuscate
                  email="mail@formwerdung.ch"
                  headers={{ subject: 'Anfrage von formwerdung.ch' }}
                  css={contactColophonObfuscate}
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
