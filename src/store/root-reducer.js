import { combineReducers } from "redux";

// reducers
import { userReducer } from "./user/user.reducer";
import { planReducer } from "./plan/plan.reducer";
import { planOverviewReducer } from "./plan-overview/plan-overview.reducer";
import { languageReducer } from "./language/language.reducer";

export const rootReducer = combineReducers({
    // add reducers here
    user: userReducer,
    language: languageReducer,
    plan: planReducer,
    planOverview: planOverviewReducer,
})
