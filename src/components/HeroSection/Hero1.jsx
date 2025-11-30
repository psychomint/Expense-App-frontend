
const Hero1 = () => {
    const status = "authenticated";
    const actionButtonText = status === "authenticated" ? "Go to Dashboard" : "Start Free Trial";
  return (
<section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Manage Your Finance{" "}
          <span className="text-[#8A76FC]/70 bg-clip-text">
            Into One Click
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Track expenses, organize budgets, and take control of your money—
          everything in a single place.
        </p>

        {/* Button */}
        <div className="mt-4 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
          <button 
          className="flex items-center justify-center cursor-pointer gap-2 bg-[#8A76FC] hover:bg-[#7563E8] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition whitespace-nowrap">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 2L16 10L4 18V2Z" fill="white" />
              </svg>
            {actionButtonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero1