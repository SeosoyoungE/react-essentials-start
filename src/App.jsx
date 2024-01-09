import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((core_concept) => {
              return <CoreConcept {...core_concept} />;
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
