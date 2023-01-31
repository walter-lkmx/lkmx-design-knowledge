import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}


export default { config,
sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        );
      }
      if (title === 'Proceso Diseno') {
        return <>Proceso Diseño</>;
      }
      if (title === 'Estandarizacion De Nombres Archivo De Figma Segun El Tipo De Proyecto') {
        return <>Estandarización de nombres archivo de figma según el tipo de proyecto</>;
      }
      if (title === 'Estandarizacion De Nombres De Repositorios En Figma') {
        return <>Estandarización de nombres de repositorios en figma</>;
      }
      if (title === 'Guia De Recursos De Marca') {
        return <>Guía de recursos de marca</>;
      }
      if (title === 'Navegacion') {
        return <>Navegación</>;
      }
      if (title === 'Tipografia') {
        return <>Tipografía</>;
      }
      return <>{title}</>;
    },
  },
}  