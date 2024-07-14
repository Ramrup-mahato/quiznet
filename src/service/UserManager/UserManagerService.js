import { useContext, useEffect, useState } from "react";
// import { contactMessage } from "../../utils/data";
import { Capitalized, apiGetResponse, apiResponse } from "../../utils/Helper";
import { toastError, toastWarning } from "../../utils/tostify";
import { getData, postData } from "../../components/AuthGard/LogGard";
import ContextStore from "../../context/Context";
import { FaEye } from "react-icons/fa";

const UserManagerService = () => {
  const { token, setLoaderInFolder, setIsLoader, userDetails } =
    useContext(ContextStore);
  const [userData, setUserData] = useState([]);
  const [userState, setUserState] = useState({
    status: "active",
    search: "",
    data: "",
    userModal: false,
  });

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
    setUserState((old) => {
      return {
        ...old,
        search: e.target.value,
      };
    });
  };

  const handleModal = (val) => {
    setUserState((prev) => ({
      ...prev,
      userModal: !prev.userModal,
      data: val,
    }));
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

      cell: (row) => (
        <>
          <div className="w-full  ">
            <FaEye
              size={20}
              className="cursor-pointer text-[var(--colB1)]"
              onClick={() => handleModal(row)}
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
            className={`px-3 py-2 w-[80px] rounded-full flex justify-center items-center cursor-pointer
          
            ${
              row?.isBlocked === true
                ? "text-rose-500 bg-red-100 shadow-xl"
                : ` ${row?.isActive === true && "text-[#00E396] bg-[#e4fff6]"}
            ${row?.isActive === false && "text-[#FEB019] bg-[#fbf3e1]"}`
            }`}
          >
            <p className="text-[12px] font-bold">{`
            ${
              row?.isBlocked === true
                ? "Blocked"
                : `${row?.isActive === true ? "Active" : ""}
            ${row?.isActive === false ? "In Active" : ""}`
            }`}</p>
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
        await getData(`/getUsers?status=${val}`, token)
      );
      if (res.success) {
        setLoaderInFolder(false);
        setUserData(res?.data);
      }
    } catch (error) {
      toastWarning(error?.message);
      setLoaderInFolder(false);
    }
  };
  // ---------------------change State-----------------------
  const handleSelectStatus = (val) => {
    handleGetApi(val);
    setUserState((old) => {
      return {
        ...old,
        status: val,
      };
    });
  };
  //   ------------------------block user / un Block User-----------------------------------
  const handleBlockUser = async (val, id) => {
    console.log("isBlocked", val);
    try {
      setIsLoader(true);

      let json = {
        _id: id,
        isBlocked: val === true ? false : true,
        isActive: false,
      };
      let res = await apiResponse(
        await postData("/profile/update", json, token)
      );
      if (res?.success) {
        handleGetApi(userState?.status);
        setUserState((prev) => ({
          ...prev,
          userModal: false,
          data: "",
        }));
        setIsLoader(false);
      }else{
        setIsLoader(false);
      }
    } catch (error) {
      setIsLoader(false);
      console.error(error);
      toastError(error?.message || "something wrong with imageKit");
    }
  };
  useEffect(() => {
    handleGetApi(userState?.status);
  }, []);
  return {
    userData,
    userState,
    columns,
    handleChange,
    filter,
    handleSelectStatus,
    handleModal,
    handleBlockUser,
  };
};

export default UserManagerService;
