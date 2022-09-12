import { Navbar, Hero } from "../components";

export default function Index() {
  return (
    <div>
      <Hero>
        <Navbar />
      </Hero>
      <div className="bg-primary h-20 sticky top-0 p-5 drop-shadow shadow-blue-600"></div>
      <div className="bg-white w-full h-screen"></div>
      <div className="bg-secondary h-20 sticky top-0 p-5 drop-shadow shadow-blue-600"></div>
      <div className="bg-white w-full h-screen"></div>
      <footer className="h-96 p-20 bg-tertiary">
          <h1 className="text-white text-4xl text-center p-20">Footer</h1>
        </footer>
    </div>
  );
}
