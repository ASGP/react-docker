import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const salesData = [
	{ month: "Jan", sales: 4020 },
	{ month: "Feb", sales: 3291 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 1500 },
	{ month: "May", sales: 3210 },
	{ month: "Jun", sales: 5500 },
];

const SalesTrendChart = () => {
	return (
		<div className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 '>
			<h2 className='text-xl font-semibold text-white mb-4'>Sales Trend</h2>
			<div style={{ width: "100%", height: 350 }}>
				<ResponsiveContainer>
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='month' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Line type='monotone' dataKey='sales' stroke='#8B5CF6' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default SalesTrendChart;
