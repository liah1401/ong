import React from 'react';
import { Card, Avatar, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Temoignages = () => {
  const temoignages = [
    {
      id: 1,
      nom: 'Marie K.',
      avatar: null,
      message: "Grâce à S.E.F, mes enfants ont pu retourner à l'école et recevoir des repas équilibrés. Je suis infiniment reconnaissante.",
    },
    {
      id: 2,
      nom: 'Jean M.',
      avatar: null,
      message: "Les activités récréatives organisées par S.E.F ont permis à mes enfants de s'épanouir et de développer leur créativité.",
    },
    {
      id: 3,
      nom: 'Amina T.',
      avatar: null,
      message: "Le soutien médical offert par S.E.F a sauvé la vie de mon fils. Merci pour tout ce que vous faites pour nos familles.",
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 24, background: '#ffffff', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Témoignages</h2>
      <p style={{ textAlign: 'center', marginBottom: 24 }}>
        Découvrez les témoignages des familles et des enfants que nous avons aidés grâce à votre soutien.
      </p>
      <List
        itemLayout="vertical"
        dataSource={temoignages}
        renderItem={(item) => (
          <Card style={{ marginBottom: 16 }}>
            <Card.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.nom}
              description={<p style={{ marginTop: 8 }}>{item.message}</p>}
            />
          </Card>
        )}
      />
    </div>
  );
};

export default Temoignages;