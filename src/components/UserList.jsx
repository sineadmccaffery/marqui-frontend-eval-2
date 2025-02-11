import { useUser } from "../context/UserContext";
import UserCard from "./UserCard";

export default function UserList() {
  const { users, loading, error, fetchUsers } = useUser();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Random User Profiles</h1>

      {loading && <p className="text-center text-gray-500">Loading users...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-evenly">
          {users.map((user) => (
            <UserCard key={user.login.uuid} user={user} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={fetchUsers}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Refresh Users
        </button>
      </div>
    </div>
  );
}
