import React from 'react';
import styles from './SiteInfo.module.css';
import { Link } from 'react-router-dom';
function SiteInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>About RODOV CENTER ELECTRICAL BUILDING & INDUSTRIAL PRODUCTS</h2>
        <p>Welcome to RODOV CENTER, your premier destination for electrical, electronic, and industrial products. With a rich history and a commitment to excellence, we strive to meet the diverse needs of our customers in the electrical and industrial sectors.</p>
        
        <h2>Our History</h2>
        <p>RODOV CENTER was founded in [year] with a vision to provide high-quality electrical and industrial products to businesses and individuals alike. Over the years, we have grown into a trusted name in the industry, known for our reliability, expertise, and dedication to customer satisfaction.</p>
        
        <h2>Fields of Activity</h2>
        <p>At RODOV CENTER, we specialize in a wide range of fields, including:</p>
        <section className={styles.section}>
        <ul>
        <li><Link  style={{ textDecoration: 'none'}} to={"/catalog"}>Electrical and Electronic Equipment</Link></li>
          <li><Link  style={{ textDecoration: 'none'}} to={"/catalog"}>Audio Visual Equipment</Link></li>
          <li><Link  style={{ textDecoration: 'none'}} to={"/catalog"}>Lighting</Link></li>
          <li><Link  style={{ textDecoration: 'none'}} to={"/catalog"}>Electrical Appliances</Link></li>
          <li><Link  style={{ textDecoration: 'none'}} to={"/catalog"}>Industrial Controls and Machinery</Link></li>
          <li><Link  style={{ textDecoration: 'none'}} to={"/catalog"}>Electronic Components</Link></li>
          <li><Link  style={{ textDecoration: 'none'}} to={"/catalog"}>Electrical Construction Materials</Link></li>
          <li><Link  style={{ textDecoration: 'none'}} to={"/catalog"}>Specialty Products</Link></li>
        </ul>
        </section>
        <h2>Our Mission</h2>
        <p>At RODOV CENTER, our mission is to deliver superior products and services that exceed our customers' expectations. We are committed to innovation, quality, and sustainability in everything we do.</p>
        
        <h2>Contact Us</h2>
        <p>Thank you for choosing RODOV CENTER for your electrical and industrial needs. For inquiries, orders, or assistance, please don't hesitate to 
        <Link  style={{ color: 'black'}} to={"/contact"}> contact us</Link>.</p>
      </div>
    </div>
  );
}

export default SiteInfo;
