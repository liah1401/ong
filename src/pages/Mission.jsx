import { useState } from 'react';
import { Card, Row, Col, Typography, Button, Grid, Collapse } from 'antd';
import { 
  DownOutlined,
  UpOutlined,
  HeartFilled,
  BookOutlined, 
  MedicineBoxOutlined, 
  AppleOutlined, 
  SafetyCertificateOutlined,
  TeamOutlined,
  ExperimentOutlined,
  EnvironmentOutlined,
  ReconciliationOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
const { Panel } = Collapse;

const Mission = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const screens = useBreakpoint();

  const categories = [
    {
      title: "Services Sociaux de Base",
      icon: <HeartFilled />,
      color: "#ff4d4f",
      objectives: [
        {
          icon: <MedicineBoxOutlined />,
          title: "Santé Intégrée",
          content: "Cliniques mobiles et programmes de vaccination de masse",
          stats: "2M+ enfants vaccinés annuellement"
        },
        {
          icon: <AppleOutlined />,
          title: "Nutrition Essentielle",
          content: "Programmes alimentaires et suivi nutritionnel",
          stats: "3M repas distribués/an"
        },
        {
          icon: <EnvironmentOutlined />,
          title: "Eau & Assainissement",
          content: "Installation de points d'eau potable et éducation hygiénique",
          stats: "500+ points d'eau installés"
        }
      ]
    },
    {
      title: "Autonomie Alimentaire",
      icon: <ExperimentOutlined />,
      color: "#52c41a",
      objectives: [
        {
          icon: <EnvironmentOutlined />,
          title: "Agriculture Durable",
          content: "Formation aux techniques agricoles modernes",
          stats: "1000 fermes formées"
        },
        {
          icon: <TeamOutlined />,
          title: "Élevage Communautaire",
          content: "Distribution de bétail et formation en gestion",
          stats: "5000 têtes de bétail distribuées"
        },
        {
          icon: <ReconciliationOutlined />,
          title: "Pêche Responsable",
          content: "Équipement et formation aux méthodes de pêche durables",
          stats: "200 communautés formées"
        }
      ]
    },
    {
      title: "Éducation & Protection",
      icon: <BookOutlined />,
      color: "#1890ff",
      objectives: [
        {
          icon: <SafetyCertificateOutlined />,
          title: "Protection Infantile",
          content: "Centres d'accueil et programmes de réinsertion",
          stats: "20K enfants pris en charge"
        },
        {
          icon: <TeamOutlined />,
          title: "Encadrement Jeunesse",
          content: "Formations professionnelles et activités parascolaires",
          stats: "150 centres de formation"
        },
        {
          icon: <ExperimentOutlined />,
          title: "Innovation Éducative",
          content: "Écoles mobiles et programmes d'alphabétisation",
          stats: "98% de réussite scolaire"
        }
      ]
    }
  ];

  const handleCategoryClick = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div style={{ 
      padding: screens.md ? '40px 5%' : '20px 15px',
      backgroundColor: '#f9f9f9'
    }}>
      <Title 
        level={2} 
        style={{ 
          textAlign: 'center',
          marginBottom: '50px',
          color: '#1890ff',
          fontSize: screens.md ? '32px' : '24px'
        }}
      >
        Nos Domaines d'Intervention
      </Title>

      {categories.map((category, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <div 
            onClick={() => handleCategoryClick(index)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 30px',
              background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
              borderRadius: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: `2px solid ${expandedCategory === index ? category.color : 'transparent'}`,
              marginBottom: '15px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                fontSize: '24px',
                color: category.color,
                marginRight: '15px'
              }}>
                {category.icon}
              </div>
              <Title level={3} style={{ margin: 0, color: category.color }}>
                {category.title}
              </Title>
            </div>
            {expandedCategory === index ? (
              <UpOutlined style={{ color: category.color, fontSize: '18px' }} />
            ) : (
              <DownOutlined style={{ color: category.color, fontSize: '18px' }} />
            )}
          </div>

          <Collapse 
            in={expandedCategory === index}
            isOpen={expandedCategory === index}
            style={{
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              overflow: 'hidden'
            }}
          >
            <div style={{ padding: '20px' }}>
              <Row gutter={[30, 30]} justify="start">
                {category.objectives.map((objective, objIndex) => (
                  <Col 
                    key={objIndex} 
                    xs={24} 
                    sm={12} 
                    md={8}
                    style={{ display: 'flex' }}
                  >
                    <Card
                      hoverable
                      style={{ 
                        borderRadius: '15px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        flex: 1,
                        borderLeft: `4px solid ${category.color}`
                      }}
                      bodyStyle={{ padding: '24px' }}
                    >
                      <div style={{ 
                        fontSize: '28px',
                        color: category.color,
                        marginBottom: '15px'
                      }}>
                        {objective.icon}
                      </div>
                      <Title level={4} style={{ color: '#1d1d1d', marginBottom: '12px' }}>
                        {objective.title}
                      </Title>
                      <Text style={{ fontSize: '15px', lineHeight: 1.6 }}>
                        {objective.content}
                      </Text>
                      <div style={{
                        marginTop: '20px',
                        padding: '10px',
                        backgroundColor: `${category.color}10`,
                        borderRadius: '8px'
                      }}>
                        <Text strong style={{ color: category.color }}>
                          {objective.stats}
                        </Text>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div style={{ 
                marginTop: '40px',
                padding: '30px',
                background: `${category.color}08`,
                borderRadius: '15px',
                border: `1px solid ${category.color}20`
              }}>
                <Title level={4} style={{ color: category.color }}>
                  Impact Réalisé
                </Title>
                <Row gutter={[30, 30]} style={{ marginTop: '20px' }}>
                  <Col xs={24} sm={12} md={8}>
                    <div style={{ textAlign: 'center' }}>
                      <Text strong style={{ fontSize: '24px', color: category.color }}>
                        95%
                      </Text>
                      <Text style={{ display: 'block' }}>Couverture régionale</Text>
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={8}>
                    <div style={{ textAlign: 'center' }}>
                      <Text strong style={{ fontSize: '24px', color: category.color }}>
                        150+
                      </Text>
                      <Text style={{ display: 'block' }}>Partenaires locaux</Text>
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={8}>
                    <div style={{ textAlign: 'center' }}>
                      <Text strong style={{ fontSize: '24px', color: category.color }}>
                        10 ans
                      </Text>
                      <Text style={{ display: 'block' }}>Expérience terrain</Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Collapse>
        </div>
      ))}

      <div style={{ 
        textAlign: 'center', 
        marginTop: '60px',
        padding: '40px 30px',
        background: 'linear-gradient(135deg, #1890ff, #6ec4ff)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(24, 144, 255, 0.15)'
      }}>
        <Button 
          type="primary" 
          size="large" 
          style={{ 
            padding: '0 50px',
            height: '50px',
            borderRadius: '30px',
            fontSize: '16px',
            background: '#ffffff',
            color: '#1890ff',
            border: 'none',
            boxShadow: '0 4px 15px rgba(24, 144, 255, 0.3)'
          }}
        >
          Soutenir Nos Actions
        </Button>
      </div>
    </div>
  );
};

export default Mission;