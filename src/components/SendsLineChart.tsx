import { lineDate } from '@/MOCK/charts'
import { ResponsiveLine } from '@nivo/line'

export default function SendsLineChart() {
    return (
        <>
            <div className='card spends-line-chart'>
                <MyResponsiveLine data={lineDate} />
            </div>
        </>
    )
}
const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        curve='catmullRom'
        margin={{ top: 10, right: 30, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
        }}
        // yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisLeft={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Money',
            legendOffset: -50,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisBottom={{
            legend: '2024',
            legendPosition: 'middle',
            legendOffset: 40,
        }}
        enableGridX={false}
        enableGridY={false}
        lineWidth={3}
        enablePoints={true}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableArea={true}
        // areaOpacity={0.5}
        isInteractive={true}
        useMesh={true}
        enableTouchCrosshair={true}
        areaBaselineValue={0}
    />
)