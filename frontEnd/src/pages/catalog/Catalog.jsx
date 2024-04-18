import React from 'react'
import ProductsList from '../../components/productsList/ProductsList'
import styles from "./Catalog.module.css"


function Catalog() {
  return (
    <div className={styles.catalogContainer}><ProductsList/></div>
  )
}

export default Catalog