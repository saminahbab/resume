import react from "react";

import { experienceDetail } from "./resume";

const renderDetail = (paragraphs) => {
    return <div className="space-y-3">
	{paragraphs.map(paragraph => <p>{paragraph}</p>)}
    </div>;
}

function DetailSection({ value }) {
    return (< div className="mb-10 p-10" >

	{renderDetail(experienceDetail[value])}

    </div>);
}

export default DetailSection;
