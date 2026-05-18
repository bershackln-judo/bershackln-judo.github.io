export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { text, source_lang, target_lang } = req.body;
  if (!text || !target_lang) {
    return res.status(400).json({ error: 'Missing text or target_lang' });
  }

  const key = process.env.DEEPL_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'DEEPL_API_KEY not configured' });
  }

  const params = new URLSearchParams({ text, target_lang });
  if (source_lang) params.set('source_lang', source_lang);

  try {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${key}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
