import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const studentData = [
        { id: 1, name: 'Student 1', mathScore: 85, physicsScore: 78 },
        { id: 2, name: 'Student 2', mathScore: 78, physicsScore: 85 },
        { id: 3, name: 'Student 3', mathScore: 92, physicsScore: 90 },
        { id: 4, name: 'Student 4', mathScore: 88, physicsScore: 76 },
        { id: 5, name: 'Student 5', mathScore: 95, physicsScore: 92 },
        { id: 6, name: 'Student 6', mathScore: 80, physicsScore: 84 },
        { id: 7, name: 'Student 7', mathScore: 89, physicsScore: 88 },
        { id: 8, name: 'Student 8', mathScore: 75, physicsScore: 70 },
        { id: 9, name: 'Student 9', mathScore: 96, physicsScore: 94 },
        { id: 10, name: 'Student 10', mathScore: 82, physicsScore: 79 },
      ];
      
    return (
        <div>
          <LChart width={400} height={400} data={studentData}>
            <Line dataKey={"mathScore"} stroke="yellow"></Line>
            <Line dataKey={"physicsScore"} stroke='red'></Line>
          </LChart>
        </div>
    );
};

export default LineChart;