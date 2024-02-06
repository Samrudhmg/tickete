import React from 'react'
import './Questions.css'

const Questions = () => {
  return (
    <div className='QuestionsMain'>
        <div className='questions-left'>
              <h1>Frequently asked questions</h1>
              <p>Here are some of our most asked questions</p>

              <div className='needhelp'>
                <h1>Still need help?<br></br>We are here for you.</h1>
                <button>Chat with us</button>
                <img src='Group 99.png' className='groupimage'></img>
              </div>
        </div>
        <div className='questions-right'>
          <div className='box'>
              <p>+</p>
              <h4>What should I do on my first trip to Rome?</h4>
          </div>
          <div className='bigbox'>
            
            <h4><span>X</span>What are some hidden gems to see in Rome?</h4>
            
             <p>Rome i spacked with hidden gems. If you love art,
               don't miss the Galleria Doria Pamphilj or palazzo Barberini. 
               The Museo barracco is a free museum and well worth a quick visit.
                If you love the ancient stuff, don't miss the Domus Romana at plazzo Valentini,
               the Domus Aurea, and the Baths of caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambience.</p>  
            </div>
           
          <div className='box'>
              <p>+</p>
              <h4>How much time should I spend in Rome</h4>
          </div>
          <div className='box'>
              <p>+</p>
              <h4>What food is Rome known for?</h4>
          </div>
          <div className='box'>
              <p>+</p>
              <h4>What should I do on my first trip to Rome?</h4>
          </div>
        </div>
    </div>
  )
}

export default Questions