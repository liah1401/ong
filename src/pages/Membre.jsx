import { Form, Input, Button, Checkbox, notification, Typography, Upload, DatePicker, Radio, Row, Col, Divider, Select, Steps, Modal } from 'antd';
import React from 'react';
import { MailOutlined, UserOutlined, UploadOutlined, IdcardOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import { countries } from 'countries-list'; // Importation de la bibliothèque pour les pays

dayjs.locale('fr'); // Configuration de la locale française

const { Title } = Typography;
const { Option } = Select;
const { Step } = Steps;

const Membre = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = React.useState(0); // Gestion des étapes
  const [formData, setFormData] = React.useState(null); // Stockage des données du formulaire
  const [isModalVisible, setIsModalVisible] = React.useState(false); // Gestion du résumé avant envoi

  const onNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const onPrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values) => {
    setFormData(values); // Stocker les données du formulaire
    setIsModalVisible(true); // Afficher le résumé
  };

  const handleSend = () => {
    // Simuler l'envoi d'un email ou d'un SMS
    notification.success({
      message: 'Formulaire soumis avec succès!',
      description: 'Un résumé de votre formulaire a été envoyé à votre email ou numéro de téléphone.',
    });
    setIsModalVisible(false);
    form.resetFields();
    setCurrentStep(0);
  };

  return (
    <div style={{ 
      padding: '32px', 
      maxWidth: '900px', 
      margin: '0 auto', 
      backgroundColor: '#ffffff', 
      borderRadius: '12px', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
    }}>
      <Title level={2} style={{ 
        textAlign: 'center', 
        marginBottom: '40px', 
        color: '#4A90E2', 
        fontWeight: 'bold' 
      }}>
        <IdcardOutlined style={{ marginRight: 12 }} />Formulaire d'Adhésion
      </Title>

      {/* Barre de progression */}
      <Steps current={currentStep} style={{ marginBottom: '40px' }}>
        <Step title="Informations Personnelles" />
        <Step title="Coordonnées" />
        <Step title="Résumé et Soumission" />
      </Steps>

      <Form 
        form={form} 
        name="membership_form" 
        onFinish={onFinish} 
        scrollToFirstError 
        layout="vertical"
      >
        {currentStep === 0 && (
          <>
            {/* Section 1 - Informations Personnelles */}
            <Divider orientation="left" style={{ color: '#4A90E2', fontWeight: 'bold' }}>Informations Personnelles</Divider>
            <Row gutter={16}>
              <Col span={24} md={12}>
                <Form.Item
                  name="fullName"
                  label="Nom Complet"
                  rules={[{ required: true, message: 'Veuillez entrer votre nom complet' }]}
                >
                  <Input placeholder="Jean Dupont" prefix={<UserOutlined />} />
                </Form.Item>
              </Col>

              <Col span={24} md={12}>
                <Form.Item
                  name="email"
                  label="Adresse Email"
                  rules={[{ type: 'email', message: 'Veuillez entrer une adresse email valide' }]}
                >
                  <Input placeholder="exemple@domaine.com" prefix={<MailOutlined />} />
                </Form.Item>
              </Col>

              <Col span={24} md={6}>
                <Form.Item
                  name="gender"
                  label="Sexe"
                  rules={[{ required: true, message: 'Veuillez sélectionner votre sexe' }]}
                >
                  <Radio.Group>
                    <Radio value="male">Masculin</Radio>
                    <Radio value="female">Féminin</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24} md={6}>
                <Form.Item
                  name="maritalStatus"
                  label="Statut Matrimonial"
                  rules={[{ required: true, message: 'Veuillez sélectionner votre statut matrimonial' }]}
                >
                  <Radio.Group>
                    <Radio value="single">Célibataire</Radio>
                    <Radio value="married">Marié(e)</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24} md={12}>
                <Form.Item
                  name="birthDate"
                  label="Date de naissance"
                  rules={[{ required: true, message: 'Veuillez entrer votre date de naissance' }]}
                >
                  <DatePicker
                    format="DD/MM/YYYY"
                    style={{ width: '100%' }}
                    placeholder="JJ/MM/AAAA"
                    disabledDate={(current) => current && current > dayjs().subtract(18, 'years').endOf('day')}
                  />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}

        {currentStep === 1 && (
          <>
            {/* Section 2 - Coordonnées */}
            <Divider orientation="left" style={{ color: '#4A90E2', fontWeight: 'bold' }}>Coordonnées</Divider>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="phone"
                  label="Numéro de Téléphone"
                  rules={[{ required: true, message: 'Veuillez entrer un numéro de téléphone valide' }]}
                >
                  <PhoneInput
                    country={'fr'}
                    enableSearch
                    placeholder="Entrez votre numéro de téléphone"
                    inputStyle={{ width: '100%' }}
                    buttonStyle={{ borderRadius: '4px 0 0 4px' }}
                    containerStyle={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>

              <Col span={24} md={12}>
                <Form.Item
                  name="city"
                  label="Ville"
                  rules={[{ required: true, message: 'Veuillez entrer votre ville' }]}
                >
                  <Input placeholder="Exemple : Paris" />
                </Form.Item>
              </Col>

              <Col span={24} md={12}>
                <Form.Item
                  name="address"
                  label="Adresse"
                  rules={[{ required: true, message: 'Veuillez entrer votre adresse complète' }]}
                >
                  <Input placeholder="Exemple : 123 rue de la Paix" />
                </Form.Item>
              </Col>

              <Col span={24} md={12}>
                <Form.Item
                  name="country"
                  label="Pays"
                  rules={[{ required: true, message: 'Veuillez sélectionner votre pays' }]}
                >
                  <Select placeholder="Sélectionnez votre pays">
                    {Object.values(countries).map((country) => (
                      <Option key={country.name} value={country.name}>
                        {country.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </>
        )}

        {currentStep === 2 && (
          <>
            {/* Section 3 - Résumé */}
            <Divider orientation="left" style={{ color: '#4A90E2', fontWeight: 'bold' }}>Résumé</Divider>
            <p>Veuillez vérifier vos informations avant de soumettre le formulaire.</p>
          </>
        )}

        {/* Boutons de navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
          {currentStep > 0 && (
            <Button onClick={onPrev}>Précédent</Button>
          )}
          {currentStep < 2 && (
            <Button type="primary" onClick={onNext}>
              Suivant
            </Button>
          )}
          {currentStep === 2 && (
            <Button type="primary" htmlType="submit">
              Soumettre
            </Button>
          )}
        </div>
      </Form>

      {/* Modal pour le résumé */}
      <Modal
        title="Résumé du formulaire"
        visible={isModalVisible}
        onOk={handleSend}
        onCancel={() => setIsModalVisible(false)}
        okText="Confirmer et Envoyer"
        cancelText="Modifier"
      >
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </Modal>
    </div>
  );
};

export default Membre;