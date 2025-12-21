"use client"

import { Briefcase, Trophy, Cpu, Heart, Microscope, Tv } from "lucide-react"

const categories = [
  {
    name: "Business",
    icon: Briefcase,
    description: "Markets, finance, and economy news",
  },
  {
    name: "Sports",
    icon: Trophy,
    description: "Latest scores and sports updates",
  },
  {
    name: "Technology",
    icon: Cpu,
    description: "Tech innovations and digital trends",
  },
  {
    name: "Health",
    icon: Heart,
    description: "Medical news and wellness tips",
  },
  {
    name: "Science",
    icon: Microscope,
    description: "Research and scientific discoveries",
  },
  {
    name: "Entertainment",
    icon: Tv,
    description: "Movies, music, and celebrity news",
  },
]

export default function CategoriesSection() {
 return (
  <section className="w-full bg-muted/30 px-6 py-10 md:py-17 dark:bg-gray-900">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl dark:text-gray-200">
          Explore by Category
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground dark:text-gray-200">
          Find the news that matters most to you from AppNews
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <button
              key={category.name}
              className="group flex flex-col items-center space-y-4 rounded-xl bg-card p-8 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer dark:bg-gray-800"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/10 dark:bg-blue-200/20">
                <Icon className="h-8 w-8 text-blue-900 group-hover:text-white dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold dark:text-gray-200">{category.name}</h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400">{category.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  </section>
)
}
