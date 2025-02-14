import React, { useContext, useState } from 'react'
import './CreatePost.css'
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { Postcontext } from '../Contexts';

const CreatePost = () => {
    const [disable, setDisable] = useState(true)
    const { myData, setMyData, setMyPost, myPost, setShowPop, setShowAll, checkData, setCheckData } = useContext(Postcontext)
  
    const handlechange = (e) => {
        const { name, value } = e.target
        setMyData({ ...myData, [name]: value })
        setDisable(false)
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const imageUrl = URL.createObjectURL(file);
        setMyData({ ...myData, image: imageUrl });
        setDisable(false)

    };


    const [changeColor, setChangeColor] = useState(false)

   

      const toggle = () => {
        setChangeColor((prevItem)=>(!prevItem))
      }

       
 

    const submit = () => {
       if(disable === false){
        setMyPost([...myPost, { ...myData, id: Date.now() }].reverse());
        // setMyPost(myPost)
        setMyData({ about: "", image: "" });
        setShowPop(false)
        setShowAll(true)
        setDisable(false)
       }
    }

    console.log(myPost)

    return (
        <div className='CreatePostbody' style={changeColor ? {background: "black",  color: "white"} : {background: "white",  color: "black"}}>

            <button onClick={toggle}>{changeColor ? "lightmode" : "darkmode"}</button>
            <main className='CreatePostmain'>
                <header className='header'>
                    <h3 className='headerh3'>Create post</h3>
                    <span className='headerspan' onClick={() => setShowPop(false)}><LiaTimesSolid/></span>
                </header>
                <article className='CreatePostontainer1'>
                    <main className='imgmain'>
                        <img src= {checkData.image1} alt=""  className='img'/>
                    </main>
                    <main className='usermain'>
                        <p  className='usermainptag'>{checkData.firstName}  {checkData.lastName}</p>
                        <span className='usermainchoose'>{checkData.choose}</span>
                    </main>
                </article>
                <article className='CreatePostontainer2'>
                     <textarea name="about" id="" placeholder ={ `What's on your mind, ${checkData.firstName}?`}
                     value= {myData.about}
                     className='CreatePostontainer2text'
                     onChange={handlechange} >
                     </textarea>
                    <span className='CreatePostontainer2span'>
                     <img src={myData.image} alt=""  className='CreatePostontainer2spanimg'/>
                    </span>
                </article>
                <div className='CreatePostontainer3'>
                    <p>Add to your post</p>
                    <input type="file" id='is' hidden name='image' onChange={handleImageChange} />

                   <span className='iconsspan'>
                     <label htmlFor="is">
                        <IoMdPhotos className='icons1' />
                    </label>
                    <MdOutlineEmojiEmotions className='AllPostcontaineriiicon2'/>
                    </span>
                </div>

                <button className='CreatePostbutton' onClick = {() => submit()} 
                style={disable ? {backgroundColor: "#E2E5E9", color: "#BCC0C4"} : {backgroundColor:  "#0866FF"}}
                    
                    >Post</button>
            </main>
        </div>
    )
}

export default CreatePost
