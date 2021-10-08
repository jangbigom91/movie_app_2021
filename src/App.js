import React from 'react';

function Food({ name, picture }){
  return <div>
    <h2>I like {name}</h2>
    <img src= {picture} />
  </div>
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  
  {
    name: "Samgyeopsal",
    image: "https://static.hubzum.zumst.com/hubzum/2021/03/12/08/d53c3c3a7dd54125b3b3235a6882a26e.jpg"
  },
  
  {
    name: "Bibimbap",
    image: "http://bonworld.co.kr/./files/attach/images/183/306/e97a24481c4332ff4bc9f8ce88bb4224.jpg"
  },
  
  {
    name: "Doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },

  {
    name: "Kimbap",
    image: "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  },
    
  {
    name: "Samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
