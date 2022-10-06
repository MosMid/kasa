import { useRef } from 'react';
import './Gallery.css'

function Gallery(prop){
    const imgRef = useRef(null)

    let l = prop.pictures.length - 1;
    let pictures = prop.pictures;
    let i = 0;

    const onPreviousClick = () => {
        if(i == 0){
            i = l;
        } else {
            i = i - 1;
        }
        imgRef.current.setAttribute("src", pictures[i])
    }
    const onNextClick = () => {
        if(i == l){
            i = 0;
        } else {
            i = i + 1;
        }
        imgRef.current.setAttribute("src", pictures[i])
    }

    return <div className='gallery'>
        <img ref={imgRef} className='picture' src={pictures[i]} alt="Photo logement"/>
        <div className='previous' onClick={onPreviousClick}>&#x276C;</div>
        <div className='next' onClick={onNextClick}>&#x276D;</div>
    </div>

}

export default Gallery