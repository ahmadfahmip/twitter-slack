import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TopBar from './TopBar'
import Content from './Content'
import MessageBar from './MessageBar'

const Wrapper = styled.div`
  width: calc(100% - 220px);
`

function Shell(props) {
  return (
    <Wrapper>
      <TopBar title={props.title} subtitle={props.subtitle} />
      <Content data={props.content} />
      <MessageBar placeholder={props.msgPlaceholder} />
    </Wrapper>
  )
}

Shell.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  subtitle: PropTypes.string,
  msgPlaceholder: PropTypes.string
}

export default Shell
