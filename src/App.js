import Clock from './component/Clock'

const nomes = ['Alan', 'Gisele', 'Edite']

function App() {
  return (
    <div>
      {
        nomes.map(() => {
          return <Clock/>
        })
      }
    </div>
  );
}

export default App;