import React, { useState } from "react";
import { faqDetails } from "../../utils/data";

const FaqService = () => {
  const [allFaq, setAllFaq] = useState([...faqDetails]);
  const [edit,setEdit]=useState(1)


  // Text Question 
  const handleTextChange=()=>{
    
  }
  // TextArea Text 
  const handleAreaChange=()=>{

  }

  // Save FAQ Data
  const handleSaveFaq=()=>{

  }
  // Cancel FAQ Data
  const handleCancelFaq=()=>{
    setEdit(0)
  }
// edit FAQ 
const handleEditFAQ=(id)=>{
  setEdit(id)
}


  return {
    allFaq,
    edit,
    handleSaveFaq,
    handleCancelFaq,
    handleTextChange,
    handleAreaChange,
    handleEditFAQ,
  };
};

export default FaqService;
