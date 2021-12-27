import './photo.css';
import { useRef, useState } from 'react';
import fileToDataUrl from './utility/fileToDataUrl';

export default function Photo() {
  const [photos, setPhotos] = useState([]);
  const inputRef = useRef();

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const newPhotos = await Promise.all(files.map(o => fileToDataUrl(o)));
    setPhotos((prevPhotos) => ([...newPhotos, ...prevPhotos]));
    inputRef.current.value = '';
  }

  const handleRemove = (removedPhoto) => {
    setPhotos(photos.filter((photo) => photo.id !== removedPhoto.id));
  }

  return (
    <div className={'photo'}>
      <form className={'photo-form'}>
        <div className={'photo-drop-area'}>
          <input
            className={'photo-drop-area__item photo-drop-area__input'}
            type={'file'}
            onChange={handleSelect}
            ref={inputRef}
            multiple />
          <span className={'photo-drop-area__item photo-drop-area__text'}>Нажмите, чтобы выбрать</span>
        </div>
      </form>

      <div className={'photo-gallery'}>
        {photos.map((photo) =>
          <div className={'photo-gallery__item'} key={photo.id}>
            <figure>
              <img className={'photo-gallery__img'} src={photo.dataUrl} alt={photo.title} />
              <figcaption className={'photo-gallery__img-title'}>{photo.title}</figcaption>
            </figure>
            <button className={'photo-gallery__btn-remove'} onClick={() => handleRemove(photo)}>
              <span className={'_visually-hidden'}>Удалить</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
