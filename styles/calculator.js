// document.getElementById("info-form").addEventListener("submit", function(e) {
//   e.preventDefault(); // stop the page from reloading

<<<<<<< HEAD
//   // Get values from inputs
//   const gender = document.getElementById("Gender").value;
//   const age = document.getElementById("age").value;
//   const weight = document.getElementById("weight").value;
//   const height = document.getElementById("length").value;
//   const goal = document.getElementById("goal").value;
//   const workouts = document.getElementById("workouts").value;

//   // Show the values below the form
//   document.getElementById("result").innerHTML = `
//      <strong>Gender:</strong> ${gender} <br>
//      <strong>Age:</strong> ${age} <br>
//      <strong>Weight:</strong> ${weight} kg <br>
//      <strong>Height:</strong> ${height} cm <br>
//      <strong>Goal:</strong> ${goal === "lose" ? "Lose weight" : "Gain muscle"} <br>
//      <strong>Workouts per week:</strong> ${workouts}
//   `;
// });
=======
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
>>>>>>> 5cdda01d9208a3f10a703d63cb85f3084a66d30f
