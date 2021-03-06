import React from 'react';
import './App.css';
import BusinessList from '../Components/BusinessList/BusinessList';
import SearchBar from '../Components/SearchBar/SearchBar';

const business ={
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };
  const businesses =[
    business,
    business,
    business,
    business,
    business,
    business
  ];


export default class App extends React.Component{

  render() {
    return(
      <div class="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses}/>
      </div>
    )
  }
}
