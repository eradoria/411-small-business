import React from 'react'
import { useParams } from 'react-router'

const BizDetails = (props) => {
    console.log('props being called',props.listings);
	let id = useParams();
	console.log(id);
    const biz = props.listings.find(b => b.id == id.id)

    return (
        <div className='biz-container'>
            <div className="biz">
				<h1>{biz.business}</h1>
				<h3>{biz.address}</h3>
				<h4>{biz.open}</h4>
				<h3>{biz.description}</h3>
			</div>
        </div>
    )
}

export default BizDetails