
/*const man = fs.readFileSync('explore.html','utf-8');
const apple=fs.readFileSync('index.html','utf-8');
const { readFileSync } = require('fs');
const http = require('http');
const events = require('events');
const server = http.createServer((request,response)=>{
   /// response.end(banana);
    let path = request.url;
    if(path === '/' || path === '/home'){      
        response.end(apple);
    }
    else if(path === '/explore'){
        response.end(banana);
    }
    else{
        response.end('page not found');
    }
    console.log('A new request received');
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('server has started');
})
*/




function togglePopup() {
  document.getElementById("popup-1")
    .classList.toggle("active");
}













var navLinks = document.getElementById("navLinks");
function showMenu(){
  navLinks.style.right = "0";
}
function hideMenu(){
  navLinks.style.right = "-200";
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}























const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack() {
 //e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_52df89bda24937b742986cbefcfd238345489793', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount:localStorage.getItem('myValue')*100,
    currency: "GHS",
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}

