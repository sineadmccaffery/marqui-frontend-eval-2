
export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <label className="fixed top-4 right-6 flex items-center cursor-pointer mt-5">
        <input type="checkbox" value="" className="sr-only peer" onClick={() => setDarkMode(!darkMode)}/>
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600 dark:peer-checked:bg-gray-600"></div>
        <span className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
    </label>

  );
}
