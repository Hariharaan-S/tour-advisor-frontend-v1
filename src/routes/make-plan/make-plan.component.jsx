import React, { useContext, useState } from "react";
import './make-plan.styles.css';
import PlacesList from "../../components/places-list/places-list.component";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/button/button.component";
import { PlanContext } from "../../context/PlanContext";

const MakePlan = () => {
    const { updatePlan } = useContext(PlanContext);
    const [form, setForm] = useState({ cityName: '', numberOfDays: '', budget: '' });
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { value, placeholder } = e.target;
        // map placeholders to keys used by API
        const keyMap = {
            'Destination Place': 'cityName',
            'Number of Days': 'numberOfDays',
            'Budget': 'budget'
        };
        const key = keyMap[placeholder];
        if (key) setForm(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResponseData(null);

        try {
            const res = await fetch('http://localhost:5000/api/plan/make-plan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cityName: form.cityName,
                    numberOfDays: form.numberOfDays,
                    budget: form.budget
                })
            });

            const data = await res.json().catch(() => null);
            console.log('make-plan response =>', { status: res.status, ok: res.ok, data });

            if (res.ok) {
                setResponseData(data || {});
                updatePlan(data || {});
            } else {
                setError(data || { message: 'Server returned an error' });
            }
        } catch (err) {
            console.log('make-plan error =>', err);
            setError({ message: err.message || 'Network error' });
        } finally {
            setLoading(false);
        }
    };

    const shouldShowResult = responseData && !error;

    return (
        <>
            <div className="plan-container">
                {/* Left: Form */}
                <div className="plan-form-container">
                    <h2>Your Trip, Your Way</h2>
                    <p>Browse and customize your trip.</p>

                    <form className="plan-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Destination Place" value={form.cityName} onChange={handleChange} />
                        <input type="text" placeholder="Number of Days" value={form.numberOfDays} onChange={handleChange} />
                        <input type="text" placeholder="Budget" value={form.budget} onChange={handleChange} />

                        <Button buttonType="login" buttonValue={loading ? 'Making...' : 'Make Plan'} />
                    </form>

                    {error && <p className="error">{error.message || 'Unable to create plan'}</p>}
                </div>

                {/* Right: Image */}
                <div className="plan-image-container">
                    <img src="/img/plan image.png" alt="Planning trip" />
                </div>

            </div>

            {shouldShowResult && (
                <div className="result-plan-section">
                    <h2>Your trip plan is all set!</h2>
                    <div className="result-plan-wrapper">
                        <div className="result-plan-card">
                            <div className="result-plan-image">
                                <img src="/img/result-plan.png" alt="Destination" />
                            </div>
                            <div className="result-plan-details">
                                <h3>{responseData.plan.title || 'Planned Trip'}</h3>
                                <p>{responseData.plan.description || 'Your trip plan has been generated.'}</p>

                                <div className="plan-features">
                                    <div className="feature">
                                        <img src="img/days.png" alt="" />
                                        <p>{form.numberOfDays ? `${form.numberOfDays} Days` : 'N/A'}</p>
                                    </div>
                                    <div className="feature">
                                        <img src="img/people.png" alt="" />
                                        <p>{responseData.plan.people ? `${responseData.plan.people} persons` : 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="plan-btn"><Button buttonType={"login"} buttonValue={"Make Plan"} /></div>

                            </div>

                        </div>
                    </div>
                </div>
            )}

            <PlacesList />
            <Footer />
        </>
    );
};

export default MakePlan;
