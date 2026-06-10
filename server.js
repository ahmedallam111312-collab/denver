import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;
const DB_PATH = path.join(__dirname, 'submissions.json');

// Serve static frontend files from 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Initialize submissions file if it doesn't exist
if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify([]));
}

app.post('/api/contact', (req, res) => {
  const { fullName, email, interest } = req.body;
  
  if (!fullName || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // Read existing submissions
    const fileData = fs.readFileSync(DB_PATH, 'utf-8');
    const submissions = JSON.parse(fileData);

    // Add new submission
    const newSubmission = {
      id: Date.now(),
      fullName,
      email,
      interest,
      timestamp: new Date().toISOString()
    };
    
    submissions.push(newSubmission);
    
    // Save back to file
    fs.writeFileSync(DB_PATH, JSON.stringify(submissions, null, 2));

    console.log(`[Backend] New form submission received from ${fullName} (${email})`);

    // Simulate network/email sending delay
    setTimeout(() => {
      res.status(200).json({ message: 'Success! Your message has been received by the clinic.' });
    }, 1500);
  } catch (error) {
    console.error('Failed to save submission', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Catch-all route to serve React's index.html for unknown paths (for React Router)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Custom backend server running on http://localhost:${PORT}`);
});
