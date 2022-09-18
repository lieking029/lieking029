import React from 'react'
import './Design.css'
import images from '../../images'

const Design = () => {
  return (
    <div className='d-flex'>
        <div className='container'>
      <div className='heading'>
        As a <strong>Front-end Developer</strong> I also <br /> pursue being <br /> <strong>UI/UX Designer</strong>, I am studying the best <br /> practices
      </div>
      <div className='design-details'>
        <div className='fma'>
            <h5>FindMyApartment</h5>
        </div>
        <div className='details'>
        <p>a Airbnb like project that suppose to help people find and look for an apartment to which place they desire without actually going to that place.</p>
        </div>
        <div className='beanleaf'>
            <h5>Beanleaf</h5>
        </div>
        <div className='details'>
        <p>A E-commerce/Social Media website that allows the user to buy , post or sell a coffee or any related type of drinks.  </p>
        </div>
      </div>
      <div className='bottom-details'>
        <p>I’ve created many kinds of systems most of them are saved in my GitHub 
        {/* <button className='btn btn-default'>Go to my GitHub</button>  */}
        </p>
      </div>
      <div className='contacts'>
          <p className='title'>Contacts:</p>
          <div className='contacts-details'>
              <p style={{ marginRight: "1rem" }}> Email: </p>
              <h5>johnmichaelbuan21@gmail.com</h5>
          </div>
          <div className='contacts-details'>
              <p style={{ marginRight: "1rem" }}> Facebook: </p>
              <h5>johnmichael.micosa.7</h5>
          </div>
          <div className='contacts-details'>
              <p style={{ marginRight: "1rem" }}> Phone Number: </p>
              <h5>09154184580</h5>
          </div>
          <div className='contacts-details'>
              <p style={{ marginRight: "1rem" }}> GitHub: </p>
              <h5>https://github.com/lieking029</h5>
          </div>
      </div>
    </div>
      <div className='image-container'>
      <div className='images'>
        <img src={images.SignIn} alt='fma' />
        <img src={images.Register} alt='fma' className='register' />
        <img src={images.Login} alt='fma' className='register' />
      </div>
      <div className='web-images'>
        <img src={images.coffee} alt='coffee' className='coffee' />
        <img src={images.reg} alt='coffee' className='coffee' />
      </div>
      </div>
    </div>
  )
}

export default Design
