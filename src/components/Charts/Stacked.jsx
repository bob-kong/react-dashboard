import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { fontColor } from '@syncfusion/ej2/spreadsheet'

const Stacked = ({width, height,color}) => {
  const {currentMode,currentColor} = useStateContext();
  return (
    <div className='dark:text-white'>
      <ChartComponent 
      width={width}
      height={height}
      fill={color}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border: {width:0}}}
      tooltip={{enable:true}}
      legendSettings = {{background: currentMode === 'Dark' ? currentColor : "white"}}
      background= {currentMode === 'Dark' ? "#33373E" : ""}
    >
      <Inject services={[Legend, Category,StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index) => 
          <SeriesDirective key={index} {...item}/>
          )
        }
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    
  )
}

export default Stacked