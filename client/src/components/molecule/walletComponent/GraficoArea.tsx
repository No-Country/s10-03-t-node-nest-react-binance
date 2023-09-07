import React, { useState } from 'react';
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
import { Box } from '@mui/material';
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

export const optionsB = {
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
const labels = ['10:00AM', '11:00AM', '12:00AM', '13:00PM', '14:00PM', '15:00PM', '16:00PM', '17:00PM', '18:00PM'];


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

const labelsB = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
export const datab = {
    labels: labelsB,
    datasets: [
        {
            fill: true,
            label: '',
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: 'rgb(75,199,19)',
            data: labelsB.map(() => faker.finance.amount({ min: 0, max: 1000 })),
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
    const [showArea, setShowArea] = useState(true);

    return (

        <>
            <h3>Tendencia </h3>

            {showArea && <Line options={options} data={data} />}
            {!showArea && <Line options={optionsB} data={datab} />}
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', my: '2rem' }}>
                <button onClick={() => setShowArea(true)} disabled={showArea}>1 Dia</button>
                <button onClick={() => setShowArea(false)} disabled={!showArea}>1 Semana</button>
            </Box>
        </>
    )



}


export default GraficoArea