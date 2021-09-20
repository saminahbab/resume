import React from "react";

import Timeline from "./Timeline";
import DetailSection from "./DetailSection";

function ExperiencePage() {
    const [experience, setExperience] = React.useState("Adarga");

    function updateExperience(text) {
	setExperience(text);
    }

    return (
	<div className="flex  overflow-hidden">
	    <div className="w-1/3 overflow-hidden">
		<Timeline update={updateExperience} />
	    </div>
	    <div className=" w-2/3 overflow-hidden">
		<DetailSection value={experience} />
	    </div>
	</div>
    );
}

export default ExperiencePage;
