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

var pic = document.getElementById('pic');

var randoPics = ["http://payment.americanarborists.net/wp-content/uploads/2016/09/planting-trees.jpg","http://www.mishawakatreeservice.com/uploads/8/4/0/3/84031734/_9726028_orig.jpg","https://aztrees.org/resources/SiteAlbums/33219080/ACTCws_tree_planting_21.JPG","http://actrees.org/wp-content/uploads/2016/07/Landlife-cocoons.jpg", "https://tarihnedio.com/wp-content/uploads/2017/12/How-to-make-best-and-fertile-soil-medium-for-your-plants-585x390.jpg", "https://zululandobserver.co.za/wp-content/uploads/sites/56/2015/08/arbor-day2.jpg","https://nfs.unl.edu/girls-planting-tree.jpg", "https://19mvmv3yn2qc2bdb912o1t2n-wpengine.netdna-ssl.com/science/files/2016/08/TNC_ForestersWorkshop_HannahLetinich091.jpg"]


function randoPic() {
  pic.src = randoPics[Math.floor(Math.random()*randoPics.length)];
}

document.getElementById('btn').addEventListener('click', randoPic);
