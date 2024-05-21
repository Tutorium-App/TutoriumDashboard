import React from 'react'
import { ManageStudentTemplateDetail } from '../../components'
// import StudentsData from './StudentsDB'
import { useStudentContext } from "../../hooks/useStudentContext";

const MSDetail = () => {
  const { students } = useStudentContext();
  return (
    <>
        <ManageStudentTemplateDetail Data={students} title="STUDENTS" />
    </>
  )
}

export default MSDetail