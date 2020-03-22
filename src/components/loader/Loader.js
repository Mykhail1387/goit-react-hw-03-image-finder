import React from 'react';
import Loader from 'react-loader-spinner';

const Loadder = () => {
    const style = { textAlign: 'center' };
    return (
        <div style={style}>
            <Loader
                type="ThreeDots"
                color="blue"
                height={200}
                width={300}
            />
        </div>
    )
}

export default Loadder;