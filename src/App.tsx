import {HashRouter, Route,Routes } from "react-router-dom";
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
import Founders from "./Pitch_Deck/Elements/Founders";

const App: React.FC = () => {
    return( 
    <HashRouter >
    <Routes>
    <Route path="/pitch" element={<PitchDesk />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/pitch/slides/intro" element={<IntroSlide setSelectedSlide={function (): void {
            throw new Error("Function not implemented.");
          } }  />} />
    <Route path="/pitch/slides/problem" element={<ProblemSlide />} />
    <Route path="/pitch/slides/solution" element={<SolutionSlide />} />
    <Route path="/pitch/slides/team" element={<TeamSlide />} />
    <Route path="/pitch/slides/market-size" element={<MarketSlide />} />
    <Route path="/pitch/slides/traction" element={<TractionSlide />} />
    <Route path="/pitch/slides/gtm" element={<GTMStrategy />} />
    <Route path="/pitch/slides/future" element={<VCDashboard />} />
    <Route path="/pitch/slides/vision" element={<VisionSlide />} />
    <Route path="/pitch/slides/our-ask" element={<FundraisingAsk />} />
    <Route path="/pitch/slides/next-step" element={<Nextstep />} />
    <Route path="/pitch/slides/whynow" element={<WhyNowAnalysis />} />
    <Route path="/pitch/slides/business" element={<BusinessModel/>} />
    <Route path="/pitch/slides/competetion" element={<LMSDashboard/>} />
    <Route path="/pitch/slides/founders" element={<Founders onBack={function (): void {
            throw new Error("Function not implemented.");
          } }/>} />
    <Route path="/pitch/slides/gps" element={<GPSAnalogy onBack={function (): void {
            throw new Error("Function not implemented.");
          } }/>} />



  </Routes>
  </HashRouter>
  );
}
export default App;
