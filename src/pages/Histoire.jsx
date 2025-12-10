import { Typography, Grid, Row, Col, Card, Button } from 'antd';
import { TeamOutlined, BookOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Histoire = () => {
  const screens = useBreakpoint();

  // Palette de couleurs mise à jour
  const colors = {
    primary: '#4A90E2',    // Bleu doux
    secondary: '#50E3C2',  // Vert menthe
    accent: '#F5A623',     // Orange pastel
    background: '#F7F8FA', // Fond gris clair
    text: '#333333',       // Texte sombre
    white: '#FFFFFF'       // Blanc
  };

  const founders = [
    { name: "MULENGA LUKUNKU Gauthier", role: "Président Fondateur" },
    { name: "NGOYI YAMBELE Armand", role: "Stratège en Développement" },
    { name: "NGASHI MALANGO Junior", role: "Coordinateur des Projets" },
    { name: "YASOLELE BATOBA Berthier", role: "Expert en Logistique" },
    { name: "LUKUNKU NGASHI Joshwa", role: "Responsable Partenariats" },
    { name: "BAKWANAMAHA KIAKIMUA Mathylde", role: "Chargée de Communication" },
    { name: "NGASHI NKONGOLO Jude", role: "Trésorier" },
    { name: "LUKUNKU NKONGOLO Rémy", role: "Conseiller Juridique" },
    { name: "LUVUIDI KILUSALA Herman", role: "Responsable Finances" }
  ];

  const historyContent = [
    `Créé en 2024 à Kinshasa, notre organisation est née d'une urgence : offrir un avenir 
    aux enfants oubliés de la RDC. Face à la pauvreté et aux conflits, notre mission est de redonner espoir.`,
    
    `Nous intervenons dans 5 domaines clés : Éducation, Santé, Nutrition, 
    Protection sociale et Développement communautaire. Chaque jour, nos équipes 
    sur le terrain font la différence.`,
    
    `Avec déjà plus de 2000 enfants aidés et 15 projets actifs, nous construisons 
    des solutions durables grâce à l'engagement de nos donateurs et partenaires.`
  ];

  return (
    <div style={{ 
      padding: screens.xs ? '16px' : '40px',
      background: colors.background,
      minHeight: '100vh'
    }}>
      {/* En-tête */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        padding: '30px',
        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
        borderRadius: '15px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
      }}>
        <Title 
          level={1} 
          style={{ 
            color: colors.white,
            fontFamily: "'Inter', sans-serif",
            fontSize: screens.xs ? '2.5rem' : '3.5rem',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}
        >
          Notre Histoire
        </Title>
      </div>

      {/* Section Histoire */}
      <Card
        style={{ 
          marginBottom: '40px',
          borderRadius: '15px',
          border: `1px solid ${colors.secondary}`,
          background: colors.white,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}
      >
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px',
          padding: '20px',
          background: colors.secondary,
          borderRadius: '15px 15px 0 0'
        }}>
          <BookOutlined style={{ 
            fontSize: '32px', 
            color: colors.white,
            marginRight: '20px' 
          }}/>
          <Title level={3} style={{ color: colors.white, margin: 0 }}>
            Notre Mission
          </Title>
        </div>

        <div style={{ padding: '20px' }}>
          {historyContent.map((text, index) => (
            <div key={index} style={{
              padding: '20px',
              marginBottom: '20px',
              background: index % 2 === 0 ? `${colors.primary}10` : `${colors.accent}10`,
              borderRadius: '12px',
              borderLeft: `4px solid ${index % 2 === 0 ? colors.primary : colors.accent}`,
              transition: 'transform 0.3s',
              cursor: 'pointer',
              ':hover': {
                transform: 'scale(1.02)'
              }
            }}>
              <Paragraph style={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                margin: 0,
                color: colors.text
              }}>
                {text}
              </Paragraph>
            </div>
          ))}
        </div>
      </Card>

      {/* Section Fondateurs */}
      <Card
        title={
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: '0 20px',
            color: colors.primary,
            fontSize: '1.5rem'
          }}>
            <TeamOutlined style={{ marginRight: '15px' }}/>
            Membres Fondateurs
          </div>
        }
        headStyle={{ 
          borderBottom: `3px solid ${colors.primary}`,
          padding: '20px 0'
        }}
        style={{ 
          borderRadius: '15px',
          border: `1px solid ${colors.primary}`,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}
      >
        <Row gutter={[20, 20]} justify="center">
          {founders.map((founder, index) => {
            const bgColor = [colors.secondary, colors.primary, colors.accent][index % 3];
            return (
              <Col key={founder.name} xs={24} sm={12} md={8} lg={8}>
                <div style={{
                  padding: '25px',
                  borderRadius: '15px',
                  background: `${bgColor}10`,
                  border: `2px solid ${bgColor}`,
                  transition: 'all 0.3s',
                  ':hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 8px 24px ${bgColor}30`
                  }
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: bgColor,
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.white,
                    fontWeight: 'bold',
                    fontSize: '28px',
                    boxShadow: `0 4px 12px ${bgColor}40`
                  }}>
                    {founder.name.charAt(0)}
                  </div>
                  <Title level={5} style={{ 
                    marginBottom: '8px',
                    color: bgColor,
                    textAlign: 'center',
                    fontSize: '1.2rem'
                  }}>
                    {founder.name}
                  </Title>
                  <Paragraph style={{ 
                    color: colors.text,
                    textAlign: 'center',
                    fontWeight: 600,
                    margin: 0
                  }}>
                    {founder.role}
                  </Paragraph>
                </div>
              </Col>
            )}
          )}
        </Row>
      </Card>

      {/* CTA */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px',
        padding: '30px',
        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
        borderRadius: '15px'
      }}>
        <Title level={3} style={{ color: colors.white, marginBottom: '20px' }}>
          Rejoignez notre mission !
        </Title>
        <Button 
          type="primary" 
          size="large"
          style={{ 
            background: colors.accent,
            borderColor: colors.accent,
            color: colors.white,
            fontWeight: 'bold',
            padding: '0 40px',
            height: '50px',
            borderRadius: '25px',
            fontSize: '1.1rem'
          }}
        >
          Devenir Bénévole
        </Button>
      </div>
    </div>
  );
};

export default Histoire;