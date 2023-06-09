import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
    const { logOut } = useAuth(); 
    const navigate = useNavigate(); 
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
      });
useEffect(() =>{
    axiosSecure.interceptors.request.use((request) => {
        const token = localStorage.getItem('access-token')
        
        if(token){
            request.headers.authentication = `Bearer ${token}`
        }
        return request;
      });
    
    // Add a response interceptor
    axiosSecure.interceptors.response.use(
        (response) => response.data,
        async (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await logOut();
            navigate('/login');
          }
          return Promise.reject(error);
        }
      );
},[axiosSecure, logOut, navigate])
    
};

export default useAxiosSecure;