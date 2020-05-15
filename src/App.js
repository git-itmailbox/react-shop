import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Layout } from "antd";
import "./App.css";

import { Home } from "./Pages/Home";
import Cart from "./Pages/Cart";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Header>Header</Header>
        <Layout style={{ minHeight: "100hv" }}>
          <Sider>Sider</Sider>
          <Content className="app-container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Router>
    </Layout>
  );
}

export default App;
