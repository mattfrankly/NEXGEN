/* global js file, only for  fixes. */
// SPECIFIC TO BOOTSTRAP
          // For Internet Explorer 10 in Windows 8 and Windows Phone 8
          if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
              var msViewportStyle = document.createElement('style')
              msViewportStyle.appendChild(
                  document.createTextNode(
                      '@-ms-viewport{width:auto!important;}'
                  )
              )
              document.querySelector('head').appendChild(msViewportStyle)
          }
/* set up IE console.log */
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };
