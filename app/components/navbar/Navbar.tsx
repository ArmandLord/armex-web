import Armex from "../logos/Armex";

const Navbar = () => {
  const linksPages = [
    {
      id: 1,
      name: "Nosotros",
      link: "/",
    },
    {
      id: 2,
      name: "Artículos",
      link: "/articulos",
    },
  ];
  return (
    <div className="h-20 w-full sticky top-0 z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto h-full flex justify-between items-center">
        <Armex />
        <div className="h-full flex justify-between items-center">
          {linksPages.map(({ id, name }) => (
            <h4 key={id} className="p-2 text-white text-sm">
              {name}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
