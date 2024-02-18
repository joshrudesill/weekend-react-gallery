import { useState } from "react";
import axios from "axios";
export default function GalleryItem({
  id,
  url,
  title,
  description,
  likes,
  getItems,
}) {
  const [descriptionToggled, setDescriptionToggled] = useState(false);
  const likePost = () => {
    axios
      .put(`api/gallery/like/${id}`)
      .then(getItems)
      .catch((e) => console.error(e));
  };
  return (
    <div className='border flex flex-col mt-3'>
      <div className='text-center text-xl py-2'>
        <p>{title}</p>
      </div>
      <div
        className='h-48 w-80 border-b-2 border-t-2 bg-slate-200'
        onClick={() => setDescriptionToggled(!descriptionToggled)}
        data-testid='toggle'
      >
        {descriptionToggled ? (
          <p>{description}</p>
        ) : (
          <img src={url} className='object-scale-down h-48 w-80'></img>
        )}
      </div>
      <div className='p-3'>
        <button
          className='bg-amber-500 w-full px-2 py-1 rounded-md'
          onClick={likePost}
          data-testid='like'
        >
          Like
        </button>
      </div>
      <div className='text-center'>
        {likes === 0 ? (
          <p>No one likes this</p>
        ) : (
          <p>{likes} people like this</p>
        )}
      </div>
    </div>
  );
}
