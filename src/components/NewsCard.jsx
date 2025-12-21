import React from "react";

function NewsCard({ article }) {
  if (!article) return null;

  const defaultImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect width='400' height='200' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";

  return (
    <div className="bg-white m-auto dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      
      <img
        src={article.urlToImage || defaultImage}
        alt={article.title}
        className="w-full h-48 object-cover"
        onError={(e) => (e.target.src = defaultImage)}
      />

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
          {article.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 flex-grow">
          {article.description || "No description available"}
        </p>

        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span>{article.author || "Unknown"}</span>
          <span>
            {article.publishedAt
              ? new Date(article.publishedAt).toLocaleDateString()
              : "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {article.source?.name || "Unknown"}
          </span>

          {article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-xs transition"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
