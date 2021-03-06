import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  height: 3.6rem;
`

const Data = styled.div`
  padding-left: 27px;
  padding-top: 0.5rem;
  h1 {
    font-size: 1.2rem;
    color: #1D1C1D;
    margin-bottom: 0.1rem;
  }
  > div.loader {
    background-color: #cecece;
    height: 0.8rem;
    width: 5rem;
    border-radius: 50px;
  }
  > div:last-child {
    color: #919091;
    margin-bottom: 0.5rem;
    p {
      font-size: 0.8rem;
    }
  }
`

function TopBar(props) {
  // console.log('title ', props.title)
  return (
    <Wrapper className="row">
      <Data>
        {/* <h1>{props.title}</h1> */}
        {props.title === undefined ? <div className="loader" /> : <h1>{props.title}</h1>}
        <div className="row">
          <p>Tweets from {props.subtitle}</p>
        </div>
      </Data>
    </Wrapper>
  )
}

TopBar.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default TopBar
