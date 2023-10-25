function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





// /The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active")
}





document.querySelector("button").addEventListener("click", getFetch);


function getFetch() {
  //grabs date from date input and puts into choice
  const choice = document.querySelector("input").value
  //api url. &date=${choice} which is what we get from the date input
  const url = `https://api.nasa.gov/planetary/apod?api_key=MD1bIYfwaYs6YJmaCDwYyF1Sn3i4b1DYphBhZ7fP&date=${choice}`;


  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data)
    
      document.querySelector('h2').innerText = data.title //go to DOM, find h2, put info that is in data.title
      
      if(data.media_type === 'video')  { //if the object 'data', property 'media_type' is 'video'
        document.querySelector('iframe').src = data.url
        document.getElementById("pic").style.display = 'none'
        

      }else if(data.media_type === 'image'){//if the object 'data', property 'media_type' is 'image'
        document.querySelector('img').src = data.hdurl //go to DOM, find img, put info that is in data.hdurl
                  document.getElementById("vid").style.display = 'none'

      }
      
      
      
      document.querySelector('.explain').innerText = data.explanation//go to DOM, find h3, put info that is in data.explanation
     
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}