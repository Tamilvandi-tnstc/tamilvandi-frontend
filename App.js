import React, { useState } from "react";
import axios from "axios";

function App() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [travelData, setTravelData] = useState([]);

    const API_URL = "https://tamilvanditest.onrender.com";  // ✅ Use Online API

axios.get(`${API_URL}?from=${from}&to=${to}`)
  .then(response => {
    setResults(response.data);
  })
  .catch(error => {
    console.error("API Error:", error);
  });


    return (
        <div style={{ padding: "20px" }}>
            <h1>TamilVandi Travel Info</h1>
            <div style={{ marginBottom: "10px" }}>
                <input 
                    type="text" 
                    placeholder="From" 
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    style={{ padding: "10px", marginRight: "10px" }}
                />
                <input 
                    type="text" 
                    placeholder="To" 
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    style={{ padding: "10px", marginRight: "10px" }}
                />
                <button onClick={handleSearch} style={{ padding: "10px" }}>Search</button>
            </div>
            <ul>
                {travelData.length > 0 ? (
                    travelData.map((item, index) => (
                        <li key={index}>
                            {item.origin} to {item.destination} - {item.bus} at {item.time}
                        </li>
                    ))
                ) : (
                    <li>Welcome to Tamilnadu largest travel database website</li>
                )}
            </ul>
        </div>
    );
}

export default App;
