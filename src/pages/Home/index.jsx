import React, { Component } from 'react'
import { useLazyQuery, gql } from "@apollo/client";

const ALL_PRODUCTS_QUERY = gql`
{
  category{
    name
    products{
      name
    }
  }
}
`;



const [loadGreeting, { called, loading, data }] = useLazyQuery(ALL_PRODUCTS_QUERY); 
export default class All extends Component { 
  render() {
    return (
      <div className='productsPageContainer'>
        <h2 className='categoryNameTitle'>
          Category Name
        </h2>
        <div className='products-container'>
          
        </div>
      </div>
    )
  }
}
