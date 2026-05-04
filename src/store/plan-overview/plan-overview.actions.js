import { PLAN_OVERVIEW_ACTION_TYPES } from "./plan-overview.types";

export const fetchPlanOverviewStart = () => ({
    type: PLAN_OVERVIEW_ACTION_TYPES.FETCH_PLAN_OVERVIEW_START,
});

export const fetchPlanOverviewSuccess = (planOverview) => ({
    type: PLAN_OVERVIEW_ACTION_TYPES.FETCH_PLAN_OVERVIEW_SUCCESS,
    payload: planOverview
});

export const fetchPlanOverviewFailure = (error) => ({
    type: PLAN_OVERVIEW_ACTION_TYPES.FETCH_PLAN_OVERVIEW_FAILURE,
    payload: error
});

export const fetchPlanOverviewStop = () => ({
    type: PLAN_OVERVIEW_ACTION_TYPES.FETCH_PLAN_OVERVIEW_STOP,
});