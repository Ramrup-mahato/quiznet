import React from "react";
import ContactService from "../../../service/ContactService/ContactService";
import TextInput from "../../ReUsable/TextInput";
import DataTable from "react-data-table-component";

const ContactPage = () => {
  const {
    contactData,
    columns,
  } = ContactService();
  return (
    <div className="p-4">
      <div className="bg-[var(--colW2)] dark:bg-slate-800 p-2 rounded-md rounded-t-3xl ">
        <div className="flex justify-between items-center pb-3  ">
          <div className="w-[60%]">
            <TextInput
              classStyle={"border-none "}
              RoundFull={true}
              placeholder={"Search ..."}
            />
          </div>
        </div>
        <DataTable
          //   title="Contact List"
          columns={columns}
          data={contactData}
          defaultSortField="name"
          striped
          // pagination
          subHeader={false}
          // subHeaderComponent={subHeaderComponent}
        />
      </div>
    </div>
  );
};


export default ContactPage;
