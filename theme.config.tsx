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
      if (title === 'Gdii') {
        return <>GDII</>;
      }
      if (title === 'estilo') {
        return <>Estilo</>;
      }
      if (title === 'patrones') {
        return <>Patrones</>;
      }
      if (title === 'ui') {
        return <>UI</>;
      }
      if (title === 'guia-de-mapa-de-aplicacion') {
        return <>Guía-de-mapa-de-aplicación</>;
      }
      if (title === 'como-buscar-el-nombre-de-una-escena-en-el-mapa') {
        return <>¿Cómo buscar el nombre  de una escena en el mapa?</>;
      }
      if (title === 'como-exportar-una-imagen-en-distintos-formatos') {
        return <>¿Cómo exportar una imagen en distintos formatos?</>;
      }
      if (title === 'como-inspeccionar-el-css-de-los-elementos-de-ui') {
        return <>¿Cómo inspeccionar el CSS de los elementos de UI?</>;
      }
      if (title === 'como-navegar-entre-el-mapa') {
        return <>¿Cómo navegar entre el mapa?</>;
      }
      if (title === 'como-obtener-colores-en-distintos-formatos') {
        return <>¿Cómo obtener colores en distintos formatos?</>;
      }
      if (title === 'como-ocultar-barras-de-herramientas-y-ver-solamente-el-mapa') {
        return <>¿Cómo ocultar barras de herramientas y ver solamente el mapa?</>;
      }
      if (title === 'como-seleccionar-una-capa-especifica-en-el-mapa') {
        return <>¿Cómo seleccionar una capa específica en el mapa?</>;
      }
      return <>{title}</>;
    },
  },
};
