import { useState } from "react";

import EngVersion from "./pages/EngVersion";

import {
   Navigate,
   RouterProvider,
   createBrowserRouter,
} from "react-router-dom";
import RusVersion from "./pages/RusVersion";
import AutoRedirect from "./pages/AutoRedirect";

const router = createBrowserRouter([
   {
      path: "/",
      element: <AutoRedirect />,
   },
   {
      path: "en/",
      element: <EngVersion />,
   },
   {
      path: "ru/",
      element: <RusVersion />,
   },
]);

function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
