import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, message, Card, Spin, Result, Tag, Typography } from 'antd';
import { UserOutlined, EuroOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Corrige la clé Stripe dans ton frontend (vérifie les guillemets)
const stripePromise = loadStripe('pk_test_51R5Va5AsHFeTCZW2eeRwim7cIqeShw33reoMBKgC4xsrKKuktgNGAmkD5eFYO5BcQ7uilS3zlh1osCJtvuEElBM200WkahTCd7');

const { Title, Paragraph } = Typography;

const DonationForm = () => {
  const [loading, setLoading] = useState(false);
  const [donationInfo, setDonationInfo] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: values.amount }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setClientSecret(data.clientSecret);
      setDonationInfo(values);
      message.success(`🎉 Merci pour votre don de ${values.amount}€ !`);

    } catch (err) {
      console.error('Erreur:', err);
      message.error(`Échec de la création du paiement: ${err.message}`);
    }
    setLoading(false);
  };

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    setLoading(true);
    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: donationInfo.name,
            email: donationInfo.email
          }
        }
      });

      if (error) throw error;
      
      if (paymentIntent.status === 'succeeded') {
        message.success('Paiement réussi ! Un email de confirmation a été envoyé.');
        setDonationInfo(null);
      }
    } catch (err) {
      console.error('Erreur de paiement:', err);
      message.error(`Paiement échoué: ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <Card style={{ maxWidth: 520, margin: '2rem auto', borderRadius: '12px' }}>
      <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>
        🙌 Soutenez notre cause
      </Title>
      
      <Paragraph style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Votre contribution fait la différence 💖
      </Paragraph>

      <Tag color="blue" style={{ 
        margin: '0 auto 2rem', 
        display: 'table', 
        fontSize: '0.9rem',
        padding: '0.5rem 1rem'
      }}>
        Paiement sécurisé SSL • Confidentialité garantie
      </Tag>

      {!donationInfo ? (
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Votre nom"
            name="name"
            rules={[{ required: true, message: 'Merci de renseigner votre nom' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Jean Dupont" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ 
              required: true, 
              type: 'email',
              message: 'Merci de renseigner un email valide' 
            }]}
          >
            <Input prefix={<MailOutlined />} placeholder="contact@exemple.com" />
          </Form.Item>

          <Form.Item
            label="Montant (€)"
            name="amount"
            rules={[{ 
              required: true,
              type: 'number',
              min: 1,
              message: 'Montant minimum : 1€' 
            }]}
          >
            <InputNumber 
              style={{ width: '100%' }}
              prefix={<EuroOutlined />}
              min={1}
              step={5}
              formatter={value => `${value}€`}
            />
          </Form.Item>

          <Form.Item label="Message d'accompagnement (optionnel)" name="message">
            <Input.TextArea 
              rows={3} 
              placeholder="Un mot d'encouragement ?" 
              maxLength={200}
              showCount
            />
          </Form.Item>

          <Button 
            type="primary" 
            htmlType="submit" 
            block 
            loading={loading}
            icon={<EuroOutlined />}
            size="large"
          >
            Contribuer maintenant
          </Button>
        </Form>
      ) : (
        <Spin spinning={loading}>
          <div style={{ padding: '1rem' }}>
            <CardElement 
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': { color: '#aab7c4' }
                  },
                  invalid: { color: '#9e2146' }
                }
              }}
            />
            <Button 
              type="primary" 
              block 
              onClick={handlePayment}
              style={{ marginTop: '1.5rem' }}
            >
              Confirmer le paiement
            </Button>
          </div>
        </Spin>
      )}
    </Card>
  );
};

const Donation = () => (
  <Elements stripe={stripePromise}>
    <DonationForm />
  </Elements>
);

export default Donation;