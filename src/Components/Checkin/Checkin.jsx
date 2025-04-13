import React, { useContext } from 'react'
import './Checkin.css'
import { Postcontext } from '../Contexts'

const Checkin = () => {
  const { setShowAll, setCheckIn, setCheckData, checkData } = useContext(Postcontext)

  const handlechange = (e) => {
    const { name, value } = e.target
    setCheckData({ ...checkData, [name]: value })
  }


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setCheckData({ ...checkData, image1: imageUrl });

  };

  console.log(checkData)
  const submit = () => {
    setCheckIn(false)
    setShowAll(true)

  }
  return (
    <div className='Checkinbody'>
      <main className='Checkinmain'>
        <h2 className='Checkinh3'>Check in</h2>

        <input type="text" className='Checkininput'
          placeholder='FirstName'
          value={checkData.firstName}
          name="firstName"
          onChange={handlechange}
        />
        <input type="text" className='Checkininput'
          placeholder='LastName'
          name='lastName'
          value={checkData.lastName}
          onChange={handlechange}
        />

        <span className='Checkininput' >
          <input type="file"
            id='isxx'
            name={checkData.image1}
            hidden
            // value={checkData.image1}
            onChange={handleImageChange}
          />
          <label htmlFor="isxx">choose a profile picture</label>
        </span>

        <select name="choose" id="" className='Checkinchosen' onChange={handlechange} value={checkData.choose}>
          <option value="public" >public</option>
          <option value="private">private</option>
        </select>
        <button className='Checkinbut' onClick={submit}>check In</button>
      </main>
    </div>
  )
}

export default Checkin
