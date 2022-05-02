import React from 'react'
import {useEffect} from 'react'
import ProductComponents from './ProductComponents';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import {  fetchProducts} from "../redux/actions/productsActions";

const ProductListing=()=>{
    const dispatch=useDispatch();
    // const fetchProducts= async()=>{
    //     const response=await axios.get('https://fakestoreapi.com/products').catch(err=>console.log(err))
    //     dispatch(setProducts(response.data));
                                  
        
    // }
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
    return(
        <>
        <div className='ui grid container'>
          <ProductComponents/>
        </div>
        </>
    )
}

export default ProductListing;