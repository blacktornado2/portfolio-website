import Introduction from "./components/Introduction/Introduction";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
// import Projects from "./components/Projects/Projects";
// import Education from "./components/Education/Education";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className="App">
			<Introduction/>
			<AboutMe/>
			<Skills/>
			<Resume/>
			{/* <Projects/> */}
			{/* <Education /> */}
			<Contact />
		</div>
	);
}

export default App;
