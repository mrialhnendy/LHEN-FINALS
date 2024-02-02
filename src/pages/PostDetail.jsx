import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog2.jpg'

const PostDetail = () => {
  return (
    
    <section className="post-detail">
      <div className="container post detail__container">
         <div className="post-detail_header">
          <PostAuthor/>
         <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          
        </div>
     </div>
     <h1>Coffee of the Day</h1>
     <div className="post-detail__thumbnail">
      <img src={Thumbnail} alt="" />
     </div>
     <p>
     Ladies and gentlemen, coffee enthusiasts, and fellow cafe explorers, thank you for joining me on this delightful journey through the world of caffeine and cozy ambiance. As I sit here, sipping on the last remnants of my latte, I can't help but feel a sense of gratitude for the moments we've shared
     </p>
     <p>
     Our cups have been filled with rich brews, our taste buds have danced with flavors, and our souls have been warmed by the comforting embrace of these four walls. From the first sip to the last, each coffee shop we've visited together has woven a unique story into the fabric of our caffeinated adventures.

As we conclude this vlogging series, I want to express my heartfelt appreciation for your company and support. Your comments, likes, and shares have fueled my passion for exploring the diverse world of cafes. From the bustling city spots to the hidden gems tucked away in quiet neighborhoods, we've uncovered the soul of each place, one cup at a time.
     </p>

     <p>
     Thank you for being a part of this caffeinated community. Until we meet again in another cozy nook, keep sipping, keep exploring, and may your coffee always be brewed to perfection. Cheers to the endless possibilities that await in each steaming cup and the stories yet to be written in the notebooks of our lives.
     </p>
      </div>
    </section>
  )
}

export default PostDetail
