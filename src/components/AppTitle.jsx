import styled from 'styled-components';

export default function AppTitle(props) {
  const {
    title = 'Movie Meter',
    subtitle = 'Are you looking for a movie or an actor?',
  } = props;

  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${() => '#e1b382'};
    letter-spacing: 20px;
    text-transform: uppercase;
    margin: 0 0 10px;
    font-size: 1000%;
    text-decoration: underline;
  }
  p {
    color: ${() => '#c89666'};
    font-size: 300%;
    margin: 0;
  }
`;
