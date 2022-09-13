import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

setupCounter(document.querySelector('#counter'));
$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});