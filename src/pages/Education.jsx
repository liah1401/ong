import React from 'react';

const Education = () => {
  const containerStyle = {
    maxWidth: 1200,
    margin: '4rem auto',
    padding: '2rem',
    background: '#ffffff',
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    fontFamily: "'Segoe UI', Arial, sans-serif"
  };

  const programGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    margin: '3rem 0'
  };

  const badgeStyle = {
    padding: '1rem',
    background: '#f8f9fa',
    borderRadius: 12,
    borderLeft: '4px solid #2980b9'
  };

  const constructionGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    margin: '2rem 0'
  };

  const projectCard = {
    padding: '1.5rem',
    background: '#fff',
    borderRadius: 8,
    border: '2px solid #f1f2f6',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#2c3e50',
        fontSize: '2.2rem',
        fontWeight: 600,
        position: 'relative'
      }}>
        <span style={{
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '3px',
          background: '#e74c3c'
        }}></span>
        Initiative d'Excellence Éducative
      </h2>

      <div style={programGrid}>
        <div style={badgeStyle}>
          <h3 style={{ color: '#27ae60', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.8rem' }}>📚</span>
            Accès à l'Éducation
          </h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: '#7f8c8d' }}>
            <li>Kits scolaires standardisés (liste UNESCO)</li>
            <li>Bibliothèques mobiles thématiques</li>
            <li>Espace d'étude connecté</li>
            <li>Bourses d'excellence</li>
          </ul>
        </div>

        <div style={badgeStyle}>
          <h3 style={{ color: '#2980b9', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.8rem' }}>💡</span>
            Innovation Pédagogique
          </h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: '#7f8c8d' }}>
            <li>Programme STEM (robotique/codage)</li>
            <li>Laboratoire scientifique mobile</li>
            <li>Plateforme e-learning personnalisée</li>
            <li>Ateliers d'éducation financière</li>
          </ul>
        </div>

        <div style={badgeStyle}>
          <h3 style={{ color: '#e67e22', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.8rem' }}>👩🏫</span>
            Encadrement Qualifié
          </h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: '#7f8c8d' }}>
            <li>Tutorat par enseignants certifiés</li>
            <li>Programme de parrainage professionnel</li>
            <li>Formation aux méthodes Montessori</li>
            <li>Suivi psychopédagogique</li>
          </ul>
        </div>
      </div>

      <h3 style={{
        textAlign: 'center',
        margin: '3rem 0 2rem',
        color: '#2c3e50',
        fontSize: '1.8rem',
        fontWeight: 600
      }}>
        🏗️ Projets Structurants 2025-2030
      </h3>

      <div style={constructionGrid}>
        <div style={projectCard}>
          <h4 style={{ color: '#e67e22', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🏫</span>
            Complexe Éducatif Intégré
          </h4>
          <ul style={{ color: '#7f8c8d', paddingLeft: '1rem' }}>
            <li>École Primaire 12 classes</li>
            <li>Crèche & Orphelinat</li>
            <li>Espace récréatif sécurisé</li>
            <li>Internat 200 places</li>
          </ul>
        </div>

        <div style={projectCard}>
          <h4 style={{ color: '#2980b9', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🎨</span>
            Cité des Arts
          </h4>
          <ul style={{ color: '#7f8c8d', paddingLeft: '1rem' }}>
            <li>École des Beaux-arts</li>
            <li>Studio d'enregistrement</li>
            <li>Galerie d'exposition</li>
            <li>Ateliers artistiques</li>
          </ul>
        </div>

        <div style={projectCard}>
          <h4 style={{ color: '#27ae60', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>⚙️</span>
            Campus des Métiers
          </h4>
          <ul style={{ color: '#7f8c8d', paddingLeft: '1rem' }}>
            <li>Formation professionnelle</li>
            <li>Ateliers équipés</li>
            <li>Partenariats entreprises</li>
            <li>10 spécialités disponibles</li>
          </ul>
        </div>

        <div style={projectCard}>
          <h4 style={{ color: '#8e44ad', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>⛪</span>
            Institut Spirituel
          </h4>
          <ul style={{ color: '#7f8c8d', paddingLeft: '1rem' }}>
            <li>École coranique/chrétienne</li>
            <li>Bibliothèque religieuse</li>
            <li>Espace de méditation</li>
            <li>Programme éthique</li>
          </ul>
        </div>

        <div style={projectCard}>
          <h4 style={{ color: '#e74c3c', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🏥</span>
            Centre Médico-Scolaire
          </h4>
          <ul style={{ color: '#7f8c8d', paddingLeft: '1rem' }}>
            <li>Urgences pédiatriques</li>
            <li>Unité de nutrition</li>
            <li>Cabinet dentaire</li>
            <li>Psychologues scolaires</li>
          </ul>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        margin: '2rem 0',
        textAlign: 'center'
      }}>
        <div style={{ padding: '1rem', background: '#2980b910', borderRadius: 8 }}>
          <div style={{ fontSize: '2rem', color: '#2980b9' }}>15K+</div>
          <small>Élèves accompagnés</small>
        </div>
        
        <div style={{ padding: '1rem', background: '#27ae6010', borderRadius: 8 }}>
          <div style={{ fontSize: '2rem', color: '#27ae60' }}>92%</div>
          <small>Taux de réussite scolaire</small>
        </div>
        
        <div style={{ padding: '1rem', background: '#e67e2210', borderRadius: 8 }}>
          <div style={{ fontSize: '2rem', color: '#e67e22' }}>240h</div>
          <small>Formation annuelle/enseignant</small>
        </div>

        <div style={{ padding: '1rem', background: '#8e44ad10', borderRadius: 8 }}>
          <div style={{ fontSize: '2rem', color: '#8e44ad' }}>12</div>
          <small>Bâtiments en construction</small>
        </div>
        
        <div style={{ padding: '1rem', background: '#e74c3c10', borderRadius: 8 }}>
          <div style={{ fontSize: '2rem', color: '#e74c3c' }}>5</div>
          <small>Pays concernés</small>
        </div>
      </div>

      <div style={{ 
        background: '#f1f2f6',
        padding: '2rem',
        borderRadius: 12,
        marginTop: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img src="https://via.placeholder.com/100x40?text=UNICEF" alt="partenaire" style={{ height: 40 }} />
        <img src="https://via.placeholder.com/100x40?text=UNESCO" alt="partenaire" style={{ height: 40 }} />
        <img src="https://via.placeholder.com/100x40?text=OMS" alt="partenaire" style={{ height: 40 }} />
        <div style={{ color: '#2c3e50', fontWeight: 500 }}>
          Partenaires techniques : ONU Habitat · Croix-Rouge · Architectes Sans Frontières
        </div>
      </div>

      <p style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#2980b910',
        borderRadius: 8,
        color: '#2c3e50',
        fontWeight: 500
      }}>
        ✅ Programme agréé par le Ministère de l'Éducation | Partenaire officiel UNESCO depuis 2020
      </p>
    </div>
  );
};

export default Education;