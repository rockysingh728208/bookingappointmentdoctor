import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'sagarkashyap9155@gmail.com',
    phone: '+91 1234567890',
    address: {
      line1: '123 Main St',
      line2: 'Apt 4B',
    },
    gender: 'Male',
    dob: '2006-08-20',
  });

  const [editMode, setEditMode] = useState(false);

  return (
    <div className="max-w-2xl pt-20 p-6 bg-white shadow-md rounded-xl mx-auto">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border shadow"
        />
        {editMode ? (
          <input
            type="text"
            className="text-xl font-semibold border px-4 py-2 rounded w-full"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="text-xl font-semibold">{userData.name}</p>
        )}
      </div>

      <hr className="my-6" />

      {/* Contact Info */}
      <div className="mb-6 text-left">
        <h3 className="text-lg font-bold text-gray-700 mb-2">
          Contact Information
        </h3>

        <label className="text-sm font-medium text-gray-600">Email ID:</label>
        <p className="mb-2">{userData.email}</p>

        <label className="text-sm font-medium text-gray-600">Phone:</label>
        {editMode ? (
          <input
            type="text"
            className="w-full border px-3 py-2 rounded mb-3"
            value={userData.phone}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        ) : (
          <p className="mb-3">{userData.phone}</p>
        )}

        <label className="text-sm font-medium text-gray-600">Address:</label>
        {editMode ? (
          <div className="mb-2">
            <input
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value },
                }))
              }
              className="w-full border px-3 py-2 rounded mb-2"
              type="text"
            />
            <input
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value },
                }))
              }
              className="w-full border px-3 py-2 rounded"
              type="text"
            />
          </div>
        ) : (
          <p className="mb-3">
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </p>
        )}
      </div>

      {/* Basic Info */}
      <div className="text-left">
        <h3 className="text-lg font-bold text-gray-700 mb-2">
          Basic Information
        </h3>

        <label className="text-sm font-medium text-gray-600">Gender:</label>
        {editMode ? (
          <select
            value={userData.gender}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, gender: e.target.value }))
            }
            className="w-full border px-3 py-2 rounded mb-3"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        ) : (
          <p className="mb-3">{userData.gender}</p>
        )}

        <label className="text-sm font-medium text-gray-600">Birthday:</label>
        {editMode ? (
          <input
            type="date"
            value={userData.dob}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, dob: e.target.value }))
            }
            className="w-full border px-3 py-2 rounded mb-3"
          />
        ) : (
          <p>{userData.dob}</p>
        )}
      </div>

      {/* Button */}
      <div className="text-left mt-6">
        <button
          onClick={() => setEditMode(!editMode)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md transition"
        >
          {editMode ? 'Save Information' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
