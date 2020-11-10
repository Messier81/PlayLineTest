import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Logo from "./comps/Logo";
import MainSection from "./comps/MainSection";
import BotNav from "./comps/BotNav";

function App() {
  return (
    <div className="container text-center">
      <Logo />
      <MainSection />
      <BotNav/>
    </div>
  );
}

export default App;
