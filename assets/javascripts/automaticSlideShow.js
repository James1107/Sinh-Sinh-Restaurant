var myIndex = 0;
sliderShow();

function sliderShow(){
    var arrayPhotos = document.getElementsByClassName("slider-show");
    for (let index = 0; index < arrayPhotos.length; index++) 
    {
        arrayPhotos[index].style.display = "none";
    }
    myIndex++;
    if (myIndex > arrayPhotos.length) {
        myIndex = 1;
    }
    arrayPhotos[myIndex - 1].style.display = "block";
    setTimeout(sliderShow, 4000);
}