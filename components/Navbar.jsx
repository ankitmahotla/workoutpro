"use client";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const storedProviders = localStorage.getItem("providers");
    if (storedProviders) {
      setProviders(JSON.parse(storedProviders));
    } else {
      fetchProviders();
    }
    const removeLocalStorage = setTimeout(() => {
      localStorage.removeItem("providers");
    }, 24 * 60 * 60 * 1000);

    return () => {
      clearTimeout(removeLocalStorage);
    };
  }, []);

  const fetchProviders = async () => {
    const res = await getProviders();
    setProviders(res);
    localStorage.setItem("providers", JSON.stringify(res));
  };

  const handleSignOut = async () => {
    await signOut();
    localStorage.removeItem("providers");
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white text-xl font-bold mr-4">
              WorkoutPro
            </Link>
          </div>
          <div className="flex items-center space-x-1 md:space-x-4">
            {session?.user ? (
              <>
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
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="bg-red-500 hover:bg-red-700 text-xs md:text-base text-white font-semibold px-2 py-2 rounded"
                >
                  Sign Out
                </button>
              </>
            ) : (
              providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="bg-green-500 hover:bg-green-700 text-xs md:text-base text-white font-semibold px-2 py-2 rounded"
                >
                  Sign In
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
