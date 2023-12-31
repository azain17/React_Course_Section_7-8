import React, { useState } from "react";
import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all Exercises!", id: "g1" },
    { text: "Finish the course", id: "g2" },
  ]);

  const handleAddGoal = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const handleDeleteItem = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No Goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={handleDeleteItem} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={handleAddGoal} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
