import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import Helmet from 'react-helmet'

import Header from './components/Header'
import Footer from './components/Footer'
import TranslatorSection from './components/TranslatorSection'
import Introduction from './components/Introduction'
import TOC from './components/TOC'
import Conclusion from './components/Conclusion'
import makeCategory from './components/makeCategory'
import ProjectIconWall from './components/ProjectIconWall' // Used to generate the icon
import BgPicture from './components/BgPicture'

import './css/index.js'

class Page extends React.Component {
  render() {
    const {
      entities,
      url,
      projects,
      intl,
      translations,
      year,
      categories,
      languages
    } = this.props
    const locale = intl.locale
    const factory = makeCategory({ projects, entities, locale, translations })
    const Category = props => factory(props)
    const title = intl.formatMessage({ id: 'page.title' })
    const description = intl.formatMessage({ id: 'page.description' })
    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { property: 'og:type', content: 'article' },
            {
              property: 'og:image',
              content: `/img/${intl.locale}/rising-stars.png`
            }
          ]}
          htmlAttributes={{ lang: intl.locale }}
          bodyAttributes={{ class: `year${year}` }}
        />
        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i|Roboto+Slab:300,400,700"
          rel="stylesheet"
        />
        {false && <BgPicture projects={projects.all} />}
        <Header
          language={intl.locale}
          year={year}
          availableLanguages={languages}
        />
        <div id="picture-block">
          <div className="container">
            <h1>
              <FormattedMessage id="header.title" />
            </h1>
          </div>
        </div>
        {false && <ProjectIconWall projects={projects.all} />}
        <div className="main">
          {false && (
            <div className="main-sidebar">
              <TOC
                entities={entities}
                url={url}
                intl={intl}
                translations={translations}
                categories={categories}
              />
            </div>
          )}
          <div className="main-contents">
            <Introduction
              entities={entities}
              url={url}
              intl={intl}
              translations={translations}
              categories={categories}
            />
            {categories.map((item, i) => (
              <Category
                key={item.tag}
                tag={item.tag}
                number={i + 1}
                title={item.title}
                excluded={item.excluded}
                count={item.count}
              />
            ))}
            <Conclusion
              entities={entities}
              url={url}
              intl={intl}
              translations={translations}
            />
          </div>
        </div>
        <TranslatorSection language={intl.locale} />
        <Footer language={intl.locale} />
      </div>
    )
  }
}

export default injectIntl(Page)
