import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  width: 100%;
`;

const Img = styled.img`
  width: 200px;
`;

const Home = () => {
  return (
    <Nav>
      <Link to="/apple">
        <Img
          src="https://media.istockphoto.com/vectors/apple-flat-style-vector-icon-vector-id1251493047?k=20&m=1251493047&s=612x612&w=0&h=6ifRKhn4FkuIP_djq2sLUq2HInNjy_bU4ejg4D83oCM="
          alt="pic1"
        />
      </Link>
      <Link to="/apricot">
        <Img
          src="https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-apricot-558x600.jpg"
          alt="pic2"
        />
      </Link>
      <Link to="/lime">
        <Img
          src="https://media-cis-cdn.oriflame.com/contentImage?externalMediaId=e834c6a0-77f0-40d7-b268-de9a739d54b5&name=lime&inputFormat=png"
          alt="pic3"
        />
      </Link>
      <Link to="/lychee">
        <Img
          src="https://saverafresh.com/wp-content/uploads/2021/08/lycheee.jpg"
          alt="pic4"
        />
      </Link>
    </Nav>
  );
};
export default Home;
