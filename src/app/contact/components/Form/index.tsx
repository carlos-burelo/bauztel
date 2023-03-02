import _ from './Form.module.scss'

const Form: FC = () => {
  return (
    <div className={_.container}>
      <form className={_.form}>
        <h2 className={_.title}>¿Tienes alguna pregunta?<br />Contactanos</h2>
        <div className={_.formGroupFlex}>
          <div className={_.formGroup}>
            <label htmlFor="name">First name</label>
            <input type="text" id="name" />
          </div>
          <div className={_.formGroup}>
            <label htmlFor="surname">Last name</label>
            <input type="text" id="surname" />
          </div>
        </div>
        <div className={_.formGroup}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
        </div>
        <div className={_.formGroup}>
          <label htmlFor="phone">Phone number</label>
          <input type="tel" id="phone" />
        </div>
        <div className={_.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea rows={6} id="message" />
        </div>
        <button className={_.send} type="submit">Send</button>
      </form>
    </div>
  )
}

export default Form
