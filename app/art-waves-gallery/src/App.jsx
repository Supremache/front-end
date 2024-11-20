import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Highlights from "./sections/Highlights";
import WhyUs from "./sections/WhyUs";
import Unlock from "./sections/Unlock";
import Partners from "./sections/Partners";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <div className="relative h-full w-full bg-orange-50">
        <NavBar />
        <Hero />
        <div className="absolute inset-x-0 bottom-0 -mt-1 h-16 bg-orange-50 transform rotate-180 z-0">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#fff"
              d="M0,32L40,69.3C80,107,160,181,240,197.3C320,213,400,171,480,165.3C560,160,640,192,720,186.7C800,181,880,139,960,138.7C1040,139,1120,181,1200,176C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
      <About />
      <Highlights />
      <WhyUs />
      <Unlock />
      <Partners />
      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;
