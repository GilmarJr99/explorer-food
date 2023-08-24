import { styled } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

  export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

> header {
  display: flex;
  justify-content: center;
  gap: 1.1rem;
  margin-top: -15.8rem;
  margin-right: 3.8rem;
} 

> p {
  color: ${( {theme} ) => theme.COLORS.GRAY_400};
  display: flex;
  margin-top: 7.3rem;
  margin-left: 1rem;
};

  .password {
    color: ${( {theme} ) => theme.COLORS.GRAY_400};
    display: flex;
    margin-top: 2.8rem;

}
 button {
    width: 29rem;
    height: 4.8rem;
    padding: 0.62rem;
    margin-bottom: 0.625rem;
    margin-left: 1rem;
    border: none;
    border-radius: 0.80rem;
    margin-top: 3.2rem;
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    color: #FFFFFF;
}

  footer {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
}
`;


