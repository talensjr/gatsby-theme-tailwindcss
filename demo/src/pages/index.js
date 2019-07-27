import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import "../utils/globals.css"

const Box = styled.div`
  ${tw`bg-red-800`}
  width: 400px;
`

function IndexPage() {
  return (
    <>
      <div className="mt-10 select-none">Index page!! --- from demo</div>
      <Box>asdasdasd</Box>
    </>
  )
}

export default IndexPage
