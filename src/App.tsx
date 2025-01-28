import { BrowserRouter, Route,Routes } from "react-router-dom";
import PitchDesk from "./Pitch_Deck/Pitch_deck";

import NotFound from "./NotFound";


const App: React.FC = () => {
    return( 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<PitchDesk />} />
    <Route path="*" element={<NotFound />} />
    



  </Routes>
  </BrowserRouter>
  );
}
export default App;
