// import React, { useEffect, useState } from "react";
// import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import { Home, NewProject } from "./container";
// import { auth, db } from "./config/firebase.config";
// import { doc, setDoc } from "firebase/firestore";
// import { Spinner } from "./components";
// import { useDispatch } from "react-redux";
// import { SET_USER } from "./context/actions/userActions";

// const App = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsuscribe = auth.onAuthStateChanged((userCred) => {
//       if (userCred) {
//         //got user credential
//         // taking out email
//         console.log(userCred?.providerData[0]);
//         setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(
//           () => {
//             //dispatch the action to store
//             dispatch(SET_USER(userCred?.providerData[0]));
//             navigate("/home/projects", { replace: true });
//           }
//         );
//       } else {
//         //not got user credential
//         navigate("/home/auth", { replace: true });
//       }

//       setInterval(() => {
//         setIsLoading(false);
//       }, 2000);
//     });

//     //clean up the listener event
//     return () => unsuscribe();
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
//           <Spinner />
//         </div>
//       ) : (
//         <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
//           <Routes>
//             <Route path="/home/*" element={<Home />} />
//             <Route path="/newProject" element={<NewProject />} />
//             {/* if the route not match */}
//             <Route path="*" element={<Navigate to={"/home"} />} />
//           </Routes>
//         </div>
//       )}
//     </>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home, NewProject } from "./container";
import { auth, db } from "./config/firebase.config";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { Spinner } from "./components";
import { useDispatch } from "react-redux";
import { SET_USER } from "./context/actions/userActions";
// import { SET_PROJECTS } from "./context/actions/projectActions";
// import { SET_PROJECTS } from "./context/actions/projectActions";
// import { SET_PROJECTS } from "./context/actions/ProjectActions";
import { SET_PROJECTS } from "./context/actions/ProjectActions";

// import { Home,NewProject } from "./container";
// import { auth, db } from "./config/firebase.config";
// import { doc, setDoc } from "firebase/firestore";
// import { Spinner } from "./components";
// import { useDispatch } from "react-redux";
// import { SET_USER } from "./context/actions/userActions";

const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        //got user credential
        // taking out email
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(
          () => {
            //dispatch the action to store
            dispatch(SET_USER(userCred?.providerData[0]));
            navigate("/home/projects", { replace: true });
          }
        );
      } else {
        //not got user credential
        navigate("/home/auth", { replace: true });
      }

      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });

    //clean up the listener event
    return () => unsuscribe();
  }, []);

  useEffect(() => {
    const projectQuery = query(
      collection(db, "projects"),
      orderBy("id", "desc")
    );
    const unsuscribe = onSnapshot(projectQuery, (querySnaps) => {
      const projectsList = querySnaps.docs.map((doc) => doc.data());
      dispatch(SET_PROJECTS(projectsList));
    });
    return unsuscribe;
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
          <Spinner />
        </div>
      ) : (
        <div className="w-screen h-screen flex items-start justify-start overflow-hidden">
          <Routes>
            <Route path="/home/*" element={<Home />} />
            <Route path="/newProject" element={<NewProject />} />

            {/* if the route not match */}
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
