import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image'
import logo from './img/logo.svg';

const primaryHue = 336 

export default {
  logo: <Image src={logo} alt="Hello" width={90.61} height={44} />,
  primaryHue: {
    dark: primaryHue,
    light: primaryHue,
  },
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
      if (
        title ===
        'Estandarizacion De Nombres Archivo De Figma Segun El Tipo De Proyecto'
      ) {
        return (
          <>
            Estandarización de nombres archivo de figma según el tipo de
            proyecto
          </>
        );
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
};
