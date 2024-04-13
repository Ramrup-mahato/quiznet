import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Capitalized } from "../../utils/Helper";
import { dataReport } from "../../utils/data";

const ReportService = () => {
  const [reportAllData,setReportAllData]=useState(dataReport)
  const [openModal, setOpenModal] = useState(false);
  const [report, setReport] = useState({
    reportStatus: "pending",
    reportData: [],
    reportQuestion: {},
    reportStatusOption: "pending",
    modelId: "",
  });

  //   const filteredItems = dataReport.filter(
  //     (item) => item.name && item.name.includes(filterText)
  //   );
  // select Status
  const handleSelectStatus = (status) => {
    setReport((oldData) => {
      return {
        ...oldData,
        reportStatus: status,
      };
    });
  };

  // module  open true or false
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

  // set date option from
  const handleSelectOption = (ele) => {
    setReport((oldData) => {
      return {
        ...oldData,
        reportStatusOption: ele,
      };
    });
  };
  // Model Save
  const handleModelSave = () => {
    let data=[...reportAllData];
    data.forEach((ele,i)=>{
      if (ele && report && ele.id === report.modelId) {
        let status = report.reportStatusOption;
        ele.status = status;
      }
    })
    setReportAllData([...data])
    handleModal();
  };
  // columns data create for dataTable
  const columns = [
    {
      name: "Report No",
      selector: (item) => item?.id,
      sortable: true,
      hide: "lg",
      //   hide: "md",
      //   button: true,
      grow: 0,
      cell: (row) => (
        <>
          <div>
            <p>{row?.id}</p>
          </div>
        </>
      ),
    },
    {
      name: "User",
      selector: (e) => e.username,
      sortable: true,
      //   hide: "lg",
      grow: 2,

      cell: (row) => (
        <>
          <div className="flex justify-center items-center gap-2 p-2">
            <img
              src={row?.userImage}
              className="w-10 h-10 rounded-full"
              alt="image ..."
            />
            <p>{Capitalized(row?.username)}</p>
          </div>
        </>
      ),
    },
    {
      name: "Phone",
      selector: (e) => e.userPhone,
      sortable: true,
      hide: "lg",

      cell: (row) => (
        <>
          <div className=" ">
            <p>{row?.userPhone}</p>
          </div>
        </>
      ),
    },
    {
      name: "Report Date",
      selector: (e) => e.date,
      sortable: true,
      cell: (row) => (
        <>
          <div className=" ">
            <p>{row?.date}</p>
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
              onClick={() => handleModal(row?.question, row?.status, row?.id)}
            />
          </div>
        </>
      ),
    },
    {
      name: "Status",
      selector: (item) => item.status,
      sortable: true,
      cell: (row) => (
        <>
          <div
            className={`px-3 py-2 w-[80px] rounded-full flex justify-center items-center
           ${row?.status == "resolve" && "text-[#00E396] bg-[#e4fff6]"}
            ${row?.status == "pending" && "text-[#FEB019] bg-[#fbf3e1]"} ${
              row?.status == "reject" && "text-rose-500 bg-red-100"
            }`}
          >
            <p className="text-[12px] font-bold">{Capitalized(row?.status)}</p>
          </div>
        </>
      ),
    },
  ];

  // filter Data
  const FilterReport = (data, condition) =>
    data?.filter((ele) => ele?.status == condition);
  useEffect(() => {
    const data = FilterReport(reportAllData, report?.reportStatus);
    setReport((oldData) => {
      return {
        ...oldData,
        reportData: data,
      };
    });
  }, [report.reportStatus,reportAllData]);
  return {
    columns,
    openModal,
    report,
    handleModal,
    handleSelectStatus,
    handleSelectAnswer,
    handleSelectOption,
    handleModelSave,
  };
};

export default ReportService;
