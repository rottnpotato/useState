import { useState } from 'react';
export  const logic =() =>{
   const [showFlashlight, setshowFlashlight] = useState(false);
   const [showCount, setShowCount] = useState(false);
   const [buttonDisabled, setButtonDisabled] = useState(false);
   const [showImage1, setShowImage1] = useState(true);
   const [isToggled, setIsToggled] = useState(false);
   const [count, setCount] = useState(0);
  
  function light () {
    setshowFlashlight(!showFlashlight);
    setButtonDisabled(true);
  };
   function buttonCounter() {
    setShowCount(!showCount);
    setButtonDisabled(true);
  };
  function toggleImage() {
    setShowImage1(!showImage1);
    setIsToggled(!isToggled);
  };
   function increment () {
    setCount(count + 1);
  };
   function decrement (){
    if (count > 0) {
      setCount(count - 1);
    }
  };
   function toggleComponentVisibility  () {
    setshowFlashlight(null);
    setShowCount(null);
    setButtonDisabled(false);
  };
  return{light,buttonCounter,toggleImage,increment,decrement,toggleComponentVisibility,showFlashlight,showCount,buttonDisabled,showImage1,isToggled,count};
};