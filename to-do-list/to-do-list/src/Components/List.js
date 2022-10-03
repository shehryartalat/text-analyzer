import React, { useEffect, useState } from 'react'

export default function List(props) {

    const [value, setValue] = useState([]);


    useEffect(() => {

        setValue(props.list)
    }, [])
    return (
        <div className='container'>
            <div class="row-12 container">
                {
                    props.list.map((data) => {
                        return <div className='mh-50 container col-3  bg-warning m-2'>
                            {data.name}
                        </div>
                    })
                }
            </div>


        </div>
    )
}


