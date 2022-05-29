import React, { Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';


class App extends Component {
  constructor() {
  	super()
  	this.state = {
  		robots: [],
	    searchfield: ''
  	}
  }

  componentDidMount() {
  	fetch('https://jsonplaceholder.typicode.com/users')
  	 .then(response => {
  		 return response.json();
  	 })
  	 .then(users => {
  	 		this.setState({ robots: users});
        
  	 })
  }

  onSearchChange = (event) => {
  	this.setState({ searchfield: event.target.value })
  	
	 }

  
  render() {
  const { robots, searchfield } = this.state;
  const filteredRobots = robots.filter(robot =>{
  	return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	  	})
	return(
	  <div className ='tc' > 
		 <h1 className= 'f2'> RoboFriends </h1>
		 <SearchBox searchChange={this.onSearchChange} />
		 <Scroll>
		  <CardList robots = { filteredRobots }/>
		 </Scroll>
	  </div>

	);
  }
}

export default App; 

// state is an object that describes your app
// it specifies things that can be changed in our app