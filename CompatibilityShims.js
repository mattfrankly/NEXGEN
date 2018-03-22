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
/* A fix for the iOS orientationchange zoom bug.
Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License. https://github.com/scottjehl/iOS-Orientationchange-Fix */
(function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this);
