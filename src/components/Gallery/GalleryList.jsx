import { useEffect, useState } from "react";
import axios from "axios";
import GalleryItem from "./GalleryItem";
export default function GalleryList() {
  const [galleryItems, setGalleryItems] = useState([]);
  const getItems = () => {
    axios
      .get("/api/gallery")
      .then((res) => setGalleryItems(res.data))
      .catch((e) => console.error(e));
  };
  useEffect(getItems, []);
  return (
    <div className='flex flex-row gap-2'>
      {galleryItems.map((item) => (
        <GalleryItem
          key={item.id}
          {...item}
          getItems={getItems}
          data-testid='galleryItem'
        />
      ))}
    </div>
  );
}
