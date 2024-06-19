import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "../../utils/tostify";
import ContextStore from "../../context/Context";
import { apiGetResponse } from "../../utils/Helper";
import { getData } from "../../components/AuthGard/LogGard";

const DashboardService = () => {
  let navigation = useNavigate();
  const { token, setLoaderInFolder, loaderInFolder } = useContext(ContextStore);
  const [activeInactive, setActiveInactive] = useState({
    series: [
      {
        name: "Total User",
        data: [162, 162, 432, 321, 162, 207, 194, 175, 167, 223, 104, 265],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },

      // colors: ["#165BAA","red","aqua"],
      //   stroke: { width: 0, curve: "smooth" },
      //   fill: { opacity: 1, type: "solid" },

      yaxis: {
        labels: {
          style: {
            // colors: "#fff",
          },
        },
      },
      xaxis: {
        title: {
          // text: "years",
          style: { fontSize: 20, color: "#165baa" },
        },

        categories: [
          "jan",
          "feb",
          "mar",
          "Apr",
          "may",
          "jun",
          "jul",
          "Aug",
          "oct",
          "Sep",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            // colors: "#fff",
          },
        },
        grid: {
          show: false, // Hide grid lines
        },
        fill: {
          opacity: 1, // Set fill opacity to make the area chart fully opaque
        },
        markers: {
          size: 0, // Hide markers
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: true,
        fillSeriesColor: true,
      },
      legend: {
        show: true,
        labels: {
          //   colors: "#fff",
          useSeriesColors: false,
        },
      },
    },
  });
  const [registerUser, setRegisterUser] = useState({
    series: [
      {
        name: "Register user",
        data: [32, 21, 232, 121, 32, 167, 34, 55, 67, 13, 64, 235],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },

      //   colors: ["#165BAA"],
      //     stroke: { width: 0, curve: "smooth" },
      //     fill: { opacity: 1, type: "solid" },

      yaxis: {
        labels: {
          style: {
            // colors: "#fff",
          },
        },
      },
      xaxis: {
        title: {
          // text: "years",
          style: { fontSize: 20, color: "#165baa" },
        },

        categories: [
          "jan",
          "feb",
          "mar",
          "Apr",
          "may",
          "jun",
          "jul",
          "Aug",
          "oct",
          "Sep",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            // colors: "#fff",
          },
        },
        grid: {
          show: false, // Hide grid lines
        },
        fill: {
          opacity: 1, // Set fill opacity to make the area chart fully opaque
        },
        markers: {
          size: 0, // Hide markers
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        enabled: true,
        fillSeriesColor: true,
      },
      legend: {
        show: true,
        labels: {
          //   colors: "#fff",
          useSeriesColors: false,
        },
      },
    },
  });
  
  // converts or separated by comma
  const commaSeparated = (number) =>
    number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  const handleNavigate = (path) => {
    navigation(path);
  };

  // --------------------get Api Call ---------------------
  const getAllDashboard = async () => {
    try {
      setLoaderInFolder(true);
      let res = await apiGetResponse(await getData(`/dashboard`, token));
      if (res?.success) {
        setLoaderInFolder(false);
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.error(error);
      toastError(error?.message || "something went wrong");
    }
  };
  useEffect(() => {
    getAllDashboard();
  }, []);

  return {
    activeInactive,
    registerUser,
    commaSeparated,
    handleNavigate,
    setRegisterUser,
    setActiveInactive,
  };
};

export default DashboardService;
