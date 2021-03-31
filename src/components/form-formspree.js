import React from 'react'
import Recaptcha from 'react-google-recaptcha'

export default class FormspreeForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.handleRecaptcha = this.handleRecaptcha.bind(this)
    this.state = {
      status: '',
      'g-recaptcha-response': null,
    }
  }

  render() {
    const { status } = this.state
    const sectionName = this.props.section || 'Contact Us'
    const manufacturers = this.props.manufacturers.edges
    const recaptchaKey = this.props.recaptchaKey

    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mvovekjn"
        method="POST"
      >
        <div className="field">
          <label className="label" htmlFor="name">
            Your Name*:
          </label>
          <div className="control">
            <input
              id="name"
              className="input"
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Your Email*:
          </label>
          <div className="control">
            <input
              id="email"
              className="input"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="manufacturer">
            Manufacturer:
          </label>
          <div className="control">
            <span className="select">
              <select
                id="manufacturer"
                name="manufacturer"
                defaultValue={sectionName}
              >
                {manufacturers.map(({ node }) => {
                  return (
                    <option key={node.id} value={node.title}>
                      {node.title}
                    </option>
                  )
                })}
              </select>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="message">
            Message:
          </label>
          <div className="control">
            <textarea
              id="message"
              className="textarea"
              name="message"
              placeholder={`Your message...`}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="project_name">
            Project Name (if applicable):
          </label>
          <div className="control">
            <input
              id="project_name"
              className="input"
              type="text"
              name="project_name"
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="project_specifier">
            Project Specifier (if applicable):
          </label>
          <div className="control">
            <input
              id="project_specifier"
              className="input"
              type="text"
              name="project_specifier"
            />
          </div>
        </div>
        <div className="field">
          <Recaptcha
            ref="recaptcha"
            sitekey={recaptchaKey}
            onChange={this.handleRecaptcha}
            required
          />
          <div
            className="is-hidden is-inline-block notification is-danger"
            id="recapchta-message"
          >
            Recaptcha is required.
          </div>
        </div>
        <div className="field">
          <div className="control">
            {status === 'SUCCESS' ? (
              <p>Thank you! We'll be in touch shortly.</p>
            ) : (
              <button type="submit" className="button is-link">
                Send
              </button>
            )}
          </div>
        </div>
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
    )
  }

  handleRecaptcha = (value) => {
    this.setState({ 'g-recaptcha-response': value })
    document.getElementById('recapchta-message').classList.add('is-hidden')
  }

  submitForm(ev) {
    ev.preventDefault()

    if (!this.state['g-recaptcha-response']) {
      return document
        .getElementById('recapchta-message')
        .classList.remove('is-hidden')
    }

    const form = ev.target
    const data = new FormData(form)
    // data.delete('g-recaptcha-response')
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
