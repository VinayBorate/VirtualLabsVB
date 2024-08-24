import React, { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./container";
import { auth } from "./config/firebase.config";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        //got user credential
        console.log(userCred?.providerData[0]);
        // taking out email
      } else {
        //not got user credential
        navigate("/home/auth", { replace: true });
      }
    });
  }, []);

  return (
    <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
      <Routes>
        <Route path="/home/*" element={<Home />} />

        {/* if the route not match */}
        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
};

export default App;
