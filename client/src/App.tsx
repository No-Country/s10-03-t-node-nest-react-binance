import { HashRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/molecule/footer/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Market from "./pages/Market"
import Wallets from "./pages/Wallets"
import NotFound from "./pages/NotFound"
import CreatePersonalAccount from "./pages/CreatePersonalAccount"
import LoginView from "./components/Login"
import Header from "./components/molecule/header/Header"
import { AuthProvider } from "./context/AuthContext"
import { ApiProvider } from "./context/FetchContext"

function App() {
  return (
    <HashRouter>
      <AuthProvider>

        <ApiProvider>
          <Header />
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/login" element={ <LoginView /> } />
            <Route path="/market" element={ <Market /> } />
            <Route path="/wallets" element={ <Wallets /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/register/continue" element={ <CreatePersonalAccount /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </ApiProvider>
        <Footer />
      </AuthProvider>
    </HashRouter>
  )
}

export default App
