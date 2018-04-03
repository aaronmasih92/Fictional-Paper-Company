//obtained from URL = https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr 

//we are essentially creating a slideshow by hiding all the picturess at once and then showing one picture one at a time with a conditional statement and a counter(a slide index) that cleverly manages to cycle all the pictures.

let slideIndex = 0;  //picture index set that is set to zero in this variable

let slideShow = function changePic() { // function created with intention of changing pictures

  let pics = document.getElementsByClassName("pics");  //targets all the pics on html
  for (i = 0; i < pics.length; i++) {                 //for loop goes thru all the pics
    pics[i].style.display = 'none';                    // hides each pic
  }
  slideIndex++;// slide index goes from 0 to 1 right here (in reference to the line 1)
if (slideIndex > pics.length) {// conditional statement comparing the new slide index to the number of pics on the html page. is the counter greater than the number of html pics? no. 
    slideIndex = 1}  								//so it stays 1.								
 pics[slideIndex - 1].style.display = 'block';	// 1 - 1 = [0] so it makes sure to display the first[0] img element 
  setTimeout(changePic,3000);// this line is meant to execute the function( aka change a picture) every 3s 
}

slideShow();  //function called upon
let pic = document.getElementById('pic');

let randoPics = ["http://payment.americanarborists.net/wp-content/uploads/2016/09/planting-trees.jpg","http://www.mishawakatreeservice.com/uploads/8/4/0/3/84031734/_9726028_orig.jpg","https://aztrees.org/resources/SiteAlbums/33219080/ACTCws_tree_planting_21.JPG","http://actrees.org/wp-content/uploads/2016/07/Landlife-cocoons.jpg", "https://tarihnedio.com/wp-content/uploads/2017/12/How-to-make-best-and-fertile-soil-medium-for-your-plants-585x390.jpg", "https://zululandobserver.co.za/wp-content/uploads/sites/56/2015/08/arbor-day2.jpg","https://nfs.unl.edu/girls-planting-tree.jpg", "https://19mvmv3yn2qc2bdb912o1t2n-wpengine.netdna-ssl.com/science/files/2016/08/TNC_ForestersWorkshop_HannahLetinich091.jpg"]


function randoPic() {
  pic.src = randoPics[Math.floor(Math.random()*randoPics.length)];
}

document.getElementById('btn').addEventListener('click', randoPic);
