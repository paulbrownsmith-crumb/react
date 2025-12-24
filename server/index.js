import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// Mock API routes
app.get('/api/user', (_req, res) => {
  // Simulate 3 second network delay
  setTimeout(() => {
    res.json({
      id: 1,
      firstName: 'Paul',
      lastName: 'Brownsmith',
      email: 'paul@example.com',
    });
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
