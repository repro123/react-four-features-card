import "./App.css";

const data = [
  {
    title: "Supervisor",
    text: "Monitors activity to identify project roadblocks",
    image: "/public/images/icon-supervisor.svg",
    id: 1,
  },
  {
    title: "Team Builder",
    text: "Scans our talent network to create the optimal team for your project",
    image: "/public/images/icon-team-builder.svg",
    id: 2,
  },
  {
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality",
    image: "/public/images/icon-karma.svg",
    id: 3,
  },
  {
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates",
    image: "/public/images/icon-calculator.svg",
    id: 4,
  },
];

function App() {
  return (
    <main>
      <div className="c-card-component">
        <Heading />
        <Cards />
        <Footer />
      </div>
    </main>
  );
}

function Heading() {
  return (
    <hgroup className="c-card-component__heading">
      <h1>
        Reliable, efficient delivery <span>Powered by Technology</span>
      </h1>
      <p>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </hgroup>
  );
}

function Cards() {
  return (
    <ul className="c-card-component__grid-container">
      {data.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </ul>
  );
}

function Card({ card }) {
  return (
    <li className={`grid-container__items item-${card.id}`}>
      <h2>{card.title}</h2>
      <p>{card.text}</p>
      <img src={card.image} alt="" />
    </li>
  );
}

function Footer() {
  return (
    <footer>
      <p className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Ibrahim Bello</a>.
      </p>
    </footer>
  );
}

export default App;
