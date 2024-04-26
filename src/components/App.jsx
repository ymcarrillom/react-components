import CounterApp from "./counter/CounterApp";
import PokemonApp from "./Pokemon_Filter/PokemonApp";
import ShoppingCartApp from "./Shopping_Cart/ShoppingCartApp";

function App() {
  return (
    <>
      <main>
        <section className="section">
          <div className="container">
            <article className="article">
              <h1 className="hero__title">React Components</h1>
              <h3 className="hero__lead">
                Team c13w09t05: Paolo Charca, Paul Bautista, Yonatan Carrillo
              </h3>
            </article>
          </div>
        </section>
        <section className="section bg--alternative">
          <div className="container">
            <article className="article">
              <CounterApp />
            </article>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <article className="article">
              <PokemonApp />
            </article>
          </div>
        </section>
        <section className="section bg--alternative">
          <div className="container">
            <article className="article">
              <ShoppingCartApp />
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
