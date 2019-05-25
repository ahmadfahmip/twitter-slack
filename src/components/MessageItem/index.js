import React from 'react'
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

    span:first-child {
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

    span:nth-child(2) {
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
    fn: (key, res) => <a key={key} href={`https://www.twitter.com/${res}`} target="_blank" rel="noopener noreferrer">{res}</a>
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
          <img src={props.child.photo} alt="profpic" />
          <span>{props.child.name}</span>
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
        <img src={props.photo} alt="profpic" />
      </Image>
      <Content>
        <div>
          <span>{props.name}</span>
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