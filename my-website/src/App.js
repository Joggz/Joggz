import React from 'react';

import Homepage from './page/Homepage';
import Header from './component/Header/index';
import About from './page/About/index'

import  { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header />
     <Switch>
       <Route exact path='/' component={Homepage} />
       <Route exact path='/about' component={About} />
       {/* <Route exact path='/work' component={Work} />
       <Route exact path='/contact' component={Contact} /> */}
     </Switch>
    </div>
  );
}

export default App;
