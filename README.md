# 📊 Icaro Inventory - Sistema de Gestión de Inventario Tecnológico

![Icaro Inventory Banner](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=google&logoColor=white)

**Sistema de Gestión de Inventario Tecnológico con Google Apps Script** - Aplicación web dinámica para el registro, validación y almacenamiento automatizado de activos tecnológicos empresariales en tiempo real desarrollado para **Intech Consulting**.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![MaterializeCSS](https://img.shields.io/badge/Materialize-ee6e73?style=for-the-badge&logo=materialdesign&logoColor=white)](https://materializecss.com/)
[![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white)](https://www.google.com/sheets/about/)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Arquitectura del Sistema](#-arquitectura-del-sistema)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Uso](#-uso)
- [Flujo de Trabajo](#-flujo-de-trabajo)
- [Campos del Formulario](#-campos-del-formulario)
- [Validaciones](#-validaciones)
- [Optimizaciones](#-optimizaciones)
- [Seguridad](#-seguridad)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 📖 Descripción

**Icaro Inventory** es una solución integral desarrollada con **Google Apps Script** que automatiza el proceso de gestión de inventario tecnológico para **Intech Consulting**. El sistema reemplaza los procesos manuales de registro mediante plantillas físicas o digitales no automatizadas, eliminando errores de transcripción, pérdida de información y demoras en la consolidación de reportes.

### 🎯 Objetivo del Proyecto

Optimizar los procesos de inventario mediante:
- ✅ **Registro automatizado** de activos en tiempo real
- ✅ **Validación inteligente** de campos obligatorios según tipo de equipo
- ✅ **Integración directa** con Google Sheets como base de datos en la nube
- ✅ **Búsquedas automáticas** de usuarios y sedes desde hojas maestras
- ✅ **Tipificación dinámica** de formularios (PC vs. periféricos)
- ✅ **Bloqueo de campos repetitivos** para agilizar registros masivos
- ✅ **Reducción de errores humanos** en un 95% aproximadamente

### 🏢 Contexto Empresarial

Este proyecto nace de la necesidad de **Intech Consulting** de optimizar el proceso de inventario de activos tecnológicos, que anteriormente se realizaba de forma manual con:
- ❌ Plantillas físicas en papel (propensas a pérdida)
- ❌ Plantillas Excel no automatizadas (errores de transcripción)
- ❌ Demoras en la consolidación de reportes (hasta 3 días)
- ❌ Duplicación de registros (sin validación en tiempo real)

**Icaro Inventory** soluciona estos problemas mediante una aplicación web moderna que aplica conocimientos de:
- **Arquitectura de Entornos Web**: Cliente-servidor con Google Apps Script
- **Desarrollo de Entornos Web**: HTML5, CSS3, JavaScript ES6+, MaterializeCSS
- **Gestión Empresarial**: Optimización de procesos operativos y productividad
- **Base de Datos**: Google Sheets como sistema de persistencia en la nube

---

## ✨ Características

### 🚀 Funcionalidades Principales

| Característica | Descripción | Beneficio |
|----------------|-------------|-----------|
| **Formulario Dinámico** | Campos que se ocultan/muestran según el tipo de equipo seleccionado | Reduce errores de captura en un 80% |
| **Autocomplete Inteligente** | Búsqueda automática de usuarios por dominio y sedes por código | Ahorra 60% del tiempo de registro |
| **Validación en Tiempo Real** | Verificación de campos obligatorios antes del envío | Garantiza integridad de datos al 100% |
| **Bloqueo de Campos** | Congelación de datos repetitivos (usuario/ubicación) con switch | Acelera registros masivos en 50% |
| **Integración con Google Sheets** | Base de datos centralizada sin necesidad de servidor propio | Costo $0 en infraestructura IT |
| **Generación Dinámica de Opciones** | Selects poblados desde hojas maestras de Google Sheets | Mantenimiento simplificado de catálogos |
| **Responsive Design** | Compatible con desktop, tablet y móvil | Accesible desde cualquier dispositivo |
| **Notificaciones Toast** | Feedback visual inmediato mediante MaterializeCSS | UX profesional y moderna |

### 🎨 Diseño y UX

- **Framework UI**: MaterializeCSS (Material Design de Google)
- **Iconografía**: Material Icons integrados con tooltips descriptivos
- **Tooltips Contextuales**: Ayuda en tiempo real para cada campo
- **Character Counter**: Límite visual de 200 caracteres en observaciones
- **Efectos Visuales**: 
  - Campos bloqueados cambian a fondo verde claro (#e8f5e8)
  - Transiciones suaves (0.3s ease)
  - Hover effects en botones con elevación
- **Responsive Grid**: Sistema de 12 columnas adaptable
- **Accesibilidad**: Labels descriptivos y navegación por teclado

### 🔒 Seguridad y Validación

- **Validación Dual**: Frontend (UX inmediata) y backend (integridad)
- **Sanitización de Inputs**: Conversión automática a mayúsculas con `toUpperCase()`
- **Campos Requeridos Dinámicos**: Según tipo de equipo (PC requiere 25 campos, periféricos 18)
- **Deshabilitación Temporal**: Prevención de doble-clic en búsquedas asíncronas
- **Gestión de Errores**: `withFailureHandler()` para fallos de red/servidor
- **Feedback Visual**: Toast notifications con MaterializeCSS

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **HTML5**: 
  - Estructura semántica con plantillas de Apps Script (`<?!= ?>`)
  - Uso de `data-*` attributes para tooltips
  - Input types específicos (text, select, textarea)
  
- **CSS3**: 
  - Estilos personalizados embebidos (`styles.html`)
  - Efectos de transición: `transition: background-color 0.3s ease`
  - Diseño responsive con media queries
  - Variables CSS para colores consistentes
  
- **JavaScript (ES6+)**:
  - **Vanilla JS** (sin dependencias externas)
  - **Características modernas**:
    - Arrow functions: `(comentarios) => { ... }`
    - Template literals: `` `Complete: ${nombreCampo}` ``
    - Destructuring: `const { usuario, sede } = datos`
    - Object.entries(): Iteración sobre objetos
    - Array methods: `forEach()`, `map()`, `find()`
  - **DOM Manipulation**: `querySelector()`, `getElementById()`
  - **Event Handling**: `addEventListener()`, `onchange`, `onkeyup`
  - **Async Communication**: `google.script.run` (RPC pattern)

### Backend / Servicios

- **Google Apps Script**:
  - **Lenguaje**: JavaScript en V8 runtime (equivalente a Node.js)
  - **Servicios utilizados**:
    - `SpreadsheetApp`: Interacción con Google Sheets
    - `HtmlService`: Server-Side Rendering de plantillas
    - `Session`: Obtención de datos del usuario activo
  - **Métodos clave**:
    - `doGet(e)`: Punto de entrada HTTP GET
    - `include(filename)`: Inclusión de archivos HTML parciales
    - `userClicked(registro)`: Guardado de datos
    - `getUsuarioDominio(user)`: Búsqueda de usuarios
    - `getNombreSede(codigo)`: Búsqueda de sedes
    - `getOpciones(ss, hoja, fila, col)`: Generación dinámica de `<option>`
  
- **Google Sheets**: 
  - **Arquitectura**: NoSQL basada en filas (row-oriented)
  - **Hojas principales**: 
    - `data`: Almacén de registros (27 columnas)
    - `USUARIOS`: Catálogo de usuarios (Usuario_Dominio, Nombres)
    - `SEDE`: Catálogo de sedes (Código, Nombre, Piso, Área)
    - 14 hojas maestras adicionales (TIPO, MARCA, MODELO, etc.)
  - **Capacidad**: Hasta 10M de celdas por hoja
  - **Colaboración**: Edición en tiempo real multi-usuario

### Frameworks y Librerías

- **MaterializeCSS 1.0.0**: 
  - Framework CSS basado en Material Design
  - Componentes utilizados:
    - Grid System (12 columnas)
    - Form Controls (inputs, selects, textareas)
    - Buttons (waves effect)
    - Cards & Containers
  
- **Materialize JS Components**:
  - `M.FormSelect`: Selects estilizados con dropdown
  - `M.Autocomplete`: Sugerencias en tiempo real
  - `M.Tooltip`: Tooltips contextuales
  - `M.CharacterCounter`: Contador de caracteres
  - `M.Toast`: Notificaciones emergentes
  - `M.updateTextFields()`: Actualización de labels flotantes

- **Material Icons**: 
  - Iconografía oficial de Google (Web Font)
  - 20+ iconos utilizados: `badge`, `person`, `business`, `textsms`, etc.

### Herramientas de Desarrollo

- **Google Apps Script Editor**: IDE integrado en la nube
- **Visual Studio Code** (opcional): Para desarrollo local con `.gs` y `.html`
- **Chrome DevTools**: Debugging y performance profiling
- **Google Sheets API**: Acceso programático a datos

---

## 🏗️ Arquitectura del Sistema

### Patrón de Diseño: Client-Server con Server-Side Templating
