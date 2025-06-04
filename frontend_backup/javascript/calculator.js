
  document.getElementById("info-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const gender = document.getElementById("Gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("length").value);
    const goal = document.getElementById("goal").value;
    const workouts = parseInt(document.getElementById("workouts").value);

    let bmr;
    if (gender === "Male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityFactor;
    if (workouts === 0) activityFactor = 1.2;
    else if (workouts <= 2) activityFactor = 1.375;
    else if (workouts <= 4) activityFactor = 1.55;
    else if (workouts <= 6) activityFactor = 1.725;
    else activityFactor = 1.9;

    const tdee = bmr * activityFactor;
    let calorieGoal;
    if (goal === "lose") {
      calorieGoal = tdee - 500;
    } else if (goal === "gain_muscle") {
      calorieGoal = tdee + 300;
    }

    const workoutTypes = goal === "gain_muscle"
      ? ["Chest & Triceps", "Back & Biceps", "Leg Day", "Shoulders", "Core"]
      : ["Cardio", "HIIT", "Strength Training", "Stretching", "Active Rest"];

    const plan = [];
    for (let i = 1; i <= workouts; i++) {
      plan.push(`Day ${i}: ${workoutTypes[(i - 1) % workoutTypes.length]}`);
    }

    // Show result
    document.querySelector(".results-container").style.display = "block";
    document.getElementById("bmr-output").textContent = Math.round(bmr);
    document.getElementById("tdee-output").textContent = Math.round(tdee);
    document.getElementById("goal-output").textContent = Math.round(calorieGoal);

    const planList = document.getElementById("workout-plan-list");
    planList.innerHTML = "";
    plan.forEach((dayPlan) => {
      const li = document.createElement("li");
      li.textContent = dayPlan;
      planList.appendChild(li);
    });
  });


