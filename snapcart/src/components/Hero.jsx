import React from "react";

const Hero = () => {
  return (
    <section className=" h-full bg-gray-100 px-8 py-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left side: text */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Welcome to <span className="text-blue-600">SnapCart</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover amazing deals on electronics, fashion, and more. Shop the
          latest trends at unbeatable prices.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>

      {/* Right side: image */}
      <div className="mt-8  md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shopping banner"
          className="rounded-xl shadow-lg h-[50vh]"
        />
      </div>
    </section>
  );
};

export default Hero;
