import { useState } from 'react';
import { Card, Row, Col, Avatar, Typography, Input, Tag, Button, Tooltip } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Paragraph, Title } = Typography;

const roleColors = {
  "Directeur Exécutif": "geekblue",
  "Directeur Administratif": "cyan",
  "Directeur Financier": "purple",
  "Chargé des Relations Publiques": "red",
  "Chargé des Approvisionnements": "green",
  "Chargé du Suivi, Évaluation et Reportage": "orange",
  "Comptable": "magenta",
  "SÉCRÉTAIRE": "blue",
  "Caissier": "volcano"
};

const Comite = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const members = [
    {
      name: "MULENGA LUKUNKU GAUTHIER",
      role: "Directeur Exécutif",
      description: "Représente S.E.F ONG en justice et auprès des tiers. Convoque et préside l’Assemblée Générale. Nomme et démet les membres du Comité Exécutif.",
      color: "#1890ff",
      image: "/images/Gauthier Mulenga.png",
      email: "mulengagauthier@gmail.com"
    },
    {
      name: "YASOLELE BATOBA BERTHIER",
      role: "Directeur Administratif",
      description: "Élabore et met en œuvre les politiques internes. Supervise les activités administratives pour assurer leur bon fonctionnement.",
      color: "#13c2c2",
      image: "/images/berthier.jpg"
    },
    {
      name: "LUVUIDI KILUSALA HERMAN",
      role: "Directeur Financier",
      description: "Mobilise et gère les fonds de S.E.F ONG. Prépare le budget et contrôle la comptabilité.",
      color: "#722ed1",
      image: "/images/herman.jpg"
    },
    {
      name: "Godelieve MASIALA",
      role: "Chargé des Relations Publiques",
      description: "Assure la communication entre S.E.F ONG et les tiers. Promeut l’image de marque de l’organisation.",
      color: "#f5222d",
      image: "/images/godelieve.jpg"
    },
    {
      name: "MBONGO MEDDY",
      role: "Chargé des Approvisionnements",
      description: "Gère la quantification, l’achat, le dédouanement et la distribution des dons aux enfants et aux personnes en difficulté.",
      color: "#52c41a",
      image: "/images/josuah.jpg"
    },
    {
      name: "NGOMA MURPHY",
      role: "Chargé du Suivi, Évaluation et Reportage",
      description: "Développe des outils de suivi et évalue les programmes et services gérés par l’organisation.",
      color: "#fa8c16",
      image: "/images/israelle.jpg"
    },
    {
      name: "LUSADISU STAVELINE",
      role: "Comptable",
      description: "Enregistre les opérations financières, réalise les documents de synthèse et prépare les bilans.",
      color: "#eb2f96",
      image: "/images/remy.jpg"
    },
    {
      name: "KASA VIVALDI",
      role: "SÉCRÉTAIRE",
      description: "Permet à l’organisation de fonctionner en conformité, de rendre des comptes à ses parties prenantes et de se concentrer sur sa mission sociale.",
      color: "#2f54eb",
      image: "/images/jeanpaul.jpg"
    },
    {
      name: "BITANTA RACHEL",
      role: "Caissier",
      description: "S’occupe de la gestion des espèces et des flux financiers de la caisse.",
      color: "#2f54eb",
      image: "/images/jeanpaul.jpg"
    }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #e6f7ff 60%, #f0f2f5 100%)',
        padding: 0,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Effet de fond décoratif */}
      <div style={{
        position: 'absolute',
        top: -120,
        left: -120,
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, #1890ff33 60%, transparent 100%)',
        zIndex: 0,
        filter: 'blur(8px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: -100,
        right: -100,
        width: 320,
        height: 320,
        background: 'radial-gradient(circle, #eb2f9633 60%, transparent 100%)',
        zIndex: 0,
        filter: 'blur(8px)'
      }} />

      {/* Header moderne */}
      <div style={{
        textAlign: 'center',
        paddingTop: 56,
        paddingBottom: 16,
        zIndex: 2,
        position: 'relative'
      }}>
        <Title level={2} style={{
          fontWeight: 900,
          letterSpacing: 1,
          color: '#222',
          marginBottom: 0,
          textShadow: '0 2px 12px #1890ff22'
        }}>
          <span style={{
            background: 'linear-gradient(90deg, #1890ff 40%, #eb2f96 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            position: 'relative'
          }}>
            Comité Exécutif
            <span style={{
              position: 'absolute',
              left: '50%',
              top: '100%',
              width: 120,
              height: 12,
              background: 'radial-gradient(circle, #1890ff44 60%, transparent 100%)',
              transform: 'translate(-50%, 0)',
              zIndex: -1,
              filter: 'blur(2px)'
            }} />
          </span>
        </Title>
        <Paragraph style={{
          color: '#555',
          fontSize: '1.18em',
          marginTop: 8,
          marginBottom: 0,
          fontWeight: 500
        }}>
          Découvrez les membres passionnés qui font avancer S.E.F ONG.
        </Paragraph>
      </div>

      {/* Barre de recherche stylée */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 40px 0', paddingTop: 20, zIndex: 2, position: 'relative' }}>
        <Input.Search
          placeholder="🔎 Rechercher un membre du comité..."
          allowClear
          onChange={e => setSearchTerm(e.target.value.toLowerCase())}
          style={{
            maxWidth: 420,
            borderRadius: 30,
            boxShadow: '0 4px 24px #1890ff22',
            background: '#fff',
            fontSize: '1.1em',
            padding: '8px 20px'
          }}
          size="large"
        />
      </div>

      {/* Grille des membres avec effet glassmorphism */}
      <Row gutter={[32, 32]} justify="center" style={{ zIndex: 2, position: 'relative' }}>
        {members
          .filter(member =>
            member.name.toLowerCase().includes(searchTerm) ||
            member.role.toLowerCase().includes(searchTerm)
          )
          .map((member, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={6}>
              <div
                style={{
                  animation: 'fadeInUp 0.7s cubic-bezier(.23,1.02,.32,1) both',
                  animationDelay: `${index * 0.08 + 0.1}s`
                }}
              >
                <Card
                  hoverable
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(8px) saturate(1.2)',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    boxShadow: `0 8px 32px ${member.color}22, 0 1.5px 8px #2221`,
                    minHeight: 480,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    transition: 'transform 0.25s, box-shadow 0.25s'
                  }}
                  bodyStyle={{
                    padding: '36px 24px 28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.045)';
                    e.currentTarget.style.boxShadow = `0 16px 40px ${member.color}44, 0 2px 12px #2222`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = `0 8px 32px ${member.color}22, 0 1.5px 8px #2221`;
                  }}
                >
                  <div style={{ position: 'relative', marginBottom: 18 }}>
                    <div style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: 130,
                      height: 130,
                      background: `radial-gradient(circle, ${member.color}33 60%, transparent 100%)`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 0,
                      filter: 'blur(2px)'
                    }} />
                    <Avatar
                      size={120}
                      src={member.image}
                      style={{
                        border: `5px solid ${member.color}`,
                        boxShadow: `0 6px 32px ${member.color}33`,
                        background: '#fff',
                        zIndex: 1,
                        transition: 'transform 0.3s cubic-bezier(.23,1.02,.32,1), box-shadow 0.3s',
                        willChange: 'transform'
                      }}
                      className="avatar-rotate"
                    />
                  </div>
                  <span style={{
                    color: member.color,
                    fontWeight: 800,
                    fontSize: '1.13em',
                    marginBottom: 6,
                    textAlign: 'center',
                    letterSpacing: 0.5,
                    textTransform: 'uppercase'
                  }}>
                    {member.name}
                  </span>
                  <Tag color={roleColors[member.role] || 'blue'} style={{
                    fontWeight: 600,
                    fontSize: '1em',
                    marginBottom: 10,
                    borderRadius: 16,
                    padding: '2px 18px'
                  }}>
                    {member.role}
                  </Tag>
                  <Paragraph
                    style={{
                      color: '#444',
                      marginTop: '8px',
                      fontSize: '1.04em',
                      lineHeight: '1.7',
                      textAlign: 'center',
                      minHeight: 80
                    }}
                  >
                    {member.description}
                  </Paragraph>
                  {member.email && (
                    <Tooltip title={`Contacter ${member.name}`}>
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<MailOutlined />}
                        href={`mailto:${member.email}`}
                        style={{
                          marginTop: 8,
                          background: member.color,
                          border: 'none',
                          boxShadow: `0 2px 12px ${member.color}44`
                        }}
                        size="large"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    </Tooltip>
                  )}
                </Card>
              </div>
            </Col>
          ))}
      </Row>

      {/* Animation CSS */}
      <style>
        {`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: none;
          }
        }
        .avatar-rotate:hover {
          transform: rotate(-6deg) scale(1.07);
          box-shadow: 0 10px 40px #2223;
        }
        `}
      </style>
    </div>
  );
};

export default Comite;