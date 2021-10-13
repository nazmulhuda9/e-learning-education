import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='text-center p-5 text-primary'>
                <h1 >Contact Us</h1>
            </div>
            <div className='col d-flex justify-content-around ms-5 p-3'>
                <div className=''>
                    <div className='border-bottom mb-2'>
                        <h4><i class="fas fa-address-card"></i> Address</h4>
                        <p>Shibpur Road, 3rd Block</p>
                        <p>Somvupur Bazar,</p>
                        <p>patnitala, Naogaon</p>
                    </div>
                    <div className='border-bottom mb-2'>
                        <h4><i class="fas fa-phone-square-alt"></i> phone</h4>
                        <p>+0098-283-2347</p>
                    </div>
                    <div>
                        <h4><i class="fas fa-at"></i> Email</h4>
                        <p>nazmulhuda7219@gmail.com</p>
                    </div>
                </div>



                <div className='message'>
                    <h2>Send Message</h2>
                    <input className='m-3' type="text" name="" id="" placeholder='enter your name' />
                    <br />
                    <input className='m-3' type="text" name="" id="" placeholder='enter your email' />
                    <br />
                    <div className="input-group m-3">
                        <span class="input-group-text"> Message</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary m-3">Send</button>

                </div>
            </div>
        </div>
    );
};

export default Contact;