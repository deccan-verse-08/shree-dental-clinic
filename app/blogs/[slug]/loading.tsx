export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      {/* Hero Section Skeleton */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-gray-200 animate-pulse">
        <div className="absolute inset-0 bg-black/20">
          <div className="max-w-4xl mx-auto h-full px-6 flex flex-col justify-end pb-16">
            <div className="space-y-4">
              <div className="h-8 w-24 bg-white/20 rounded-full" />
              <div className="h-16 w-3/4 bg-white/20 rounded-lg" />
              <div className="flex gap-4">
                <div className="h-6 w-32 bg-white/20 rounded" />
                <div className="h-6 w-32 bg-white/20 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="space-y-4 animate-pulse">
            <div className="h-6 w-3/4 bg-gray-200 rounded" />
            <div className="h-6 w-full bg-gray-200 rounded" />
            <div className="h-6 w-2/3 bg-gray-200 rounded" />
            <div className="h-6 w-5/6 bg-gray-200 rounded" />
            <div className="h-6 w-full bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}