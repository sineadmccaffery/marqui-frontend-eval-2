import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";

function App() {

  return (
    <>
    <UserProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <UserList />
      </div>
    </UserProvider>
    </>
  )
}

export default App
