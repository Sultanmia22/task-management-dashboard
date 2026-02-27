import React, { useEffect, useState } from "react";

const getAnalyticsData = async () => {
    const res = await fetch('https://task-api-eight-flax.vercel.app/api/analytics');
    const data = await res.json();
    return data;
};

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAnalyticsData();
                setAnalyticsData(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    const maxViews = Math.max(...analyticsData.map(item => item.views));

    return (
        <div className="p-4 rounded-2xl">
            <h2 className="text-xl font-bold mb-6">Project Analytics</h2>

            <div className="grid grid-cols-5 items-end gap-6">
                {analyticsData.map((item, index) => {
                    const height = (item.views / maxViews) *120;
                    return (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <div
                                className="w-12 bg-green-600 rounded-full transition-all duration-500"
                                style={{ height: `${height}px` }}
                            ></div>
                            <p className="text-sm text-gray-500">
                                {new Date(item.date).toLocaleDateString("en-US", { weekday: "short" })}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Analytics;