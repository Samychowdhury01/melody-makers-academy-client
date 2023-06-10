import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FcApproval, FcCancel } from "react-icons/fc";
// TODO: have to add icons
const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes, refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await axiosSecure.get("/classes");
      return response;
    },
  });

  // handle approval button functionalities
  const handleClassApprove = (data) => {
    console.log(data);
    axiosSecure
      .patch(`/classes/status?id=${data?._id}&status=approved`)
      .then((response) => {
          if (response.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `You have successfully added the class`,
                showConfirmButton: false,
                timer: 1500
              })
        }
        console.log(response);
      });
  };
  // handle Deny button functionalities
  const handleClassDeny = (data) => {
    console.log(data);
    axiosSecure
      .patch(`/classes/status?id=${data?._id}&status=denied`)
      .then((response) => {
          if (response.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `You have successfully added the class`,
                showConfirmButton: false,
                timer: 1500
              })
        }
        console.log(response);
      });
  };

  // handle feedback
  const handleFeedback = async (data) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });

    if (text) {
      console.log(text)
      axiosSecure
      .patch(`/classes/feedback/${data?._id}`, {feedback:text})
      .then((response) => {
          if (response.modifiedCount > 0) {
            refetch()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `You have successfully added a feedback`,
                showConfirmButton: false,
                timer: 1500
              })
        }
        console.log(response);
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-base-300">
      <div className="px-4 py-10 center-div md:px-8 lg:px-12">
        <h1 className="text-4xl styled-text text-center mb-10">
          All Classes Added By Instructors
        </h1>
        <div className="overflow-x-auto">
          <table className="table bg-base-300 drop-shadow-xl table-auto">
            <thead>
              <tr className="text-lg text-center">
                <th>No.</th>
                <th>Class image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Email</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Approve</th>
                <th>Deny</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {classes?.map((classData, index) => (
                <tr key={index} className="text-base">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={classData?.image} alt="Class" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classData?.className}</td>
                  <td>{classData?.instructorName}</td>
                  <td>{classData?.instructorEmail}</td>
                  <td>{classData?.availableSeats}</td>
                  <td>{classData?.price}</td>
                  <td>
                    {classData.status === "approved" ? (
                      <>
                        <div className="flex items-center gap-2 text-success">
                        <FcApproval className="text-lg"/> <span>Approved</span>
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => handleClassApprove(classData)}
                        className="btn btn-success btn-sm"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                  <td>
                    {classData?.status === "denied" ? (
                      <>
                      <div className="flex items-center gap-2 text-error">
                      <FcCancel className="text-lg"/> <span>Denied</span>
                      </div>
                    </>
                    ) : (
                      <button 
                      onClick={()=> handleClassDeny(classData)}
                      className="btn btn-error btn-sm">Deny</button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleFeedback(classData)}
                      className="btn btn-warning btn-sm"
                    >
                      Feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
