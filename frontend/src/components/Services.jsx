import { useState } from "react";
import DataMage from "../assets/data_mage.png";
function Services() {
  const [clickedButton, setClickedButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  return (

<section id="services" className="">
      <div className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center px-4 sm:px-6">
        <div className="text-center mx-auto reveal w-full max-w-6xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-200 font-semibold">
            Services
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-stretch sm:items-center">
            <button
              onClick={() => handleButtonClick("Data Engineering")}
              className="reveal px-5 py-2 mt-6 sm:mt-10 font-bold inline-block bg-slate-200 text-slate-900 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 transition-colors text-sm sm:text-base"
            >
              Data Engineering
            </button>
            <button
              onClick={() => handleButtonClick("Data Infrastructure")}
              className="reveal px-5 py-2 mt-3 sm:mt-10 font-bold inline-block bg-slate-200 text-slate-900 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 transition-colors text-sm sm:text-base"
            >
              Data Infrastructure
            </button>
            <button
              onClick={() => handleButtonClick("Analytics")}
              className="reveal px-5 py-2 mt-3 sm:mt-10 font-bold inline-block bg-slate-200 text-slate-900 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 transition-colors text-sm sm:text-base"
            >
              Analytics
            </button>
            <button
              onClick={() => handleButtonClick("Data Warehousing")}
              className="reveal px-5 py-2 mt-3 sm:mt-10 font-bold inline-block bg-slate-200 text-slate-900 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 transition-colors text-sm sm:text-base"
            >
              Data Warehousing
            </button>
          </div>

          <div className="mt-6 sm:mt-10 min-h-40 sm:min-h-32 px-2 sm:px-0">
            {clickedButton === "Data Engineering" && (
              <div className="text-center fade-in ">
                <h1 className="text-lg sm:text-xl text-slate-200 font-semibold mb-2">
                  Data Engineering
                </h1>
                <p className="text-slate-200 text-base sm:text-lg">
                  Offering end-to-end data engineering solutions including
                  ETL/ELT pipeline development, data integration, and
                  transformation using modern tools and frameworks.
                </p>
              </div>
            )}
            {clickedButton === "Data Infrastructure" && (
              <div className="text-center fade-in">
                <h1 className="text-lg sm:text-xl text-slate-200 font-semibold mb-2">
                  Data Infrastructure
                </h1>
                <p className="text-slate-200 text-base sm:text-lg">
                  Building robust data infrastructure solutions including data
                  lakes, data warehouses, and real-time data processing systems
                  using cutting-edge technologies.
                </p>
              </div>
            )}
            {clickedButton === "Analytics" && (
              <div className="text-center fade-in">
                <h1 className="text-lg sm:text-xl text-slate-200 font-semibold mb-2">
                  Analytics
                </h1>
                <p className="text-slate-200 text-base sm:text-lg">
                  Providing advanced analytics solutions including predictive
                  modeling, data visualization, and business intelligence to
                  drive data-informed decision-making.
                </p>
              </div>
            )}
            {clickedButton === "Data Warehousing" && (
              <div className="text-center fade-in">
                <h1 className="text-lg sm:text-xl text-slate-200 font-semibold mb-2">
                  Data Warehousing
                </h1>
                <p className="text-slate-200 text-base sm:text-lg">
                  Designing and implementing scalable data warehousing solutions
                  to enable efficient data storage, retrieval, and analysis.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
