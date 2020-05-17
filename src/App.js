import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom"
import { Layout, Menu } from "antd"
import "./App.css"

import { Home } from "./Pages/Home"
import Cart from "./Pages/Cart"

const { Header, Footer, Sider, Content } = Layout

function App() {
  return (
    <Layout>
      <Router>
        <Header>
          <div className="container flex-center-center">
            <nav style={{ display: "flex" }}>
              <NavLink exact to="/" className="headerLink">
                Главная
              </NavLink>
            </nav>
          </div>
        </Header>
        <Layout style={{ minHeight: "100hv" }}>
          <Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%", borderRight: 0 }}>
              <Menu.Item key="1">
                <NavLink exact to="/" className="headerLink">
                  Главная
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/cart" className="headerLink">
                  Корзина
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
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
  )
}

export default App
