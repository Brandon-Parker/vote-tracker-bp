var guitarPhoto = []
var display1 = document.getElementById ('displayImg1');
var display2 = document.getElementById ('displayImg2');
var myNewChart;

function GuitarPhoto (name, path) {
  this.name = name;
  this.path = path;
  this.value = 0;
  this.label = this.name;
  this.color = '#FEEDB8';
  this.highlight = '#D0FB32';
  guitarPhoto.push(this);
}

var img1 = new GuitarPhoto('Kiesel Aqua Aries', "images/aqua-aries.jpg");
var img2 = new GuitarPhoto('Blood Red PRS', "images/blackred-prs.jpg");
var img3 = new GuitarPhoto('Blue Green PRS', "images/bluegreen-prs.jpg");
var img4 = new GuitarPhoto('Kiesel DC7X', "images/dc7x.jpg");
var img5 = new GuitarPhoto('Carvin DC 400', "images/dc400.jpg");
var img6 = new GuitarPhoto('Kiesel Fire Aries', "images/fire-aries.jpg");
var img7 = new GuitarPhoto('Kiesel Lava SCB7', "images/lava-scb7.jpg");
var img8 = new GuitarPhoto('Gibson Les Paul Pro Black', "images/lespaul-b.jpg");
var img9 = new GuitarPhoto('Gibson Les Paul Vintage Burst', "images/lespaul.jpg");
var img10 = new GuitarPhoto('Custom Single Cut PRS', "images/sc-prs.jpg");
var img11 = new GuitarPhoto('Suhr Modern', "images/suhr.jpg");
var img12 = new GuitarPhoto('Nashville Telecaster', "images/tele.jpg");

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
