import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return; // Prevent API call if currency is empty

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => setData(res[currency])) // Extract only the currency rates
            .catch((error) => console.error("Error fetching currency data:", error));
        
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
