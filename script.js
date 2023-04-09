/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//This is an array that will hold the file names! Add at least 4 images to the images array.
var images = new Array();
images[0] = "https://www.ups.com/assets/resources/smallbusiness/images/content/shipping-to-netherlands.jpg";
images[1] = "https://cdn.cnn.com/cnnnext/dam/assets/190315131613-07-netherlands-happiest-coutries-2018-full-169.jpg";
images[2] = "https://europening.com/wp-content/uploads/2019/10/Landscape-with-tulips-traditional-dutch-windmills-and-houses-near-the-canal-in-Zaanse-Schans-Netherlands-Europe-min.jpg";
images[3] = "https://www.planetware.com/photos-large/NL/netherlands-hoge-veluwe.jpg";
//This is an array that holds the names of each location shown in your pictures.
//Make sure that the index of each location is the same as the index of the picture in the images array
var locations = new Array();
locations[0] = "The Netherlands";
locations[1] = "Cycling in the Netherlands";
locations[2] = "Ranks in the Top 5 for the World Happiness Report 2021";
locations[3] = "De Hoge Veluwe National Park (One of the World's Most Diverse National Park Programs)";


//This is your starting index. First we start off at Home!
var index = 0;

//This function will help us toggle through our photos. Everytime the button is pressed it will call this function!
function showImage() {
  var img = document.getElementById("img");
  img.src = images[index];
  var polaroid = document.getElementById("polaroid");
  polaroid.title = locations[index];
  if (index < images.length - 1) {
    index = index+1;
  }

}
