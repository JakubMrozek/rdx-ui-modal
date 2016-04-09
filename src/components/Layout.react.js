import React from 'react'

import Header from './Header.react'
import Title from './Title.react'
import Body from './Body.react'
import Content from './Content.react'
import Container from './Container.react'
import IsVisible from './IsVisible.react'
import Close from './Close.react'


const Layout = ({title, children, disableCloseButton, ...props}) => (
  <IsVisible {...props}>
    <Container {...props}>
      <Content>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>
          {children}
        </Body>
        {!disableCloseButton ? <Close {...props}>Zavřít</Close> : ''}
      </Content>
    </Container>
  </IsVisible>
)


export default Layout
