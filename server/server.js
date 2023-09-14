import { YoutubeTranscript } from 'youtube-transcript';
import express from 'express';
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
const inputString = req.query.input;
const trans = await YoutubeTranscript.fetchTranscript(inputString)
  // Use the map function to extract 'text' attributes and concatenate them
const concatenatedText = trans.map(item => item.text).join(' ');
  res.send(concatenatedText);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
