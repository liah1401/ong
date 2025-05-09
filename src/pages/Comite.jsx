import { useState } from 'react';
import { Card, Row, Col, Avatar, Typography } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Comite = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const members = [
    {
      name: "MULENGA LUKUNKU GAUTHIER",
      role: "Directeur Exécutif",
      description: "Représente S.E.F ONG en justice et auprès des tiers. Convoque et préside l’Assemblée Générale. Nomme et démet les membres du Comité Exécutif.",
      color: "#1890ff"
    },
    {
      name: "YASOLELE BATOBA BERTHIER",
      role: "Directeur Administratif",
      description: "Élabore et met en œuvre les politiques internes. Supervise les activités administratives pour assurer leur bon fonctionnement.",
      color: "#13c2c2"
    },
    {
      name: "LUVUIDI KILUSALA HERMAN",
      role: "Directeur Financier",
      description: "Mobilise et gère les fonds de S.E.F ONG. Prépare le budget et contrôle la comptabilité.",
      color: "#722ed1"
    },
    {
      name: " Godelieve MASIALA 	 ",
      role: "Chargé des Relations Publiques",
      description: "Assure la communication entre S.E.F ONG et les tiers. Promeut l’image de marque de l’organisation.",
      color: "#f5222d"
    },
    {
      name: "MBONGO MEDDY ",
      role: "Chargé des Approvisionnements",
      description: "Gère la quantification, l’achat, le dédouanement et la distribution des dons aux enfants et aux personnes en difficulté.",
      color: "#52c41a"
    },
    {
      name: "NGOMA MURPHY ",
      role: "Chargé du Suivi, Évaluation et Reportage",
      description: "Développe des outils de suivi et évalue les programmes et services gérés par l’organisation.",
      color: "#fa8c16"
    },
    {
      name: "LUSADISU STAVELINE  ",
      role: "Comptable",
      description: "Enregistre les opérations financières, réalise les documents de synthèse et prépare les bilans.",
      color: "#eb2f96"
    },
    {
      name: "KASA VIVALDI  ",
      role: "Secrétaire",
      description: "Permet à l’organisation de fonctionner en conformité, de rendre des comptes à ses parties prenantes et de se concentrer sur sa mission sociale",
      color: "#eb2f96"
    },
    {
      name: "BITANTA RACHEL",
      role: "Caissier",
      description: "S’occupe de la gestion des espèces et des flux financiers de la caisse.",
      color: "#2f54eb"
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