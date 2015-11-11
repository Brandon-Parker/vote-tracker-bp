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

var img1 = new GuitarPhoto('Gibson 335', "images/335.jpg");
var img2 = new GuitarPhoto('Angus Young SG', "images/ay-sg.jpg");
var img3 = new GuitarPhoto('Beatles Rickenbacher', "images/b-rb.jpg");
var img4 = new GuitarPhoto('BB King Lucille', "images/bbk-l.jpg");
var img5 = new GuitarPhoto('PRS BlueGreen', "images/bluegreen-prs.jpg");
var img6 = new GuitarPhoto('Brian May', "images/bm.jpg");
var img7 = new GuitarPhoto('DC 400', "images/dc400.jpg");
var img8 = new GuitarPhoto('DC 600', "images/dc600.jpg");
var img9 = new GuitarPhoto('Kurt Cobain Jag', "images/kc-f.jpg");
var img10 = new GuitarPhoto('Les Paul', "images/lp.jpg");
var img11 = new GuitarPhoto('Slash Les Paul', "images/s-lp.jpg");
var img12 = new GuitarPhoto('Van Halen Strat', "images/vh-s.jpg");

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
    myNewChart = new Chart(ctx).Pie(guitarPhoto, {
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
