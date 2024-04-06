import { useRef, useState } from 'react';
import './Contact.scss'
import { motion, useInView} from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,

        },
    },
};

const Contact = () => {
    const ref = useRef()

    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const isInView = useInView(ref, {margin: "-100px"})

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bgol8qr', 'template_5dc4xi9', formRef.current, {
            publicKey: 'xtIBXtGnP5Y023OpZ',
          })
          .then(
            () => {
              setSuccess(true)
            },
            (error) => {
                setError(true)
            },
          );
      };

      

  return (
    <motion.div ref={ref} className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textCantainer" variants={variants}>
            <motion.h1 variants={variants}>
                Let's work together
            </motion.h1>
            <motion.div className='item' variants={variants}>
                <h2>Mail</h2>
                <span>hello@react.dev</span>
            </motion.div>

            <motion.div className='item' variants={variants}>
                <h2>Address</h2>
                <span>hello street New York</span>
            </motion.div>

            <motion.div className='item' variants={variants}>
                <h2>Phone</h2>
                <span>+1 234 5678</span>
            </motion.div>

        </motion.div>
        <div className="formCantainer">
            <motion.div className="phonesvg"
            initial={{opacity:1}}
            whileInView={{opacity:0}}
            transition={{delay: 3 ,duration:1}}
            

            
            >





            </motion.div>
            <motion.form  
            ref={formRef}
            onSubmit={sendEmail}
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{delay: 1 ,duration:1}}
>

                <input type="text" required placeholder='Name' name='name' />
                <input type="email" required placeholder='Email' name='email' />
                <textarea rows={8} placeholder='Message' name='message' />
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}



            </motion.form>
            
        </div>
      
    </motion.div>
  )
}

export default Contact
