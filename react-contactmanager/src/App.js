import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListContactComponent from './Components/ListContactComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateContactComponent from './Components/CreateContactComponent';
import ViewContactComponent from './Components/ViewContactComponent';

function App() {
  return (
    <div>
      <Router>
       
            <HeaderComponent />
            <div className="container">
              <Switch>
                  <Route path="/" exact component = {ListContactComponent}></Route>
                  <Route path="/contacts" component = {ListContactComponent}></Route>
                 
                  <Route path={["/add-contact/:id","/add-contact"]} component = {CreateContactComponent}></Route>
                  <Route path="/view-contact/:id" component={ViewContactComponent}></Route>
                  {/* this is how the path looks like to perform update and add operation together */}
              </Switch>
            
            </div>
            <FooterComponent />
       
      </Router>
    </div>
    
  );
}

export default App;
