import React, { createContext, useState } from 'react';

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState({
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
    });

    const updatePlan = (newPlan) => {
        setPlan(newPlan);
    };

    const resetPlan = () => {
        setPlan({
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
        });
    };

    return (
        <PlanContext.Provider value={{ plan, updatePlan, resetPlan }}>
            {children}
        </PlanContext.Provider>
    );
};