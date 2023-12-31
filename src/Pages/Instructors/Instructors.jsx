
import { Helmet } from 'react-helmet-async';
import InstructorCard from '../../Components/instructorCard/InstructorCard';
import useInstructors from '../../Hooks/useInstructors';

const Instructors = () => {
    const {instructors} = useInstructors()
    return (
      <>
      <Helmet>
        <title>
          MelodyMakers Academy | Instructors
        </title>
      </Helmet>
        <div>
          <h1 className="text-[#86E5DC] text-5xl font-semibold text-center mt-16">
            Meet Our Instructors
          </h1>
          {/* <h1 className='text-white text-5xl font-semibold text-center mt-16 '>Check Out our classes</h1> */}
          <div className="border-b border-[#30CD8E] pb-5 w-2/3 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 p-5 parallax-bg">
          {instructors?.map((instructor) => (
            <InstructorCard key={instructor?._id} instructor={instructor} />
          ))}
        </div>
      </> )
};

export default Instructors;