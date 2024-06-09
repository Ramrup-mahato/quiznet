import React, { useContext } from "react";
import ContactService from "../../../service/ContactService/ContactService";
import TextInput from "../../ReUsable/TextInput";
import DataTable from "react-data-table-component";
import Loader from "../../ReUsable/Loader";
import ContextStore from "../../../context/Context";

const ContactPage = () => {
  const { loaderInFolder } = useContext(ContextStore);

  const { contactData, columns,contactState,handleChange ,filter,handleSelectStatus} = ContactService();
  return (
    <div className="p-4">
      {loaderInFolder ? (
        <Loader folderLoader={true} />
      ) : (
        <div className="bg-[var(--colW2)] dark:bg-slate-800 p-2 rounded-md rounded-t-3xl ">
          <div className="flex justify-between items-center pb-3  ">
            <div className="w-[60%]">
              <TextInput
                classStyle={"border-none "}
                RoundFull={true}
                placeholder={"Search ..."}
                value={contactState.search}
                handleChange={handleChange}
              />
            </div>
            <div className="flex justify-center items-center bg-white dark:bg-slate-700 rounded-full p-1">
            <div
              className={`w-[70px] flex justify-center items-center p-2  font-bold rounded-full cursor-pointer
             ${
              contactState?.messageRead === "unread" ?
               " text-[#FEB019] bg-[#fbf3e1] shadow-xl":undefined
             }`}
              onClick={() => handleSelectStatus("unread")}
            >
              <p className="text-[12px]">Unread</p>
            </div>
            <div
              className={`p-2 w-[70px] flex justify-center items-center  font-bold rounded-full cursor-pointer 
              ${
                contactState?.messageRead  === "read" ?
                "  text-[#00E396] bg-[#e4fff6] shadow-xl":undefined
              }`}
              onClick={() => handleSelectStatus("read")}
            >
              <p className="text-[12px]">Read</p>
            </div>
           
          </div>
          </div>
          <DataTable
            //   title="Contact List"
            columns={columns}
            data={filter(contactData,contactState.search)}
            defaultSortField="name"
            striped
            // pagination
            subHeader={false}
            // subHeaderComponent={subHeaderComponent}
          />
        </div>
      )}
    </div>
  );
};

export default ContactPage;
