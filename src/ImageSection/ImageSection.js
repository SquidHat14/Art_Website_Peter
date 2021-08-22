import './ImageSection.scss';
import ImageColumn from './../ImageColumn/ImageColumn'

var images;

function ImageSection(props) {

    images = props.images;
    createImageDictionary();

    return (
            <div class="ImageGridArea">
                <div class="ImageGridContainer">
                    <div class="ImageGrid">
                        <ImageColumn columnNum="1" images={images["1"]}></ImageColumn>
                        <ImageColumn columnNum="2" images={images["2"]}></ImageColumn>
                        <ImageColumn columnNum="3" images={images["3"]}></ImageColumn>
                    </div>
                </div>
            </div>
    );
  }

  function createImageDictionary()
  {
    var sorted = {};
    for( var i = 0, max = images.length; i < max ; i++ ){
        if( sorted[images[i].column] === undefined ){
         sorted[images[i].column] = [];
        }
        sorted[images[i].column].push(images[i]);
    }

    images = sorted;
    console.log(images);
  }
  
  export default ImageSection;