import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageTitle = styled.h1`
  color: #a67c52;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(245, 245, 220, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.85);
  border: 1.5px solid rgba(139, 69, 19, 0.3);
  border-radius: 8px;
  color: #4a3b31;
  font-size: 1rem;
  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8fbc8f;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 8px #8fbc8f88;
  }

  &::placeholder {
    color: rgba(139, 69, 19, 0.6);
    font-style: italic;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: 150px;

  @media (max-width: 480px) {
    min-height: 120px;
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${({ disabled }) => (disabled ? '#a9c2a9' : '#8fbc8f')};
  color: #f5f5dc;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '0 4px 15px rgba(143, 188, 143, 0.5)'};

  &:hover {
    background: ${({ disabled }) => (disabled ? '#a9c2a9' : '#556b2f')};
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  font-weight: 600;
  text-align: center;
  color: ${({ success }) => (success ? '#3a7d44' : '#b33a3a')};
`;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // null | 'success' | 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setStatus(null); // reset status on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <PageTitle>İletişim Formu</PageTitle>
            <FormContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="İsim"
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-posta"
                        required
                    />
                    <TextArea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mesajınızı buraya yazınız..."
                        required
                    />
                    <SubmitButton
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                        {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                    </SubmitButton>
                </Form>
                {status === 'success' && (
                    <StatusMessage success>Mesajınız başarıyla gönderildi!</StatusMessage>
                )}
                {status === 'error' && (
                    <StatusMessage>Bir hata oluştu. Lütfen tekrar deneyin.</StatusMessage>
                )}
            </FormContainer>

        </>
    );
};

export default ContactForm;
