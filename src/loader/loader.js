import objectAssign from 'object-assign';

const defaultStyle = {
    display: 'block',
    float: 'none',
    margin: 0,
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    right: 0,
    top: 0,
    width: '100%',
    height: '100%'
};

export function loader() {
    var widgetContainer = document.getElementsByClassName('whims-widget')[0];
    var iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:3000';
    objectAssign(iframe.style, defaultStyle);
    widgetContainer.appendChild(iframe);
}

export default loader();
