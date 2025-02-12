import { useState, useEffect } from "react";
import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
    {console.log(darkMode)}
    <UserProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white flex flex-col items-center">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <UserList />
      </div>
    </UserProvider>
    </>
  )
}

export default App
