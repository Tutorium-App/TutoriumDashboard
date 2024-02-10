import { AdminsContext } from '../context/AdminContext'
import { useContext } from 'react'

export const useAdminContext = () => {
  const context = useContext(AdminsContext)

  if (!context) {
    throw Error('useAdminContext must be used inside an AdminContextProvider')
  }

  return context
}