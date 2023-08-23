import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./components/molecule/header/Header"
import Footer from "./components/molecule/footer/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Market from "./pages/Market"
import Feed from "./pages/Feed"
import Services from "./pages/Services"
import Wallets from "./pages/Wallets"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/market" element={ <Market /> } />
        <Route path="/feed" element={ <Feed /> } />
        <Route path="/services" element={ <Services /> } />
        <Route path="/wallets" element={ <Wallets /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
