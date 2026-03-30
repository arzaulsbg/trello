require('dotenv').config();
const app = require('./app');
const pool = require('./config/db');

const PORT = process.env.PORT || 5000;

// Start server ONLY ONCE
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Try DB connection (non-blocking)
pool.connect()
  .then((client) => {
    console.log('Connected to Neon PostgreSQL');
    client.release();
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
    // ❌ DO NOT exit
  });
