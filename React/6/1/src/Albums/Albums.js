import {useEffect, useState} from "react";
import axios from "axios";

export const Albums = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then((value) => value.data)
            .then((data) => setAlbums(data))
    }, [])
    return(
        <div className="albums">
            {albums.map((album, id) => {
                return(
                    <div className="album">
                        <p>Album №{album.id}</p>
                        <p>User: {album.userId}</p>
                        <p>{album.title}</p>

                    </div>
                )})}

        </div>
    )
}