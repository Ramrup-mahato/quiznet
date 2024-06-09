import { useContext, useEffect, useState } from "react";
import { contactMessage } from "../../utils/data";
import { Capitalized, apiGetResponse } from "../../utils/Helper";
import { toastWarning } from "../../utils/tostify";
import { getData, updateData } from "../../components/AuthGard/LogGard";
import ContextStore from "../../context/Context";

const ContactService = () => {
  const { token, setLoaderInFolder,setIsLoader } = useContext(ContextStore);
  const [contactData, setContactData] = useState([]);
  const [contactState, setContactState] = useState({
    messageRead: "unread",
    search: "",
  });

  //---------------------- module  open true or false
  const handleReadMessage = async (id, val) => {
    console.log("handleReadMessage", id, val);
    try {
      setIsLoader(true);
      let json = {
        _id: id,
        status: val&&val==='read'?'unread':'read',
      };
      let res = await apiGetResponse(await updateData(`/contact`, json, token));
      if (res.success) {
        handleGetApi(contactState.messageRead);
        setIsLoader(false);
      }
    } catch (error) {
      toastWarning(error.message);
      setIsLoader(false);
    }
  };
  // ------------------------filter---------
  const filter = (data, value) => {
    if (value) {
      let filt = data.filter(
        (item) =>
          item.username.toLowerCase().includes(value) ||
          item.email.includes(value) ||
          item.phone.includes(value)
      );
      return filt;
    } else {
      return data;
    }
  };
  // -------------handle Change-------------------
  const handleChange = (e) => {
    setContactState((old) => {
      return {
        ...old,
        search: e.target.value,
      };
    });
  };
  //-------------------- columns data create for dataTable
  const columns = [
    {
      name: "User",
      selector: (e) => e.username,
      sortable: true,
      //   hide: "lg",
      grow: 1.5,

      cell: (row, i) => (
        <>
          <div className="flex justify-center items-center gap-2 p-2">
            <p>{i + 1}. </p>
            <p>{Capitalized(row?.username)}</p>
          </div>
        </>
      ),
    },
    {
      name: "Email",
      selector: (e) => e.email,
      sortable: true,
      hide: "lg",
      grow: 1,
      cell: (row) => (
        <>
          <div className=" ">
            <p>{row?.email}</p>
          </div>
        </>
      ),
    },
    {
      name: "Phone",
      selector: (e) => e.phone,
      sortable: true,
      cell: (row) => (
        <>
          <div className=" ">
            <p>{row?.phone}</p>
          </div>
        </>
      ),
    },
    {
      name: "Message",
      // selector: "raisedDate",
      sortable: false,
      hide: "md",
      grow: 3,
      cell: (row) => (
        <>
          <div className="cursor-pointer">
            <p title={row?.message}>
              {row?.message?.length > 50
                ? row?.message?.slice(0, 50) + "..."
                : row?.message}
            </p>
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
            className={`px-3 py-2 w-[80px] rounded-full flex justify-center items-center cursor-pointer
           ${row?.status === "read" && "text-[#00E396] bg-[#e4fff6]"}
            ${row?.status === "unread" && "text-[#FEB019] bg-[#fbf3e1]"}`}
            onClick={() => handleReadMessage(row?._id, row?.status)}
          >
            <p className="text-[12px] font-bold">{Capitalized(row?.status)}</p>
          </div>
        </>
      ),
    },
  ];
  // -----------------------------------------------

  const handleGetApi = async (val) => {
    try {
      setLoaderInFolder(true);
      let res = await apiGetResponse(
        await getData(`/contact?type=${val}`, token)
      );
      if (res.success) {
        setLoaderInFolder(false);
        setContactData(res.data);
      }
    } catch (error) {
      toastWarning(error.message);
      setLoaderInFolder(false);
    }
  };
  // ---------------------change State-----------------------
  const handleSelectStatus = (val) => {
    handleGetApi(val);
    setContactState((old) => {
      return {
        ...old,
        messageRead: val,
      };
    });
  };
  useEffect(() => {
    handleGetApi(contactState.messageRead);
  }, []);
  return {
    contactData,
    contactState,
    columns,
    handleChange,
    filter,
    handleSelectStatus,
  };
};

export default ContactService;
