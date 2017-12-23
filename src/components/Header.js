import React from 'react'
import Link from 'gatsby-link'

import svg from './bestofjs.svg'

const items = [
  { code: 'en', text: 'English' },
  { code: 'zh', text: '中文' },
  { code: 'ja', text: '日本語' }
]

const Header = ({ language, year }) => (
  <div id="header">
    <div className="container small-container">
      <div className="header-layout">
        <a id="logo" href="https://bestof.js.org">
          <img src={svg} width="160" alt="bestof.js.org logo" />
        </a>
        <div className="language-menu">
          {items.map(item => (
            <LanguageLink
              item={item}
              key={item.code}
              active={language === item.code}
              year={year}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

const LanguageLink = ({ item, active, year }) => {
  if (active)
    return <span className="language-menu-item is-active">{item.text}</span>
  return (
    <Link to={`/${year}/${item.code}/`} className="language-menu-item">
      {item.text}
    </Link>
  )
}

export default Header
