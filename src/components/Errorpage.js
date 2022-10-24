import React from 'react'
import { useNavigate} from 'react-router-dom';


const Errorpage = () => {
  
  const Navigate = useNavigate();
  const goBack = () => {
    Navigate('/');
  }

  return (
    <>
      <div className='m-3 h-container'>
      <div className="h-box">
        <div className="home-h">
          <h1 className=''> 404 Error Page </h1>
        </div>
        <div className="home-w">
          <button className='btn btn-primary' onClick={goBack}> Go Back </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Errorpage;