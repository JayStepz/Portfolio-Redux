import React, { useState } from 'react';

export default function Contact() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
    
        const handleInputChange = (input) => {
            const { name, value } = input.target;
            if (name === 'name') {
                setName(value);
            } else if (name === 'email') {
                setEmail(value);
            } else if (name === 'message') {
                setMessage(value);
            }
        };
    
        const handleSubmit = (submit) => {
            submit.preventDefault();
    
            if (name.length < 1 || email.length < 1 || message.length < 1) {
                window.alert("Input required in all fields.");
            } else {
                window.alert("I'll check it eventually. Maybe.")
            }
        };
    
        return(
        <div className='primary'>
            <h1 style={{textAlign: 'center'}}>Why talk to me?</h1>
            <form style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{flexGrow: 0, justifyContent: 'space-between'}} className='row-1'>
                    <label>Name:</label>
                    <input name='name' value={name} onChange={handleInputChange} />
                </div>
                <div style={{display: 'flex', alignContent: 'center'}}>
                    <label>Email:</label>
                    <input name='email' value={email} onChange={handleInputChange} placeholder='email@isp.com'/>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name='message' value={message} onChange={handleInputChange} placeholder="Leave me a message. Maybe I'll respond."></textarea>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};
