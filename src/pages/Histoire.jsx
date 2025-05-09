import { Typography, Grid } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Histoire = () => {
  const screens = useBreakpoint();
  
  const content = [
    `Le 11 novembre 2024, à Kinshasa, capitale de la République Démocratique du Congo, 
    un groupe de visionnaires s'est réuni pour répondre à une urgence humanitaire. 
    La RDC, classée parmi les pays les plus pauvres au monde, fait face à des défis colossaux : 
    des taux de mortalité élevés, un manque d'investissements dans les secteurs essentiels 
    tels que la santé, l'agriculture et les infrastructures, et une instabilité politique 
    aggravée par des conflits armés.`,

    `Dans ce contexte de précarité extrême, des millions de personnes, et en particulier 
    les enfants, vivent sans accès à des besoins fondamentaux comme la nourriture, 
    les vêtements ou les soins de santé. Certains enfants sont abandonnés, d'autres 
    survivent dans des orphelinats, des prisons ou dans la rue, sans aucun espoir pour l'avenir.`,

    `Animés par le désir de redonner un sourire à ces enfants et de transformer leur vie, 
    nous avons décidé de créer une organisation dédiée à leur bien-être. C'est ainsi 
    qu'est née Sourire d’Enfants Forever (SEF), une association sans but lucratif. 
    Notre mission est claire : améliorer les conditions de vie des enfants vulnérables 
    en RDC et au-delà, en collaboration étroite avec le gouvernement et d'autres partenaires.`,

    `Depuis sa création, SEF s'engage à offrir un avenir meilleur à ces enfants en 
    intervenant dans plusieurs domaines clés : l'éducation, la santé, la nutrition, 
    et bien plus encore. Ensemble, nous croyons qu'un sourire peut changer une vie, 
    et qu'aucun enfant ne devrait être laissé pour compte.`
  ];

  return (
    <div style={{ 
      padding: screens.xs ? '16px' : '24px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    }}>
      <Title 
        level={screens.xs ? 3 : 2}
        style={{ 
          textAlign: 'center',
          margin: screens.xs ? '20px 0' : '40px 0',
          color: 'transparent',
          background: 'linear-gradient(45deg, #1890ff, #6ec4ff)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          position: 'relative',
          paddingBottom: '15px',
          fontWeight: '600'
        }}
      >
        <SmileOutlined style={{ 
          marginRight: '10px', 
          fontSize: screens.xs ? '28px' : '36px',
          verticalAlign: 'middle' 
        }} />
        Notre Histoire
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '4px',
          backgroundColor: '#6ec4ff',
          borderRadius: '2px',
          transition: 'all 0.3s ease'
        }} />
      </Title>

      <div style={{ padding: screens.xs ? '0 10px' : '0 20px' }}>
        {content.map((text, index) => (
          <Paragraph 
            key={index}
            style={{ 
              fontSize: screens.xs ? '14px' : '16px',
              lineHeight: '1.8',
              textAlign: screens.xs ? 'left' : 'justify',
              marginBottom: '30px',
              padding: '15px',
              borderRadius: '10px',
              backgroundColor: index % 2 === 0 ? '#f8fbff' : '#f0f9ff',
              borderLeft: `4px solid ${index % 2 === 0 ? '#1890ff' : '#6ec4ff'}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              transform: 'translateY(0)',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(24, 144, 255, 0.15)'
              }
            }}
          >
            {text}
          </Paragraph>
        ))}
      </div>
    </div>
  );
};

export default Histoire;