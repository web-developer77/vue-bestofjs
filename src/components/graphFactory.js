import React from 'react'
import { FormattedMessage } from 'react-intl'

import Graph from './Graph'
import TranslatedBlock from '../utils/TranslatedBlock'
import ProjectTable from './ProjectTable/ProjectTable'

function graphFactory({ projects, entities, locale, translations }) {
  return {
    createGraph({ tag, number, excluded = [], count = 10, children }) {
      if (!projects[tag]) throw new Error(`No projects with the tag "${tag}"`)
      const graphProjects = projects[tag]
        .filter(project => !excluded.includes(project.slug))
        .slice(0, count)
      const key = tag.replace(/-/gi, '')
      const height = Math.max(count * 15 + 100, 150)
      return (
        <section className="section">
          <div className="containerxxx">
            <a name={tag} />
            <div className="tag-card">
              <div className="tag-card-inner">
                <h2 className="tag-card-header">
                  <div className="tag-card-header-text">
                    <span className="tag-card-number">#{number}</span>
                    <FormattedMessage id={`categories.${key}`} />
                  </div>
                </h2>
                <div className="tag-card-body">
                  <div className="tag-card-column-1">
                    {/*
                    <Graph
                      projects={graphProjects}
                      sortOrder={'yearly'}
                      width={350}
                      height={height}
                    />
                    */}
                    <ProjectTable tagKey={key} projects={graphProjects.slice(0, 20)} />
                  </div>
                  <div className="tag-card-column-2">
                    <div className="tag-card-comments markdown-body">
                      <TranslatedBlock
                        translations={translations}
                        language={locale}
                        path={`categories.${tag}`}
                        entities={entities}
                      />
                      {false && (
                        <Markdown source={comment} entities={entities} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default graphFactory
