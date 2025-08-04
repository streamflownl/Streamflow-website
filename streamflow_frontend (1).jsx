import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleBooking = async () => {
    // Placeholder for Google Calendar API integration
    console.log(`Booking call for: ${phoneNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-coolvetica">
      <header className="p-5 bg-white shadow-md">
        <h1 className="text-4xl font-bold">StreamFlow</h1>
      </header>
      <main className="p-10 text-center">
        <h2 className="text-2xl mb-4">Plan een call</h2>
        <input
          type="tel"
          placeholder="Voer je telefoonnummer in"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="p-2 border rounded-lg mb-4 w-full max-w-md"
        />
        <br />
        <Button onClick={handleBooking} className="bg-blue-600 text-white px-6 py-2 rounded-lg">
          Plan een call
        </Button>
      </main>
    </div>
  );
}
