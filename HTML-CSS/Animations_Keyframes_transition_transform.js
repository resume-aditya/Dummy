// Transition
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}

div:hover {
  width: 300px;
}

// OR
div {
  transition: width 2s, height 4s;
}

div {
  transition-property: width;
  transition-duration: 2s;
  transition-timing-function: linear;
  transition-delay: 1s;
}

div#myDiv {
  transform: rotate(20deg);
}
// translate()
// rotate()
// scaleX()
// scaleY()
// scale()
// skewX()
// skewY()
// skew()
// matrix()

/************************ */


@keyframes mymove {
    from {top: 0px;}
    to {top: 200px;}
  }

//   OR

@keyframes mymove {
    0%   {top: 0px;}
    25%  {top: 200px;}
    50%  {top: 100px;}
    75%  {top: 200px;}
    100% {top: 0px;}
  }
  

  div {
    width: 100px;
    height: 100px;
    background: red;
    position: relative;
    animation: mymove 5s infinite;
  }

  <div></div>


  // Change many CSS styles in one animation:

      @keyframes mymove {
        0%   {top: 0px; background: red; width: 100px;}
        100% {top: 200px; background: yellow; width: 300px;}
      }