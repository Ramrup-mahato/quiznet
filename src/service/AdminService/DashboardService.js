import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "../../utils/tostify";
import ContextStore from "../../context/Context";
import { apiGetResponse } from "../../utils/Helper";
import { getData } from "../../components/AuthGard/LogGard";


const DashboardService = () => {
  let navigation = useNavigate();
  const { token, setLoaderInFolder, loaderInFolder } = useContext(ContextStore);
  const [dashboard, setDashboard] = useState({});
  const [registerGraph, setRegisterGraph] = useState({});
  const [visitGraph, setVisitGraph] = useState({});
  console.log("registerGraph",registerGraph);
  console.log("visitGraph",visitGraph);


  const [dashboardInfo, setDashboardInfo] = useState({
    registerType: "month",
    viewType: "month",
    selectRegisterYear: "",
    selectVisitYear: "",
    registerLoader: false,
    visitLoader: false,
  });

  // converts or separated by comma
  const commaSeparated = (number) =>
    number && number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  const handleNavigate = (path) => {
    navigation(path);
  };
  // -----------------------select register Year-------------------------
  const handleSelectRegisterYear = (year) => {
    getRegisterGraph(year);
    setDashboardInfo((prev) => ({
      ...prev,
      selectRegisterYear: year,
    }));
  };
  // -----------------------select Visit Year-------------------------
  const handleSelectVisitYear = (year) => {
    getVisitGraph(year);
    setDashboardInfo((prev) => ({
      ...prev,
      selectVisitYear: year,
    }));
  };
  // ----------------------view type select------------------------
  const handleViewType = (val) => {
    setDashboardInfo((prev) => ({
      ...prev,
      viewType: val,
    }));
  };
  // --------------------------register count --------------------------
  const handleRegisterType = (val) => {
    setDashboardInfo((prev) => ({
      ...prev,
      registerType: val,
    }));
  };
  // --------------------get Api Call ---------------------
  const getAllDashboard = async () => {
    try {
      setLoaderInFolder(true);
      let res = await apiGetResponse(
        await getData(
          `/dashboard?year=${dashboardInfo?.selectRegisterYear}&visitYear=${dashboardInfo?.selectVisitYear}`,
          token
        )
      );
      if (res?.success) {
        setLoaderInFolder(false);
        setDashboard(res?.data);
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.error(error);
      toastError(error?.message || "something went wrong");
    }
  };
  // --------------------get register Graph Api Call ---------------------
  const getRegisterGraph = async (val) => {
    try {
      setDashboardInfo((prev) => ({
        ...prev,
        registerLoader: true,
      }));
      let res = await apiGetResponse(
        await getData(`/dashboard/register?year=${val}`, token)
      );
      if (res?.success) {
        setRegisterGraph(res?.data);
        setDashboardInfo((prev) => ({
          ...prev,
          registerLoader: false,
        }));
      }
    } catch (error) {
      setDashboardInfo((prev) => ({
        ...prev,
        registerLoader: false,
      }));
      console.error(error);
      toastError(error?.message || "something went wrong");
    }
  };
  // --------------------get Visit Graph Api Call ---------------------
  const getVisitGraph = async (val) => {
    try {
      setDashboardInfo((prev) => ({
        ...prev,
        visitLoader: true,
      }));
      let res = await apiGetResponse(
        await getData(`/dashboard/visit?visitYear=${val}`, token)
      );
      if (res?.success) {
        setVisitGraph(res?.data);
        setDashboardInfo((prev) => ({
          ...prev,
          visitLoader: false,
        }));
      }
    } catch (error) {
      setDashboardInfo((prev) => ({
        ...prev,
        visitLoader: false,
      }));
      console.error(error);
      toastError(error?.message || "something went wrong");
    }
  };
  useEffect(() => {
    getAllDashboard();
    getRegisterGraph(dashboardInfo?.selectRegisterYear);
    getVisitGraph(dashboardInfo?.selectVisitYear);
    if (!dashboardInfo?.selectRegisterYear) {
      setDashboardInfo((prev) => ({
        ...prev,
        selectRegisterYear: new Date().getFullYear(),
      }));
    }
    if (!dashboardInfo?.selectVisitYear) {
      setDashboardInfo((prev) => ({
        ...prev,
        selectVisitYear: new Date().getFullYear(),
      }));
    }
  }, []);

  return {
    loaderInFolder,
    dashboard,
    dashboardInfo,
    registerGraph,
    visitGraph,
    commaSeparated,
    handleNavigate,
    handleViewType,
    handleRegisterType,
    handleSelectRegisterYear,
    handleSelectVisitYear,
  };
};

export default DashboardService;
