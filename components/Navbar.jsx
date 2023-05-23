import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white text-xl font-bold mr-4">
              WorkoutPro
            </Link>
            <Link
              href="/workouts"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Workouts
            </Link>
            <Link
              href="/calories"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Calories
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/signup"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
