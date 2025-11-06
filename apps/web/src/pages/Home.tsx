import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Differentiator from '../components/Differentiator';
import Ecosystem from '../components/Ecosystem';
import Roadmap from '../components/Roadmap';
import SocialProof from '../components/SocialProof';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import LeadForm from '../components/LeadForm';

const Home = () => {
  return (
    <div className="bg-white text-[#2E2E2E]">
      <Hero />
      <Problem />
      <Solution />
      <Differentiator />
      <Ecosystem />
      <Roadmap />
      <SocialProof />
      <Pricing />
      <FAQ />
      <div className="bg-[#003366]">
        <FinalCTA />
      </div>
      <div className="bg-slate-100 pb-24">
        <LeadForm />
      </div>
    </div>
  );
};

export default Home;
