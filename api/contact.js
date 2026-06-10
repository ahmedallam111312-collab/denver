export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, interest } = req.body;
  
  if (!fullName || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  console.log(`[Vercel Serverless] Form submission received from ${fullName} (${email})`);

  // Simulate email sending delay
  setTimeout(() => {
    res.status(200).json({ message: 'Success! Your message has been received by the clinic.' });
  }, 1500);
}
