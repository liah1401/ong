import { Timeline, Card, Typography, Image, Row, Col, Statistic, Button, Grid } from 'antd';
import { 
  TeamOutlined, 
  SchoolOutlined, 
  HeartFilled, 
  TrophyFilled, 
  GlobalOutlined, 
  EditOutlined,
  PlayCircleFilled,
  EnvironmentFilled
} from '@ant-design/icons';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Notrehistoire = () => {
  const screens = useBreakpoint();
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filters = [
    { id: 'all', label: 'Tout voir' },
    { id: 'education', label: 'Éducation', icon: <SchoolOutlined /> },
    { id: 'health', label: 'Santé', icon: <HeartFilled /> },
    { id: 'international', label: 'International', icon: <GlobalOutlined /> },
  ];

  const timelineItems = [
    {
      year: '1992',
      icon: <TeamOutlined />,
      color: 'red',
      category: 'health',
      content: (
        <Card
          hoverable
          cover={
            <Image
              src="https://via.placeholder.com/600x200.png?text=Image+Fondateurs"
              preview={false}
              alt="Fondateurs de l'ONG"
              height={200}
              style={{ objectFit: 'cover' }}
            />
          }
        >
          <Title level={4}>Naissance d'une conviction</Title>
          <Text>
            Création par 3 médecins après une mission humanitaire. 
            Premier centre d'accueil pour 12 enfants orphelins.
          </Text>
          <div style={{ marginTop: 15 }}>
            <ReactPlayer 
              url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              width="100%"
              height="50px"
              controls 
            />
          </div>
        </Card>
      )
    },
    {
      year: '2001',
      icon: <SchoolOutlined />,
      color: 'blue',
      category: 'education',
      content: (
        <div style={{ padding: 20, background: '#f0f9ff', borderRadius: 8 }}>
          <Title level={4}>🖋️ Programme Éducation</Title>
          <Row gutter={20}>
            <Col xs={24} md={12}>
              <Image
                src="https://via.placeholder.com/400x250.png?text=Ecole+1"
                alt="Première école construite"
                preview={false}
              />
              <div style={{ marginTop: 10 }}>
                <EnvironmentFilled style={{ color: '#1890ff' }} />
                <Text strong> Localisation :</Text>
                <Text> Kinshasa, RDC</Text>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <ul>
                <li>Construction de la 1ère école en République Démocratique du Congo</li>
                <li>128 enfants scolarisés</li>
                <li>Partenariat avec le Ministère de l'Éducation local</li>
              </ul>
              <Text type="secondary">
                <HeartFilled /> 94% de ces enfants ont obtenu leur diplôme
              </Text>
            </Col>
          </Row>
        </div>
      )
    },
    {
      year: '2010',
      icon: <GlobalOutlined />,
      color: 'green',
      category: 'international',
      content: (
        <Card
          title="🌍 Expansion Internationale"
          bordered={false}
          headStyle={{ fontSize: '1.4em' }}
          extra={
            <PlayCircleFilled 
              style={{ fontSize: 24, color: '#2F54EB', cursor: 'pointer' }}
              onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
            />
          }
        >
          <Row gutter={20}>
            <Col xs={24} md={8} style={{ textAlign: 'center' }}>
              <TrophyFilled style={{ fontSize: 40, color: 'gold' }} />
              <Title level={5}>Prix UNESCO</Title>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                width="100%"
                height="150px"
                controls
                light
              />
            </Col>
            <Col xs={24} md={16}>
              <Text strong>Nouveaux pays d'intervention :</Text>
              <ul>
                <li>Haïti - Programme post-séisme</li>
                <li>Bangladesh - Lutte contre le travail infantile</li>
                <li>France - Accueil des mineurs isolés</li>
              </ul>
            </Col>
          </Row>
        </Card>
      )
    },
    {
      year: '2023',
      icon: <HeartFilled />,
      color: 'pink',
      category: 'all',
      content: (
        <div style={{ 
          background: 'linear-gradient(45deg, #ff4d4f, #ff7875)', 
          padding: 30,
          borderRadius: 15,
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            right: -30,
            bottom: -30,
            opacity: 0.1,
            fontSize: '8em'
          }}>
            <HeartFilled />
          </div>
          <Title level={3} style={{ color: 'white' }}>Aujourd'hui</Title>
          <Row gutter={30}>
            {[
              { title: "Pays", value: 23 },
              { title: "Bénévoles", value: "45K+" },
              { title: "Enfants aidés", value: "2.3M" }
            ].map((stat, i) => (
              <Col key={i} xs={24} md={8}>
                <Statistic 
                  title={stat.title} 
                  value={stat.value}
                  valueStyle={{ color: 'white', fontSize: screens.md ? '2em' : '1.5em' }}
                />
              </Col>
            ))}
          </Row>
        </div>
      )
    }
  ];

  const filteredItems = timelineItems.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <div style={{ padding: screens.md ? '40px 5%' : '20px 10px' }}>
      <Title level={1} style={{ textAlign: 'center', marginBottom: 20 }}>
        Notre Parcours Engagé
      </Title>

      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        {filters.map(filter => (
          <Button
            key={filter.id}
            type={activeFilter === filter.id ? 'primary' : 'default'}
            icon={filter.icon}
            style={{ margin: '0 8px', borderRadius: 20 }}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div style={{ overflowX: screens.md ? 'visible' : 'auto', padding: screens.md ? 0 : '0 20px' }}>
        <Timeline mode={screens.md ? 'alternate' : 'left'}>
          {filteredItems.map((item, index) => (
            <Timeline.Item
              key={index}
              dot={
                <div style={{
                  fontSize: 24,
                  background: item.color,
                  borderRadius: '50%',
                  padding: 10,
                  color: 'white',
                  transform: hoveredItem === index ? 'scale(1.2)' : 'scale(1)',
                  transition: 'transform 0.3s'
                }}>
                  {item.icon}
                </div>
              }
              label={
                <div style={{ 
                  padding: 10,
                  background: '#f0f0f0',
                  borderRadius: 5,
                  fontSize: '1.2em',
                  fontWeight: 'bold',
                  minWidth: 80
                }}>
                  {item.year}
                </div>
              }
            >
              <div
                style={{
                  margin: '20px 0',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  transform: hoveredItem === index ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.content}
              </div>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>

      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <Title level={3}>Et demain ? L'histoire continue...</Title>
        <Button 
          type="primary" 
          size="large"
          icon={<EditOutlined />}
          style={{ borderRadius: 20 }}
          href="/engagement"
        >
          Écrire la suite avec nous
        </Button>
      </div>
    </div>
  );
};

export default Notrehistoire;
