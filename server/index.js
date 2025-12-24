import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// Mock API routes
app.get('/api/user', (_req, res) => {
  res.json({
    id: 1,
    firstName: 'Paul',
    lastName: 'Brownsmith',
    email: 'paul@example.com',
  });
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
