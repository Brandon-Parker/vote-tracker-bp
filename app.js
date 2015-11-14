if (localStorage.guitarPhoto) {
  var guitarPhoto = JSON.parse(localStorage.guitarPhoto);
} else {
  var guitarPhoto = [];
  var img1 = new GuitarPhoto('Kiesel Aqua Aries', "images/aqua-aries.jpg", "#2E9AFE");
  var img2 = new GuitarPhoto('PRS Custom 24 Charcoal Tri-Color Burst', "images/blackred-prs.jpg", "#B40404");
  var img3 = new GuitarPhoto('PRS Custom 24 Blue Green', "images/bluegreen-prs.jpg", "#01DF3A");
  var img4 = new GuitarPhoto('Kiesel DC7X', "images/dc7x.jpg", "#FE9A2E");
  var img5 = new GuitarPhoto('Carvin DC 400', "images/dc400.jpg", "#0040FF");
  var img6 = new GuitarPhoto('Kiesel Fire Aries', "images/fire-aries.jpg", "#FFFF00");
  var img7 = new GuitarPhoto('Kiesel Lava SCB7', "images/lava-scb7.jpg", "#FA58AC");
  var img8 = new GuitarPhoto('Gibson Les Paul Pro Black', "images/lespaul-b.jpg", "#585858");
  var img9 = new GuitarPhoto('Gibson Les Paul Vintage Burst', "images/lespaul.jpg", "#F5D0A9");
  var img10 = new GuitarPhoto('PRS Private Stock SC245 Zombie Heart', "images/sc-prs.jpg", "#D358F7");
  var img11 = new GuitarPhoto('Suhr Modern', "images/suhr.jpg", "#B45F04");
  var img12 = new GuitarPhoto('Nashville Telecaster', "images/tele.jpg", "#BDBDBD");
}

var display1 = document.getElementById ('displayImg1');
var display2 = document.getElementById ('displayImg2');
var myNewChart;

function GuitarPhoto (name, path, color) {
  this.name = name;
  this.path = path;
  this.value = 0;
  this.label = this.name;
  this.color = color;
  this.highlight = '#D0FB32';
  guitarPhoto.push(this);
}

var tracker = {
 photo1: 0,
 photo2: 0,
 getRandomNum: function (){
   return Math.floor(Math.random() * guitarPhoto.length);
 },
 getRandomImg: function (){
   this.photo1 = guitarPhoto[this.getRandomNum()];
   this.photo2 = guitarPhoto[this.getRandomNum()];
   var img1 = this.photo1.path;
   var img2 = this.photo2.path;
     while (img1 === img2) {
       this.photo2 = this.getRandomNum();
       img2 = guitarPhoto[this.photo2].path;
   };
   display1.src = img1;
   display2.src = img2;
   var capLeft = document.getElementById('capLeft');
   capLeft.innerHTML = this.photo1.name;
   var capRight = document.getElementById('capRight');
   capRight.innerHTML = this.photo2.name;
 },

refreshSegments: function() {
  for (var i = 0; i < guitarPhoto.length; i++) {
    myNewChart.segments[i].value = guitarPhoto[i].value;
  };
},

makeNewChart: function(){
  if (myNewChart) {
    tracker.refreshSegments();
    myNewChart.update();
    localStorage.setItem('guitarPhoto', JSON.stringify(guitarPhoto));
  } else {
    myNewChart = new Chart(ctx).Doughnut(guitarPhoto, {
    animationSteps : 100,
    animationEasing : 'easeOutBounce',
    percentageInnerCutout : 25,
    animateRotate : true,
    animateScale : true
      });
    }
  }
};

var voteLeft = function() {
  tracker.photo1.value +=1;
  tracker.makeNewChart();
  console.log(tracker.photo1.value + tracker.photo1.name);
  tracker.getRandomImg();
}

var voteRight = function() {
  tracker.photo2.value +=1;
  tracker.makeNewChart();
  console.log(tracker.photo2.value + tracker.photo2.name);
  tracker.getRandomImg();
}

display1.addEventListener('click', voteLeft)
display2.addEventListener('click', voteRight)

var ctx = document.getElementById("myChart").getContext("2d");

var pieOptions = {
  segmentShowStroke : false,
  animateScale : true
}

tracker.getRandomImg();
