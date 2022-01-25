function generateCatFunction(){
  var image = document.createElement('img');//creating a img element
  var div = document.getElementById('flex-box-container-2');//getting access to the flex box <div>

  image.src = "IMAGES/cute-kitty.gif";//set the image's src to a link
  div.appendChild(image);//appending the image to the <div>
}