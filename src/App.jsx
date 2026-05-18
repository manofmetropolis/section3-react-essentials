import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/Example/TabButton";
import { useState } from 'react';

function App() {
  // useState called; must be at top level of component function. State is data stored by React which, when changed, signals that the app should be re-rendered.
  // useState returns array: [current value for execution cycle, updated value]
  // The second value is a function that is exeucted to update the state. It also tells React to do the function again.
  // You can store to a variable; And the variable can be const, because it is recreated every time, not "changed."

  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent = 'Click a button';

  // Use a function for the value of onClick.
  // Pretty typical naming convention here: handle + event (also, event + Handler)
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic); // If you log right after scheduling update, it won't appear correctly.
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Create a function for what happens when the button is clicked */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;