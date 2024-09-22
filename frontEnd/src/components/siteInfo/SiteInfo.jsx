import React from 'react';
import styles from './SiteInfo.module.css';
import { Link } from 'react-router-dom';
import RodovLogo from "../../assets/RODOV CENTER ELECTRICAL BUILDING & INDUSTRIAL PRODUCTS (6).png";
import { useTranslation } from 'react-i18next'; // Import useTranslation

function SiteInfo() {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div>
      <img src={RodovLogo} className={styles.RodovLogo} alt="" />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <div className={styles.leftContent}>
              <h2>{t('ourHistory')}</h2> {/* Use translation key */}
              <p>{t('historyText')}</p> {/* Use translation key */}
              
              <h2>{t('fieldsOfActivity')}</h2> {/* Use translation key */}
              <p>{t('fieldsText')}</p> {/* Use translation key */}
              
              <h2>{t('ourMission')}</h2> {/* Use translation key */}
              <p>{t('missionText')}</p> {/* Use translation key */}
              
              <h2>{t('contactUs')}</h2> {/* Use translation key */}
              <p>
                {t('contactText')}{' '}
                <Link style={{ color: 'black' }} to={"/contact"}>{t('contactLink')}</Link>
              </p>
            </div>
            <div className={styles.rightContent}>
              <section className={styles.section}>
                <ul>
                  <li><Link style={{ textDecoration: 'none' }} to={"/catalog"}>{t('product1')}</Link></li>
                  <li><Link style={{ textDecoration: 'none' }} to={"/catalog"}>{t('product2')}</Link></li>
                  <li><Link style={{ textDecoration: 'none' }} to={"/catalog"}>{t('product3')}</Link></li>
                  <li><Link style={{ textDecoration: 'none' }} to={"/catalog"}>{t('product4')}</Link></li>
                  <li><Link style={{ textDecoration: 'none' }} to={"/catalog"}>{t('product5')}</Link></li>
                  <li><Link style={{ textDecoration: 'none' }} to={"/catalog"}>{t('product6')}</Link></li>
                  <li><Link style={{ textDecoration: 'none' }} to={"/catalog"}>{t('product7')}</Link></li>
                  <li><Link style={{ textDecoration: 'none' }} to={"/catalog"}>{t('product8')}</Link></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteInfo;
