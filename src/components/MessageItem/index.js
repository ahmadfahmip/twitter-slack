import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Linkify from 'react-linkify'
import processString from 'react-process-string'

const Wrapper = styled.div`
  padding: 7px 27px;
  &:hover {
    background-color: #F8F8F8;
  }
`

const Image = styled.div`
  flex-basis: 35px;
  max-width: 35px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 3px;
  }
`

const Content = styled.div`
  flex-basis: calc(100% - 45px);
  padding-left: 10px;

  div:first-child {
    margin-bottom: 3px;

    a:first-child > span {
      color: #1D1C1D;
      font-size: 1rem;
      font-weight: bold;
      margin-right: 6px;
      text-transform: lowercase;
    }

    span:last-child {
      font-weight: normal;
      font-size: 12px;
      color: #717274;
    }
  }
  p {
    color: #616061;
    font-size: 1rem;
  }
`

const Child = styled.div`
  margin-top: 8px;

  > div:first-child {
    background-color: #D0D0D0;
    width: 4px;
    margin: 0;
    border-radius: 50px;
    flex-basis: 10px;
    max-width: 4px;
  }
`

const ChildContent = styled.div`
  flex-basis: calc(100% - 15px);
  max-width: calc(100% - 15px);
  padding-left: 11px;
  
  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3px;

    img:first-child {
      width: 20px;
      height: 20px;
      border-radius: 3px;
      margin-right: 8px;
    }

    a:nth-child(2) > span {
      color: #1D1C1D;
      margin-right: 6px;
      font-size: 1rem;
      font-weight: bold;
      text-transform: lowercase;
    }

    span:last-child {
      font-weight: normal;
      font-size: 12px;
      color: #717274;
    }
  }
  p {
    color: #616061;
    font-size: 1rem;
  }
`

function urlify(text) {
  let config = [{
    regex: /@\w{1,15}\b/g,
    fn: (key, res) => <Link key={key} to={`/${res}`}>{res}</Link>
  }]
  return processString(config)(text)
}

function MessageItem(props) {
  let child = null
  if (props.child) {
    child = <Child className="row">
      <div />
      <ChildContent>
        <div>
          <Link to={`/${props.child.id}`}>
            <img src={props.child.photo} alt="profpic" />
          </Link>
          <Link to={`/${props.child.id}`}>
            <span>{props.child.name}</span>
          </Link>
          <span>@{props.child.id}</span>
        </div>
        <div>
          <Linkify>
            <p>{urlify(props.child.text)}</p>
          </Linkify>
        </div>
      </ChildContent>
    </Child>
  }

  return (
    <Wrapper className="row">
      <Image>
        <Link to={`/${props.id}`}>
          <img src={props.photo} alt="profpic" />
        </Link>
      </Image>
      <Content>
        <div>
          <Link to={`/${props.id}`}>
            <span>{props.name}</span>
          </Link>
          <span>@{props.id}</span>
        </div>
        <div>
          <Linkify>
            <p>{urlify(props.text)}</p>
          </Linkify>
        </div>
        {child}
      </Content>
    </Wrapper>
  )
}

MessageItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  text: PropTypes.string,
  child: PropTypes.object
}

export default MessageItem
