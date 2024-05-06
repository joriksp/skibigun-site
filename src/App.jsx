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
      path: "skibigun-site/",
      element: <AutoRedirect />,
   },
   {
      path: "skibigun-site/en/",
      element: <EngVersion />,
   },
   {
      path: "skibigun-site/ru/",
      element: <RusVersion />,
   },
]);

function App() {
   return (
      <>
         {/* <RouterProvider router={router} /> */}
         <EngVersion />
      </>
   );
}

export default App;
