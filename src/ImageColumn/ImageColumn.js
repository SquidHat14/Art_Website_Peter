import './ImageColumn.scss';


var images;

function ImageColumn(props) {

    images = props.images;

    return (
            GenerateImageHTML()
    );
}

function GenerateImageHTML()
{
    return (
        <div class = "Column">
            { images.map((src, index) => {
                return (<><div class="imageContainer"><img alt={src.description} class ="image" style={{'--animation-order': index + images[0].column}}   src={'./../imageFiles/' + src.name}></img><div style={{'--animation-order': index + images[0].column}} class="overlay">{src.title}<br />{src.description}</div></div></>);
            })}
        </div>
    );
}
  
export default ImageColumn;
  