import React from 'react';

const Medical = () => {
  const containerStyle = {
    maxWidth: 1200,
    margin: '4rem auto',
    padding: '2rem',
    background: '#ffffff',
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    fontFamily: "'Segoe UI', Arial, sans-serif"
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    margin: '3rem 0'
  };

  const cardStyle = {
    padding: '1.5rem',
    background: '#f8f9fa',
    borderRadius: 12,
    borderLeft: '4px solid #3498db'
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
        Programme Médical Intégré
      </h2>

      <div style={gridStyle}>
        <div style={cardStyle}>
          <h3 style={{ color: '#27ae60', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.8rem' }}>🏥</span>
            Soins Primaires
          </h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: '#7f8c8d' }}>
            <li>Consultations pédiatriques gratuites</li>
            <li>Dépistages systématiques (vue, audition)</li>
            <li>Suivi de croissance et développement</li>
            <li>Plateforme de téléconsultation</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: '#2980b9', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.8rem' }}>💊</span>
            Pharmacie Sociale
          </h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: '#7f8c8d' }}>
            <li>Distribution de médicaments essentiels</li>
            <li>Traitements chroniques subventionnés</li>
            <li>Kits d'hygiène personnalisés</li>
            <li>Service de livraison à domicile</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: '#e67e22', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.8rem' }}>🩺</span>
            Prévention & Vaccination
          </h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: '#7f8c8d' }}>
            <li>Calendrier vaccinal complet</li>
            <li>Campagnes de sensibilisation</li>
            <li>Ateliers nutritionnels parents-enfants</li>
            <li>Dépistage des troubles du développement</li>
          </ul>
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
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', color: '#3498db' }}>📋</div>
          <div style={{ fontWeight: 600 }}>Protocoles Validés</div>
          <small>Conformes aux normes OMS</small>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', color: '#27ae60' }}>👩⚕️</div>
          <div style={{ fontWeight: 600 }}>Équipe Médicale</div>
          <small>15 professionnels diplômés</small>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', color: '#e74c3c' }}>24/7</div>
          <div style={{ fontWeight: 600 }}>Urgences</div>
          <small>Cellule de crise dédiée</small>
        </div>
      </div>

      <p style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#fff3e0',
        borderRadius: 8,
        color: '#d35400'
      }}>
        🔒 Tous les services sont confidentiels et dispensés par des professionnels agréés<br />
        Partenariats avec le CHU régional et les laboratoires pharmaceutiques
      </p>
    </div>
  );
};

export default Medical;