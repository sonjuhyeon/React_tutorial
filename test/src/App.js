import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Section from "./component/Section";
import Sidebar from "./component/Sidebar";

import { sectionProps } from "./constents/json";

console.log(sectionProps);

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      {/* <Section title="test title" /> */}
      {sectionProps.map((section, idx) => (
        <Section
          key={idx}
          title={section.title}
          color={section.color}
          contents={section.contents}
          articles={section.articles}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
