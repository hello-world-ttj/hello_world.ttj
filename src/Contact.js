import React, { useRef } from 'react';
import {TextInput,Button,Label, Textarea} from 'flowbite-react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n6jbqw2', 'template_8qoxkyu', e.target, 'haY9CCbjnHs84SIFl')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: 'Message sent successfully 🥳🥳🥳',
          showConfirmButton: false,
          timer: 1500,
          width: '600px',
        })
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <form className="flex flex-col gap-4 justify-center sm:m-32 m-10 animate__animated animate__jackInTheBox" ref={form} onSubmit={sendEmail}> 
      <div className='text-center text-2xl text-gray-900 dark:text-white'>
        <h3>Let's talk</h3>
      </div>
      <div>
    <div className="mb-2 block">
      <Label
        htmlFor="fname"
        value="First Name"
      />
    </div>
    <TextInput
      name="fname"
      type="text"
      required={true}
      shadow={true}
    />
      </div>
      <div>
    <div className="mb-2 block">
      <Label
        htmlFor="lname"
        value="Last Name"
      />
    </div>
    <TextInput
      name="lname"
      type="text"
      required={true}
      shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email"
        value="Your email"
      />
    </div>
    <TextInput
      name="email"
      type="email"
      placeholder="example@gmail.com"
      required={true}
      shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="msg"
        value="Message"
      />
    </div>
    <Textarea
      name="msg"
      type="text"
      required={true}
      shadow={true}
    />
  </div>
  <Button type="submit">
    Send
  </Button>
</form>
  )
}

export default Contact