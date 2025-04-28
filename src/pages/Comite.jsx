import { useState } from 'react';
import { Card, Row, Col, Avatar, Typography } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Comite = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const members = [
    {
      name: "GAUTHIER LUKUNKU MULENGA",
      role: "Président exécutif",
      description: "15 ans d'expérience dans l'humanitaire, fondateur de l'association",
      color: "#1890ff"
    },
    {
      name: "Marie Claire",
      role: "Trésorière",
      description: "Expert-comptable diplômée (DESCF) avec 10 ans d'expérience en gestion associative",
      color: "#13c2c2"
    },
    {
      name: "Paul Martin",
      role: "Secrétaire Général",
      description: "Coordinateur des opérations terrain et gestion de projet international",
      color: "#722ed1"
    },
    {
      name: "Berthier",
      role: "Directrice Administrative",
      description: "Spécialiste en gestion des ressources humaines et logistique humanitaire",
      color: "#f5222d"
    },
    {
      name: "JOSUAH LUKUNKU",
      role: "Comptable Principal",
      description: "Auditeur financier certifié, gestion des budgets multi-projets",
      color: "#52c41a"
    },
    {
      name: "LUKUNKU REMY",
      role: "Directrice Juridique",
      description: "Juriste en droit des associations et protection de l'enfance",
      color: "#fa8c16"
    },
    {
      name: "ISRAELLE KAMBA",
      role: "Directeur Suivi & Évaluation",
      description: "Expert en analyse d'impact et méthodologies qualitatives",
      color: "#eb2f96"
    },
    {
      name: "PERNELLE LUKUNKU",
      role: "Responsable Communication",
      description: "Stratégie digitale et relations presse, gestion des réseaux sociaux",
      color: "#2f54eb"
    },
    {
      name: "Jean paul",
      role: "Caissier",
      description: "Gestion des flux financiers et contrôle des dépenses opérationnelles",
      color: "#a0d911"
    }
  ];

  return (
    <div style={{ padding: '24px', background: '#f0f2f5' }}>
      <Title 
        level={2} 
        style={{ 
          textAlign: 'center', 
          margin: '40px 0',
          background: 'linear-gradient(45deg, #1890ff, #13c2c2)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold'
        }}
      >
        Notre Comité Exécutif
      </Title>
      
      <Row gutter={[24, 24]} justify="center">
        {members.map((member, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={8} xl={6}>
            <div 
              style={{ 
                position: 'relative',
                cursor: 'pointer',
                transform: expandedCard === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <Card
                hoverable
                style={{ 
                  background: member.color,
                  borderRadius: '15px',
                  overflow: 'hidden'
                }}
                bodyStyle={{ padding: '16px' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <Avatar 
                    size={80} 
                    icon={<UserOutlined />} 
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.2)', 
                      marginBottom: '16px',
                      border: `2px solid ${member.color}`
                    }}
                  />
                  <Card.Meta
                    title={
                      <span style={{ 
                        color: 'white', 
                        fontSize: '1.1em',
                        display: 'block',
                        marginBottom: '8px'
                      }}>
                        {member.name}
                      </span>
                    }
                    description={
                      <span style={{ 
                        color: 'rgba(255,255,255,0.85)', 
                        fontWeight: '500' 
                      }}>
                        {member.role}
                      </span>
                    }
                  />
                  
                  {expandedCard === index && (
                    <Paragraph 
                      style={{ 
                        color: 'white',
                        marginTop: '16px',
                        fontSize: '0.9em',
                        lineHeight: '1.6'
                      }}
                    >
                      {member.description}
                      <InfoCircleOutlined 
                        style={{ 
                          marginLeft: '8px', 
                          fontSize: '16px',
                          color: 'rgba(255,255,255,0.8)'
                        }} 
                      />
                    </Paragraph>
                  )}
                </div>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Comite;