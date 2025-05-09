import { Form, Input, Button, Checkbox, notification, Typography } from 'antd';
import { MailOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Membre = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
    notification.success({
      message: 'Demande envoyée!',
      description: 'Merci pour votre intérêt! Nous vous contacterons sous 48h.',
    });
    form.resetFields();
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Title 
        level={2} 
        style={{ 
          textAlign: 'center',
          margin: '40px 0',
          color: '#1890ff'
        }}
      >
        Devenir Membre
      </Title>

      <Form
        form={form}
        name="membership_form"
        onFinish={onFinish}
        scrollToFirstError
        layout="vertical"
      >
        <Form.Item
          name="fullName"
          label="Nom Complet"
          rules={[{ required: true, message: 'Ce champ est obligatoire' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Jean Dupont" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Ce champ est obligatoire' },
            { type: 'email', message: 'Email non valide' }
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="exemple@email.com" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Téléphone"
          rules={[{ required: true, message: 'Ce champ est obligatoire' }]}
        >
          <Input prefix={<PhoneOutlined />} placeholder="06 12 34 56 78" />
        </Form.Item>

        <Form.Item
          name="motivation"
          label="Motivation"
          rules={[{ required: true, message: 'Veuillez décrire votre motivation' }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Pourquoi souhaitez-vous nous rejoindre ?"
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Vous devez accepter les conditions')),
            },
          ]}
        >
          <Checkbox>
            Je certifie que les informations fournies sont exactes et j'accepte la{' '}
            <Text type="secondary">charte des membres</Text>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            size="large"
            style={{ width: '100%', marginTop: '20px' }}
          >
            Soumettre ma candidature
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Membre;