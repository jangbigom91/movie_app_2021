import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 4.8
  },
  
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://static.hubzum.zumst.com/hubzum/2021/03/12/08/d53c3c3a7dd54125b3b3235a6882a26e.jpg",
    rating: 4.9
  },
  
  {
    id: 3,
    name: "Bibimbap",
    image: "http://bonworld.co.kr/./files/attach/images/183/306/e97a24481c4332ff4bc9f8ce88bb4224.jpg",
    rating: 5
  },
  
  {
    id: 4,
    name: "Doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.7
  },

  {
    id: 5,
    name: "Kimbap",
    image: "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 5
  },
    
  {
    id: 6,
    name: "Samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.5
  }
]

function Food({ name, picture, rating }){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src= {picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => 
        (<Food 
            key={dish.id} 
            name={dish.name} 
            picture={dish.image} 
            rating={dish.rating}
          />
      ))}
    </div>
  );
}

export default App;
