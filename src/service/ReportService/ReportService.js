import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import {
  Capitalized,
  DateConverter,
  apiGetResponse,
  apiResponse,
} from "../../utils/Helper";
import { toastError } from "../../utils/tostify";
import ContextStore from "../../context/Context";
import {
  getData,
  updateData,
} from "../../components/AuthGard/LogGard";

const ReportService = () => {
  const { token, setLoaderInFolder, loaderInFolder, setIsLoader } =
    useContext(ContextStore);
  const [reportAllData, setReportAllData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [report, setReport] = useState({
    reportStatus: "pending",
    reportData: [],
    reportQuestion: {},
    reportStatusOption: "pending",
    modelId: "",
  });
  console.log("report", report);

  // -----------select Status
  const handleSelectStatus = (status) => {
    setReport((oldData) => {
      return {
        ...oldData,
        reportStatus: status,
      };
    });
  };

  //-------------- module  open true or false
  const handleModal = (question, status, id) => {
    setReport((oldData) => {
      return {
        ...oldData,
        reportQuestion: question,
        reportStatusOption: status,
        modelId: id,
      };
    });
    setOpenModal(!openModal);
  };

  const handleSelectAnswer = (que, ans) => {
    // arr?.questions?.forEach((ele, i) => {
    //   if (ele?.question == que) {
    //     ele.yourAnswer = ans;
    //   }
    // });
    // setQuizData({ ...arr });
  };

  //-------------- set date option from
  const handleSelectOption = (ele) => {
    setReport((oldData) => {
      return {
        ...oldData,
        reportStatusOption: ele,
      };
    });
  };
  //------------- Model Save
  const handleModelSave = async () => {
    try {
      setIsLoader(true);
      let json = {
        _id: report?.modelId,
        status: report?.reportStatusOption,
        qsId: report?.reportQuestion?.[0]?.qsId?._id,
        correctAnswer: report?.reportQuestion?.[0]?.userAnswer,
      };
      let res = await apiResponse(await updateData("/report", json, token));
      if(res?.success){
        setIsLoader(false);
        getAPIData()
        handleModal();
      }else{
        setIsLoader(false);
      }
    } catch (error) {
      setIsLoader(false);

      toastError(error.message);
      console.log(error);
    }
  };
  //-------------- columns data create for dataTable
  const columns = [
    {
      name: "User",
      selector: (e) => e.username,
      sortable: true,
      //   hide: "lg",
      grow: 2,

      cell: (row, i) => (
        <>
          <div className="flex justify-center items-center gap-2 p-2">
            <p className="font-semibold">{`${i + 1}.`}</p>
            {row?.userId?.avatar ? (
              <img
                src={row?.userId?.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full border-white border-2 imageAvatar "
              />
            ) : (
              <div className="">
                <p
                  className="w-10 h-10 rounded-full border-white border-2  flex justify-center items-center font-bold 
                   bg-[#512Dab] text-[var(--colW2)] text-[25px] imageAvatar"
                >
                  {row?.userId?.username?.slice(0, 1).toUpperCase()}
                </p>
              </div>
            )}
            <p>{Capitalized(row?.userId?.username)}</p>
          </div>
        </>
      ),
    },
    {
      name: "Phone",
      selector: (e) => e?.userId?.phone,
      sortable: true,
      hide: "lg",

      cell: (row) => (
        <>
          <div className=" ">
            <p>{row?.userId?.phone}</p>
          </div>
        </>
      ),
    },
    {
      name: "Report Date",
      selector: (e) => e.createdOn,
      sortable: true,
      cell: (row) => (
        <>
          <div className=" ">
            <p>{DateConverter(row?.createdOn)}</p>
          </div>
        </>
      ),
    },
    {
      name: "Message",
      // selector: "raisedDate",
      sortable: false,
      hide: "md",
      cell: (row) => (
        <>
          <div>
            <p title={row?.message}>
              {row?.message?.length > 15
                ? row?.message?.slice(0, 15) + "..."
                : row?.message}
            </p>
          </div>
        </>
      ),
    },
    {
      name: "Question",
      // selector: "company.name",
      // sortable: true,
      // hide: "md",
      grow: 0,
      cell: (row) => (
        <>
          <div className="w-full flex justify-center items-center ">
            <FaEye
              size={20}
              className="cursor-pointer text-[var(--colB1)]"
              onClick={() =>
                handleModal(row?.questionDetail, row?.status, row?._id)
              }
            />
          </div>
        </>
      ),
    },
    {
      name: "Status",
      selector: (item) => item?.status,
      sortable: true,
      cell: (row) => (
        <>
          <div
            className={`px-3 py-2 w-[80px] rounded-full flex justify-center items-center
           ${row?.status === "resolve" && "text-[#00E396] bg-[#e4fff6]"}
            ${row?.status === "pending" && "text-[#FEB019] bg-[#fbf3e1]"} ${
              row?.status === "reject" && "text-rose-500 bg-red-100"
            }`}
          >
            <p className="text-[12px] font-bold">{Capitalized(row?.status)}</p>
          </div>
        </>
      ),
    },
  ];

  // --------------------fetching Data--------------------
  const getAPIData = async () => {
    try {
      setLoaderInFolder(true);
      let res = await apiGetResponse(
        await getData(`/report?query=${report?.reportStatus}`, token)
      );
      if (res?.success) {
        setLoaderInFolder(false);
        setReportAllData(res?.data);
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.log(error);
      toastError(error?.message || "something went wrong!");
    }
  };
  useEffect(() => {
    getAPIData();
  }, [report?.reportStatus]);
  return {
    columns,
    openModal,
    report,
    loaderInFolder,
    reportAllData,
    handleModal,
    handleSelectStatus,
    handleSelectAnswer,
    handleSelectOption,
    handleModelSave,
  };
};

export default ReportService;
