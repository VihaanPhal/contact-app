import React from "react";
import user from "../images/user.png"; // Ensure you have this image in the specified path

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        width: "100%",
      }}
    >
      <img
        className="ui avatar image"
        src={user}
        alt="user"
        style={{ width: "50px", height: "50px", marginRight: "15px" }}
      />
      <div style={{ flexGrow: 1, marginRight: "15px" }}>{name}</div>
      <div style={{ flexGrow: 2, marginRight: "15px" }}>{email}</div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", cursor: "pointer", fontSize: "1.5rem" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
