import react from 'react';
import ChartBar from './ChartBar'
import './Chart'

const Chart = props => {
    return <div className="chart">
        {props.dataPoints.map(dataPoint => 
        <ChartBar valur={dataPoint.value}
        maxValu
        />
        )}
    </div>
}

export default Chart;