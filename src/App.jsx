import Article from "./components/Article";

function App() {
  const data = '2022-10-16'
  return (
    <div>
      <Article
        title='新・Reactの勉強'
        content='Reactの勉強始めましたー!'
        date={data}
      />
    </div>
  );
}

export default App;
