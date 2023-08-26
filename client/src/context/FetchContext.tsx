import React, { createContext, useContext, useEffect, useState } from 'react';

interface CoinData {
    uuid: string;
    name: string;
    iconUrl: string;
    symbol: string;
    price: string;
    change: string;
    sparkline: string & [string]
}

interface ApiContextType {
    coinsData: CoinData[];
    fetchData: () => void;
}

interface ChildrenApiProps {
    children: React.ReactNode;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<ChildrenApiProps> = ({ children }) => {
    const [coinsData, setCoinsData] = useState<CoinData[]>([]);

    const fetchData = async () => {
        const headersList = {
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            "X-RapidAPI-Key": "f39898f7ecmsh777502191ba939ap15cd54jsne595f27791a3",
            "Content-Type": "application/json"
        };

        try {
            const response = await fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
                method: "GET",
                headers: headersList
            });

            if (response.ok) {
                const data: { data: { coins: CoinData[] } } = await response.json();
                setCoinsData(data.data.coins);
            } else {
                throw new Error('La respuesta de la red no fue exitosa.');
            }
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={{ coinsData, fetchData }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApiContext = (): ApiContextType => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error("useApiContext must be used within an ApiProvider");
    }
    return context;
};