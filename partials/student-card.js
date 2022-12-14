import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Edit_student from '../partials/EditStudent';
import Deletemodal from '../partials/Deletemodal';

function StudentCard(props) {
  const student = props.student;
  const navigate = useNavigate();


  const [showEditStudent , setShowEditStudent] = useState(false)
  const [showDeletemodal , setShowDeleteModal] = useState(false)


  return (
    <div className="card">

      <div className="labels">
        <p>Last Name :</p>
        <p>First Name :</p>
        <p>Speciality :</p>
        <p>Group :</p>
        <p>Student Num :</p>
      </div>
      <div className="values">
        <p>{student.last_name}</p>
        <p>{student.first_name}</p>
        <p>{student.speciality}</p>
        <p>0{student.group}</p>
        <p>{student.student_card_num}</p>
      </div>
      <div className="ed-btns">
        <div id="edit-btn" onClick={()=>{setShowEditStudent(true)}}></div>
        <div id="delete-btn" onClick={()=>{setShowDeleteModal(true)}}></div>
      </div>

      {showEditStudent && (
          <Edit_student
          setShowEditStudent={setShowEditStudent} 
          userId={student._id} 
          userName={student.last_name}
          userEmail= {student.email} 
          userCardNumber={student.student_card_num}
          userGroup={student.group}
          userSpeciality={student.speciality}

          />
       )
       }

      {showDeletemodal && (
        <Deletemodal setShowDeleteModal={setShowDeleteModal}  type="student" userId={student._id} userName={student.last_name}/>
       )
       }
      
    </div>
  );
}

export default StudentCard;
