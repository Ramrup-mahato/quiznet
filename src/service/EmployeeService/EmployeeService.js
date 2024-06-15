import { useEffect, useState } from "react";
import { employeeDetails } from "../../utils/data";

const EmployeeService = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [moduleSearch, setModuleSearch] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [addEditModal, setAddEditModal] = useState("");

  const handleModal = (data, type) => {
    if (type === "edit") {
      setModalData([data]);
    } else {
      setModalData([]);
    }
    setOpenModal(!openModal);
    setAddEditModal(type);
  };
  const handleSelectEmployee = (ele) => {
    setModalData([ele]);
    setSearchText("");
    setModuleSearch([]);
  };
  const handleSearchText = (val) => {
    setSearchText(val);
    const filter = employeeDetails.filter((ele) => ele?.email?.includes(val));
    setModuleSearch([...filter]);
  };

  // Add New Employee in list
  const handleAddNewEmployee = () => {
    setEmployeeList([...modalData, ...employeeList]);
    setOpenModal(false);
    setModalData([]);
  };

  useEffect(() => {
    setEmployeeList(employeeDetails);
  }, []);

  return {
    moduleSearch,
    searchText,
    openModal,
    modalData,
    employeeList,
    addEditModal,
    handleModal,
    handleSelectEmployee,
    handleSearchText,
    handleAddNewEmployee,
  };
};

export default EmployeeService;
