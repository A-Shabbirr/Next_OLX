'use client'
import { useState, useEffect, useContext, createContext } from 'react';

export const allDataContext = createContext()
export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchAllData = async () => {
            const limit = 30
            const total = 194
            const Products = []
            for (let skip = 0; skip < total; skip += limit) {
                const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
                const data = await res.json()
                Products.push(...data.products)
                // console.log(Products);
            }
            setData(Products)
        }
        fetchAllData()
    }, []);

    return (
        <allDataContext.Provider value={data}>
            {children}
        </allDataContext.Provider>

    )
}
export const useData = () => useContext(allDataContext)