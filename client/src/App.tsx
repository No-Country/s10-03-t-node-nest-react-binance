import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./components/molecule/header/Header"
import Footer from "./components/molecule/footer/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Market from "./pages/Market"
import Wallets from "./pages/Wallets"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/market" element={ <Market /> } />
        <Route path="/wallets" element={ <Wallets /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
