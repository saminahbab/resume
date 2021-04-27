import React from "react";

import { skillsDetail } from "./resume";

const renderDetail = (paragraphs) => {
    return <div className="space-y-3">
	{paragraphs.map(paragraph => <p>{paragraph}</p>)}
    </div>;
}
function SkillsDetail({ skillValue }) {
    /*
     * Returns a block with some explanation of the skill that is clicked on
     in the other half of the page. This component needs to lift
    */


    return (<div> {renderDetail(skillsDetail[skillValue])} </div>);
}

export default SkillsDetail;
