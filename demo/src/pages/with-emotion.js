import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import "../utils/globals.css"

const Box = styled.div`
  ${tw`bg-red-800`}
  width: 400px;
`

function WithEmotion() {
  return (
    <>
      <div className="mt-10 select-none">
        <Box>asdasdasd</Box>
      </div>
    </>
  )
}

export default WithEmotion
