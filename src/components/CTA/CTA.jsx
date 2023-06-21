import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import "./style.css"
import cta from "../../assets/cta.png"

const CTA = () => {

    const [formInput, setFormInput] = useState({})



    const handleChange = e => {
        setFormInput(
            prev => {
                return {
                    ...prev,
                    [e.target.name]: e.target.value
                }
            }
        )
    }

    return (
        <div>

            <div className='row'>
                <div className="col-md-6 cta-img-div">
                    <img className='cta-img' src={cta} alt="..."></img>
                </div>
                <div className="col-md-6 cta-input-group">

                    <div className="input-group mb-3">
                        <span className="input-group-text cta-label round-border" id="basic-addon1"><PersonIcon /></span>
                        <input type="email" onChange={handleChange} value={formInput.name || ""} name='name' className="form-control round-border" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text cta-label round-border" id="basic-addon1"><MailIcon /></span>
                        <input type="email" onChange={handleChange} value={formInput.email || ""} name='email' className="form-control round-border" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text cta-label round-border" id="basic-addon1"><PhoneIcon /></span>
                        <input type="tel" onChange={handleChange} value={formInput.phone || ""} name='phone' className="form-control round-border" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="form-floating">
                        <textarea className="form-control round-border-25" style={{ minHeight: "100px" }} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea" className="cta-floating-label">Comments</label>
                    </div>
                    <div className='text-center my-3'>
                        <button onClick={
                            () => {
                                const config = {
                                    SecureToken: "7c35f34f-7ab9-442c-93b9-81f8cb090c06",
                                    To: 'rgoel1729@gmail.com',
                                    From: "t89027459@gmail.com",
                                    Subject: formInput.name,
                                    Body: `Contact Number : ${formInput.phone}\nEmail : ${formInput.email}\nMessage : ${formInput.message}`
                                }
                                if (window.Email) {
                                    window.Email.send(config)
                                        .then(
                                            alert("Email Sent")
                                        )
                                }
                            }
                        } className='btn btn-dark cta-submit'>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CTA;
