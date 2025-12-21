import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featuredNews = [
  {
    id: 1,
    title: "Global Markets Reach Record Highs Amid Economic Recovery",
    description:
      "Stock markets worldwide celebrate unprecedented growth as economies bounce back from recent challenges.",
    image: "/public/stock-market-graph.jpg",
  },
  {
    id: 2,
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    description:
      "New artificial intelligence system achieves breakthrough in early disease detection and treatment planning.",
    image: "/public/futuristic-medical-technology.jpg",
  },
  {
    id: 3,
    title: "Championship Finals Draw Record-Breaking Global Audience",
    description:
      "Historic sports event captivates billions of viewers across the world in thrilling competition.",
    image: "/sports-stadium-crowd.jpg",
  },
  {
    id: 4,
    title: "Climate Summit Announces Ambitious New Green Energy Goals",
    description:
      "World leaders unite to commit to revolutionary renewable energy initiatives and carbon reduction targets.",
    image: "/renewable-energy-wind-turbines.jpg",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredNews.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === featuredNews.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full px-4 py-20 md:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl dark:text-gray-200">
            Featured Stories
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Today's most important news from AppNews API
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredNews.map((news) => (
                <div key={news.id} className="min-w-full">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="h-full  object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-center space-y-6 p-4">
                      <h3 className="text-3xl font-bold md:text-xl dark:text-gray-200">
                        {news.title}
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400">
                        {news.description}
                      </p>

                      <button className="w-fit rounded-lg cu bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                        Read Full Story
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="flex h-12 cursor-pointer w-12 items-center justify-center rounded-full border shadow transition hover:scale-110 dark:border-gray-700"
            >
              <ChevronLeft className="h-6 w-6 text-black dark:text-white" />
            </button>

            <div className="flex gap-2">
              {featuredNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-gray-400 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border shadow transition cursor-pointer hover:scale-110 dark:border-gray-700"
            >
              <ChevronRight className="h-6 w-6 text-black dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
