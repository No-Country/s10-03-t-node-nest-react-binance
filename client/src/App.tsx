import { HashRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/molecule/footer/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Market from "./pages/Market"
import Wallets from "./pages/Wallets"
import NotFound from "./pages/NotFound"
import CreatePersonalAccount from "./pages/CreatePersonalAccount"
import LoginView from "./components/molecule/Login"

import { AuthProvider } from "./context/AuthContext"
import { ApiProvider } from "./context/FetchContext"
import Sales from "./pages/Sell"
import Buy from "./pages/Buy"
import { GoogleAuthContextProvider } from "./context/googleContext"
import Header from "./components/molecule/header/HEader"
import Deposit from "./pages/Deposit"
import SellScreen from "./pages/SellScreen"
import MontoInput from "./pages/BuyScreen"

function App() {
  return (
    <HashRouter>
      <GoogleAuthContextProvider>
      <AuthProvider>
        <ApiProvider>
          <Header />
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/login" element={ <LoginView /> } />
            <Route path="/sell" element={ <Sales /> } />
            <Route path="/sell/screen" element={<SellScreen />} />
            <Route path="/buy" element={ <Buy /> } />
            <Route path="/monto" element={<MontoInput />} />
            <Route path="/deposit" element={ <Deposit />} />
            <Route path="/market" element={ <Market /> } />
            <Route path="/wallets" element={ <Wallets /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/register/continue" element={ <CreatePersonalAccount /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </ApiProvider>
        <Footer />
      </AuthProvider>
      </GoogleAuthContextProvider>
    </HashRouter>
  )
}

export default App
