/* {
            "planId": "1777904413704",
            "title": "Trip to Chennai - Route 1",
            "description": "Optimized Standard itinerary",
            "total_cost_for_people": 2520,
            "people": 4
        }
*/

export const selectPlansOverview = (state) => state.planOverview.plansOverview;

export const selectPlanOverviewLoading = (state) => state.planOverview.loading;

export const selectPlanOverviewError = (state) => state.planOverview.error;