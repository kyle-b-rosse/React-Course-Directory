import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';


const App = () => (
	<BrowserRouter>
	  <div className="container">
	  	<Header />
	  	<Switch>
	  	<Route exact path="/" component={Home}/>
	  	<Route path="/About" component={About} />
	  	<Route exact path="/Teachers" component={Teachers} />
	  	<Route path="/Teachers/:topic/:name" component={Featured} />
	  	<Route path="/Courses" component={Courses} />
	  	<Route component={NotFound} />
	  	</Switch>
	  </div>
	</BrowserRouter>
);

export default App;