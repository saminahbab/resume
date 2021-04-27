import React from "react";

import SkillsList from "./SkillsList";
import SkillsDetail from "./SkillsDetail";

function SkillsPage() {


  const [skill, setSkill] = React.useState('Python');

  function updateSkill(text) {
    setSkill(text);
  }

  return (

    <div className="grid grid-cols-2 gap 2">
      <div>
	<SkillsList update={updateSkill} />
      </div>
      <div>
	<SkillsDetail skillValue={skill} />
      </div>
    </div>

  );
}

export default SkillsPage;
