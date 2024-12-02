import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({ data }) => {
  // Preparing the chart data dynamically based on the 'data' prop
  const chartData = {
    labels: data.map(item => item.name), // Group names as x-axis labels
    datasets: [
      {
        label: 'Group Values', // Updated label
        data: data.map(item => item.value), // Values for each group
        backgroundColor: [
          '#187FC0', // Blue for first group
          '#20B2AA', // Light Sea Green for second group
          '#32CD32', // Lime Green for third group
          '#FF6347'  // Tomato for fourth group
        ],
        borderColor: '#145A84', // Border color for the bars
        borderWidth: 1, // Border width for the bars
      },
    ],
  };

  // Chart options for customization
  const options = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Allows custom sizing
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true, // Title display option
        text: 'Group Performance Metrics', // Updated chart title
        font: {
          size: 18, // Font size for the title
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensures y-axis starts at zero
        title: {
          display: true,
          text: 'Performance Value', // Updated y-axis label
        },
      },
      x: {
        title: {
          display: true,
          text: 'Groups', // Updated x-axis label
        },
      },
    },
  };

  return (
    <div style={{ 
      margin: '20px auto', 
      width: '80%', 
      maxWidth: '800px', 
      height: '400px' // Fixed height for consistent display
    }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Graph;