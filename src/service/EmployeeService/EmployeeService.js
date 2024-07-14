import { useEffect, useState } from "react";
import { employeeDetails } from "../../utils/data";
import { useContext } from "react";
import ContextStore from "../../context/Context";
import { apiGetResponse, apiResponse } from "../../utils/Helper";
import { getData, postData } from "../../components/AuthGard/LogGard";
import { toastError } from "../../utils/tostify";

const EmployeeService = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [moduleSearch, setModuleSearch] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [addEditModal, setAddEditModal] = useState("");
  const [employee, setEmployee] = useState({
    searchLoader: false,
    ele: false,
    showSelectEmployee: false,
  });
  const { token, loaderInFolder, setLoaderInFolder } = useContext(ContextStore);

  const handleModal = (data, type) => {
    if (type === "edit") {
      setModalData([data]);
    } else {
      setModalData([]);
    }
    setOpenModal(!openModal);
    setAddEditModal(type);
  };
  // --------------------------------save employee ---------------------------------
  const handleSaveEmployee = async (position, val) => {
    try {
      setLoaderInFolder(true);

      let json = {
        _id: val?._id,
        userType: position,
      };
      let res = await apiResponse(
        await postData("/profile/update", json, token)
      );
      if (res?.success) {
        handleGetAllEmployee();
        setOpenModal(false);
      }else{
        setLoaderInFolder(false);
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.error(error);
      toastError(error?.message || "something wrong with imageKit");
    }
  };
  // -------------------------------------------------
  const handleSelectEmployee = (ele) => {
    setModalData(ele);
    setEmployee((prev) => ({
      ...prev,
      showSelectEmployee: true,
    }));
    setSearchText("");
    setModuleSearch([]);
  };
  const handleSearchText = async (e) => {
    let val = e.target.value;
    setSearchText(val);
    // const filter = employeeDetails.filter((ele) => ele?.email?.includes(val));
    // setModuleSearch([...filter]);
    try {
      setEmployee((prev) => ({
        ...prev,
        searchLoader: true,
      }));
      let res = await apiGetResponse(
        await getData(`/search/user?search=${val}`, token)
      );
      if (res?.success) {
        setModuleSearch(res?.data);
        setEmployee((prev) => ({
          ...prev,
          searchLoader: false,
        }));
      }
    } catch (error) {
      setEmployee((prev) => ({
        ...prev,
        searchLoader: false,
      }));
      console.error(error);
      toastError(error?.message || "something went wrong");
    }
  };

  // Add New Employee in list
  const handleAddNewEmployee = () => {
    setEmployeeList([...modalData, ...employeeList]);
    setOpenModal(false);
    setModalData([]);
  };
  //   ----------------get All Employee---------------
  const handleGetAllEmployee = async () => {
    try {
      setLoaderInFolder(true);
      let res = await apiGetResponse(await getData(`/employee`, token));
      if (res?.success) {
        setEmployeeList(res?.data);
        setLoaderInFolder(false);
      }
    } catch (error) {
      setLoaderInFolder(false);
      console.error(error);
      toastError(error?.message || "something went wrong");
    }
  };
  useEffect(() => {
    handleGetAllEmployee();
  }, []);

  return {
    moduleSearch,
    searchText,
    openModal,
    modalData,
    employeeList,
    addEditModal,
    employee,
    handleModal,
    handleSelectEmployee,
    handleSearchText,
    handleAddNewEmployee,
    handleSaveEmployee,
    handleSaveEmployee,
  };
};

export default EmployeeService;
