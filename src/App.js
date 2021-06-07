import './App.css';
import { Route, Switch } from 'react-router-dom';
import HeaderPage from './components/Header/HeaderPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterMain from './components/Footer/FooterPage';
import BasketPage from './components/Basket/BasketPage';
import LoginPage from './components/Login/LoginPage';
import React from 'react';
import CardContainer from './components/Home/HomePageContainer';
import { connect } from 'react-redux';
// import Preloader from './components/Preloader/Preloader';
import 'semantic-ui-css/semantic.min.css';
import { bindActionCreators } from 'redux';
import * as statesActions from '../src/Redux/items';
import orderBy from 'lodash';

// import {setFilter}

class App extends React.Component {
  sortBy = (items, filterBy) => {
    debugger;
    switch (filterBy) {
      case 'Home':
        return items;
      case 'Expensive':
        return orderBy(items, 'price', 'desc');
      case 'Cheap':
        return orderBy(items, 'price', 'asc');

      default:
        return items;
    }
  };

  render() {
    // const {items,setFilter} =
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
          <Route
            path="*"
            render={() => (
              <div>
                <h1>404 NOT FOUND</h1>
              </div>
            )}
          />
        </Switch>
        <FooterMain />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    items: state.items,
    filterBe: state.filterBe,
  };
};
let mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(statesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
