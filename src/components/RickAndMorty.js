import React, { useState, useEffect } from "react"
import Image from  "./Image";
import styles from  "../styles";

const RickAndMorty = () => {
    const [data, setData] = useState([]) // Initialise tableau vide
    const [loading, setLoading] = useState(true)
    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (filter) => {
        const filteredCharacters = data.filter((character) => character.status === filter)
        setFilteredData(filteredCharacters)
    }

    const handleReset = () => {
        setFilteredData(data);
    }

    useEffect(() => {
        console.log("UseEffect on!")

        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://rickandmortyapi.com/api/character"
                )
                const dataJson = await response.json()
                setData(dataJson.results)
                setFilteredData(dataJson.results)
                setLoading(false)
            } catch (error) {
                console.log("Erreur appel API", error)
                setLoading(false)
            }
        }
        fetchData()
        console.log(data)
    }, [])

    useEffect(() => {
        console.log(filteredData)
    }, [])

    return (
        <div>
            <h1>Rick & Morty</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div>
                        <button 
                        style={styles.button}
                        onClick={() => handleFilter("Alive")}>
                            Alive
                        </button>
                        <button 
                        style={styles.button}
                        onClick={() => handleFilter("Dead")}>
                            Dead
                        </button>
                        <button 
                        style={styles.button}
                        onClick={() => handleFilter("unknown")}>
                            Unknown
                        </button>
                        <button
                        style={styles.button}
                        onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                    <div style={styles.container}>
                    {filteredData.map((character) => (
                        <div style={styles.card} key={character.id}>
                            <p>{character.name} - {character.status}</p>
                            {/* <img src={character.image} alt="Character avatar" width="100" height="120" /> */}
                            <Image source={character.image} />
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// const styles = {
//     container: {
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         gap: 10,
//     },
//     button: {
//         margin: 5,
//     },
//     card: {
//         margin: 10,
//         padding: 20,
//         border: "1px solid #FFF",
//         borderRadius: 5,
//         backgroundColor: "#000",
//         width: "30%",
//         // height: "500",
//     },
// }

export default RickAndMorty;
