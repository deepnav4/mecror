// @ts-ignore: Allow side-effect import of CSS without type declarations
import "./index.css";
import { useState } from "react";

import { Form } from "./components/Form";
import Interview from "./components/Interview";
import Result from "./components/Result";
export function App() {
  const [page, setPage] = useState<"form" | "interview" | "result">("form");

  return(
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 ">
      {page === "form" && <Form />}
      {page === "interview" && <Interview />}
      {page === "result" && <Result />}
    </div>
  )
}

export default App;
