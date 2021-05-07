import logo from "./images/logo (1).svg";
import mockup from "./images/illustration-mockups (1).svg";

import './App.css'; //imports css file to js

function App() {

  return (
    <>
      
      <header>
        <img src={logo} alt="logo"/>
      </header>
      
      <main>
        <img src={mockup} alt="mockup"/>
        <div className="content"> 
          <h2> Build the community your fans will love</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <button>Register</button>
        </div>
      </main>
      
      <footer>
        <i class="fab fa-facebook-f"></i>
      </footer>

    </>
  );
}

export default App;
