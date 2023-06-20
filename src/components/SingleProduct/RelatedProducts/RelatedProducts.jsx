import React from 'react'
import Products from '../../Products/Products'
import useFetch from '../../../Hooks/useFetch';

const RelatedProducts = ({productId, categoryId}) => {
  console.log("proID:-------------------->",productId);
  console.log("categoryID:-------------------->",categoryId);
  const { data } = useFetch(
    `/api/prodcuts?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
);
console.log("relatedData:-----", data);
  return (
    <div className='realted-products'>
    <Products headingText = "Realted products"
     products={data}
     />

    </div>
  )
}

export default RelatedProducts