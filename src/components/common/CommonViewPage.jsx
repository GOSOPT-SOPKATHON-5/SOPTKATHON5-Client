import { styled } from 'styled-components';

function CommonViewPage({ children }) {
  return <St.CommonViewPageWrapper>{children}</St.CommonViewPageWrapper>;
}

export default CommonViewPage;

const St = {
  CommonViewPageWrapper: styled.section`
    position: absolute;
    top: 0;
    background-color: #000;
    width: 100vw;
    max-width: 375px;
    height: 100vh;
    color: #fff;
    @media screen and (min-width: 375px) {
      left: calc(50vw - 187.5px);
    }
  `,
};
