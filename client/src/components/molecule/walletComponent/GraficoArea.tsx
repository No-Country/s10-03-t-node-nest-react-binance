import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
console.log(faker)

interface ContextType {
    type: string;
    p1DataIndex: number;
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        y: {
            min: 0
        }
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {

        },
    },
};

const labels = ['1D', '1S', '1M',];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: '',
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: 'rgb(75,199,19)',
            data: labels.map(() => faker.finance.amount({ min: 0, max: 1000 })),
            borderColor: 'rgb(75, 180, 11)',
            backgroundColor: 'rgb(75, 180, 11, 0.3)',
            segment: {
                borderColor: function (context: ContextType) {
                    if (context.type === 'segment') {
                        console.log(context);
                        return context.p1DataIndex % 2 === 0 ? 'rgb(190, 10, 11)' : 'rgb(75, 180, 11)';
                    }
                },
                backgroundColor: function (context: ContextType) {
                    if (context.type === 'segment') {
                        console.log(context);
                        return context.p1DataIndex % 2 === 0 ? 'rgb(190, 10, 11, 0.3)' : 'rgb(75, 180, 11, 0.3)';
                    }
                },
            },
        },
    ],
};



const GraficoArea: React.FC = () => {


    return (

        <>
            <h3>Tendencia </h3>
            <Line options={options} data={data} />
        </>
    )



}


export default GraficoArea
