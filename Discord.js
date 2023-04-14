import {app} from "./firebase"
import { useEffect, useState,useRef } from "react";
import {Box,Input,Button,Container,VStack,HStack} from "@chakra-ui/react"
import Message from "./Message";
import { ChakraProvider } from "@chakra-ui/react";
import {onAuthStateChanged, getAuth,GoogleAuthProvider,signInWithPopup,signOut} from "firebase/auth"
import {getFirestore,addDoc, collection,serverTimestamp,onSnapshot,query,orderBy} from "firebase/firestore"

const auth = getAuth(app)
const db = getFirestore(app)

const loginHandler = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth,provider)
}

const logoutHandler = () => {
 signOut(auth)
}

function Discord() {
  
  const [user,setUser] = useState(false)
  const [message,setMessage] = useState("")
  const [mainmessages,setMainmessages] = useState([])

  const divForScroll = useRef(null)

  const submitHandler = async(e) => {
    e.preventDefault() 
  
  try {
    setMessage("");
    await addDoc(collection(db,"Messages"),{
      text:message,
      uid:user.uid,
      uri:user.photoURL,
      createAt:serverTimestamp()
    })

    divForScroll.current.scrollIntoView({behaviour:"smooth"})
  
  } catch (error) {
    alert(error)
  }
}

  useEffect(()=>{
    const q = query(collection(db,"Messages"),orderBy("createAt","asc")) // createAt is always exactly same as firebase / data / messages
    const unsubscribe = onAuthStateChanged(auth,(data)=>{
        setUser(data)
    })

    const unsubscribeForMessage = onSnapshot(q,(snap)=>{
        setMainmessages(snap.docs.map((item)=>{
          const id = item.id
          return {id,...item.data() }
        })
        )
    })

    return () => {
      unsubscribe()
      unsubscribeForMessage()
    }
  },[])

  return (
    <>
    <ChakraProvider >
  <Box bg={"red.100"} paddingY={"6"} w={"104vw"}>
      {
        user?(
          <Container h={"100vh"} bg={"white"} >
        <VStack h={"full"} paddingY={"4"} >
            <Button onClick={logoutHandler} colorScheme={"red"} w={"full"}>Logout</Button>
            <VStack overflow="auto" h={"full"} w={"full"} css={{"&::-webkit-scrollbar":{display:"none"}}}>
              {
                mainmessages.map(item=>(
                  <Message 
                  key ={item.id}
                  user={item.uid === user.uid ? "me" : "other"}
                  text={item.text} 
                  uri={item.uri} 
                   />
                ))
              }
              <div ref={divForScroll}></div>
            </VStack>

            
                  <form onSubmit={submitHandler} style={{width:"100%", borderBlockColor:"grey" }}>
                    <HStack>
                      <Input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="enter a message" borderColor={"grey"} textColor={"black"}/>
                         <Button colorScheme={"purple"} type="submit">
                          Send
                         </Button>
                    </HStack> 
                  </form>
            </VStack>
      </Container>
        ):(
          <VStack bg="white" justifyContent={"center"} h="60vh" >
          <Button onClick={loginHandler} colorScheme="purple" >sign in with google</Button>
        </VStack>
      )}
  </Box>
  </ChakraProvider>
  </>
  );
}
export default Discord;

// vstack(means vertical stack) is like(whose display is already flex and flex-direction is column)
// hstack means horizontal stack
