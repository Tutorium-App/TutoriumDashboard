import React from 'react'
import { TSDetail } from '../../components'
// import StudentsData from './StudentsDB'
import { useStudentContext } from "../../hooks/useStudentContext";

const MSDetail = () => {
  const { students } = useStudentContext();
  return (
    <>
        <TSDetail Data={students} title="STUDENTS" />
    </>
  )
}

export default MSDetail