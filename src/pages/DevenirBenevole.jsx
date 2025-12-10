import { useState } from 'react';
import { Form, Input, Button, DatePicker, Checkbox, Row, Col, Typography, Alert, Result, Select } from 'antd'; // Ajout de Select pour le choix du pays
import { SmileOutlined, CalendarOutlined, ToolOutlined, TeamOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons'; // Ajout d'icônes pour téléphone et adresse
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/fr';
import PhoneInput from 'react-phone-input-2'; // Ajout de PhoneInput pour le numéro de téléphone
import 'react-phone-input-2/lib/style.css';

moment.locale('fr');

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const theme = {
  primary: '#4361ee',
  secondary: '#2EC4B6',
  accent: '#3A86FF',
  background: '#f8f9fa',
  text: '#2b2d42',
  formBackground: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '12px',
  spacing: '24px',
  button: 'linear-gradient(135deg, #2EC4B6, #3A86FF)'
};

// List of countries for the Select component
const countries = [
  { name: 'France' },
  { name: 'Belgique' },
  { name: 'Suisse' },
  { name: 'Canada' },
  { name: 'États-Unis' },
  { name: 'Royaume-Uni' }
];

const DevenirBenevole = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const competencesList = [
    { label: 'Enseignement', value: 'enseignement', emoji: '📚' },
    { label: 'Santé/Médical', value: 'sante', emoji: '🏥' },
    { label: 'Logistique', value: 'logistique', emoji: '🚚' },
    { label: 'Activités artistiques', value: 'art', emoji: '🎨' },
    { label: 'Informatique', value: 'tech', emoji: '💻' },
    { label: 'Activités sportives', value: 'sport', emoji: '⚽' }
  ];

  const onFinish = (values) => {
    console.log('Valeurs soumises :', values);
    setIsSubmitted(true);
    setTimeout(() => navigate('/'), 3000);
  };

  if (isSubmitted) {
    return (
      <div style={{ 
        padding: theme.spacing, 
        background: theme.background,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Result
          icon={<SmileOutlined style={{ 
            fontSize: '64px', 
            color: theme.secondary,
            background: theme.button,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }} />}
          title={<span style={{ 
            fontSize: '2rem', 
            background: theme.button,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 600
          }}>
           
            Un immense merci pour votre engagement ❤️ et votre confiance !
          </span>}
          subTitle={<span style={{ color: theme.text }}>
            <div style={{ margin: '16px 0', fontSize: '1.1rem' }}>
              Votre inscription est confirmée !
            </div>
            <div style={{ marginBottom: '8px' }}>
              📧 Vous recevrez un récapitulatif par email
            </div>
            <div style={{ color: theme.secondary, fontWeight: 500 }}>
              Notre équipe vous contactera dans les 48h
            </div>
          </span>}
          extra={[
            <Button 
              key="accueil"
              type="primary"
              style={{
                background: theme.button,
                border: 'none',
                padding: '15px 30px',
                height: 'auto',
                borderRadius: theme.borderRadius,
                boxShadow: '0 4px 12px rgba(46, 196, 182, 0.3)'
              }}
            >
              <Link to="/" style={{ 
                color: 'white',
                fontWeight: 500,
                letterSpacing: '0.5px'
              }}>
                Retour à l'accueil
              </Link>
            </Button>
          ]}
        />
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: theme.spacing,
      background: theme.background,
      minHeight: '100vh'
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: theme.spacing,
        padding: `${theme.spacing} 0`
      }}>
        <Title level={1} style={{ 
          color: theme.text,
          fontSize: '2.5rem',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <TeamOutlined style={{ 
            color: theme.secondary,
            fontSize: '2.5rem',
            padding: '12px',
            background: theme.primary,
            borderRadius: '50%'
          }} />
          <span style={{ 
            background: theme.button,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Devenir Bénévole
          </span>
        </Title>
        <Text style={{ 
          fontSize: '1.1rem', 
          color: theme.secondary,
          fontWeight: 500,
          display: 'inline-block',
          borderBottom: `2px solid ${theme.primary}`
        }}>
          Rejoignez notre communauté solidaire
        </Text>
      </div>

      <div style={{ 
        background: theme.formBackground,
        borderRadius: theme.borderRadius,
        boxShadow: '0 8px 32px rgba(67, 97, 238, 0.1)',
        padding: theme.spacing,
        border: `2px solid ${theme.primary}20`
      }}>
        <Alert
          message={
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CalendarOutlined style={{ 
                fontSize: '1.5rem', 
                color: 'white',
                background: theme.secondary,
                padding: '8px',
                borderRadius: '8px'
              }} />
              <span style={{ fontWeight: 500, color: theme.text }}>
                💡 Seulement 4h/semaine pour un impact réel !
              </span>
            </div>
          }
          style={{
            background: `${theme.secondary}10`,
            border: `2px solid ${theme.secondary}30`,
            borderRadius: theme.borderRadius,
            marginBottom: theme.spacing
          }}
        />

        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[Number(theme.spacing), Number(theme.spacing)]}>
            <Col xs={24} md={12}>
              <div style={{ 
                padding: theme.spacing,
                borderRadius: theme.borderRadius,
                border: `1px solid ${theme.primary}20`
              }}>
                <Title level={4} style={{ 
                  color: theme.primary,
                  marginBottom: '16px',
                  paddingBottom: '8px',
                  borderBottom: `2px solid ${theme.primary}`
                }}>
                  Informations Personnelles
                </Title>

                <Form.Item name="nomComplet" label={<Text strong style={{ color: theme.secondary }}>Nom Complet</Text>}>
                  <Input
                    placeholder="Jean Dupont"
                    style={{ 
                      borderRadius: theme.borderRadius,
                      border: `1px solid ${theme.primary}30`
                    }}
                    prefix={<span style={{ marginRight: '8px', color: theme.secondary }}>👤</span>}
                  />
                </Form.Item>

                <Form.Item name="email" label={<Text strong style={{ color: theme.secondary }}>Adresse Email</Text>} rules={[{ required: true, message: 'Veuillez entrer votre email' }]}>
                  <Input
                    placeholder="jean@exemple.com"
                    style={{ 
                      borderRadius: theme.borderRadius,
                      border: `1px solid ${theme.primary}30`
                    }}
                    prefix={<span style={{ marginRight: '8px', color: theme.secondary }}>📧</span>}
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label={<Text strong style={{ color: theme.secondary }}>Numéro de Téléphone</Text>}
                  rules={[{ required: true, message: 'Veuillez entrer un numéro de téléphone valide' }]}
                >
                  <PhoneInput
                    country={'fr'} // Pays par défaut : France
                    enableSearch
                    placeholder="Entrez votre numéro de téléphone"
                    inputStyle={{
                      width: '100%',
                      borderRadius: theme.borderRadius,
                      border: `1px solid ${theme.primary}30`
                    }}
                    buttonStyle={{
                      borderRadius: '4px 0 0 4px'
                    }}
                    containerStyle={{
                      width: '100%'
                    }}
                  />
                </Form.Item>

                <Form.Item name="dateNaissance" label={<Text strong style={{ color: theme.secondary }}>Date de Naissance</Text>}>
                  <DatePicker 
                    style={{ 
                      width: '100%', 
                      borderRadius: theme.borderRadius,
                      border: `1px solid ${theme.primary}30`
                    }}
                    suffixIcon={<CalendarOutlined style={{ color: theme.secondary }} />}
                  />
                </Form.Item>

                <Form.Item name="progression" label={<Text strong style={{ color: theme.secondary }}>Progression</Text>} rules={[{ required: true, message: 'Veuillez indiquer votre progression' }]}>
                  <Input
                    placeholder="Débutant, Intermédiaire, Expert..."
                    style={{ 
                      borderRadius: theme.borderRadius,
                      border: `1px solid ${theme.primary}30`
                    }}
                    prefix={<ToolOutlined style={{ marginRight: '8px', color: theme.secondary }} />}
                  />
                </Form.Item>

                <Form.Item
                  name="pays"
                  label={<Text strong style={{ color: theme.secondary }}>Pays</Text>}
                  rules={[{ required: true, message: 'Veuillez sélectionner votre pays' }]}
                >
                  <Select
                    placeholder="Sélectionnez votre pays"
                    style={{
                      borderRadius: theme.borderRadius,
                      border: `1px solid ${theme.primary}30`
                    }}
                  >
                    {Object.values(countries).map((country) => (
                      <Select.Option key={country.name} value={country.name}>
                        {country.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item name="adresse" label={<Text strong style={{ color: theme.secondary }}>Adresse</Text>} rules={[{ required: true, message: 'Veuillez entrer votre adresse' }]}>
                  <Input
                    placeholder="123 Rue Exemple, Ville"
                    style={{
                      borderRadius: theme.borderRadius,
                      border: `1px solid ${theme.primary}30`
                    }}
                    prefix={<HomeOutlined style={{ marginRight: '8px', color: theme.secondary }} />}
                  />
                </Form.Item>
              </div>
            </Col>

            <Col xs={24} md={12}>
              <div style={{ 
                padding: theme.spacing,
                borderRadius: theme.borderRadius,
                border: `1px solid ${theme.primary}20`
              }}>
                <Title level={4} style={{ 
                  color: theme.primary,
                  marginBottom: '16px',
                  paddingBottom: '8px',
                  borderBottom: `2px solid ${theme.primary}`
                }}>
                  Disponibilités & Compétences
                </Title>

                <Form.Item name="disponibilites" label={<Text strong style={{ color: theme.secondary }}>Disponibilités</Text>}>
                  <RangePicker
                    showTime
                    style={{ 
                      width: '100%', 
                      borderRadius: theme.borderRadius,
                      border: `1px solid ${theme.primary}30`
                    }}
                    ranges={{
                      'Week-end': [moment().startOf('week'), moment().endOf('week')],
                      'Soirées': [moment().hour(18), moment().hour(22)]
                    }}
                  />
                </Form.Item>

                <Form.Item name="competences" label={<Text strong style={{ color: theme.secondary }}>Compétences</Text>}>
                  <Row gutter={[16, 16]}>
                    {competencesList.map((item) => (
                      <Col span={12} key={item.value}>
                        <Checkbox 
                          value={item.value}
                          style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            margin: 0,
                            padding: '8px',
                            borderRadius: '8px',
                            border: `1px solid ${theme.primary}30`,
                            transition: 'all 0.3s',
                            width: '100%'
                          }}
                        >
                          <span style={{ 
                            marginRight: '8px', 
                            fontSize: '1.2rem',
                            color: theme.secondary
                          }}>
                            {item.emoji}
                          </span>
                          {item.label}
                        </Checkbox>
                      </Col>
                    ))}
                  </Row>
                </Form.Item>

                <Form.Item name="message" label={<Text strong style={{ color: theme.secondary }}>Message Personnel</Text>}>
                  <TextArea
                    rows={4}
                    placeholder="Partagez votre motivation..."
                    style={{ 
                      borderRadius: theme.borderRadius,
                      border: `1px solid ${theme.primary}30`
                    }}
                  />
                </Form.Item>
              </div>
            </Col>
          </Row>

          <Form.Item name="accord" style={{ marginTop: theme.spacing }}>
            <Checkbox style={{ color: theme.text }}>
              J'accepte les{' '}
              <a href="/conditions" style={{ 
                color: theme.secondary,
                textDecoration: 'underline',
                textUnderlineOffset: '2px'
              }}>
                conditions d'engagement
              </a>
            </Checkbox>
          </Form.Item>

          <Button 
            type="primary" 
            htmlType="submit" 
            block
            style={{
              height: '56px',
              fontSize: '1.1rem',
              background: theme.button,
              border: 'none',
              borderRadius: theme.borderRadius,
              marginTop: theme.spacing,
              boxShadow: '0 4px 12px rgba(46, 196, 182, 0.3)'
            }}
            icon={<ToolOutlined style={{ fontSize: '1.2rem', color: 'white' }} />}
          >
            <span style={{ color: 'white', fontWeight: 500 }}>
              Rejoindre l'aventure !
            </span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default DevenirBenevole;