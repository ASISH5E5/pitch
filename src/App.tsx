import { BrowserRouter, Route,Routes } from "react-router-dom";
import PitchDesk from "./Pitch_Deck/Pitch_deck";
import ProblemSlide from "./Pitch_Deck/Elements/Problem";
import SolutionSlide from "./Pitch_Deck/Elements/Solutions";
import TeamSlide from "./Pitch_Deck/Elements/Team";
import MarketSlide from "./Pitch_Deck/Elements/Market";
import TractionSlide from "./Pitch_Deck/Elements/Traction";
// import GTMStrategy from "./Pitch_Deck/Elements/GTM";
import VCDashboard from "./Pitch_Deck/Elements/Where";
import VisionSlide from "./Pitch_Deck/Elements/Vision";
import FundraisingAsk from "./Pitch_Deck/Elements/Ourask";
import Nextstep from "./Pitch_Deck/Elements/NextStep";
import NotFound from "./NotFound";
import IntroSlide from "./Pitch_Deck/Elements/IntroSlide";
import WhyNowAnalysis from "./Pitch_Deck/Elements/WhyNow";
import BusinessModel from "./Pitch_Deck/Elements/BusinessModel";
import GPSAnalogy from "./Pitch_Deck/Elements/GPSAnalogy";
import GTMStrategy from "./Pitch_Deck/Elements/GTM";
import LMSDashboard from "./Pitch_Deck/Elements/Competetion";

const App: React.FC = () => {
    return( 
    <BrowserRouter>
    <Routes>
    <Route path="/pitch/" element={<PitchDesk />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/pitch/slides/intro" element={<IntroSlide />} />
    <Route path="/pitch/slides/problem" element={<ProblemSlide />} />
    <Route path="/slides/solution" element={<SolutionSlide />} />
    <Route path="/slides/team" element={<TeamSlide />} />
    <Route path="/slides/market-size" element={<MarketSlide />} />
    <Route path="/slides/traction" element={<TractionSlide />} />
    <Route path="/slides/gtm" element={<GTMStrategy />} />
    <Route path="/slides/future" element={<VCDashboard />} />
    <Route path="/slides/vision" element={<VisionSlide />} />
    <Route path="/slides/our-ask" element={<FundraisingAsk />} />
    <Route path="/slides/next-step" element={<Nextstep />} />
    <Route path="/slides/whynow" element={<WhyNowAnalysis />} />
    <Route path="/slides/business" element={<BusinessModel/>} />
    <Route path="/slides/competetion" element={<LMSDashboard/>} />
    <Route path="/slides/gps" element={<GPSAnalogy onBack={function (): void {
            throw new Error("Function not implemented.");
          } }/>} />



  </Routes>
  </BrowserRouter>
  );
}
export default App;
