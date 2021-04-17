import { Bar } from 'react-chartjs-2'

const Graph = ({ graphData }) => {
  const values = Object.values(graphData)

  return (
    <>
      <Bar data={{
        labels: ['F', 'D', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+'],
        datasets: [{
          data: values,
          backgroundColor: ["#ff9696", "#96adff", "#96adff", "#96adff", "#96adff", "#96adff", "#96adff", "#96adff", "#96adff", "#96adff", "#96adff",],

        }]
      }}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
        }} />
    </>
  )
}

export default Graph
