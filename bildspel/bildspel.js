var slideshow = document.getElementById ("face");
var pic = 
[
"../pics/blackface2.jpg",
"../bildspel/img1.jpg",
"../bildspel/img2.jpg",
"../bildspel/img3.jpg",
"../bildspel/img4.jpg",
"../bildspel/img5.jpg",
];

var counter = 0;
var show; 
        
function delay () {
            setInterval(function() {
                    display();
                    
if(counter < pic.length -1){
     counter++;
     }
     else{
    counter = 0;
    }
                    
    },4000);
    }
function display(show){
    display.pic = slideshow.src = pic[counter];
     }
 window.onload = delay();