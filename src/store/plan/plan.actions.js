import { PLAN_ACTION_TYPES } from "./plan.types";

export const updatePlan = (planData) => ({
    type: PLAN_ACTION_TYPES.UPDATE_PLAN,
    payload: planData
});

export const resetPlan = () => ({
    type: PLAN_ACTION_TYPES.RESET_PLAN
});

export const fetchPlanError = (error) => ({
    type: PLAN_ACTION_TYPES.FETCH_PLAN_ERROR,
    payload: error
});