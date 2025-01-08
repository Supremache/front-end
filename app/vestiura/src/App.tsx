import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Home from "./pages/Home/Home";
import AnimatedGridPattern from "./components/ui/animated-grid-pattern";
import ScrollToTop from "./components/ScrollToTop";


const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Toaster />
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.4}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div>
      <ScrollToTop />
    </div>
    </div>
  );
}

export default App;
