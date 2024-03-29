import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TapButton from "./components/TapButton";

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton>Components</TapButton>
            <TapButton>JSX</TapButton>
            <TapButton>Props</TapButton>
            <TapButton>State</TapButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
