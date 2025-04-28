import { Space, Layout } from 'antd';
import { 
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled
} from '@ant-design/icons';

const { Footer } = Layout;

const AppFooter = () => (
  <Footer
    style={{
      textAlign: 'center',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%)',
      padding: '40px 20px'
    }}
  >
    <Space size="large" style={{ marginBottom: 20 }}>
      <FacebookFilled style={{ fontSize: '32px', color: '#4267B2' }} />
      <InstagramFilled style={{ fontSize: '32px', color: '#E1306C' }} />
      <TwitterCircleFilled style={{ fontSize: '32px', color: '#1DA1F2' }} />
      <YoutubeFilled style={{ fontSize: '32px', color: '#FF0000' }} />
    </Space>
    
    <div style={{ fontSize: '1.1rem', lineHeight: 1.5, color: '#2d3436' }}>
      <p>S.E.F Sourire d'Enfants Forever</p>
      <p>📧 contact@sourire-enfants.org</p>
      <p>📞 +243 000 000 000</p>
      <p>📍 Lubumbashi, RD Congo</p>
    </div>

    <div style={{ marginTop: '20px', color: '#666' }}>
      © {new Date().getFullYear()} Tous droits réservés
    </div>
  </Footer>
);

export default AppFooter;