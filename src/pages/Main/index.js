import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

import logo from '../../assets/logo.png'
import { Container, Content, Aside, Connections, Footer } from './styles'

export default function Main() {
  return (
    <Container>
      <Content>
        <Aside>
          <img src={logo} />
          <h1>Academia de natação</h1>
          <p>Venha fazer parte desta família que cresce cada vez mais.</p>
        </Aside>
        <Connections>
          <section>
            <a href="">Sobre</a>
            <a href="">FAQ</a>
          </section>
          <div>
           <a href="">Facebook</a>
           <a href="">Instagram</a>
           <a href="">Whatsapp</a>
          </div>
        </Connections>
      </Content>
      <Footer>
        <a href="">
          <p>Hidroginástica</p>
          <FiChevronDown size={24}color="#fff" />
        </a>

        <a href="">
          <p>Natação</p>
          <FiChevronDown size={24}color="#fff" />
        </a>

        <a href="">
          <p>Musculação</p>
          <FiChevronDown size={24}color="#fff" />
        </a>
      </Footer>
    </Container>
  )
}