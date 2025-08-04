import { useState } from 'react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const [showBooking, setShowBooking] = useState(false);

  const handleBookingClick = () => {
    setShowBooking(true);
  };

  return (
    <div className="font-[Coolvetica] min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold text-center mb-8">Go With The Flow</h1>
      <p className="text-lg text-gray-700 mb-4">We give we</p>

      <Button className="mb-4" onClick={handleBookingClick}>
        Call Us
      </Button>

      {showBooking && (
        <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-2xl">
          <h2 className="text-xl mb-4">Plan Your Call</h2>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-2 mb-4 border rounded"
          />
          <Button className="w-full">Schedule</Button>
        </div>
      )}

      <Button className="mt-4">Plan Event</Button>
    </div>
  );
};

export default HomePage;
