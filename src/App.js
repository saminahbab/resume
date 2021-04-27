import './App.css';

import React from 'react';
import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import ExperiencePage from "./components/ExperiencePage";
import SkillsPage from "./components/SkillsPage";

const pages = {
    Skills: "Skills",
    Experience: "Experience",
    Intro: "Intro"
};

function renderPage(page) {

    switch (page) {
	case pages.Intro:
	    return <IntroPage />;
	case pages.Skills:
	    return <SkillsPage />;
	case pages.Experience:
	    console.log(page);
	    return <ExperiencePage />;
    }

}

function App() {
    const [pageState, setPageState] = React.useState(pages.Intro);

    function updatePage(page) {
	setPageState(page);
    }

    return (

	<div >

	    <div className="ml-14 h-14" >
		<NavBar update={updatePage} />
	    </div>


	    <div className="bg-gray-600 h-screen ml-10 text-white py-10">
		{renderPage(pageState)}
	    </div>

	</div>
    );
}

export default App;
