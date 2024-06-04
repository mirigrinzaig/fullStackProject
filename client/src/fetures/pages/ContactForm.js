import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = {
            name,
            email,
            phone,
            message
        };

        try {
            const response = await fetch('http://localhost:5000/create-contact', { // ודא שהנתיב נכון
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else {
                const result = await response.json();
                setErrorMessage(result.message || 'Error sending message.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Error sending message.');
        }
    };

    return (
        <div>
            <h2>Contact Us</h2>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="tel" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
                <textarea value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} required />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;