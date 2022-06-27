import {useState} from 'react';

const SinglePapartis = ({item}) => {

    const [getShowRing, setShowRing] = useState(false)

    function checkRing() {
        if(item.ring) setShowRing(true)
    }

    return (
        <div className="item">
            {!getShowRing ?
                <img onClick={checkRing} src="https://img2.manonamai.lt/article/b2eba941-1427-4b42-a3f3-730dae70aa69/cover/5241525.jpeg" alt=""/> :
                <img src="https://m.media-amazon.com/images/I/61cw-1UY1pL._AC_SX425_.jpg" alt=""/>
            }
        </div>
    );
};

export default SinglePapartis;