import React from 'react'

const FriendCard = ({ name, profilePictureUrl, mutualFriendCount }: FriendCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={profilePictureUrl}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              alt={name}
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="space-y-1">
            <h2 className="font-bold text-lg text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              {mutualFriendCount} mutual friends
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-4 w-full justify-around">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
            Message
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
            Profile
          </button>
        </div>
      </div>
    </div>
  );
};

interface FriendCardProps {
  name: string;
  profilePictureUrl: string;
  mutualFriendCount: number;
}

const FriendsPage = () => {
  const friends = [
    {
      name: "John Doe",
      profilePictureUrl: "https://dummyjson.com/image/i2.jpg",
      mutualFriendCount: 5,
    },
    {
      name: "Jane Doe",
      profilePictureUrl: "https://dummyjson.com/image/i3.jpg",
      mutualFriendCount: 3,
    },
    {
      name: "Richard Roe",
      profilePictureUrl: "https://dummyjson.com/image/i4.jpg",
      mutualFriendCount: 2,
    },
    {
      name: "John Doe",
      profilePictureUrl: "https://dummyjson.com/image/i5.jpg",
      mutualFriendCount: 4,
    },
    {
      name: "Jane Doe",
      profilePictureUrl: "https://dummyjson.com/image/i6.jpg",
      mutualFriendCount: 1,
    },
    {
      name: "Richard Roe",
      profilePictureUrl: "https://dummyjson.com/image/i7.jpg",
      mutualFriendCount: 6,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Friends</h1>
            <p className="text-gray-500 mt-1">You have {friends.length} friends</p>
          </div>
          <div className="flex space-x-4">
            <input
              type="search"
              placeholder="Search friends..."
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Add Friend
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend, index) => (
            <FriendCard key={index} {...friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
