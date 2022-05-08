
export const intiState = {
    skills : ['JS'],
    experience : 5
}

export const reducer = (state, action) => {debugger
    switch (action.type) {
        case 'addSkill':
            return {
                ...state, skills: [...state.skills, action.payload]
            }
        case 'addExperience':
        return {
            ...state, experience: state.experience+1
        }
        default:
            return state;
    }
    return state;
}