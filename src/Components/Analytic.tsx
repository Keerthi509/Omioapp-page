import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = [
  "#403287",
  "#8376c2",
  "#403287",
  "#8376c2",
  "#403287",
  "#8376c2"
];

const data = [
  {
    name: "1-10 Sep",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "11-20 Sep",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "21-30 Sep",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "1-5 Oct",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "6-15 Oct",
    uv: 1890,
    pv: 4800,
    amt: 2181
  }
];

export default function Analytic() {
  return (
    <BarChart
      width={500}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
     
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" label={{ position: "top" }} radius={[20, 20, 20, 20]}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 2]} />
        ))}
      </Bar>
    </BarChart>
  );
}
