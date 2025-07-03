import React from "react";
// import "./TechDetail.css";
import TutorialCard from "./TutorialCard"; 
const C = () => {
  return (
  <div>
      <TutorialCard
        heading="C Tutorial"
        subheading="Getting Started with Java"
        description="Java is a powerful, class-based, object-oriented programming language."
        link="https://docs.oracle.com/javase/tutorial/"
        code={`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
        list={["Variables", "Data Types", "Classes", "Objects"]}
        image="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
      />
    </div>
  );
};

export default C;
