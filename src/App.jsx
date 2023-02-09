import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Feed from "./components/Feed";
import Cards from "./components/Cards";
import { useActive } from "./context";
import { useEffect } from "react";
function App() {
  const active = useActive();
  console.log(active);
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div id="wrapper" className="relative overflow-hidden">
      <Navbar />
      <MainSection />
      <Cards />
      <div
        className={`absolute min-h-screen min-w-screen inset-0 bg-soft-red ${
          active ? "opacity-25" : "opacity-0 hidden"
        } duration-200 ease-in-out`}
      ></div>
    </div>
  );
}
function MainSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 flex flex-col md:px-0 md:flex-row md:gap-8">
        <Main />
        <Feed />
      </div>
    </section>
  );
}
export default App;
