import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image'
import logo from './img/design-logo.svg';

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
      if (title === 'Guia De Recursos De Marca') {
        return <>Guía de recursos de marca</>;
      }
      if (title === 'Guia Con Plantillas De Correo Para Solicitud De Recursos De Marca') {
        return <>Guía con plantillas de correo para solicitud de recursos de marca</>;
      }
      if (title === 'Guia Para La Estandarizacion De Nombres Archivo De Figma Segun El Tipo De Proyecto') {
        return <>Guía para la estandarización de nombres archivo de figma según el tipo de proyecto</>;
      }
      if (title === 'Guia Para La Estandarizacion De Nombres De Repositorios En Figma') {
        return <>Guía para la estandarización de nombres de repositorios en figma</>;
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
      if (title === 'Guia De Mapa De Aplicacion') {
        return <>Guía de mapa de aplicación</>;
      }
      if (title === 'Como Buscar El Nombre De Una Escena En El Mapa') {
        return <>¿Cómo buscar el nombre  de una escena en el mapa?</>;
      }
      if (title === 'Como Exportar Una Imagen En Distintos Formatos') {
        return <>¿Cómo exportar una imagen en distintos formatos?</>;
      }
      if (title === 'Como Inspeccionar El CSS De Los Elementos De UI') {
        return <>¿Cómo inspeccionar el CSS de los elementos de UI?</>;
      }
      if (title === 'Como Navegar Entre El Mapa') {
        return <>¿Cómo navegar entre el mapa?</>;
      }
      if (title === 'Como Obtener Colores En Distintos Formatos') {
        return <>¿Cómo obtener colores en distintos formatos?</>;
      }
      if (title === 'Como Ocultar Barras De Herramientas Y Ver Solamente El Mapa') {
        return <>¿Cómo ocultar barras de herramientas y ver solamente el mapa?</>;
      }
      if (title === 'Como Seleccionar Una Capa Especifica En El Mapa') {
        return <>¿Cómo seleccionar una capa específica en el mapa?</>;
      }
      return <>{title}</>;
    },
  },
};
