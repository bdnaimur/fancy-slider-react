import React, { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import ShowImages from '../ShowImages/ShowImages';
import SliderInput from '../SliderInput/SliderInput';
import Sliders from '../Sliders/Sliders';

const Home = () => {
    const galleryHeader = document.querySelector('.gallery-header');
    const iamgeGallery = document.querySelector('.gallery');
    const [query, setQuery] = useState(" ");
    const [images, setImages] = useState([]);
    const [sliders, setSliders] = useState([]);
    const [sliderParentElement, setSliderParentElement] = useState([]);
    const [display, setDisplay] = useState({
        sliderInput: true,
        showImage : true,
        showSlide: false
    });
    
    const handleBlur = (event) =>{
        const newQuery = event.target.value;
        setQuery(newQuery);
    }
    const getImages = () =>{
        // imageArea.style.display = "block";
        galleryHeader.style.display = "flex";
        const KEY = `15674931-a9d714b6e9d654524df198e00&q`;
        const url = `https://pixabay.com/api/?key=${KEY}=${query}&image_type=photo&pretty=true`;
        fetch(url)
        .then(res => res.json())
        .then(data => setImages(data.hits))

    }
    var slideIndex = 0;
    let timer;
    const handleSlider = () =>{
        if(sliders.length>0){
            setDisplay({sliderInput:false,showImage:false,showSlide:true})
        }
        timer = setInterval(() => {
            slideIndex++;
            changeSlide(slideIndex);
        }, 1500);
    }
    const changeSlide = (index) =>{
        const newElement = document.querySelectorAll('added')
        console.log(newElement);
        console.log(index);
        if (index >= sliderParentElement.length) {
            index = 0;
            slideIndex = 0;
        }
        console.log(sliderParentElement);
        sliderParentElement.forEach(item => {
            item.style.display = "none"
        })
        newElement[index].style.display = "block"
    }
    const selectItem = (event,item) =>{
        let sliderParent = [];
        let slides = [];
        const parentElement = event.target.parentNode;
        parentElement.classList.add("added");
        console.log(parentElement);
        const itemIndex = slides.indexOf(item);
        if(itemIndex === -1){
            slides.push(item);
            sliderParent.push(parentElement);
        }
        else{alert("The Image is already selected")}
        setSliders(slides)
        setSliderParentElement(sliderParent);
        console.log(sliderParentElement);
    }
    return (
        <div>
            <SearchInput handleBlur={handleBlur} getImages={getImages}></SearchInput>
            {display.sliderInput&&<SliderInput handleSlider={handleSlider} iamgeGallery={iamgeGallery} galleryHeader={galleryHeader}></SliderInput>}
            {display.showImage&&(<ShowImages selectItem={selectItem} images = {images}></ShowImages>)}
            {display.showSlide&&(<Sliders slides={sliders}></Sliders>)}
        </div>
    );
};

export default Home;