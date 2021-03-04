
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Detail, Home, Login, Register } from './views';
function App() {
  return (
    <div >
      <BrowserRouter>
       <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route render={() => <>页面跑火星了</>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
