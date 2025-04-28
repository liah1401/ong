import { Card, Row, Col, Typography, Button, Grid } from 'antd';
import { 
  BookOutlined, 
  MedicineBoxOutlined, 
  AppleOutlined, 
  SafetyCertificateOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Mission = () => {
  const screens = useBreakpoint();

  return (
    <div style={{ 
      padding: screens.md ? '40px 5%' : '20px 15px',
      backgroundColor: '#f9f9f9'
    }}>
      <Title 
        level={2} 
        style={{ 
          textAlign: 'center',
          marginBottom: '30px',
          color: '#1890ff'
        }}
      >
        Nos Engagements Concrets
      </Title>
      
      <Row gutter={[30, 30]} justify="center">
        {[
          {
            icon: <BookOutlined style={{ fontSize: '32px' }} />,
            title: "Éducation",
            content: "Plus de 150 écoles construites et 3000 enseignants formés depuis 2015",
            extra: "98% de réussite scolaire dans nos établissements"
          },
          {
            icon: <MedicineBoxOutlined style={{ fontSize: '32px' }} />,
            title: "Santé",
            content: "2 millions d'enfants vaccinés annuellement à travers 50 cliniques mobiles",
            extra: "Partenariat avec l'OMS et le Ministère de la Santé"
          },
          {
            icon: <AppleOutlined style={{ fontSize: '32px' }} />,
            title: "Nutrition",
            content: "3 millions de repas distribués chaque année dans 15 pays",
            extra: "Programme certifié par la FAO"
          },
          {
            icon: <SafetyCertificateOutlined style={{ fontSize: '32px' }} />,
            title: "Protection",
            content: "20 000 enfants pris en charge dans nos centres spécialisés",
            extra: "Agréé par l'UNICEF et Save the Children"
          }
        ].map((item, index) => (
          <Col 
            key={index} 
            xs={24} 
            sm={12} 
            md={12} 
            lg={6}
            style={{ display: 'flex' }}
          >
            <Card
              hoverable
              style={{ 
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                flex: 1
              }}
              headStyle={{
                backgroundColor: '#1890ff',
                color: 'white',
                borderRadius: '15px 15px 0 0'
              }}
              title={
                <div style={{ textAlign: 'center' }}>
                  {item.icon}
                  <Title level={4} style={{ color: 'white', margin: '10px 0 0' }}>
                    {item.title}
                  </Title>
                </div>
              }
            >
              <div style={{ padding: '16px', minHeight: '200px' }}>
                <Text strong style={{ fontSize: '16px' }}>{item.content}</Text>
                <div style={{ 
                  marginTop: '20px',
                  padding: '10px',
                  backgroundColor: '#f0f9ff',
                  borderRadius: '8px'
                }}>
                  <Text type="secondary">{item.extra}</Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}>
        <Title level={3}>Ils nous font confiance</Title>
        <div style={{ marginTop: '20px' }}>
          <img 
            src="https://logos-marques.com/wp-content/uploads/2021/03/UNICEF-logo.png" 
            alt="unicef" 
            style={{ height: '40px', margin: '0 15px' }} 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/WHO_logo.svg" 
            alt="who" 
            style={{ height: '40px', margin: '0 15px' }} 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/50/FAO_logo.svg" 
            alt="fao" 
            style={{ height: '40px', margin: '0 15px' }} 
          />
        </div>
        <Button 
          type="primary" 
          size="large" 
          style={{ 
            marginTop: '30px',
            padding: '0 40px',
            height: '45px',
            borderRadius: '25px'
          }}
        >
          Nous Soutenir
        </Button>
      </div>
    </div>
  );
};

export default Mission;