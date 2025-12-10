import React from 'react';
import { Carousel } from 'antd';

const categories = [
  {
    title: 'Littérature Jeunesse',
    color: '#e67e22',
    icon: '📚',
    image: '/images/20250514_1047_Littérature Jeunesse Interactif_simple_compose_01jv7m4s1aej6rwrykx7rez6zr.png',
    activities: [
      'Heure du conte interactif',
      'Ateliers de création d\'histoire',
      'Bibliothèque mobile thématique',
      'Quiz littéraires illustrés'
    ]
  },
  {
    title: 'Jeux Traditionnels',
    color: '#27ae60',
    icon: '🎲',
    image: '/images/Jeux Traditionnels en Plein Air.png',
    activities: [
      'Tournois de billes (jeux de marbre)',
      'Concours de corde à sauter',
      'Jeux de marelle chronométrés',
      'Olympiades de jeux anciens'
    ]
  },
  {
    title: 'Activités Sportives',
    color: '#e74c3c',
    icon: '⚽',
    image: '/images/Jeu de soccer en toute joie.png',
    activities: [
      'Académie de football junior',
      'Parcours d\'obstacles psychomoteurs',
      'Initiation au basket-ball',
      'Relais coopératifs'
    ]
  },
  {
    title: 'Éveil Spirituel',
    color: '#2980b9',
    icon: '✝️',
    image: '/images/Séance biblique interactive avec enfants et adultes.png',
    activities: [
      'Histoires bibliques interactives',
      'Ateliers des valeurs chrétiennes',
      'Chants et poèmes religieux',
      'Quiz des grandes figures bibliques'
    ]
  },
  {
    title: 'Défis Intellectuels',
    color: '#8e44ad',
    icon: '🧩',
    image: '/images/20250514_1052_Atelier Littéraire Diversifié_simple_compose_01jv7me9fefkvtge6cpks6k268 (1).png',
    activities: [
      'Quiz éducatifs thématiques',
      'Jeux de mémoire et logique',
      'Chasse au trésor pédagogique',
      'Ateliers d\'échecs simplifiés'
    ]
  },
  {
    title: 'Expression Artistique',
    color: '#d35400',
    icon: '🎭',
    image: '/images/artistique.jpg', // Mets ici le chemin de ton image artistique
    activities: [
      'Théâtre de marionnettes',
      'Ateliers de peinture narrative',
      'Création de bandes dessinées',
      'Danse expressive'
    ]
  }
];

const styles = {
  container: {
    maxWidth: 1200,
    margin: '2rem auto',
    padding: '2rem',
    background: '#ffffff',
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    fontFamily: "'Segoe UI', Arial, sans-serif",
    lineHeight: 1.6
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#2c3e50',
    fontSize: '2.2rem',
    fontWeight: 600,
    position: 'relative',
    paddingBottom: '1rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    margin: '2rem 0'
  },
  card: {
    background: '#f8f9fa',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(44,62,80,0.07)',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  image: {
    width: '100%',
    height: 180,
    objectFit: 'cover'
  },
  cardContent: {
    padding: '1.2rem'
  }
};

const Activities = () => (
  <div style={styles.container}>
    {/* Carrousel des grandes catégories */}
    <Carousel autoplay style={{ marginBottom: '2rem', borderRadius: 16, overflow: 'hidden' }}>
      {categories.map((cat, idx) => (
        <div key={idx} style={{ position: 'relative' }}>
          <img
            src={cat.image}
            alt={cat.title}
            style={{ width: '100%', height: 350, objectFit: 'cover', filter: 'brightness(0.8)' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 20,
            left: 30,
            color: 'white',
            background: 'rgba(0,0,0,0.5)',
            padding: '8px 24px',
            borderRadius: 8,
            fontSize: 22,
            fontWeight: 600
          }}>
            {cat.icon} {cat.title}
          </div>
        </div>
      ))}
    </Carousel>

    <h2 style={styles.heading}>
      Programme Éducatif Multidisciplinaire
      <span style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '3px',
        background: '#3498db'
      }}></span>
    </h2>

    <div style={styles.grid}>
      {categories.map((cat, idx) => (
        <div key={idx} style={styles.card}>
          <img src={cat.image} alt={cat.title} style={styles.image} />
          <div style={styles.cardContent}>
            <h3 style={{ color: cat.color, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.8rem' }}>{cat.icon}</span>
              {cat.title}
            </h3>
            <ul style={{ paddingLeft: '1.5rem', color: '#7f8c8d', marginBottom: 0 }}>
              {cat.activities.map((act, i) => <li key={i}>{act}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>

    <div style={{
      background: '#f1f2f6',
      padding: '1.5rem',
      borderRadius: 8,
      marginTop: '2rem',
      textAlign: 'center',
      fontSize: '0.9rem'
    }}>
      <p style={{ margin: 0, color: '#2c3e50', fontWeight: 500 }}>
        ✅ Toutes nos activités sont adaptées par tranche d'âge et encadrées par des professionnels<br />
        📆 Programme rotatif avec nouveautés hebdomadaires<br />
        🏅 Système de récompenses motivantes (diplômes, médailles symboliques)
      </p>
    </div>
  </div>
);

export default Activities;