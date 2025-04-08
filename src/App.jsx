import { useState, useEffect } from 'react'
import './App.css'
import { Postcontext } from './Components/Contexts'
import CreatePost from './Components/CreatePost/CreatePost'
import AllPost from './Components/AllPost/AllPost'
import Checkin from './Components/Checkin/Checkin'

const App = () => {
  const [checkIn, setCheckIn] = useState(true)
  const [checkData, setCheckData] = useState({
    choose: "",
    firstName: "",
    lastName: "",
    image1: "",
  })
  const [showAll, setShowAll] = useState(false)
  const [myPost, setMyPost] = useState([])
  const [showPop, setShowPop] = useState(false)
  const [imageValue, setImageValue] = useState("")
  const [myData, setMyData] = useState({
    about: "",
    image: "",
  })
  useEffect(() => {
    const savedPost = JSON.parse(localStorage.getItem('myData')) || [];
    setMyPost(savedPost);
  }, []);
  return (

    <div className='Appbody'>

      <Postcontext.Provider value={{
        myPost, setMyPost, imageValue, setImageValue,
        myData, setMyData, myPost, setShowPop, showPop, setShowAll, setCheckIn, setCheckData, checkData
      }}>
        {showPop && <CreatePost />}
        {showAll && <AllPost />}
        {checkIn && <Checkin />}
      </Postcontext.Provider>


    </div>
  )
}

export default App
