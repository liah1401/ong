import { Form, Input, Button, Checkbox, notification, Typography, Select, Upload } from 'antd';
import { MailOutlined, UserOutlined, PhoneOutlined, UploadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const Membre = () => {
  const [form] = Form.useForm();

  // Fonction appelée lors de la soumission du formulaire
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
      {/* Titre de la page */}
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

      {/* Formulaire d'inscription */}
      <Form
        form={form}
        name="membership_form"
        onFinish={onFinish}
        scrollToFirstError
        layout="vertical"
      >
        {/* Champ Nom Complet */}
        <Form.Item
          name="fullName"
          label="Nom Complet"
          rules={[{ required: true, message: 'Ce champ est obligatoire' }]}
        >
          <Input 
            prefix={<UserOutlined />} 
            placeholder="Jean Dupont" 
            aria-label="Nom Complet"
          />
        </Form.Item>

        {/* Champ Email */}
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Ce champ est obligatoire' },
            { type: 'email', message: 'Email non valide' }
          ]}
        >
          <Input 
            prefix={<MailOutlined />} 
            placeholder="exemple@email.com" 
            aria-label="Email"
          />
        </Form.Item>

        {/* Champ Téléphone avec indicatif */}
        <Form.Item
          name="phone"
          label="Téléphone"
          rules={[{ required: true, message: 'Ce champ est obligatoire' }]}
        >
          <Input.Group compact>
            <Form.Item
              name="countryCode"
              noStyle
              rules={[{ required: true, message: 'Veuillez sélectionner un indicatif' }]}
            >
              <Select placeholder="Indicatif" style={{ width: '30%' }}>
                <Option value="+33">+33 (France)</Option>
                <Option value="+243">+243 (RDC)</Option>
                <Option value="+1">+1 (USA)</Option>
                <Option value="+44">+44 (UK)</Option>
              </Select>
            </Form.Item>
            <Input 
              style={{ width: '70%' }} 
              placeholder="Numéro de téléphone" 
              prefix={<PhoneOutlined />} 
              aria-label="Téléphone"
            />
          </Input.Group>
        </Form.Item>

        {/* Domaine d'expertise */}
        <Form.Item
          name="expertise"
          label="Domaine d'expertise"
          rules={[{ required: true, message: 'Veuillez sélectionner un domaine' }]}
        >
          <Select placeholder="Choisissez votre domaine">
            <Option value="informatique">Informatique</Option>
            <Option value="relation_publique">Relations publiques</Option>
            <Option value="gestion">Gestion</Option>
            <Option value="autre">Autre</Option>
          </Select>
        </Form.Item>

        {/* Études et diplôme */}
        <Form.Item
          name="education"
          label="Études et diplôme"
          rules={[{ required: true, message: 'Veuillez mentionner vos études et diplômes' }]}
        >
          <Input.TextArea
            rows={2}
            placeholder="Exemple : Licence en informatique, Master en gestion"
            aria-label="Études et diplôme"
          />
        </Form.Item>

        {/* Expériences de travail */}
        <Form.Item
          name="workExperience"
          label="Expériences de travail"
          rules={[{ required: true, message: 'Veuillez décrire vos expériences professionnelles' }]}
        >
          <Input.TextArea
            rows={3}
            placeholder="Exemple : 5 ans en tant que développeur, 3 ans en gestion de projet"
            aria-label="Expériences de travail"
          />
        </Form.Item>

        {/* Antécédents criminels */}
        <Form.Item
          name="criminalRecord"
          label="Avez-vous des antécédents criminels ?"
          rules={[{ required: true, message: 'Veuillez répondre à cette question' }]}
        >
          <Select placeholder="Sélectionnez une option">
            <Option value="non">Non</Option>
            <Option value="oui">Oui</Option>
          </Select>
        </Form.Item>

        {/* Téléchargement du CV */}
        <Form.Item
          name="cv"
          label="Fournir votre CV"
          rules={[{ required: true, message: 'Veuillez télécharger votre CV' }]}
        >
          <Upload 
            name="cv" 
            listType="text" 
            maxCount={1}
            beforeUpload={() => false} // Empêche l'upload automatique
          >
            <Button icon={<UploadOutlined />}>Télécharger votre CV</Button>
          </Upload>
        </Form.Item>

        {/* Checkbox pour accepter les conditions */}
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
            Je certifie que les informations fournies sont exactes et j'accepte les{' '}
            <Text type="secondary">statuts et le règlement intérieur de S.E.F ONG</Text> conformément à l'Article 12.
          </Checkbox>
        </Form.Item>

        {/* Bouton de soumission */}
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