import React,{ useState } from "react";
import ContactCSS from '../styles/Contact.module.css';

const AboutMe = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);
    const contactText = "have a question";
    const handleInputChange = (event,fieldName) => {
        event.persist();
        const field = {};
        field[fieldName] = event.target.value;
        setValues((values) => ({
            ...values,
            ...field,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.name && values.email && values.message) {
            setValid(true);
            setValues({
                name: '',
                email: '',
                message: '',
            })
        }else{
            setValid(false);
        }
        setSubmitted(true);
        console.log("values",values);
    };

    return (
        <div className={ContactCSS.container}>
            <div className={ContactCSS.header}>
                <div className={ContactCSS.label}>CONTACT</div>
                <div className={ContactCSS.lineContainer}>
                    <span className={ContactCSS.line}></span>
                </div>
            </div>
            <div className={ContactCSS.contactForm}>
                <div className={ContactCSS.text}>
                    {contactText}
                </div>
                <form onSubmit={handleSubmit} >
                <input value={values.name} type="text" placeholder="Name"  onChange={(event) => handleInputChange(event,"name")}/>
                {!valid && submitted && !values.name && <span className={ContactCSS.error}>Please enter your name</span>}
                <input value={values.email} type ="text" placeholder="Email"onChange={(event) => handleInputChange(event,"email")} />
                {!valid && submitted && !values.email && <span className={ContactCSS.error}>Please enter email</span>}
                <textarea value={values.message} placeholder="Your Message" onChange={(event) => handleInputChange(event,"message")}/>
                {!valid && submitted && !values.message && <span className={ContactCSS.error}>Please enter your message</span>}
                <input type = "submit" className ={ContactCSS.submit}/>
                </form>
            </div>
        </div>
    );
};

export default AboutMe;
