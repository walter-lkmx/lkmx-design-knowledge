import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import logo from "./img/design-logo.svg";
import compi from "./components/counters";
import { log } from "console";
import { useEffect } from "react";

const primaryHue = 336;

export default {
  logo: (
    <svg
      width="133"
      height="32"
      viewBox="0 0 133 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_1_2)">
        <path
          d="M0 32C8.8131 32 16.0525 24.8656 16.0525 15.9475C16.0525 7.0295 8.8131 0 0 0V32Z"
          fill="currentColor"
        />
        <path
          d="M40.0787 27.0688V30.741H22.5574V1.25902H39.8688V4.93116H26.4393V13.9541H38.8197V17.6262H26.4393V26.9639H40.0787V27.0688Z"
          fill="currentColor"
        />
        <path
          d="M43.6459 24.0262L47.0033 22.1377C48.0525 25.3902 50.5707 27.4885 54.8723 27.4885C59.069 27.4885 61.0624 25.6 61.0624 22.9771C61.0624 19.9344 58.4393 18.8852 54.1376 17.6262C49.4165 16.1574 44.905 14.6885 44.905 9.12785C44.905 3.77705 49.2066 0.839348 54.1376 0.839348C58.9641 0.839348 62.426 3.56722 64.105 7.23934L60.8525 9.02293C59.8033 6.50492 57.705 4.51149 54.1376 4.51149C50.9901 4.51149 48.7868 6.19017 48.7868 8.91802C48.7868 11.6459 50.8851 12.6951 54.9769 13.9541C60.1182 15.6328 64.9442 17.1017 64.9442 22.8722C64.9442 28.0131 60.7475 31.3705 54.7674 31.3705C49.2066 31.2656 45.2198 28.4328 43.6459 24.0262Z"
          fill="currentColor"
        />
        <path
          d="M74.8066 1.25902V30.741H70.9248V1.25902H74.8066Z"
          fill="currentColor"
        />
        <path
          d="M110.374 17.941C110.374 25.3902 104.813 31.3705 95.895 31.3705C86.7674 31.3705 80.3674 24.5508 80.3674 16.0525C80.3674 7.55409 86.8723 0.734425 95.7901 0.734425C101.351 0.734425 106.072 3.67213 108.59 7.86884L105.233 9.86231C103.554 6.71475 99.9868 4.51149 95.7901 4.51149C88.9707 4.51149 84.2492 9.54756 84.2492 16.0525C84.2492 22.4525 88.9707 27.4885 96 27.4885C102.085 27.4885 105.757 24.1312 106.492 19.7246H95.6851V16.1574H110.374V17.941Z"
          fill="currentColor"
        />
        <path
          d="M115.829 7.97376L132.512 32H115.829V7.97376Z"
          fill="currentColor"
        />
        <path
          d="M132.512 24.0262L115.829 0H132.512V24.0262Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),

  primaryHue: {
    dark: primaryHue,
    light: primaryHue,
  },
  sidebar: {
    titleComponent: ({ title, type }) => {
      if (type === "separator") {
        return (
          <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
        );
      }
      if (title === "Proceso Diseno") {
        return <>Proceso Diseño</>;
      }
      if (
        title ===
        "Estandarizacion De Nombres Archivo De Figma Segun El Tipo De Proyecto"
      ) {
        return (
          <>
            Estandarización de nombres archivo de figma según el tipo de
            proyecto
          </>
        );
      }
      if (title === "Guia De Recursos De Marca") {
        return <>Guía de recursos de marca</>;
      }
      if (
        title ===
        "Guia Con Plantillas De Correo Para Solicitud De Recursos De Marca"
      ) {
        return (
          <>Guía con plantillas de correo para solicitud de recursos de marca</>
        );
      }
      if (
        title ===
        "Guia Para La Estandarizacion De Nombres Archivo De Figma Segun El Tipo De Proyecto"
      ) {
        return (
          <>
            Guía para la estandarización de nombres archivo de figma según el
            tipo de proyecto
          </>
        );
      }
      if (
        title ===
        "Guia Para La Estandarizacion De Nombres De Repositorios En Figma"
      ) {
        return (
          <>Guía para la estandarización de nombres de repositorios en figma</>
        );
      }
      if (title === "Navegacion") {
        return <>Navegación</>;
      }
      if (title === "Tipografia") {
        return <>Tipografía</>;
      }
      if (title === "Gdii") {
        return <>Guía de diseño e interacción de interfaces</>;
      }
      if (title === "estilo") {
        return <>Estilo</>;
      }
      if (title === "patrones") {
        return <>Patrones</>;
      }
      if (title === "ui") {
        return <>UI</>;
      }
      if (
        title ===
        "Filtrado De Issues Que Fueron Asignados A Un Design Lead En Jira"
      ) {
        return (
          <>Filtrado de issues que fueron asignados a un design lead en Jira</>
        );
      }

      if (title === "Guia De Mapa De Aplicacion") {
        return <>Guía de mapa de aplicación</>;
      }
      if (title === "Como Buscar El Nombre De Una Escena En El Mapa") {
        return <>¿Cómo buscar el nombre de una escena en el mapa?</>;
      }
      if (title === "Como Exportar Una Imagen En Distintos Formatos") {
        return <>¿Cómo exportar una imagen en distintos formatos?</>;
      }
      if (title === "Como Inspeccionar El CSS De Los Elementos De UI") {
        return <>¿Cómo inspeccionar el CSS de los elementos de UI?</>;
      }
      if (title === "Como Navegar Entre El Mapa") {
        return <>¿Cómo navegar entre el mapa?</>;
      }
      if (title === "Como Obtener Colores En Distintos Formatos") {
        return <>¿Cómo obtener colores en distintos formatos?</>;
      }
      if (
        title === "Como Ocultar Barras De Herramientas Y Ver Solamente El Mapa"
      ) {
        return (
          <>¿Cómo ocultar barras de herramientas y ver solamente el mapa?</>
        );
      }
      if (title === "Como Seleccionar Una Capa Especifica En El Mapa") {
        return <>¿Cómo seleccionar una capa específica en el mapa?</>;
      }
      if (title === "Index") {
        return <>Inicio</>;
      }
      if (title === "Inicializar Proyecto") {
        return <>Inicializar proyecto</>;
      }
      if (title === "Procesar Delta De Vista") {
        return <>Procesar delta de vista</>;
      }
      if (title === "Procesar Delta Tecnico") {
        return <>Procesar delta técnico</>;
      }
      if (title === "Procesar Historia De Usuario") {
        return <>Procesar historia de usuario</>;
      }
      if (title === "Solicitar Recursos De Marca") {
        return <>Solicitar recursos de marca</>;
      }
      if (title === "Transferir Proyecto") {
        return <>Transferir proyecto</>;
      }
      if (title === "Kit De Herramientas") {
        return <>Kit de herramientas</>;
      }
      if (title === "Guias De Diseno") {
        return <>Guías de diseño</>;
      }
      if (title === "Proceso De Diseno") {
        return <>Proceso de diseño</>;
      }
      if (title === "Mapa De Aplicacion Construccion") {
        return <>Mapa de Aplicación - Construcción</>;
      }
      if (title === "Guia De Construccion De Urls") {
        return <>Guía de Construcción de URLs
        </>;
      }
      if (title === "Mapa De Aplicacion Faq") {
        return <>Mapa De Aplicación - FAQ
        </>;
      }
      return <>{title}</>;
    },
  },
  footer: {
    text: <span>{new Date().getFullYear()} © The UX Hub by Dr. Isain.</span>,
  },
  docsRepositoryBase: "https://github.com/walter-lkmx/respaldo-doc/",
  feedback: {
    content: "Ayúdanos a mejorar, comparte tus sugerencias 🧠",
  },
  editLink: {
    text: "",
  },
};
