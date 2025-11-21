import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .sendForm("service_qh2yhfs", "template_x5ubi27", formRef.current, "ZMNHq0rZ7uhly_VlL")
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
  
          // Show a SweetAlert success message
          Swal.fire({
            title: 'Success!',
            text: 'Thank you. I will get back to you as soon as possible.',
            icon: 'success',
          });
  
          setForm(initialFormState);
        },
        (error) => {
          setLoading(false);
          console.error(error);
  
          // Show a SweetAlert error message
          Swal.fire({
            title: 'Oops!',
            text: 'Ahh, something went wrong. Please try again.',
            icon: 'error',
          });
        }
      );
  };
  

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div 
        variants={slideIn("left", "tween", 0.2, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        </motion.div>

        <div className='mt-8 mb-8'>
          <div className='flex flex-col gap-4 text-white'>
            <div className='flex items-center gap-3'>
              <span className='text-secondary font-medium'>Location:</span>
              <span className='text-white-100'>Lahore, Pakistan</span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='text-secondary font-medium'>Phone:</span>
              <a href='tel:+923150094608' className='text-white-100 hover:text-[#915EFF] transition-colors'>
                +92-315-0094608
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <span className='text-secondary font-medium'>Email:</span>
              <a href='mailto:attakhanniazi941@gmail.com' className='text-white-100 hover:text-[#915EFF] transition-colors'>
                attakhanniazi941@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-3 mt-2'>
              <span className='text-secondary font-medium'>Connect:</span>
              <div className='flex gap-4'>
                <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-white-100 hover:text-[#915EFF] transition-colors'>
                  LinkedIn
                </a>
                <span className='text-secondary'>|</span>
                <a href='https://www.github.com' target='_blank' rel='noopener noreferrer' className='text-white-100 hover:text-[#915EFF] transition-colors'>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-8 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div 
        variants={slideIn("right", "tween", 0.2, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
