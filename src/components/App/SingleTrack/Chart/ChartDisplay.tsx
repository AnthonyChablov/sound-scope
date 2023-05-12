import {
  Chart as ChartJS,
  BarElement, 
  CategoryScale,
  LinearScale, // y axis
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Bar
} from 'react-chartjs-2';

ChartJS.register(
  BarElement, 
  CategoryScale,
  LinearScale, // y axis
  Tooltip,
  Legend,
)

interface IChartDisplay{
  danceability : number,
  energy : number,
  speechiness : number,
  acousticness : number,
  instrumentalness : number,
  liveness : number,
  valence : number,
}

const ChartDisplay = ({
  danceability, 
  energy, 
  speechiness, 
  acousticness, 
  instrumentalness, 
  liveness, 
  valence
}:IChartDisplay) => {

  const data = {
    labels: ['Danceability', 'Energy', 'Speechiness', 'Acousticness', 'Instrumentalness', 'Liveness', 'Valence'],
    datasets: [
      {
        label: 'Audio Features',
        data: [danceability, energy, speechiness, acousticness, instrumentalness, liveness, valence],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // red
          'rgba(54, 162, 235, 0.2)', // blue
          'rgba(255, 206, 86, 0.2)', // yellow
          'rgba(75, 192, 192, 0.2)', // green
          'rgba(153, 102, 255, 0.2)', // purple
          'rgba(255, 159, 64, 0.2)', // orange
          'rgba(255, 99, 132, 0.2)', // red
        ],
        borderColor: 'black',
        borderWidth: 1,
      }
    ] // empty for now
  }

  const options= {
    maintainAspectRatio : true,
    scales: {
      x: {
        title:{
            display: true,
            text: 'Audio Features', 
            color: '#cbd5e1',
            font: {
              size: 16,
              weight: 'regular',
              lineHeight: 1.2,
            },
            padding: {top: 20, left: 0, right: 10, bottom: 0}
          },
        },
      y: {
        title:{
            display: true,
            text: 'Percentage (%)',
            color: '#cbd5e1',
            font: {
              size: 16,
              weight: 'regular',
              lineHeight: 1.2,
            },
            padding: {top: 20, left: 0, right: 0, bottom: 0}
          },
        ticks: {
          beginAtZero: true,
          stepSize: 20,
          max: 100,
          min: 0,
          color: '#cbd5e1',
          font: {
            size: 14,
            weight: 'regular',
            lineHeight: 1.2,
          },
        }
      }
    }
  }

  return (
    <div className=' '>
        <Bar
          data={data}
          options={options}
        >

        </Bar>
    </div>
  )
}

export default ChartDisplay