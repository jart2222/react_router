import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoice from "./routes/invoice";
import Invoices from "./routes/invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route path="expenses" element={<Expenses></Expenses>}></Route>
        <Route path="invoices" element={<Invoices></Invoices>}>
        <Route path=":invoiceId" element={<Invoice />} />
        </Route>
      </Route>
      <Route
       path="*"
       element={
         <main style={{ padding: "1rem" }}>
           <p>There's nothing here!</p>
         </main>
       } 
      >
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);