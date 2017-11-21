import React, { Component } from 'react'
import { Row, Col } from 'react-grid-system'
import { Line, Circle } from 'rc-progress';
import Img from '../img'
export default class Content extends Component {
  constructor() {
    super()
    this.state = {
      percent: 90,
      color: '#3FC7FA',
    }
  }

  changeState() {
    const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
    this.setState({
      percent: parseInt(Math.random() * 100, 10),
      color: colorMap[parseInt(Math.random() * 3, 10)],
    })
  }

  render() {
    return (
      <div className='content-container'>
        <Row>
          <Col lg={6}>
            <div>
              <Row>
                <Col lg={4} md={6}>
                  <div className='cirle-wrapper'>
                    <div className='circle-container'>
                      <Circle percent={this.state.percent - 10} strokeWidth="6" strokeColor={this.state.color} />
                    </div>
                  </div>
                  <p>{this.state.percent}% Quality</p>
                </Col>
                <Col lg={4} md={6}>
                  <div className='cirle-wrapper'>
                    <div className='circle-container'>
                      <Circle percent={this.state.percent - 10} strokeWidth="6" strokeColor={this.state.color} />
                    </div>
                  </div>
                  <p>{this.state.percent}% Durability</p>
                </Col>
                <Col lg={4} md={6}>
                  <div className='cirle-wrapper'>
                    <div className='circle-container'>
                      <Circle percent={this.state.percent - 10} strokeWidth="6" strokeColor={this.state.color} />
                    </div>
                  </div>
                  <p>{this.state.percent}% Satisfaction</p>
                </Col>
                <p>
                  <button onClick={this.changeState.bind(this)}>Change Hi</button>
                </p>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Img img='https://thumbs.dreamstime.com/b/textura-del-cemento-6536569.jpg' text='Cement' alt='cement' />
              <Img img='https://www.harpdesignco.com/wp-content/uploads/2017/04/floor-1256804_1920-800x423.jpg' text='Wood' alt='wood'/>
              <Img img='http://www.metromix.com.au/files/3613/0155/0120/Screen_shot_2011-03-31_at_4.41.34_PM.png' text= 'Gravel' alt='gravel'/>
              <Img img='http://www.guoguiyan.com/data/out/4/68906191-aluminum-wallpapers.png' text='Aluminium' alt='Aluminium'/>
              <Img img='http://estag.fimagenes.com/img/3/3/0/F/L/30FL_900.jpg' text='Block' alt='block'/>
              <Img img='https://image.freepik.com/foto-gratis/textura-de-playa-de-arena_1232-454.jpg' text='Sand' alt='sand'/>
            </Row>
          </Col>
        </Row>
        <style jsx>{`
          p {
            text-align: center;
          }
          .cirle-wrapper {
            width:100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .circle-container {
            width: 100px;
            height: 100px;
          }
          .content-container {
            height:100vh;
            padding-top:30px;
          }
        `}</style>
      </div>
    )
  }
}
