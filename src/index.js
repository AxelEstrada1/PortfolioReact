import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Welcome to my portfolio! I am a passionate developer with expertise in web development.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>You can reach me at example@example.com.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;

