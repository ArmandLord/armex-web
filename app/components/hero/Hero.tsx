// import hero from "../../assets/hero_bg.jpeg";
import hero from "../../assets/hero_team.jpeg";

const Hero = ({ children }: any) => {
  return (
    <div className="bg-black w-full">
      <div className="container mx-auto h-[100vh]">
        {children}
        <div
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            filter: "opacity(0.25)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
