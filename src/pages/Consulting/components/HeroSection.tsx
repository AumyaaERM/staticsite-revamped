interface HeroSectionProps{
    heroContent:any
}
export const HeroSection = ({heroContent}:HeroSectionProps) => (
    <section
      className="relative min-h-[420px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroContent.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-3xl mx-auto px-4 py-20 text-white">
        <p className="uppercase tracking-[0.35em] text-sm mb-4">Consulting</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Days One, sans-serif',}}>{heroContent.title}</h1>
        <p className="text-3xl mb-3 text-yellow-300">{heroContent.subtitle}</p>
        <p className="text-lg opacity-90">{heroContent.description}</p>
      </div>
    </section>
  );
  