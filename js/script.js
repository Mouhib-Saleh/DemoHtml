function toggleMenu(){
  document.querySelector("nav").classList.toggle("active") 

}
const section1 = document.querySelector('.dots-container');
const dot1 = section1.querySelector('span:nth-child(1)');
const dot2 = section1.querySelector('span:nth-child(2)');
const dot3 = section1.querySelector('span:nth-child(3)');
const sectionBg = document.querySelector('.section1');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2S')

var photoid = 0 ;
var ph=[ {
  "url":"https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg",
  "title":"Site1"
},
{
  "url":"https://static.vecteezy.com/system/resources/previews/011/262/951/non_2x/abstract-banner-design-with-green-geometric-background-green-banner-background-vector.jpg",
  "title":"Site2"
},
{
  "url":"https://w0.peakpx.com/wallpaper/538/156/HD-wallpaper-abstract-geometric-purple-modern-stylish-smooth-dark-banner-background-2202920-vector-art-at-vecteezy.jpg",
  "title":"Site3"
}
]
 
sectionBg.style.backgroundImage = "url("+ph[0].url+")";
document.querySelector(".title2").innerHTML =ph[0].title

btn1.addEventListener('click', function() {
  if(photoid >0){
  photoid--;
  sectionBg.style.backgroundImage = "url("+ph[photoid ].url+")";
  document.querySelector(".title2").innerHTML =ph[photoid].title
}
else{
  photoid =2;
  sectionBg.style.backgroundImage = "url("+ph[photoid ].url+")";
  document.querySelector(".title2").innerHTML =ph[photoid].title
}
});
btn2.addEventListener('click', function() {
  if(photoid<2){
    photoid++
    sectionBg.style.backgroundImage = "url("+ph[photoid ].url+")";
    document.querySelector(".title2").innerHTML =ph[photoid].title
}
else{
  photoid =0;
  sectionBg.style.backgroundImage = "url("+ph[photoid ].url+")";
  document.querySelector(".title2").innerHTML =ph[photoid].title
}
});

dot1.addEventListener('click', function() {
  sectionBg.style.backgroundImage = "url("+ph[0].url+")";
  photoid =0;
  document.querySelector(".title2").innerHTML =ph[0].title

});
dot2.addEventListener('click', function() {
  sectionBg.style.backgroundImage = "url("+ph[1].url+")";
  photoid =1;
  document.querySelector(".title2").innerHTML =ph[1].title
});
dot3.addEventListener('click', function() {
  sectionBg.style.backgroundImage = "url("+ph[2].url+")";
  photoid =2;
  document.querySelector(".title2").innerHTML =ph[2].title
});


