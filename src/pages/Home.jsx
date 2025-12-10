import { Carousel, Image, Button, Typography, Row, Col, Card } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const { Title, Paragraph } = Typography;

// Style personnalisé
const carouselOverlayStyle = {
  position: 'absolute',
  bottom: '20%',
  left: '10%',
  color: 'white',
  textAlign: 'left',
  maxWidth: '600px',
  padding: '24px',
  background: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '12px',
};

const Home = () => (
  <div style={{ overflowX: 'hidden' }}>
    {/* Section d'introduction */}
    <div style={{ textAlign: 'center', padding: '60px 10%', backgroundColor: '#f0f2f5' }}>
      <Title level={1} style={{ color: '#1890ff', fontWeight: 'bold' }}>
        Bienvenue à Souris Enfants
      </Title>
      <Paragraph style={{ fontSize: '1.2rem', color: '#555' }}>
        Ensemble, construisons un avenir meilleur pour les enfants défavorisés. Découvrez nos projets et rejoignez notre mission.
      </Paragraph>
      <Button type="primary" size="large" shape="round" style={{ marginTop: '20px' }}>
        Découvrir nos actions
      </Button>
    </div>

    {/* Carrousel immersif */}
    <Carousel autoplay effect="fade" dotPosition="bottom">
      {[1, 2].map((item) => (
        <div key={item} style={{ position: 'relative' }}>
          <Image
            src={`/images/kids${item}.jpg`}
            preview={false}
            style={{
              height: '75vh',
              objectFit: 'cover',
              width: '100%',
              filter: 'brightness(0.8)',
            }}
          />
          <div style={carouselOverlayStyle}>
            <Title level={2} style={{ color: 'white', fontSize: '2.5rem', fontWeight: 700 }}>
              {item === 1 ? 'Construisons leur avenir' : 'Agissons ensemble'}
            </Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', lineHeight: 1.6 }}>
              {item === 1
                ? 'Un engagement quotidien pour l\'épanouissement des enfants défavorisés.'
                : 'Votre soutien fait la différence pour des milliers d\'enfants.'}
            </Paragraph>
            <Button
              type="primary"
              size="large"
              shape="round"
              style={{
                marginTop: '24px',
                padding: '0 32px',
                height: '48px',
                fontSize: '1.1rem',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              }}
            >
              {item === 1 ? 'Faire un don' : 'Devenir bénévole'}
            </Button>
          </div>
        </div>
      ))}
    </Carousel>

    {/* Section statistiques */}
    <Row
      gutter={[32, 32]}
      style={{
        padding: '80px 10%',
        background: '#f8f9fa',
        textAlign: 'center',
      }}
    >
      <Col xs={24} md={8}>
        <Card bordered={false} hoverable>
          <Title level={1} style={{ color: '#1890ff', marginBottom: 0 }}>
            15K+
          </Title>
          <Paragraph type="secondary">Enfants aidés</Paragraph>
        </Card>
      </Col>
      <Col xs={24} md={8}>
        <Card bordered={false} hoverable>
          <Title level={1} style={{ color: '#52c41a', marginBottom: 0 }}>
            240
          </Title>
          <Paragraph type="secondary">Projets réalisés</Paragraph>
        </Card>
      </Col>
      <Col xs={24} md={8}>
        <Card bordered={false} hoverable>
          <Title level={1} style={{ color: '#faad14', marginBottom: 0 }}>
            98%
          </Title>
          <Paragraph type="secondary">Satisfaction</Paragraph>
        </Card>
      </Col>
    </Row>

    {/* Section CTA */}
    <div
      style={{
        padding: '100px 10%',
        background: 'linear-gradient(135deg, #1890ff 0%, #0050b3 100%)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Title level={2} style={{ color: 'white', marginBottom: '24px' }}>
        Prêt à faire la différence ?
      </Title>
      <Paragraph style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
        Rejoignez notre communauté de donateurs et bénévoles engagés.
      </Paragraph>
      <Button
        size="large"
        shape="round"
        style={{
          background: 'white',
          color: '#1890ff',
          padding: '0 40px',
          height: '50px',
          fontSize: '1.1rem',
          fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        }}
      >
        Commencer maintenant
      </Button>
    </div>

    {/* Styles globaux */}
    <style jsx global>{`
      .custom-dots li button {
        background: rgba(255, 255, 255, 0.5) !important;
        width: 12px !important;
        height: 12px !important;
        border-radius: 50% !important;
      }

      .custom-dots li.slick-active button {
        background: #1890ff !important;
        width: 40px !important;
        border-radius: 6px !important;
      }
    `}</style>
  </div>
);

export default Home;