import React from 'react';
import { Form, Input, Button } from 'antd';

const Contact = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
    // Vous pouvez ici envoyer les données à un backend ou un service d'email
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24, background: '#ffffff', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Contactez-nous</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Nom complet"
          name="name"
          rules={[{ required: true, message: 'Veuillez entrer votre nom complet.' }]}
        >
          <Input placeholder="Votre nom complet" />
        </Form.Item>
        <Form.Item
          label="Adresse e-mail"
          name="email"
          rules={[
            { required: true, message: 'Veuillez entrer votre adresse e-mail.' },
            { type: 'email', message: 'Veuillez entrer une adresse e-mail valide.' }
          ]}
        >
          <Input placeholder="Votre adresse e-mail" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Veuillez entrer votre message.' }]}
        >
          <Input.TextArea rows={4} placeholder="Votre message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;