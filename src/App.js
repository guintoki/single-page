import React from 'react';
import './App.css';
import MenuTop from './components/MenuTop/MenuTop';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuTop />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path='/' exact component={Resumo} />
              <Route path='/consultas' component={Consultas} />
              <Route path='/faturamento' component={Faturamento} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
