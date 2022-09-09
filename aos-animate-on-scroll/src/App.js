import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-3/4 mx-auto">
      <h1>Animate on Scroll</h1>
      <div className="grid grid-rows-4 gap-20">
        <div data-aos="fade-up" className="bg-green-300 h-[1000px]">
          1
        </div>
        <div data-aos="fade-up" className="bg-red-300">
          2
        </div>
        <div data-aos="fade-up" className="bg-blue-300">
          3
        </div>
      </div>
    </div>
  );
}

export default App;
