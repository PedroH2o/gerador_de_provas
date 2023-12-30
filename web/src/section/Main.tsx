import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Home } from "../screens/Home";
import { Simulate } from "../screens/Simulate";
import { Congratilation } from "../screens/Congratilation";
import { Score } from "../screens/Score";


export function Main() {
    return (
      <main className="w-full my-auto flex place-content-center lg:gap-3 ">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/simulate" element={<><Simulate/> <Outlet/></>}>
                <Route path="congratilation" element={<Congratilation/>}/>
              </Route>
                <Route path="/score" element={<Score/>}/>
              <Route path="/*" element={<h1>error page</h1>}/>
            </Routes>
          </BrowserRouter>
      </main>
    )
}