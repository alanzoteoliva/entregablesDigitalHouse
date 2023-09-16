import React, { useContext } from 'react'
import Form from '../Components/Form'
import { AppContext } from '../Components/utils/global.context';

const Contact = () => {
  const { theme } = useContext(AppContext);

  const containerClass = theme === 'dark' ? 'dark-container' : 'light-container';

  return (
    <div className={containerClass}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact
