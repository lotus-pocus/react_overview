import React, { useState } from 'react';

function Contact(props) {

    const [userName, setUserName] = useState('');

    const handleChange = event => setUserName(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();

        props.setBrand(userName);
        setUserName('');
    };

    return (
        <>
        <h1>Contact Form</h1>

        <p>{userName}</p>

        <form onSubmit={handleSubmit}>
            <input value={userName} onChange={handleChange} type="text" placeholder="Enter your name" />
            <button>Submit</button>
        </form>
      </>
    )
}

export default Contact;