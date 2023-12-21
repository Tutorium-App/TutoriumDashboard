import { StudentsContext } from '../context/StudentContext'
import { useContext } from 'react'

export const useStudentContext = () => {
  const context = useContext(StudentsContext)

  if (!context) {
    throw Error('useStudentContext must be used inside an StudentContextProvider')
  }

  return context
}