import React from 'react'

const Contect = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
    }
    return (
        <>
            <h2 style={{textAlign:'center', marginBottom:"80px"}}>Contact</h2>
            <form onSubmit={onSubmit} className="contact">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' required />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message' required></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </>
    )
}

export default Contect