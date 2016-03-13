import React from 'react'

import Header from './Header.react'
import Title from './Title.react'
import Body from './Body.react'
import Content from './Content.react'
import Container from './Container.react'
import IsVisible from './IsVisible.react'


const Layout = ({title, children, ...props}) => (
  <IsVisible {...props}>
    <Container {...props}>
      <Content>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>
          {children}
        </Body>
      </Content>
    </Container>
  </IsVisible>
)


export default Layout
