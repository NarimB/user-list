import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { UsersList } from "./pages/UsersList/UsersList";
import { UserDetails } from "./pages/UserDetails/UserDetails";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<UsersList />}></Route>
            <Route path="/users/:id" element={<UserDetails />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
