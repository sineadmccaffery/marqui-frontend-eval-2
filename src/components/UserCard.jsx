import { useState } from 'react'
import userIcon from '../assets/user.png'
import flagIcon from '../assets/flag.png'
import filledFlagIcon from '../assets/flag-filled.png'

function UserCard({ user }) {
  const [flagged, setFlagged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFlagUser = async () => {
    if (flagged || loading) return;

    setLoading(true);
    setError(null);

    const postData = {
      flagged_user_data: {
        photo_url: user.picture.large,
        first_name: user.name.first,
        last_name: user.name.last,
        email: user.email,
        country: user.location.country,
        dev: "Sinead McCaffery"
      },
    };

    try {
      const response = await fetch("https://mlabs.directus.app/items/fe_flagged_users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Failed to flag user");
      }
      setFlagged(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center bg-slate-300 dark:bg-slate-600 dark:text-white rounded-lg p-5 pb-10">
        <button
          className="flex self-end text-gray-500 hover:text-gray-800 transition"
          onClick={handleFlagUser}
          disabled={flagged || loading}
          aria-label="Toggle flag"
        >
          {flagged ? <img src={filledFlagIcon} className="w-8 h-8" alt="Profile Picture"></img> : <img src={flagIcon} className="w-8 h-8" alt="Profile Picture"></img>}
        </button>
        <img
          src={user.picture.large}
          alt="User Icon"
          className="w-24 h-24 border-2 border-black rounded-full bg-white">
        </img>
        <h2 className="text-xl mt-4">{user.name.first} {user.name.last}</h2>
        <p>{user.email}</p>
        <div className="flex items-center mt-2 bg-gray-100 dark:bg-gray-500 dark:text-white px-3 py-1 rounded-full text-sm font-medium text-gray-600">
            {user.location.country}
        </div>
        <button className="mt-4 w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition" aria-label="View Profile">
          View Profile
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </>
  )
}

export default UserCard