import React from 'react';
import './App.css';
import Nav from './Nav'
import MovieBox from './MovieBox'
import StarRating from './StarRating'
import Spinners from './Spinner'


let movies = [{
  name: 'Shrek',
  img:'https://images.justwatch.com/poster/8732863/s592',
  rating: 4
},
{
  name: 'Shrek 2',
  img:'https://images-na.ssl-images-amazon.com/images/I/71HQiOZsZ6L._SY445_.jpg',
  rating: 5
},
{
 name:'Shrek 3',
 img:'https://prodimage.images-bn.com/pimages/0191329061084_p0_v1_s550x406.jpg',
 rating: 3
}]



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movies: movies,
      rate: 1,
      text: '',
      loading: true
    }
    setTimeout(() => {
      this.setState({
        loading: false
      })
      
    }, 5000);

  }
  
  Add = () => {
    let movieName = prompt('Please enter movie name')
    let movieLink = prompt('Please enter image link')
    let movieRate = prompt('Rate this movie')
    let c = {name: movieName, img: movieLink, rating: movieRate}
  
    this.setState({
      movies: this.state.movies.concat(c)
    })
    console.log(movies)
  }
  rateIt = x => {
    this.setState({
      rate: x
    })
  }
  input = x => {
    this.setState({
      text: x
      
    })
  }
  
  
  render() {return (
    <div className="App">
      <div className='Bar'>
      <Nav input={x => this.input(x)}/>
      <StarRating count={this.state.rate} setRating={x => this.rateIt(x)}/>
      </div>
      <MovieBox loading={this.state.loading} items={this.state.movies.filter(el => el.rating >= this.state.rate && el.name.toUpperCase().includes(this.state.text.toUpperCase().trim()))}/>
      <button onClick={ this.Add}>+</button>
      
     
     
    </div>
  )};
}

export default App;
