import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@context/AuthContext";
import { useNavigate } from "react-router-dom";
import { api } from "@services/api";

const Plans = () => {
  let { authTokens } = useContext(AuthContext);
  let [loading, setLoading] = useState(true);
  let [plans, setPlans] = useState(null);
  let [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const getPlans = async () => {
      try {
        const response = await api.get("/home/plans/");
        const fetchedBlogs = response.data.data;
        setPlans(fetchedBlogs);
      } catch (error) {
        console.error("There was an error fetching the blogs!", error);
      }
    };

    getPlans();
  }, [authTokens]);

  const handleBuy = (price) => {
    navigate("/payment", { state: { price } });
  };
  return (
    <div className="flex flex-col mt-10 p-4">
      <h2 className="text-2xl font-semibold text-center font-sans text-primary mb-2">
        Read and write more using subscriptions.
      </h2>
      <p className="text-center text-sm font-sans text-secondary mb-8">
        These are all our plans available, choose yours.
      </p>
      <div className="flex flex-wrap justify-center text-center font-sans text-primary gap-8 mx-8 mb-8">
        {plans &&
          plans.map((plan, index) => (
            <div
              key={index}
              className="border border-secondary flex flex-col p-8 rounded-2xl w-80"
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-sm text-secondary mt-2">
                For {plan.duration_days} Days.
              </p>
              <p className="text-2xl mt-4 font-black">{plan.price}/-</p>
              <p className="text-sm text-secondary mt-4 text-center">{plan.desc}</p>
              <button
                className="w-full py-2 bg-primary text-bg text-lg mb-4 text-white rounded-full mt-6 transition duration-300 hover:bg-secondary"
                onClick={() => handleBuy(plan.price)}
              >
                Select
              </button>
              <ul>
              {plan.benefits &&
                plan.benefits.map((point, idx) => (
                  <li key={idx} className=" text-primary text-sm mt-4">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Plans;
