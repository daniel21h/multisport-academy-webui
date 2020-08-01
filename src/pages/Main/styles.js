import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;

  @media(max-width: 880px) {
    align-items: center;
  }
`;

export const Content = styled.div`
  @media(min-width: 880px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Aside = styled.div`
  h1 {
    margin-top: 180px;

    font-family: Ubuntu;
    font-style: italic;
    font-weight: bold;
    font-size: 36px;
    line-height: 55px;

    color: #FFFFFF;

    width: 350px;

    @media(max-width: 880px) {
      margin-top: 50px;
    }
  }

  p {
    width: 270px;
    margin-top: 45px;

    font-family: Ubuntu;
    font-style: italic;
    font-size: 16px;
    line-height: 21px;

    color: #FFFFFF;
  }
`;

export const Connections = styled.div`
  display: flex;
  flex-direction: column;

  section {
    margin-bottom: 233px;

    a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;

      & + a {
        margin-left: 86px;
      }
    }

    
  }


  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
      text-decoration: none; 

      & + a {
        margin-top: 67px;
      }
    }
  }

  @media(max-width: 880px) {
    section {
      position: absolute;
      bottom: 24px;
    }

    div {
      position: absolute;
      top: 0px;

      flex-direction: row;

      a + a {
        margin-left: 10%;
      }
    }
  }
`;

export const Footer = styled.div`
  margin-top: 120px;

  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;

    display: flex;
    flex-direction: column ;
    align-items: center;


    &:hover {
      p {
        margin-bottom: 14px;
      }
    }
  }
`;
