import "./App.css";
import { Footer } from "./components/footer/footer.components";
import { NavBar } from "./components/navigation/nav.component";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <h1>hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere commodi
        dolorem recusandae deserunt aliquid rerum nihil aspernatur nesciunt
        adipisci unde vel expedita laudantium a rem perferendis, vitae deleniti
        illum possimus?
      </p>
      <Footer />
    </div>
  );
}

export default App;
