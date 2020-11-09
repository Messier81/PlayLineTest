import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Logo from "./comps/Logo";
import MainSection from "./comps/main_section/MainSection";

function App() {
  return (
    <div className="container text-center">
      <Logo />
      <MainSection />
    </div>
  );
}

export default App;
