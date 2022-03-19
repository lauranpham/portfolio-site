import {useState} from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  const [error, setError] = useState({name: false, email: false, message: false})

  const handleSubmit = (e) => {
    e.preventDefault()
    // todo: handle form submit
  }
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='John Smith'
            className={`${error.name ? 'error' : null}`}
          />
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='123@email.com'
            className={`${error.email ? 'error' : null}`}
          />
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='your message'
            className={`${error.message ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
    </div>
  );
};

export default Contact;