import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Results from './components/Results'
import axios from 'axios'
const API_KEY = 'mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx' 


const categories = 'breakfast';

class App extends Component {
  
  state = {
    name: null,
    image: null,
    open: null,
    price: null,
    review_count: null,
    rating: null,
    address: null,
    phone: null,
    link: null,
    data: [],
  }
  
  
  
  getYelp = async (event) => {
    event.preventDefault()
    
    console.log(this.state)
    
    // const city = event.target.elements.city.value
    // const country = event.target.elements.country.value
    
    const location = event.target.elements.location.value
    
    console.log(location)
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    },
    params: {
      categories: `${categories}`,
    }
  })
  .then((data) => {
console.log(data)
this.setState({data: data});
data.data.businesses.map((item, key) => {
  // console.log(item)

  // this.setState({
  //   name: item.name,
  //   image: item.image_url,
  //   open: item.is_closed,
  //   price: item.price,
  //   review_count: item.review_count,
  //   rating: item.rating,
  //   address: item.location.address1,
  //   phone: item.phone,
  //   link: item.url
    
  // })
return data;
});



    console.log("final state after data", this.state)
  })
  .catch((err) => {
    console.log (err)
  })
  

}
render() {

  return (
    <div className="App">
    <Form 
    getYelp={this.getYelp}
    />
    <Results
    results = {this.state.data}
    name={this.state.name}
    image={this.state.image} 
    open={this.state.open}
    price={this.state.price}
    review_count={this.state.review_count}
    rating={this.state.rating}
    address={this.state.address}
    phone={this.state.phone}
    link={this.state.link}
    />
    </div>
    );
  }
}

export default App;
