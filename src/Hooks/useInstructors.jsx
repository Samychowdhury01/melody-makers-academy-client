import  { useEffect, useState } from 'react';

const useInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
      fetch("https://melody-makers-server.vercel.app/users/instructors")
        .then((res) => res.json())
        .then((data) => setInstructors(data));
    }, []);
    return {instructors}
};

export default useInstructors;