import './App.css';
import { Route, Switch } from 'react-router-dom';
import HeaderPage from './components/Header/HeaderPage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomePage from './components/Home/HomePage';
import FooterMain from './components/Footer/FooterPage';
import BasketPage from './components/Basket/BasketPage';
import LoginPage from './components/Login/LoginPage';
import React from 'react';
import CardContainer from './components/Home/HomePageContainer';
import { connect } from 'react-redux';
// import Preloader from './components/Preloader/Preloader';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  render() {
    // if (!this.props.state) {
    //   return <Preloader />;
    // }
    return (
      <div className="App">
        <HeaderPage />
        <Switch>
          <Route exact path="/" component={CardContainer} />
          <Route path="/Basket" component={BasketPage} />
          <Route path="/Login" component={LoginPage} />
          <Route path="*" render={() => <div>404 NOT FOUND</div>} />
        </Switch>
        <FooterMain />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
export default connect(mapStateToProps, {})(App);
