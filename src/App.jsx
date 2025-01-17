import AboutMe from './components/AboutMe';
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App flex items-center justify-center flex-col text-center m-8">
      <div className="max-w-3xl">
        <Profile/>
        <Projects/>
      </div>
    </div>
  )
}

// testy

export default App;
