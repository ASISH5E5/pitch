import { BrowserRouter, Route,Routes } from "react-router-dom";

import NotFound from "./NotFound";

import Main from './Elements/Main'
import Home from "./Elements/Home";
const App: React.FC = () => {
    return( 
    <BrowserRouter basename="/pitch/">
    <Routes>
      <Route path="/pitch/" element={<Home/>}/>
    <Route path="/main" element={<Main data={false}/>}/>
    <Route path="*" element={<NotFound />} />
    



  </Routes>
  </BrowserRouter>
  );
}
export default App;
