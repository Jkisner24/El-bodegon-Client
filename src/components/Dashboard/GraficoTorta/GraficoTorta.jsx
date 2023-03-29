import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { getCategories } from '../../../redux/actions/actions';
import style from './GraficoTorta.module.css'
// const data = [
//   { name: 'Manzanas', value: 400 },
//   { name: 'Naranjas', value: 300 },
//   { name: 'Bananas', value: 200 },
//   { name: 'Papayas', value: 100 },
// ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const GraficoTorta = () => {
    const [data, setData] = useState([])
    const categorias = useSelector(state => state.categories)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCategories())
    },[])

    useEffect(()=>{
        const auxCategories = []
        categorias.forEach(category => {
            auxCategories.push({name:category, value:200})
        });
        setData(auxCategories)
    },[categorias])
  return (
    <PieChart width={600} height={400}>
        {/* <div className={style.container}> */}
            
      <Pie
        data={data}
        cx={350}
        cy={140}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={130}
        fill="#8884d8"
        dataKey="value"
        >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
      </Pie>
      {/* <Tooltip /> */}
      <Legend />
            {/* </div> */}
    </PieChart>
  );
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default GraficoTorta;
