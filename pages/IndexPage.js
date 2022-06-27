import {useRef, useState} from 'react';
import SinglePapartis from "../components/SinglePapartis";

const IndexPage = () => {

    const picturesAmount = useRef()
    const ringsAmount = useRef()

    const [getData, setData] = useState([])


    function generateGame() {
        const pictures = Number(picturesAmount.current.value)
        const rings = Number(ringsAmount.current.value)

        if(rings > pictures) return

        // GENERATE PICTURES INDEXES
        const indexes = []
        for (let i = 0; i < pictures; i++) indexes.push(i)

        // GET RANDOM INDEX NUMBERS DEPENDING ON RINGS COUNT
        const ringsIndexes = []
        for (let i = 0; i < rings; i++) {
            const randomStartNumber = Math.round(Math.random()*indexes.length-1)
            const removedIndex = indexes.splice(randomStartNumber, 1)
            ringsIndexes.push(removedIndex[0])
        }

        // CREATE OBJECTS WITH RINGS INSIDE
        const arr = []
        for (let i = 0; i < pictures; i++) {
            arr.push({
                ring: ringsIndexes.includes(i)
            })
        }

        setData(arr)
    }

    return (
        <div>
            <div className="box d-flex flex-wrap">
                {getData.map((x, i) =>  <SinglePapartis item={x} key={i}/>)}
            </div>

            <div>
                <input ref={picturesAmount} type="number" placeholder="Paparciai amount"/>
                <input ref={ringsAmount} type="number" placeholder="Rings amount"/>
                <button onClick={generateGame}>Generate Game</button>
            </div>
        </div>
    );
};

export default IndexPage;