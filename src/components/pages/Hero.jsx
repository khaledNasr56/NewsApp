import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 to-gray-500 px-4 py-20 text-center md:min-h-[700px] dark-blue-900 dark:to-gray-700">
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-8">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-7xl">
          Stay Updated with the Latest News on NewsApp
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
          Get real-time news updates from AppNews API. Fast, reliable, and always
          up-to-date with breaking stories from around the world.
        </p>

        {/* Search */}
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search news across all categories and topics..."
              className="h-14 w-full rounded-lg bg-white pl-12 pr-4 text-base text-gray-900 shadow-lg outline-none ring-1 ring-black/10 transition focus:ring-2 focus:ring-white/50 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          <button className="h-14 rounded-lg bg-white px-8 text-base font-semibold text-blue-600 shadow-lg transition hover:scale-105 hover:bg-white/90">
            Explore News
          </button>
        </div>
      </div>

      {/* Bottom Fade */}
    </section>
  );
};

export default HeroSection;
