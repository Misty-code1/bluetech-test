import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemSearch, setItemSearch] = useState("");
  const [supplier, setSupplier] = useState("FragranceNet");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching new data
      try {
        const response = await fetch(
          `http://3.88.1.181:8000/products/public/catalog?supplier=${supplier}&first=0&last=50&search=${itemSearch}
`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setFilteredProducts(result);
        console.log("Fetched data:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchData();
  }, [itemSearch, supplier]); // Fetch data whenever supplier changes

  const searchProducts = (query) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredProducts(data); // Reset to all data if query is empty
    } else {
      const filtered = data.filter((product) =>
        product.itemSearch.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const contextValue = {
    data,
    loading,
    filteredProducts,
    searchProducts,
    searchQuery,
    setItemSearch,
    setSupplier,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
