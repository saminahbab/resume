//https://tailwindcomponents.com/component/simple-vertical-timeline
import { experience } from "./resume";

function Timeline({ update }) {
    const onClick = (institution) => {
	update(institution);
    };

    var timelineList = experience.map((entry) => {
	return (
	    <div
		className="mb-8 flex w-full right-timeline"
		onClick={() => {
		    onClick(entry.institution);
		}}
	    >
		<div className="flex items-center    w-30 h-8 ">
		    <h1 className="mx-auto font-semibold text-lg text-white">
			{entry.year}
		    </h1>
		</div>

		<div className="rounded-lg  px-6">
		    <h3 className="mb-3 font-bold text-white text-xl">
			{entry.institution}
		    </h3>
		    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
			{entry.role}
		    </p>
		</div>
	    </div>
	);
    });

    return (
	<div className="container mx-auto w-full h-full">
	    <div className="relative wrap overflow-hidden p-10 h-full">
		{timelineList}
	    </div>
	</div>
    );
}

export default Timeline;
