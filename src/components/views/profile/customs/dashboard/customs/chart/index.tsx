import { Pie, Bar, Line, Doughnut, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  RadialLinearScale,
} from "chart.js";
import "chart.js/auto";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import Loading from "@generic/loading";
import useEnhancedChartFeatures from "./features";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  RadialLinearScale
);

const EnhancedChart: React.FC = memo(() => {
  const { t } = useTranslation();
  const { options, isLoading, handleChange, data, chartType } =
    useEnhancedChartFeatures();

  if (isLoading) {
    return (
      <div className='bg-[#f0f0f0] min-h-[500px] flex items-center justify-center'>
        <Loading fullscreen={false} size='large' />
      </div>
    );
  }

  return (
    <div className='bg-[#f0f0f0] min-h-fit'>
      <div className='w-full h-full p-5 bg-[#fff] shadow-[0 4px 8px rgba(0,0,0,0.1)]'>
        <h2 className='text-[27px] font-bold leading-4 text-black mt-[15px] mb-[20px] text-center'>
          { t('profile.categories') }
        </h2>
        <div className='text-center mb-5'>
          <label htmlFor='chartType' className='mr-[10px]'>
            { t('profile.select_chart_type') }:
          </label>
          <select
            id='chartType'
            value={chartType}
            onChange={handleChange}
            className='p-[5px]'
          >
            <option value='pie'>Pie Chart</option>
            <option value='bar'>Bar Chart</option>
            <option value='line'>Line Chart</option>
            <option value='doughnut'>Doughnut Chart</option>
            <option value='radar'>Radar Chart</option>
          </select>
        </div>
        <div className='lg:max-w-[700px] xl:max-w-full h-[400px]'>
          {chartType === "pie" && <Pie data={data} options={options} />}
          {chartType === "bar" && <Bar data={data} options={options} />}
          {chartType === "line" && <Line data={data} options={options} />}
          {chartType === "doughnut" && (
            <Doughnut data={data} options={options} />
          )}
          {chartType === "radar" && <Radar data={data} options={options} />}
        </div>
      </div>
    </div>
  );
});

export default EnhancedChart;
