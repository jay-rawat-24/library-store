import React from 'react'
import {HStack,Avatar,Text} from "@chakra-ui/react"

const Message = ({text,uri,user="other"}) => {
  return (
    <HStack alignSelf={user==="me" ? "flex-end":"flex-start"} borderRadius="1.5rem" bg="gray.100" paddingX={"4"} paddingY={"2"}>
    {
        user === "other" && <Avatar src={uri} />
    }
        <Text>{text}</Text>
        {
            user === "me" && <Avatar src={uri} />
        }
    </HStack>
  )
}

export default Message

// hstack means by default it comes in row