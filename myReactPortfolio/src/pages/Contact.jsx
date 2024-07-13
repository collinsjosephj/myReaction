import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleNameChange = (e) => {
    setName(e.target.value)
    if (e.target.value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }))
    } else {
      setErrors((prevErrors) => {
        // eslint-disable-next-line no-unused-vars
        const { name, ...rest } = prevErrors
        return rest
      })
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (e.target.value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }))
    } else if (!validateEmail(e.target.value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }))
    } else {
      setErrors((prevErrors) => {
        // eslint-disable-next-line no-unused-vars
        const { email, ...rest } = prevErrors
        return rest
      })
    }
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
    if (e.target.value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }))
    } else {
      setErrors((prevErrors) => {
        // eslint-disable-next-line no-unused-vars
        const { message, ...rest } = prevErrors
        return rest
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!name) newErrors.name = 'Name is required'
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!message) newErrors.message = 'Message is required'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log({ name, email, message })
      // handle form submission logic here, such as sending data to an API
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </label>
        <label className="block mb-2">
          Message:
          <textarea
            value={message}
            onChange={handleMessageChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </label>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Submit</button>
      </form>
    </div>
  )
}

export default Contact;
