let myIndex = 0;

let slide = function changePic() {
  var elements = document.getElementsByClassName("mySlides");
  for (i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > elements.length) {
    myIndex = 1
  }
  elements[myIndex - 1].style.display = 'block';
  setTimeout(changePic, 8000); // Change image every 8 seconds
}
slide();