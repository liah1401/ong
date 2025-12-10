// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import process from 'process';
// Removed unused import for fileURLToPath
// Configuration initiale
dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Route de santé
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Création du Payment Intent
app.post('/create-payment-intent', async (req, res, next) => {
  try {
    const { amount, metadata = {} } = req.body;

    // Validation avancée
    if (!amount || typeof amount !== 'number' || amount < 1 || amount > 10000) {
      const error = new Error('Montant invalide (doit être entre 1€ et 10 000€)');
      error.status = 422;
      throw error;
    }

    // Création de l'intent Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'eur',
      automatic_payment_methods: { enabled: true },
      metadata: {
        integration: 'souris-enfants',
        ...metadata
      }
    });

    // Réponse sécurisée
    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount / 100
    });

  } catch (err) {
    next(err);
  }
});

// Gestion des routes non trouvées
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint non trouvé'
  });
});

// Middleware d'erreur global
app.use((err, req, res, ) => {
  const status = err.status || 500;
  const response = {
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'Une erreur est survenue' 
      : err.message
  };

  if (process.env.NODE_ENV !== 'production') {
    response.stack = err.stack;
    response.details = err;
  }

  console.error(`[ERROR ${new Date().toISOString()}]`, {
    path: req.originalUrl,
    method: req.method,
    status,
    error: err.message
  });

  res.status(status).json(response);
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
  🚀 Serveur démarré sur le port ${PORT}
  ⏰ ${new Date().toLocaleTimeString()}
  📡 Mode: ${process.env.NODE_ENV || 'development'}
  `);
});