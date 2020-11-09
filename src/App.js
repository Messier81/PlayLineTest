import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Logo from "./comps/Logo";
import MainSection from "./comps/MainSection";
import BotNav from "./comps/BotNav";

import GetPlayers from "./comps/GetPlayers"
function App() {
  return (
    <div className="container text-center">
      <Logo />
      <MainSection />
      <BotNav/>
      <GetPlayers/>
    </div>
  );
}

export default App;
