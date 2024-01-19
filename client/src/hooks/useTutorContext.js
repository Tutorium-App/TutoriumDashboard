import { TutorsContext } from '../context/TutuorContext'
import { useContext } from 'react'

export const useTutorsContext = () => {
  const context = useContext(TutorsContext)

  if (!context) {
    throw Error('useTutorsContext must be used inside an TutorsContextProvider')
  }

  return context
}