const Card = ({ title, rating, isCool, actors }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      <p>{isCool ? "Cool show!" : "Not so cool."}</p>
      <ul>
        {actors && actors.map((actor, idx) => (
          <li key={idx}>{actor.name} ({actor.age})</li>
        ))}
      </ul>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      <Card title="Star Trek" rating={5} isCool={true} actors={[{ name: 'William Shatner', age: 62}]} />
      <Card title="The Expanse" rating={5} isCool={true} actors={[{ name: 'Steven Strait', age: 36}]} />
      <Card title="Battlestar Galactica" rating={5} isCool={true} actors={[{ name: 'Edward James Olmos', age: 70}]} />
    </div>
  );
};

export default App;
