import React from 'react'
import css from "../../styles/Home/Popular.module.css"
import { useState } from 'react';
import data from "./data.js";

const Popular = () => {

  const [activeTab, setActiveTab] = useState('Italian');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div className={css.popularContainer}>
        <div className={css.popularTitleSection}>Popular Cuisines</div>
        <div className={css.popularDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>

        <ul className={css.popularTabSection}>
          <li
            className={`${css.tabItem} ${activeTab === 'Italian' ? css.activeTabItem : ''}`}
            onClick={() => handleTabClick('Italian')}
          >
            Italian
          </li>
          <li
            className={`${css.tabItem} ${activeTab === 'Indian' ? css.activeTabItem : ''}`}
            onClick={() => handleTabClick('Indian')}
          >
            Indian
          </li>
          <li
            className={`${css.tabItem} ${activeTab === 'Mexican' ? css.activeTabItem : ''}`}
            onClick={() => handleTabClick('Mexican')}
          >
            Mexican
          </li>
          <li
            className={`${css.tabItem} ${activeTab === 'Chinese' ? css.activeTabItem : ''}`}
            onClick={() => handleTabClick('Chinese')}
          >
            Chinese
          </li>
          <li
            className={`${css.tabItem} ${activeTab === 'More' ? css.activeTabItem : ''}`}
            onClick={() => handleTabClick('More')}
          >
            More
          </li>
        </ul>

        <div className={css.popularDataSection}>
          {data.filter(item => item.type === activeTab).map((item, i) => (
            <div key={i} className={css.popularDataItemContainer}>
              <img src={item.image} alt={item.name} className={css.popularItemImage}/>
              <div className={css.popularItemTitle}>{item.name}</div>
            </div>
          ))}
        </div>

        <div className={css.knowMoreButton}>Know More</div>
      </div>
    </>
  )
}

export default Popular