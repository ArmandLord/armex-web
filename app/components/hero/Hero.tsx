// import hero from "../../assets/hero_bg.jpeg";
import hero from "../../assets/hero_team.jpeg";

const Hero = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        // filter: "opacity(.5)",
      }}
      className="w-full"
    >
      <div className="bg-gradient-to-r from-black to-transparent w-full h-full">
        <div className="bg-gradient-to-l from-black to-transparent w-full h-full">
          <div className="container mx-auto h-[100vh]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
