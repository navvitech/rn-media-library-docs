import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>rn-media-library</span>,
  project: {
    link: 'https://github.com/navvitech/rn-media-library',
  },
  docsRepositoryBase: 'https://github.com/navvitech/rn-media-library',
  footer: {
    text: 'rn-media-library Documentation',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – rn-media-library'
      }
    }
  }
}

export default config
