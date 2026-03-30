require('dotenv').config();
const app = require('./app');
const pool = require('./config/db');

const PORT = process.env.PORT || 5000;

// Start server FIRST
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Then try DB connection
pool.connect()
  .then((client) => {
    console.log('Connected to Neon PostgreSQL');
    client.release();
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
    // ❌ DO NOT exit
  });
