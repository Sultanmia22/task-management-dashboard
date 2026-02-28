import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const getProducts = async () => {
    try {
        const res = await fetch(`https://task-api-eight-flax.vercel.app/api/products`);
        // ১. এখানে await যোগ করা হয়েছে
        const data = await res.json();
        return data;
    }
    catch (er) {
        console.log(er.message);
        return [];
    }
}

const ProductProgess = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true); // setLoading এর জন্য স্টেট

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setPlans(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // useEffect এর ব্র্যাকেট এবং স্ট্রাকচার ঠিক করা হয়েছে

  const totalSales = plans.reduce((sum, item) => sum + (Number(item.sales) || 0), 0);

  const completedSales = plans
    .filter((item) => item.category === "subscription")
    .reduce((sum, item) => sum + (Number(item.sales) || 0), 0);

  const percentage = totalSales
    ? Math.round((completedSales / totalSales) * 100)
    : 0;

  const chartData = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage }
  ];

  return (
    <div className=" rounded-2xl">
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Products Progress
      </h2>

      <div className="relative w-full h-48 sm:h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              startAngle={180}
              endAngle={0}
              innerRadius="70%"
              outerRadius="85%"
              dataKey="value"
              stroke="none"
            >
              <Cell fill="#1B5E20" />
              <Cell fill="#E5E7EB" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center mt-6 sm:mt-8">
          <h1 className="text-2xl sm:text-4xl font-bold">
            {percentage}%
          </h1>
          <p className="text-green-700 text-xs sm:text-sm">
            Product Ended
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-6 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-800 rounded-full"></span>
          <p>Completed</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full"></span>
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
};

export default ProductProgess;