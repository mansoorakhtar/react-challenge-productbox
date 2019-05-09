import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Items from './containers/Items/Items';
import AddItem from './containers/AddItem/AddItem';
import Home from './components/Home/Home';

function App() {
  return (
    <Layout>
        <Switch>
            <Route path="/add-item" component={AddItem}></Route>
            <Route path="/items" component={Items}></Route>
            <Route path="/checkout" component={Checkout}></Route>
            <Route path="/" exact component={Home}></Route>
        </Switch>
    </Layout>
  );
}

export default App;
