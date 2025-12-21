import { Zap, Clock, Globe } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="w-full px-6 py-1 md:py-0.5 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Description */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-3xl dark:text-gray-200">
              Your Trusted NewsApp Platform
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground dark:text-gray-400">
              NewsApp provides trusted news powered by AppNews API. We cover all fields including business, sports,
              technology, health, science, entertainment, and more with fast search capabilities and real-time updates.
            </p>
             <p className="text-pretty text-lg leading-relaxed text-muted-foreground dark:text-gray-400">
                Stay informed with breaking news, in-depth analysis, and comprehensive coverage. Our platform aggregates
                the most important stories from AppNews, so you never miss what matters most.
              </p>
           
          </div>

          {/* Right: Features */}
          {/* Right: Features */}
<div className="grid gap-6 md:py-2 sm:grid-cols-2">
  <div className="flex flex-col items-center space-y-3 rounded-xl bg-card p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer dark:bg-gray-800">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/10 dark:bg-blue-200/20">
      <Zap className="h-7 w-7 text-blue-900 dark:text-blue-400" />
    </div>
    <h3 className="text-xl font-semibold dark:text-gray-200">Lightning Fast</h3>
    <p className="text-sm text-muted-foreground dark:text-gray-400">
      Real-time updates from AppNews delivered instantly to your feed
    </p>
  </div>

  <div className="flex flex-col items-center space-y-3 rounded-xl bg-card p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer dark:bg-gray-800">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/10 dark:bg-blue-200/20">
      <Clock className="h-8 w-8 text-blue-900 group-hover:text-white dark:text-blue-400" />
    </div>
    <h3 className="text-xl font-semibold dark:text-gray-200">24/7 Coverage</h3>
    <p className="text-sm text-muted-foreground dark:text-gray-400">
      Around-the-clock news from trusted sources worldwide
    </p>
  </div>

  <div className="flex flex-col items-center space-y-3 rounded-xl bg-card p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer dark:bg-gray-800 sm:col-span-2">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/10 dark:bg-blue-200/20 ">
      <Globe className="h-8 w-8 text-blue-900 group-hover:text-white dark:text-blue-400" />
    </div>
    <h3 className="text-xl font-semibold dark:text-gray-200">Global Reach</h3>
    <p className="text-sm text-muted-foreground dark:text-gray-400">
      Coverage spanning every continent via AppNews API
    </p>
        </div>
       </div>
    </div>
  </div>
    </section>
  )
}
