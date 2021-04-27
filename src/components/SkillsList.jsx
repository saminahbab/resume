import React from "react";

import { skills } from "./resume";


function SkillsList({ update }) {
    /*
     * Lists all of the skills you want to display.
    Uses state to track the clicked item, so that it can
    be used by other components for interactions.

    */

    const onClick = (ev) => {

	update(ev.target.textContent);

    };
    var renderSkills = [];

    Object.entries(skills).forEach(([key, value]) => {
	renderSkills.push(<div className="mb-8 flex w-full">
	    <div className="rounded-lg px-6">
		<h3>{key}</h3>
	    </div>
	    <div className="text sm leading-snug tracking-wide text-white text-opacity-100">
		{value.map(skill => <h5 onClick={onClick}>{skill}</h5>)}
	    </div>
	</div>);
    });


    return (<div>
	{renderSkills}
    </div>);
}

export default SkillsList;
