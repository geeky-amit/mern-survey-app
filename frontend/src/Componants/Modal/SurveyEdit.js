// import React, { useState, useEffect } from "react";
// import { useToast } from "@chakra-ui/react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./SurveyEdit.css";
// const SurveyEdit = () => {
//   const { id } = useParams();
//   console.log(id);

//   const [surveyUpdatedInfo, setSurveyUpdatedInfo] = useState({
//     _id: id,
//     name: "",
//     description: "",
//     typeOfSurvey: "",
//     startDate: "",
//     endDate: ""
//   });

//   useEffect(async () => {
//     const res = axios.get(`http://localhost:5000/api/survey/${id}`);
//     console.log(res);
//     setSurveyUpdatedInfo({ ...surveyUpdatedInfo });
//   });

//   const toast = useToast();

//   const submitHandler = async () => {
//     // if (!name || !description || !startDate || !endDate || surveyType) {
//     //   toast({
//     //     title: "Please fill all the required fields!",
//     //     status: "warning",
//     //     duration: 5000,
//     //     isClosable: true,
//     //     position: "top"
//     //   });
//     //   return;
//     // }

//     try {
//       //   const config = {
//       //     headers: {
//       //       Authorization: `Bearer ${user.token}`
//       //     }
//       //   };

//       await axios.patch(`http://localhost:5000/api/survey/${id}`, {});
//       toast({
//         title: "Survey Updated Successfully!",
//         status: "success",
//         duration: 4000,
//         isClosable: true,
//         position: "top"
//       });
//     } catch (error) {
//       toast({
//         title: "Something Went Wrong!",
//         status: "error",
//         duration: 4000,
//         isClosable: true,
//         position: "top"
//       });
//       console.log(error);
//     }
//   };
//   return (
//     <div className="survey-edit-container">
//       <div className="survey-edit-box">
//         <div className="edit-label-box">
//           <label>Name</label>
//           <input
//             className="edit-input"
//             type="text"
//             // value={survey.name}
//           />
//         </div>
//         <div className="edit-label-box">
//           <label>Description</label>
//           <input
//             className="edit-input"
//             type="text"
//             // value={survey.description}
//           />
//         </div>
//         <div className="edit-label-box">
//           <label>Type of Survey</label>
//           <select
//             className="edit-input"
//             name="surveyType"

//             // value={survey.typeOfSurvey}
//           >
//             <option value="Video">Video</option>
//             <option value="Feedback">Feedback</option>
//             <option value="Product">Product</option>
//           </select>
//         </div>
//         <div className="edit-label-box">
//           <label>Start Date</label>
//           <input className="edit-input" type="date" />
//         </div>
//         <div className="edit-label-box">
//           <label>End Date</label>
//           <input className="edit-input" type="date" />
//         </div>
//       </div>
//       <div>
//         <button className="survey-edit-btn">SAVE</button>
//       </div>
//       <div className="survey-edit-close"></div>
//     </div>
//   );
// };
// export default SurveyEdit;
