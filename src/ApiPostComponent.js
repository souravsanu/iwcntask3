import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const ApiPostComponent = () => {
  const [headers, setHeaders] = useState(null);

  useEffect(() => {
    postData();
  }, []);

  const postData = async () => {
    try {
      const response = await axios.post("https://chimpu.xyz/api/post.php", {
        phoneNumber: "12345678954657",
      });
      setHeaders(response.headers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">API Post Component</h1>
      {headers && (
        <ul className="header-list">
          {Object.entries(headers).map(([key, value]) => (
            <li key={key} className="header-item">
              <span className="header-key">{key}:</span> {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiPostComponent;
