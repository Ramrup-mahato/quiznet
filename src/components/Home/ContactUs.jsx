import React from "react";
import TextInput from "../ReUsable/TextInput";

const ContactUs = () => {
  return (
    <div>
      <TextInput
        label={"Your Name"}
        require={true}
        placeholder={"Enter Your Name..."}
      />
      <TextInput
        label={"Your Email"}
        require={true}
        placeholder={"Enter Your Email..."}
      />
      <TextInput
        label={"Your Phone"}
        require={true}
        placeholder={"Enter Your Phone..."}
      />
      <TextInput
        label={"Your Message"}
        require={true}
        textarea={true}
        placeholder={"Enter message..."}
      />
    </div>
  );
};

export default ContactUs;
