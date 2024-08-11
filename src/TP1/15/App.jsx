import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import './App.css'

export default function App() {
    return (
        <div className="protfolio-card">
            <Header/>
            <Projects/>
            <Contact/>
        </div>
    )
}