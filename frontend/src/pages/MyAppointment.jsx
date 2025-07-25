import React, { useContext } from 'react';
import { AppContext } from './Appcontext';

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">My Appointments</h2>

      <div className="space-y-8">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start justify-between gap-6 bg-white shadow-xl p-6 rounded-2xl"
          >
            {/* Left: Image + Info */}
            <div className="flex flex-col sm:flex-row gap-6 flex-1">
              {/* Doctor Image */}
              <div className="w-full sm:w-[200px] h-[200px] sm:h-[250px] mx-auto sm:mx-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl border border-gray-200"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-start gap-y-2">
                <p className="text-xl md:text-2xl font-bold text-gray-900">{item.name}</p>
                <p className="text-base md:text-lg text-gray-700">{item.speciality}</p>

                <div className="pt-2">
                  <p className="text-base md:text-lg font-semibold text-gray-800">Address:</p>
                  <p className="text-sm md:text-base text-gray-600">{item.address.line1}</p>
                  <p className="text-sm md:text-base text-gray-600">{item.address.line2}</p>
                </div>

                <p className="text-base md:text-lg pt-2 text-gray-800">
                  <span className="font-semibold">Date & Time:</span> 25 July, 2024 | 8:30 PM
                </p>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col gap-3 w-full lg:w-auto mt-4 lg:mt-0">
              <button className="bg-blue-600 text-white text-base md:text-lg px-5 py-2.5 rounded-lg hover:bg-blue-700 transition">
                Pay Online
              </button>
              <button className="bg-red-500 text-white text-base md:text-lg px-5 py-2.5 rounded-lg hover:bg-red-600 transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
