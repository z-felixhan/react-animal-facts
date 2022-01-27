import Fact from "./Fact";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Random Facts</h2>
          <div className="underline"></div>
        </div>
        <Fact />
      </section>
    </main>
  );
}

export default App;
