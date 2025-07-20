import hero from "@/assets/hero.png";

function Hero() {
  return (
    <div>
      <img
        src={hero}
        alt="hero image"
        className="max-h-[600px] w-full object-cover"
      />
    </div>
  );
}

export default Hero;
