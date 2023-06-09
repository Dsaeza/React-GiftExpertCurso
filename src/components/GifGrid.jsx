
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// eslint-disable-next-line react/prop-types
export const GifGrid = ({category}) => {

    const {images, isLoading } = useFetchGifs(category);
    // console.log({images, isLoading});

    // const [images, setImages] = useState([]);
    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
    


    // useEffect(() =>{
    //     getImages();
        
        
    //     // getGifs(category).then(newImages =>{
    //     //     setImages(newImages);
    //     // });
    // }, []

    // )

    
    // const gifs = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <>
            <h3>{category}</h3>
            
            {/* <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem key={image.id} title={image.title} url={image.url}/>
                    ))
                }
            </div> */}
            {
                isLoading 
                ? (<center><h2>Cargando</h2></center>)
                : null
            }
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>
            {
                // gifs.map( gif => (
                //     <p>{gif}</p>
                // ))
            }
        </>
    )
}
// https://developers.giphy.com/branch/master/docs/api/endpoint/#search