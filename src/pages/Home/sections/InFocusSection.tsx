// In Focus Section
export const InFocusSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: 'url("/images/home/videophoto.png")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2
          className="text-5xl font-bold text-white text-center mb-12"
          style={{ fontFamily: "Days One, sans-serif" }}
        >
          In Focus
        </h2>

        {/* OUTER BORDER */}
        <div className="border-4 border-[#fcd421] rounded-2xl p-4">
          {/* MAIN WHITE + YELLOW CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">

            {/* LEFT: VIDEO */}
            <div className="bg-[#fcd421] p-8 flex items-center justify-center">
              <iframe
                className="w-full h-[320px] md:h-[360px] lg:h-[400px] rounded"
                src="https://www.youtube.com/embed/a081_W5U_SY?"
                allowFullScreen
              ></iframe>
            </div>

            {/* RIGHT: TEXT + BUTTON */}
            <div className="bg-[#fcd421] p-10 md:p-14 text-black flex flex-col justify-center">
              <h3
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: "Days One, sans-serif" }}
              >
                Navigating Net Zero: <span className="italic">A</span> Sustainable
                Business Transformation
              </h3>

              <p className="text-lg mb-10 leading-relaxed">
                Embark on a transformative journey towards net-zero emissions with
                our comprehensive guide! 🚀 From assessing your current standing to
                setting ambitious targets aligned with global standards, we explore
                each step of the Net Zero Roadmap.
              </p>

              <a
                href="https://www.youtube.com/@aumy"
                style={{color:"white", fontWeight:"bold"}}
                className="bg-black text-white font-bold px-10 py-4 w-fit hover:bg-gray-800 transition-colors text-lg rounded"
              >
                Watch More
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
