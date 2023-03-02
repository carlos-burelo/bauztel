import Form from './components/Form'
import Hero from './components/Hero'
import _ from './contact.module.scss'

const ContactPage: Page = () => {
  return (
    <div className={_.contact}>
      <Hero />
      <Form />
    </div>
  )
}

export default ContactPage
