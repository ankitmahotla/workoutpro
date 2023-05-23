import Image from "next/image";

const Home = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Welcome to WorkoutPro</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 transform transition-all hover:scale-105">
              <Image
                src="/images/image1.png"
                alt="Image 1"
                width={300}
                height={200}
                cover
              />
              <p className="text-center mt-2">Log Your Calories.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 transform transition-all hover:scale-105">
              <Image
                src="/images/image2.png"
                alt="Image 2"
                width={300}
                height={200}
                cover
              />
              <p className="text-center mt-2">
                Create and Store your Workout Routines.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 transform transition-all hover:scale-105">
              <Image
                src="/images/image3.png"
                alt="Image 3"
                width={300}
                height={200}
                cover
              />
              <p className="text-center mt-2">Log Your Workouts.</p>
            </div>
            {/* Add more images and components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
