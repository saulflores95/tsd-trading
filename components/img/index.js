import {Component } from 'react'
import { Col } from 'react-grid-system'

export default class Img  extends Component {
  renderChecker(props) {
    if(props.flag === 'right') {
      return (
        <Col lg={6} md={6} sm={12}>
          <div className='container'>
            <img src={props.img} alt='Avatar' className='image' />
            <div className='overlay'>
              <div className='text'>{props.text}</div>
            </div>
          </div>
          <style jsx>{`
            .container {
              position: relative;
              width: 100%;
              height: 300px;
            }

            .image {
              display: block;
              width: 100%;
              height: 100%;
            }

            .overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: black;
              overflow: hidden;
              width: 0;
              height: 100%;
              transition: .5s ease;
              opacity: 0.5;
            }

            .container:hover .overlay {
              width: 100%;
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
    } else {
      return (
        <Col lg={6} md={6} sm={12}>
          <div className='container'>
            <img src={props.img} alt='Avatar' className='image' />
            <div className='overlay'>
              <div className='text'>{props.text}</div>
            </div>
          </div>
          <style jsx>{`
            .container {
              position: relative;
              width: 100%;
              height: 300px;
            }
            .image {
              display: block;
              width: 100%;
              height: 100%;
            }

            .overlay {
              position: absolute;
              bottom: 0;
              left: 100%;
              right: 0;
              background-color: black;
              overflow: hidden;
              width: 0;
              height: 100%;
              transition: .5s ease;
              opacity: 0.5;

            }

            .container:hover .overlay {
              width: 100%;
              left: 0;
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
    }
  }
  render() {
    return (
      this.renderChecker(this.props)
    )
  }
}
