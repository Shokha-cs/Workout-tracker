// document.getElementById("info-form").addEventListener("submit", function(e) {
//   e.preventDefault(); // stop the page from reloading


let mybutton = document.getElementById("topBtn");

// for user friendly experience, i also added a fucntion where the button only appears after 20px scrolled down
window.onscroll = function () {
  topScroll();
};

function topScroll() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Get top top function
function getTop() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Added smooth scroll to the code to show I'm able to also process it in javascript
}


document.getElementById("info-form").addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading

  // Get values from inputs
  const gender = document.getElementById("Gender").value;
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("length").value;
  const goal = document.getElementById("goal").value;
  const workouts = document.getElementById("workouts").value;

  let x = age + weight + height + workouts * 10;

  // Show the values below the form
  document.getElementById("result").innerHTML = `
     <strong>Gender:</strong> ${gender} <br>
     <strong>Age:</strong> ${age} <br>
     <strong>Weight:</strong> ${weight} kg <br>
    <strong>Height:</strong> ${height} cm <br>
     <strong>Goal:</strong> ${
       goal === "lose" ? "Lose weight" : "Gain muscle"
     } <br>
     <strong>Workouts per week:</strong> ${workouts}
    Total calories: {x}
  `;
});
