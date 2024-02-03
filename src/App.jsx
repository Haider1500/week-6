// import React, { Suspense, lazy, useState } from "react";

import { useContext, useState } from "react";
import countContext from "./components/Context";
import CountContext from "./components/Context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import countState from "./components/store/Count";
import evenOddState from "./components/store/Selector";

// import "./App.css";
// // import Landing from "./components/Landing";
// // import Dashboard from "./components/Dashboard";
// const Dashboard = React.lazy(() => import("./components/Dashboard"));
// const Landing = React.lazy(() => import("./components/Landing"));
// import {
//   BrowserRouter,
//   Route,
//   Router,
//   Routes,
//   useNavigate,
// } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter basename="/">
//         {/* <Button /> */}
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"...loading"}>
//                 <Landing />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/dashboard"
//             element={
//               <Suspense fallback={"...loading"}>
//                 <Dashboard />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// function Button() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => navigate("/")}>landing page</button>
//       <button onClick={() => navigate("/dashboard")}>dashboard</button>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);
//   console.log(countContext, "=======first log");
//   return (
//     <div>
//       <CountContext.Provider value={{ count: count, setCount: setCount }}>
//         <Count count={count} setCount={setCount} />
//         <CountRecorder count={count} setCount={setCount} />
//       </CountContext.Provider>
//     </div>
//   );
// }

// export default App;

// function Count() {
//   return (
//     <div>
//       <Button />
//     </div>
//   );
// }
// function CountRecorder() {
//   return (
//     <div>
//       <Button />
//     </div>
//   );
// }

// function Button() {
//   const { count, setCount } = useContext(CountContext);
//   console.log(count, "======count");
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   );
// }

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
export default App;

function Count() {
  console.log("I am Count");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  // const { count } = useContext(CountContext);
  const count = useRecoilValue(countState);
  const value = useRecoilValue(evenOddState);
  console.log(value, "=========value");
  console.log(count, "==========count");
  return (
    <div>
      {count}
      <p>{value ? "This is even" : "This is odd"}</p>
    </div>
  );
}

function Buttons() {
  // const { setCount } = useContext(CountContext);

  // const [count, setCount] = useRecoilState(countState);
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
      <button onClick={() => setCount((count) => count - 1)}>decrement</button>
    </div>
  );
}
