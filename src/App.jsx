/* eslint-disable no-unused-vars */
import 'grapesjs/dist/css/grapes.min.css'
import grapesjs from 'grapesjs'
import React, { useEffect } from 'react'
import plugin from 'grapesjs-preset-webpage'
import classUI from './components/cssSearch'
import manager from 'grapesjs-project-manager'
import blocks from 'grapesjs-blocks-basic'
import customCodePlugin from 'grapesjs-custom-code'
import pluginExport from 'grapesjs-plugin-export'

function App() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      forceClass: false,
      height: '100vh',
      fromElement: true,
      plugins: [plugin, classUI, manager, blocks, customCodePlugin, pluginExport],
      storageManager: {
        type: 'local',
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1 
      },
      // Avoid any default panel
      panels: { defaults: [] },
      pluginsOpts: {
        [pluginExport]: {
          root: {
            css: {
              'style.css': (ed) => ed.getCss(),
              'some-file.js': 'console.log("Test some-file.js")'
            },
            html: {
              'index.html': (ed) => `${ed.getHtml()}`
            }
          }
        }
      }
    })
    // Obtén el panel al que quieres agregar los botones
    let panel = editor.Panels.getPanel('options')

    // Agrega los botones al panel
    panel.get('buttons').add([
      {
        id: 'open-modal-btn',
        active: false,
        className: 'button-class',
        label:
          '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib29rLXBsdXMiPjxwYXRoIGQ9Ik00IDE5LjV2LTE1QTIuNSAyLjUgMCAwIDEgNi41IDJIMjB2MjBINi41YTIuNSAyLjUgMCAwIDEgMC01SDIwIi8+PHBhdGggZD0iTTkgMTBoNiIvPjxwYXRoIGQ9Ik0xMiA3djYiLz48L3N2Zz4=">',
        command: 'openModalCommandHTML'
      },
      {
        id: 'open-modal-btn2',
        active: false,
        className: 'button-class',
        label:
          '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9ucy1kb3duIj48cGF0aCBkPSJtNyA2IDUgNSA1LTUiLz48cGF0aCBkPSJtNyAxMyA1IDUgNS01Ii8+PC9zdmc+"><div id="exportHTML" style="display: none;"></div>',
        command: 'exportSimple'
      },
      {
        id: 'open-modal-btn3',
        active: false,
        className: 'button-class',
        label:
          '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1maWxlLWNvZGUiPjxwYXRoIGQ9Ik0xNSAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWN1oiLz48cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCIvPjxwYXRoIGQ9Im0xMCAxMy0yIDIgMiAyIi8+PHBhdGggZD0ibTE0IDE3IDItMi0yLTIiLz48L3N2Zz4=">',
        command: 'openModalCommand'
      }
    ])

    editor.Panels.addButton('options', {
      id: 'open-templates',
      className: 'fa fa-folder-o',
      attributes: {
        title: 'Open projects and templates'
      },
      command: 'open-templates' //Open modal
    })
    editor.Panels.addButton('views', {
      id: 'open-pages',
      className: 'fa fa-file-o',
      attributes: {
        title: 'Take Screenshot'
      },
      command: 'open-pages',
      togglable: false
    })

    editor.Commands.add('openModalCommand', {
      run: function (editor, sender) {
        openModalCSS()
      },
      stop: function (editor, sender) {
        // Implement any cleanup logic if needed
      }
    })
    const openModalCSS = () => {
      editor.Modal.open({
        title: '<p class="text-2xl">Sube tu archivo de estilos</p>',
        content: '<input type="file" id="fileInput" multiple>'
      })

      const fileInput = document.getElementById('fileInput')
      fileInput.addEventListener('change', function () {
        const file = this.files[0]

        if (file) {
          const reader = new FileReader()

          reader.onload = function (e) {
            const fileContent = e.target.result
            console.log(fileContent)

            const storedData = localStorage.getItem('gjsProject')

            // Parsea el contenido a formato JSON
            const parsedData = storedData ? JSON.parse(storedData) : {}

            // Si no existe un array de estilos, créalo
            parsedData.styles = parsedData.styles || []

            // Asigna el nuevo estilo directamente al array de estilos
            parsedData.styles = editor.addStyle(fileContent)

            // Convierte el objeto a cadena y guárdalo en el localStorage
            localStorage.setItem('gjsProject', JSON.stringify(parsedData))
          }

          reader.readAsText(file)
        }
      })
    }

    editor.Commands.add('openModalCommandHTML', {
      run: function (editor, sender) {
        openModalHTML()
      },
      stop: function (editor, sender) {
        // Implement any cleanup logic if needed
      }
    })

    const openModalHTML = () => {
      editor.Modal.open({
        title: '<p class="text-2xl">Sube tu archivo de componentes</p>',
        content: '<input type="file" id="fileInputHTML" multiple>'
      })

      const fileInput = document.getElementById('fileInputHTML')
      fileInput.addEventListener('change', function () {
        const file = this.files[0]

        if (file) {
          const reader = new FileReader()

          reader.onload = function (e) {
            const fileContent = e.target.result
            editor.getComponents().add(`${fileContent}`)
          }

          reader.readAsText(file)
        }
      })
    }

    editor.Commands.add('exportSimple', {
      run: (editor) => {
        const exportHTML = editor.getHtml()
        console.log(exportHTML)
        let a = document.createElement('a')
        const parteOne = localStorage.getItem('parte1')
        const parteTwo = localStorage.getItem('parte2')
        // Crear el contenido del archivo HTML
        let htmlContent = `${parteOne}${exportHTML}${parteTwo}`

        // Crear un objeto Blob con el contenido del archivo HTML
        let file = new Blob([htmlContent], { type: 'text/html' })

        // Crear una URL para el archivo Blob
        a.href = URL.createObjectURL(file)

        // Establecer el nombre del archivo descargado
        a.download = 'index.html'

        // Simular un clic en el enlace para descargar el archivo
        a.click()
      }
    })
  }, [])
  return (
    <>
      <div id="gjs"></div>
    </>
  )
}

export default App
