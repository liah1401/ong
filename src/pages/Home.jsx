import { Carousel, Row, Col, Card, Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; 
const Home = () => (
  <>
    <Carousel autoplay>
      <div>
        <Image
          src="/images/kids1.jpg"
          alt="Enfants heureux"
          preview={false}
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
      </div>
      <div>
        <Image
          src="/images/kids2.jpg"
          alt="Projet communautaire"
          preview={false}
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
      </div>
    </Carousel>

    <h2 style={{ marginTop: 32 }}>Membres du comité exécutif</h2>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Président" bordered={false}>
          <Card.Meta 
            avatar={<Avatar size={64} icon={<UserOutlined />} />} 
            title="GAUTHIER MULENGA LUKUNKU" 
            description="Président de l'association" 
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Directeur Financier" bordered={false}>
          <Card.Meta 
            avatar={<Avatar size={64} icon={<UserOutlined />} />} 
            title="Marie Claire" 
            description="Directrice financière" 
          />
        </Card>
      </Col>
    </Row>
  </>
);

export default Home;