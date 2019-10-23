import React from 'react';
import { Route, Switch } from 'react-router-dom';
import posed from 'react-pose'

import Home from './containers/Home';
import About from './containers/About';
import SideBar from './layouts/SideBar';
import SearchUser from './containers/SearchUser';
import { Container, Page, Content } from './styles/style';
import ReactMemo from './containers/ReactMemo';
import UseCallBackHook from './containers/UseCallBackHook';
import UseMemo from './containers/UseMemo';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const App: React.FC = () => {
  return (
    <Route render={({ location }) => (
      <Container>
        <Page>
          <SideBar />
          <hr />
          <Content>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route path="/" exact component={Home} key="home" />
                <Route path="/about" component={About} key="about" />
                <Route path="/search" component={SearchUser} key="search" />
                <Route path="/react-memo" component={ReactMemo} key="react-memo" />
                <Route path="/react-use-callback" component={UseCallBackHook} key="react-use-callback" />
                <Route path="/react-use-memo" component={UseMemo} key="react-use-memo" />
              </Switch>
            </RouteContainer>
          </Content>
        </Page>
      </Container>
    )} />
  );
}

export default App;
