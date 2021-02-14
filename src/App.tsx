import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddArticle from "./pages/AddArticle";
import EditArticle from "./pages/EditArticle";
import SinglePage from "./pages/SinglePage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard/add">
            <AddArticle />
          </Route>
          <Route path="/dashboard/edit/:id">
            <EditArticle />
          </Route>
          <Route path="/:id">
            <SinglePage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

// Postman doku
// https://documenter.getpostman.com/view/14400092/TWDRtL6p

// API Endpoint
// https://blogbase-api.herokuapp.com/
