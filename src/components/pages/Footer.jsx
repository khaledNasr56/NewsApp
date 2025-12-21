import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { BsTwitter } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-900 px-4 py-12 text-white dark:bg-gray-900 dark:border-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold ">NewsApp</h3>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Your trusted source for real-time news powered by AppNews API. Stay informed, stay ahead.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xl transition-colors hover:text-white dark:text-gray-500 dark:hover:text-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xl transition-colors hover:text-white dark:text-gray-500 dark:hover:text-gray-300"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 text-xl transition-colors hover:text-white dark:text-gray-500 dark:hover:text-gray-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 transition-colors hover:text-white dark:text-gray-500 dark:hover:text-gray-300"
                >
                  Slider
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:scale-110 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 " />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:scale-110 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
                aria-label="Twitter"
              >
                <BsTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:scale-110 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:scale-110 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400 dark:border-white/5 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} NewsApp. All rights reserved. Powered by AppNews API.</p>
        </div>
      </div>
    </footer>
  )
}
