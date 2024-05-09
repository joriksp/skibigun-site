import { useState } from "react";
import "./App.css";

import EngVersion from "./pages/EngVersion";

import {
   Navigate,
   RouterProvider,
   createBrowserRouter,
} from "react-router-dom";
import RusVersion from "./pages/RusVersion";
import AutoRedirect from "./pages/AutoRedirect";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacePolicy from "./pages/PrivacePolicy";

const router = createBrowserRouter([
   {
      path: "/",
      element: <AutoRedirect />,
      errorElement: "Error",
   },
   {
      path: "en/",
      element: <EngVersion />,
   },
   {
      path: "ru/",
      element: <RusVersion />,
   },
   {
      path: ":lang/termsofuse",
      element: <TermsOfUse />,
   },
   {
      path: ":lang/termsofuse",
      element: <TermsOfUse />,
   },
   {
      path: ":lang/privacypolicy",
      element: <PrivacePolicy />,
   },
]);

const language = navigator.language || navigator.userLanguage;

function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
