import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useCategoryListFeatures from "@components/views/home/indoor-plant-collection/customs/cotegories/customs/category-list/features";
import useSearchParamsHook from "@hooks/useSearchParams";
import { CategoryPropsI } from "@type/index";

const useEnhancedChartFeatures = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { setParam, getParam } = useSearchParamsHook();
  const [chartType, setChartType] = useState<string>(
    getParam("chart-type") || "bar"
  );
  const { isLoading, data: category } = useCategoryListFeatures();

  const categories = category ?? []

  useEffect(() => {
    if (location.pathname === "/profile") {
      setParam("chart-type", chartType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, chartType]);

  const dataCount = categories.map(
    (category: CategoryPropsI) => category?.count
  );
  const labels = categories?.map((category: CategoryPropsI) => category?.title);
  const colors =
    categories?.map(
      (_: any, index: number) =>
        `rgba(${(index * 50) % 255}, ${(index * 100) % 255}, 200, 0.7)`
    ) || [];

  const data = {
    labels: labels || [],
    datasets: [
      {
        label: `Products of Category`,
        data: dataCount,
        backgroundColor: colors,
        borderColor: colors.map((color: string) => color.replace("0.7", "1")), // Slightly adjust color for border
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
    },
    onClick: (_: any, elements: any) => {
      if (elements.length > 0) {
        const { index } = elements[0];
        const label = data.labels[index];
        navigate(`/?category=${label.toLowerCase().split(" ").join("-")}`);
        // Perform any action here
      }
    },
  };

  const handleChange = (event: any) => {
    setChartType(event.target.value);
  };

  return { options, handleChange, isLoading, data, chartType };
};

export default useEnhancedChartFeatures;
