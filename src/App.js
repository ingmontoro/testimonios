import './App.css'
import { Testimonio } from './components/Testimonio'
import { testimonios } from './mock.ts'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros clientes en ingmontoro.dev</h1>
        {testimonios.map((testimonio) => (
          <Testimonio
            name={testimonio.name}
            position={testimonio.position}
            description={testimonio.description}
            image={testimonio.image}
            country={testimonio.country}
            company={testimonio.company} />
        ))}
      </div>
    </div>
  );
}

export default App
