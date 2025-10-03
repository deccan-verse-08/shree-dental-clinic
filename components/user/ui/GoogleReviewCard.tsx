"use client"
import { Avatar } from "@heroui/avatar"
import Image from "next/image"
import { FaStar, FaUserCircle } from "react-icons/fa"

interface Review{
    name:string,
    profile_photo_url:string,
    text:string,
    rating:number,
    author_url:string
}

interface GoogleReviewCardProps{
    review:Review
}


const GoogleReviewCard: React.FC<GoogleReviewCardProps> = ({ review }) => {
  return (
    <div className="h-full flex">
      {/* Gradient border wrapper */}
      <div className="w-full bg-gradient-to-r from-violet-100/20 via-violet-200/20 to-violet-300/20 p-[2px] rounded-2xl hover:scale-105 transition-transform duration-300">
        {/* Inner card */}
        <div className="relative h-full backdrop-blur-sm bg-white/80 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-xl overflow-hidden">
          
          {/* Tooth Image as Background */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src="/tooth.jpg"
              height={150}
              width={150}
              alt="tooth"
              className="opacity-40"
            />
          </div>

          {/* Header */}
          <div className="flex items-center mb-4 z-10">
            {review.profile_photo_url ? (
              <Avatar
                src={review.profile_photo_url}
                isBordered
                className="w-12 h-12"
              />
            ) : (
              <FaUserCircle className="w-12 h-12 text-gray-400 mr-3" />
            )}
            <div className="ml-3">
              <a
                href={review.author_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors"
              >
                {review.name}
              </a>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4 z-10">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`mr-1 ${
                  i < review.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-700 text-base leading-relaxed flex-grow text-center z-10">
            {review.text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default GoogleReviewCard;