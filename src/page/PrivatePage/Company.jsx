import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { axiosInstance } from "../../Api/AxiosInstance";
import { useGetPostsQuery } from "../../redux-toolkit/toolkit_api/reducer/CompanyReducer";




function Company() {
  const count = useSelector((state) => state.counter.value)

  // const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { data:Newdata, isLoading } = useGetPostsQuery();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get('/v1/company'); // Adjust the endpoint as needed
  //       setData(response.data);
  //     } catch (error) {
  //       setError('Error fetching data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

console.log("Newdata",Newdata)

  return (
    <div>
      <p>DATA : {Newdata?.data?.name}</p>
      {
        
      }



      <p> Count : {count}</p>
      <p>Company</p>
      <Link to="baby1">
        <h1>Baby 1</h1>
      </Link>
      <Link to="baby2">
        <h1>Baby 2</h1>
      </Link>

      <h1>hello : </h1>
      <Outlet />
    </div>
  );
}

export default Company;
