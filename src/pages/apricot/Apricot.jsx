import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import styled from "styled-components";

const Img = styled.img`
  width: 300px;
`;

const Apricot = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
       
        <div style={{ width: 300, height: 300, background: '#065535' }}>
        <Img
          src="https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-apricot-558x600.jpg"
          alt="pic2"
        />
        </div>
        <div style={{ width: 300, height: 300, background: '#ff80ed' }}>
        <Img
          src="https://media.istockphoto.com/vectors/apple-flat-style-vector-icon-vector-id1251493047?k=20&m=1251493047&s=612x612&w=0&h=6ifRKhn4FkuIP_djq2sLUq2HInNjy_bU4ejg4D83oCM="
          alt="pic1"
        />
        </div>
        <div style={{ width: 300, height: 300, background: '#000000' }}>
        <Img
          src="https://media-cis-cdn.oriflame.com/contentImage?externalMediaId=e834c6a0-77f0-40d7-b268-de9a739d54b5&name=lime&inputFormat=png"
          alt="pic3"
        />
        </div>
        <div style={{ width: 300, height: 300, background: '#133337' }}>
        <Img
          src="https://saverafresh.com/wp-content/uploads/2021/08/lycheee.jpg"
          alt="pic4"
        />
        </div>
        
      </ReactSimplyCarousel>
    </div>
  );
}

//export default ReactSimplyCarouselExample;
/* import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]; */

/* class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
} */
/* const Apricot = () => {
    return(
        <div><ImageGallery items={images} /></div>
    )
} */

export default Apricot