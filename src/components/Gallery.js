import './Gallery.css'

function Gallery(prop){
    let l = prop.pictures.length - 1;
    let pictures = prop.pictures;
    let i = 0;

    const onPreviousClick = () => {
        if(i == 0){
            i = l;
        } else {
            i = i - 1;
        }
        document.querySelector('.picture').setAttribute("src", pictures[i])
    }
    const onNextClick = () => {
        if(i == l){
            i = 0;
            console.log('The link was clicked.');
        } else {
            i = i + 1;
            console.log('The link was clicked.');
        }
        document.querySelector('.picture').setAttribute("src", pictures[i])
    }

    return <div className='gallery'>
        <img className='picture' src={pictures[i]} alt="Photo logement"/>
        <div className='previous' onClick={onPreviousClick}>&#x276C;</div>
        <div className='next' onClick={onNextClick}>&#x276D;</div>
    </div>

}

export default Gallery