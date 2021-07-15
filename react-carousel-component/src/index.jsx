import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    id: '001',
    url: '../images/koala.jpeg'
  },
  {
    id: '033',
    url: '../images/meow.jpeg'
  },
  {
    id: '003',
    url: '../images/chickie.jpeg'
  },

  {
    id: '017',
    url: '../images/doge.jpeg'
  },
  {
    id: '057',
    url: '../images/wool.jpeg'
  },
  {
    id: '011',
    url: '../images/giraffe.jpeg'
  },
  {
    id: '004',
    url: '../images/tweet.jpeg'
  }
];

ReactDOM.render(
  <Carousel images={images}/>,
  document.querySelector('#root')
);
