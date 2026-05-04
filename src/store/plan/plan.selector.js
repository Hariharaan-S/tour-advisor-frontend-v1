export const selectPlanData = (state) => state.plan;

export const selectPlanTitle = (state) => selectPlanData(state).title;

export const selectPlanDescription = (state) => selectPlanData(state).description;

export const selectPlanTouristSpots = (state) => selectPlanData(state).tourist_spots;

export const selectPlanTransport = (state) => selectPlanData(state).transport;

export const selectPlanInstructions = (state) => selectPlanData(state).instructions;

export const selectPlanCostSummary = (state) => selectPlanData(state).cost_summary;

export const selectPlanPeople = (state) => selectPlanData(state).people;

