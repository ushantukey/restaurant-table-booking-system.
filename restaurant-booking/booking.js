import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingData = { name, date, time, guests };
    try {
      const response = await axios.post('/api/book', bookingData);
      alert('Booking successful!');
    } catch (error) {
      alert('Booking failed.');
    }
  };

  return (
    <div>
      <h1>Book a Table</h1>
      <form onSubmit={handleBooking}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="Number of Guests" required />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default Booking;