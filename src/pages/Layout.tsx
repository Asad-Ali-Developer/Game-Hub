import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { Box } from "@chakra-ui/react"

const Layout = () => {
  return (
    <>

      <Navbar />
      <Box p={2}>
        <Outlet />
      </Box>

    </>
  )
}

export default Layout