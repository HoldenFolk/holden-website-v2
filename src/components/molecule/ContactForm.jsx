import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import TextField from '../atomic/TextField';
import Button from '../atomic/Button';
import settings from '../../globalSettings';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        settings.EMAIL_JS_SERVICE_ID,
        settings.EMAIL_JS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        settings.EMAIL_JS_USER_ID
      );
      console.log('Email sent successfully:', result.text);
      alert('Message sent successfully!');
      e.target.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          name="name"
          register={register}
          errors={errors}
          type="text"
          placeholder="Your Full Name"
          validation={{
            required: 'Name is required',
          }}
        />
        <TextField
          label="Email"
          name="email"
          register={register}
          errors={errors}
          type="email"
          placeholder="Your Email"
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          }}
        />
        <MessageTextArea
          placeholder="Your Message"
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <Error>{errors.message.message}</Error>}

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="fill"
          text="Send Message"
        >
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </Button>
      </form>
    </FormWrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 2rem auto;
  padding: 2rem;
  border: 2px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.fourth};
  animation: ${fadeIn} 1s ease-out;
`;

const MessageTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 1rem;
  margin: 1rem 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  resize: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition:
    transform 1s ease,
    box-shadow 1s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
    transform: scale(1.03);
  }
`;

const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
`;

export default ContactForm;
