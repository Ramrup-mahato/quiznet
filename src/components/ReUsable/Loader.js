import React from "react";

const Loader = ({ folderLoader }) => {
  return (
    <>
      {folderLoader === true ? (
        <>
          <div
            id="modal-overlay"
            className={`w-full h-full  flex items-center justify-center  `}
          >
            <div className=" loader"></div>
          </div>
        </>
      ) : (
        <>
          <div
            id="modal-overlay"
            className="fixed top-0 left-0 w-full h-full bg-[#00000099] flex items-center justify-center"
          >
            <div className=" loader"></div>
          </div>
        </>
      )}
    </>
  );
};

export default Loader;
