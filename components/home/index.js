import React, {Component} from 'react'
import Arrows from '../arrows'
import Content from '../content'
export default class home extends Component {
  render () {
    return (
      <div className='container'>
        <div className='banner' id='one'>
        <div className='video-container'>
        	   <video autoPlay loop muted>
        		     <source src='static/cement_stock.mp4' type='video/mp4' />
        		     Your browser does not support the video tag.
        	   </video>
             <div className='overlay-desc'>
                <h1>TSD Trading Inc.</h1>
             </div>
        	</div>
          <Arrows />
        </div>
        <div className='banner' id='two'>
          <Content />
        </div>
        <div className='banner' id='three'>
        Three
        </div>
        <style jsx>{`
          .banner {
            min-width:100vw;
            height: 100vh;
          }
          #one {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          #one h1 {
            font-size: 8rem;
            color: #fff;
            max-width: calc(100vw - 80px);
            line-height: 1em;
            letter-spacing: -.03em;
            position:relative;
          }
          #two {
            background-color: white;
          }
          #three {
            background-color: green;
          }
          .container {
            margin: 0;
            padding: 0;
          }
          .video-container {
            position: fixed;
            min-height: 100vh;
            z-index:-1;
          }
          video {
            vertical-align: middle;
            width:100vw;
            min-height: 100%;
          }
          .overlay-desc {
            background: rgba(0,0,0,0);
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            display: flex;
            align-items: center;
            justify-content: center
            letter-spacing: 10px;

          }
        `}</style>
      </div>
    )
  }
}
