
const PLAN_INITIAL_STATE = {
        title: '',
        description: '',
        tourist_spots: [],
        transport: [],
        instructions: [],
        cost_summary: {
            total_cost_for_people: 0,
            people_count: 0,
        },
        people: 0,
    };

export const planReducer = (state = PLAN_INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE_PLAN':
            return { ...state, ...payload };
        case 'RESET_PLAN':
            return PLAN_INITIAL_STATE;
        default:
            return state;
    }
};