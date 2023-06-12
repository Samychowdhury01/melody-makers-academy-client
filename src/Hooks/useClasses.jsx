import React, { useEffect, useState } from 'react';

const useClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
      fetch("https://melody-makers-server.vercel.app/approved-classes")
        .then((res) => res.json())
        .then((data) => setClasses(data));
    }, []);
    return {classes}
};

export default useClasses;