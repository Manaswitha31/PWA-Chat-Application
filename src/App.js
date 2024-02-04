//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Chat from './components/Chat';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
      <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </HashRouter>
      </>
  );
  
}

export default App;
