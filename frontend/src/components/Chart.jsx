import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'
import '../styles/Chart.scss'

const Chart = ({endpoint}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://toshiba-backend.onrender.com/api/${endpoint}`)
        .then(res => res.json())
        .then(dataObject => {
            const {data} = dataObject
            const formattedData = data.map((item) => {
                return {
                    x: new Date(item.timestamp),
                    y: parseFloat(item.profit)
                }
            })
            console.log(formattedData)
            setData(formattedData)
        })
        .catch(err => console.log(err))
    }, [endpoint])

    const options = {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: null
        },
        subtitle: {
            enabled: false
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title:{
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        // lightgreen linear gradient from top to bottom
                        [0, "lightgreen"],
                        [1, "white"]
                    ]
                },
                marker: {
                    enabled: false
                },
                lineWidth: 2,
                lineColor: "lightgreen",
                dashStyle: 'Dot',
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
        }]
    }

    return (
        <div className="graph">
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            
        />
        </div>
    )
}

export default Chart