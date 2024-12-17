function changeImage() {
    let image= document.getElementById('myImage');
    if (image.src.match('./bulbOn.jpg')){
        image.src ='./bulbOff.jpg';
    }
    else{
        image.src ='./bulbOn.jpg';
    }
}