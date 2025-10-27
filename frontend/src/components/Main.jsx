function Main() {
  return (
    <section id="main" className="">
      <div className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center justify-center px-4">
        <div className="text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-200 font-semibold reveal">
            Calvin Smith
          </h1>
          <p className="font-light text-slate-200 text-xl sm:text-2xl md:text-3xl mt-5 reveal">
            Data Engineer
          </p>
          <a
            className="reveal px-5 py-2 mt-10 font-bold inline-block bg-slate-200 text-slate-900 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 transition-colors shadow-lg text-sm sm:text-base"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
