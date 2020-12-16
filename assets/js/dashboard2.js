var divElement = document.getElementById('viz1608065351373');
var vizElement = divElement.getElementsByTagName('object')[0];
if ( divElement.offsetWidth > 800 ) {
    vizElement.style.width='100%';
    vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
} 
else if ( divElement.offsetWidth > 500 ) {
     vizElement.style.width='1000px';
     vizElement.style.height='827px';
}
else {
    vizElement.style.width='100%';vizElement.style.height='827px';
}                     
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);