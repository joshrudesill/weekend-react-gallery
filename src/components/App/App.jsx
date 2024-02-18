import GalleryList from "../Gallery/GalleryList";
function App() {
  return (
    <div className='p-5'>
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>
      <img src='images/goat_small.jpg' />
      <GalleryList data-testid='galleryList' />
    </div>
  );
}

export default App;
