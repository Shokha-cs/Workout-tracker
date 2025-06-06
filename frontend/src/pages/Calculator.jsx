import React, { useState } from "react";

function Calculator() {
  const [formData, setFormData] = useState({
    Gender: "Male",
    age: "",
    weight: "",
    length: "",
    goal: "lose",
    workouts: "",
  });

  const [results, setResults] = useState({
    show: false,
    bmr: null,
    tdee: null,
    calorieGoal: null,
    workoutPlan: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateResults = () => {
    const age = Number(formData.age);
    const weight = Number(formData.weight);
    const height = Number(formData.length);
    const workouts = Number(formData.workouts);

    if (!age || !weight || !height || workouts < 0 || workouts > 7) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    let bmr;
    if (formData.Gender === "Male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityFactor = 1.2;
    if (workouts >= 1 && workouts <= 3) activityFactor = 1.375;
    else if (workouts >= 4 && workouts <= 5) activityFactor = 1.55;
    else if (workouts >= 6) activityFactor = 1.725;

    const tdee = bmr * activityFactor;

    let calorieGoal;
    if (formData.goal === "lose") {
      calorieGoal = tdee - 500;
    } else {
      calorieGoal = tdee + 300;
    }

    const workoutPlan = [];
    if (formData.goal === "lose") {
      workoutPlan.push("3 days of cardio");
      if (workouts >= 3) workoutPlan.push("2 days of strength training");
    } else {
      workoutPlan.push("4 days of strength training");
      if (workouts >= 5) workoutPlan.push("1-2 days of cardio");
    }

    setResults({
      show: true,
      bmr: bmr.toFixed(0),
      tdee: tdee.toFixed(0),
      calorieGoal: calorieGoal.toFixed(0),
      workoutPlan,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateResults();
  };

  return (
    <>
      <header>
        <h2>CALORIE CALCULATOR</h2>
        <p>
          The Calorie Calculator helps estimate the daily calorie intake a
          person needs. It also offers basic guidelines for weight loss or
          weight gain.
        </p>
      </header>

      <section className="form-container">
        <div className="form-card">
          <form id="info-form" onSubmit={handleSubmit}>
            <label htmlFor="Gender">Gender:</label>
            <select
              id="Gender"
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              required
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            <br />

            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="length">Height (cm):</label>
            <input
              type="number"
              id="length"
              name="length"
              value={formData.length}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="goal">Goal:</label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
            >
              <option value="lose">Lose weight</option>
              <option value="gain_muscle">Gain muscle</option>
            </select>
            <br />

            <label htmlFor="workouts">Workouts per week:</label>
            <input
              type="number"
              id="workouts"
              name="workouts"
              min="0"
              max="7"
              value={formData.workouts}
              onChange={handleChange}
              required
            />
            <br />

            <br />
            <br />
            <button className="submit" type="submit">
              Calculate Calories
            </button>
          </form>
        </div>
      </section>

        <section
          className="results-container"
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            marginTop: "20px",
          }}
        >
          <h2>🔍 Your Fitness Plan</h2>
          <p>
            <strong>BMR:</strong> <span id="bmr-output">{results.bmr}</span>{" "}
            kcal/day
          </p>
          <p>
            <strong>TDEE:</strong> <span id="tdee-output">{results.tdee}</span>{" "}
            kcal/day
          </p>
          <p>
            <strong>Calorie Goal:</strong>{" "}
            <span id="goal-output">{results.calorieGoal}</span> kcal/day
          </p>
          <h3>📆 Workout Plan</h3>
          <ul id="workout-plan-list">
            {results.workoutPlan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
    </>
  );
}

export default Calculator;
