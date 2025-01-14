import Hero from "./hero";
import Trusted from "./trusted";
import Job from "./job";
import Highlights from "./highlights";
import CostGovernance from "./cost-governance";
import Reviews from "../../components/reviews";
import Integrations from "./integrations";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Job />
      <Highlights />
      <CostGovernance />
      <Reviews />
      <Integrations />
    </>
  );
}
