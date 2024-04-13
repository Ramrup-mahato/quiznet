import { useEffect, useState } from "react";
import { contactMessage } from "../../utils/data";
import { Capitalized } from "../../utils/Helper";

const ContactService = () => {
  const [contactData, setContactData] = useState([]);
  const [contactState, setContactState] = useState({
    messageRead: "read",
  });

  // module  open true or false
  const handleReadMessage = (id, val) => {
    const newData = contactData.map((ele) => {
      if (ele.id === id) {
        const value = val === 'read' ? 'unread' : 'read';
        return {
          ...ele,
          status: value
        };
      }
      return ele;
    });
    setContactData(newData);
  };

  // columns data create for dataTable
  const columns = [
    {
      name: "No",
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
      selector: (e) => e.name,
      sortable: true,
      //   hide: "lg",
      grow: 1,

      cell: (row) => (
        <>
          <div className="flex justify-center items-center gap-2 p-2">
            <p>{Capitalized(row?.name)}</p>
          </div>
        </>
      ),
    },
    {
      name: "Email",
      selector: (e) => e.email,
      sortable: true,
      hide: "lg",

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
      grow:4,
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
            onClick={() => handleReadMessage(row?.id,row?.status)}
          >
            <p className="text-[12px] font-bold">{Capitalized(row?.status)}</p>
          </div>
        </>
      ),
    },
  ];

  useEffect(() => {
    setContactData([...contactMessage]);
  }, []);
  return {
    contactData,
    contactState,
    columns,
  };
};

export default ContactService;
