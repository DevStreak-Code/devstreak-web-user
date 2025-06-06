import React from 'react';

interface CustomCardProps {
  imgUrl: string;
  title: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ imgUrl, title }) => {
  return (
    <article
      tabIndex={0}
      aria-label={title}
      className="inline-block bg-white rounded-md shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      <img
        src={imgUrl}
        alt={title}
        className="max-w-full h-auto"
        loading="lazy"
      />
      <h2 className="p-3 text-base font-semibold text-gray-800 text-center">{title}</h2>
    </article>
  );
};

export default CustomCard;
