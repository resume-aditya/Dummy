import React from "react";

let initialSkillObject = {
    skills : ['JS', 'Python'],
    experience : 13
}

const skillContext = React.createContext(initialSkillObject);

export {skillContext, initialSkillObject};

