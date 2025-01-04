const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const bookings = [];

app.post('/api/book', (req, res) => {
  const { name, date, time, guests } = req.body;
  bookings.push({ name, date, time, guests });
  res.status(201).send({ message: 'Booking successful' });
});

app.get('/api/bookings', (req, res) => {
  res.status(200).send(bookings);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const handleBooking = async (e) => {
  e.preventDefault();
  const bookingData = { name, date, time, guests };
  try {
    const response = await axios.post('http://localhost:5000/api/book', bookingData);
    alert('Booking successful!');
  } catch (error) {
    alert('Booking failed.');
  }
};