  import { Col } from 'react-grid-system'

const Img = (props) => (
  <Col lg={6} md={6} sm={12}>
  {console.log(props)}
    <div className='container'>
      <img src={props.img} alt='Avatar' className='image' />
      <div className='overlay'>
        <div className='text'>{props.text}</div>
      </div>
    </div>
    <style jsx>{`
      .container {
        position: relative;
        height:300px;
        margin-top:10px;
      }

      .image {
        display: block;
        width: 100%;
        height: 100%;
      }

      .overlay {
        position: absolute;
        bottom: 100%;
        left: 0;
        right: 0;
        background-color: black;
        overflow: hidden;
        width: 100%;
        height:0;
        transition: .5s ease;
        opacity: 0.5;

      }

      .container:hover .overlay {
        bottom: 0;
        height: 100%;
      }

      .text {
        white-space: nowrap;
        color: white;
        font-size: 20px;
        position: absolute;
        overflow: hidden;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      }
    `}</style>
  </Col>
)

export default Img
