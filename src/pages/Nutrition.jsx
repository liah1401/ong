import React from 'react';

const Nutrition = () => {
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

  const metricStyle = {
    textAlign: 'center',
    padding: '1.5rem',
    background: '#f8f9fa',
    borderRadius: 12
  };

  return (
    <div style={containerStyle}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#27ae60',
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
          background: '#e67e22'
        }}></span>
        Programme Nutritionnel Intégré
      </h2>

      <div style={gridStyle}>
        <div style={metricStyle}>
          <h3 style={{ color: '#2980b9', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            🍎 Approche Multidimensionnelle
          </h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: '#7f8c8d' }}>
            <li>Repas certifiés HACCP</li>
            <li>Menus validés par des nutritionnistes</li>
            <li>Approvisionnement local (circuits courts)</li>
            <li>Kits alimentaires mensuels</li>
          </ul>
        </div>

        <div style={metricStyle}>
          <h3 style={{ color: '#e74c3c', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            📚 Éducation Nutritionnelle
          </h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: '#7f8c8d' }}>
            <li>Ateliers des 5 groupes alimentaires</li>
            <li>Formation à l'hygiène alimentaire</li>
            <li>Démonstrations culinaires</li>
            <li>Guide nutritionnel familial</li>
          </ul>
        </div>

        <div style={metricStyle}>
          <h3 style={{ color: '#8e44ad', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            🥦 Supplémentation Ciblée
          </h3>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', color: '#7f8c8d' }}>
            <li>Dépistage anthropométrique</li>
            <li>Protocole MUAC standardisé</li>
            <li>Compléments vitaminés personnalisés</li>
            <li>Suivi mensuel de croissance</li>
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
        <div style={{ padding: '1rem', background: '#27ae6010', borderRadius: 8 }}>
          <div style={{ fontSize: '2rem', color: '#27ae60' }}>1.2M+</div>
          <small>Repas distribués annuellement</small>
        </div>
        
        <div style={{ padding: '1rem', background: '#2980b910', borderRadius: 8 }}>
          <div style={{ fontSize: '2rem', color: '#2980b9' }}>98%</div>
          <small>Couverture nutritionnelle</small>
        </div>
        
        <div style={{ padding: '1rem', background: '#e67e2210', borderRadius: 8 }}>
          <div style={{ fontSize: '2rem', color: '#e67e22' }}>85%</div>
          <small>Taux d'amélioration nutritionnelle</small>
        </div>
      </div>

      <div style={{ 
        background: '#f1f2f6',
        padding: '2rem',
        borderRadius: 12,
        marginTop: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img src="https://via.placeholder.com/100x40?text=UNICEF" alt="partenaire" style={{ height: 40 }} />
        <img src="https://via.placeholder.com/100x40?text=WHO" alt="partenaire" style={{ height: 40 }} />
        <img src="https://via.placeholder.com/100x40?text=HACCP" alt="partenaire" style={{ height: 40 }} />
        <div style={{ color: '#2c3e50', fontWeight: 500 }}>
          Partenariats certifiants | Normes internationales
        </div>
      </div>

      <p style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '1rem',
        background: '#27ae6010',
        borderRadius: 8,
        color: '#27ae60',
        fontWeight: 500
      }}>
        ✅ Programme labellisé par le Ministère de la Santé | Audit trimestriel indépendant
      </p>
    </div>
  );
};

export default Nutrition;