import React, { useContext } from 'react'
import './AllPost.css'
import { Postcontext } from '../Contexts'
import { FaVideo } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { TbShare3 } from "react-icons/tb";
import { MdOutlineEmojiEmotions } from "react-icons/md"


const AllPost = () => {

  const { myPost, setShowPop, checkData, setMyPost} = useContext(Postcontext);

    const deletePost = (id) => {
      setMyPost(myPost.filter((i)  => i.id !== id))
      console.log("post deleted");
    }

  return (
    <div className='AllPostbody'>
      <span className='containeraa'></span>
      <div className='AllPostcontainer'>
        <article className='AllPostcontainerxx'>
          <main className='imgmain'>
            <img src={checkData.image1} alt="" className='img' />
          </main>
          <span type="text" className='AllPostcontainerinput' onClick={() => setShowPop(true)}>What's on your mind, {checkData.firstName}</span>
        </article>
        <article className='AllPostcontaineriii'>
          <span className='AllPostcontaineriiispan1'> <FaVideo className='AllPostcontaineriiicon' /> <p>Live video</p></span>
          <span className='AllPostcontaineriiispan1'> <IoMdPhotos className='AllPostcontaineriiicon1' /> <p>Photo/video </p></span>
          <span className='AllPostcontaineriiispan1'> <MdOutlineEmojiEmotions className='AllPostcontaineriiicon2' /> <p>Feeling/activity</p></span>
        </article>
      </div>
      <main className='AllPostbodymain'>

        {
          myPost.map((i, index) => (
            <div key={index} className='AllPostbodymaindiv'>
              <div className='space'> 
              <div className='cheincard'>
                <main className='imgmain'>
                  <img src={checkData.image1} alt="" className='img' />
                </main>
                <main className='usermain'>
                  <p className='usermainptag'>{checkData.firstName}  {checkData.lastName}</p>
                  <span className='usermainchoose'>{checkData.choose}</span>
                </main>
              </div>
              <span className='headerspan'  onClick={() => deletePost(i.id)}><LiaTimesSolid/></span>
              </div>
              <span className='AllPostabout'>
                <p>{i.about}</p>
              </span>
              <span className='AllPostimage' >
                {i.image && <img src={i.image} className='AllPostimageimg' />}
              </span>
              <article className='AllPostspanxx'>
                <span className='AllPostspanxx1'>
                  <AiOutlineLike className='AllPostspanxxicon' />
                  <p className='AllPostspanxxh3' >Like</p>
                </span>
                <span className='AllPostspanxx1'>
                  <FaRegComments className='AllPostspanxxicon' />
                  <p className='AllPostspanxxh3'>Comment</p>
                </span>
                <span className='AllPostspanxx1'>
                  <FaWhatsapp className='AllPostspanxxicon' />
                  <p className='AllPostspanxxh3'>Send</p>
                </span>
                <span className='AllPostspanxx1'>
                  <TbShare3 className='AllPostspanxxicon' />
                  <p className='AllPostspanxxh3'>Share</p>
                </span>
              </article>
            </div>

          ))
        }

      </main>
    </div>
  )
}

export default AllPost
