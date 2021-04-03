import classnames from 'classnames'
import * as React from 'react'
import { Link } from 'react-router-dom'

import './Landing.scss'

const Landing = () => (
  <div className="b4bd container">
    <h1 className="display-1">Ann Niou.</h1>
    <h4 className="display-4">
      Currently a product designer at Facebook. Previously at IBM Garage for
      Cloud.
    </h4>
    <Row>
      <Description
        heading="In rutrum"
        lead="Enim et maximus malesuada, sem lectus suscipit ante, vel lacinia risus turpis nec nisl."
        body="Donec blandit in velit vestibulum accumsan. Donec condimentum diam eu augue rutrum, eget pretium magna pulvinar. Sed vestibulum maximus velit non volutpat. Curabitur malesuada et dui vitae maximus."
        link="/project-example"
      />
      <img className="img-fluid" src="https://via.placeholder.com/800" />
    </Row>
    <Row reverse>
      <Description
        heading="Donec sit amet felis ultricies"
        lead="Proin in lectus quam. Ut ex turpis, aliquam id quam non, convallis posuere purus."
        body="Praesent sed ultrices eros, non ultricies magna. Nunc non dolor metus. In ut diam turpis. Vivamus lorem ligula, fringilla eu dignissim non, iaculis in turpis. Aenean ornare pharetra elementum. Duis molestie sollicitudin ultricies. Proin vitae leo at dolor mattis tempus."
      />
      <img className="img-fluid" src="https://via.placeholder.com/800" />
    </Row>
    <Row>
      <Description
        heading="Nunc pretium enim nibh"
        lead="Nunc pretium enim nibh, quis vestibulum mauris rhoncus quis."
        body="Aenean hendrerit ornare orci vulputate euismod. Sed suscipit porttitor lacus, a elementum sapien rutrum vel. Vestibulum vel tincidunt nibh, non tincidunt sapien. Pellentesque tempus tortor nulla, non consequat ligula ultrices vitae. Etiam sed tempus felis. Proin vestibulum fringilla est quis euismod."
      />
      <img className="img-fluid" src="https://via.placeholder.com/800" />
    </Row>
  </div>
)

const Row = (props) => {
  const { children, className, reverse } = props
  return (
    <div
      className={classnames(
        'row',
        'align-items-center',
        reverse && 'reverse',
        className
      )}
    >
      <div className="col-12 col-sm-6">{children[0]}</div>
      <div className="col-12 col-sm-6">{children[1]}</div>
    </div>
  )
}

const Description = (props) => {
  const { heading, lead, body, link } = props

  return (
    <div>
      <header className="display-4">{heading}</header>
      {lead && <p className="lead">{lead}</p>}
      <p>{body}</p>
      {link && <Link to={link}>See more</Link>}
    </div>
  )
}

export default Landing
