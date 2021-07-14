import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    id: '001',
    url: '../images/north-america.png'
  },
  {
    id: '003',
    url: '../images/south-america.png'
  },
  {
    id: '009',
    url: '../images/asia.png'
  },
  {
    id: '011',
    url: '../images/europe.png'
  },
  {
    id: '017',
    url: '../images/australia.png'
  },
  {
    id: '020',
    url: '../images/africa.png'
  },
  {
    id: '030',
    url: '../images/antarctica.png'
  }
];

ReactDOM.render(
  <Carousel images={images}/>,
  document.querySelector('#root')
);
