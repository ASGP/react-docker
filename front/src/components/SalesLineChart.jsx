import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
	{ name: "Jul", sales: 6100 },
	{ name: "Aug", sales: 3800 },
	{ name: "Sep", sales: 4100 },
	{ name: "Oct", sales: 4600 },
	{ name: "Nov", sales: 2100 },
	{ name: "Dec", sales: 7200 },
	{ name: "Jan", sales: 6100 },
	{ name: "Feb", sales: 1200 },
	{ name: "Mar", sales: 6812 },
	{ name: "Apr", sales: 6300 },
	{ name: "May", sales: 7100 },
	{ name: "Jun", sales: 7340 },
];

const SalesLineChart = () => {
	return (
		<div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mt-2 '>
			<h2 className='text-lg font-medium mb-4 text-white'>Sales Line Chart</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='sales'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 3 }}
							activeDot={{ r: 5, strokeWidth: 1 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};


export default SalesLineChart
