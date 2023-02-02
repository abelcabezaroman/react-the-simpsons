import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import CharactersPageDetail from "./pages/CharactersPageDetail/CharactersPageDetail";
import ContextPage from "./pages/ContextPage/ContextPage";
import Header from "./components/Header/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <Router>
      {/* PASO 2 - CONTEXT - AQUI ESPECIFICAS EL ALCANCE DEL CONTEXTO Y EL VALOR */}
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <div className="App-header">
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/contact" element={<ContactPage></ContactPage>} />
            <Route
              path="/context"
              element={<ContextPage></ContextPage>}
            />
              <Route
              path="/characters"
              element={<CharactersPage></CharactersPage>}
            />
            <Route
              path="/characters/:id"
              element={<CharactersPageDetail></CharactersPageDetail>}
            />
          </Routes>
          <footer>Esto tiene copyright ninio, cuidao</footer>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
