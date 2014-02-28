var slideshow = document.getElementById ("meca");
var pic = 
[

"../pics/company/okq8.png",
"../pics/company/autoexperten.png",
"../pics/company/meca.png",
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