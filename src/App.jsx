import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Jerusha Holsinger</h1>
      <div className="card">
        <a href="#">Resume/CV</a>
        <a href="#">LinkedIn</a>
        <a href="#">About</a>
      </div>
    </>
  )
}

export default App
