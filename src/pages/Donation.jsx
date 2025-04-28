import { Form, Input, InputNumber, Button, Typography, Card, message } from 'antd';
import { UserOutlined, EuroOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Title } = Typography;

const Donation = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      message.success(`Merci pour votre don de ${values.amount}€, ${values.name} !`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <Card 
        style={{ maxWidth: 400, width: '100%', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>Faire un don</Title>
        <Form 
          layout="vertical"
          onFinish={onFinish}
          size="large"
          requiredMark="optional"
        >
          <Form.Item 
            label="Nom du donateur" 
            name="name" 
            rules={[{ required: true, message: "Veuillez entrer votre nom!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Votre nom complet" />
          </Form.Item>

          <Form.Item 
            label="Montant du don (€)" 
            name="amount" 
            rules={[
              { required: true, message: "Veuillez entrer un montant!" },
              { type: 'number', min: 1, message: "Le montant doit être supérieur à 0€." }
            ]}
          >
            <InputNumber 
              prefix={<EuroOutlined />}
              style={{ width: '100%' }}
              min={1}
              placeholder="Montant en euros"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              loading={loading}
              style={{ borderRadius: '8px' }}
            >
              Faire un don
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Donation;
