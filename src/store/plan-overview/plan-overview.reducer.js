import { PLAN_OVERVIEW_ACTION_TYPES } from "./plan-overview.types";

const PLAN_OVERVIEW_STATE = {
    plansOverview: [],
    loading: false,
    error: null,
}


export const planOverviewReducer = (state = PLAN_OVERVIEW_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case PLAN_OVERVIEW_ACTION_TYPES.FETCH_PLAN_OVERVIEW_START:
            return { ...state, loading: true, error: null };
        case PLAN_OVERVIEW_ACTION_TYPES.FETCH_PLAN_OVERVIEW_SUCCESS:
            return { ...state, loading: false, plansOverview: payload };
        case PLAN_OVERVIEW_ACTION_TYPES.FETCH_PLAN_OVERVIEW_FAILURE:
            return { ...state, loading: false, error: payload };
        case PLAN_OVERVIEW_ACTION_TYPES.FETCH_PLAN_OVERVIEW_STOP:
            return { ...state, loading: false };
        default:
            return state;
    }
};