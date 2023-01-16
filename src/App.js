import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

function App() {
  return (
    <>
      <Register />
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" elemment={<Login />} />
          <Route path="/register" elemment={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
