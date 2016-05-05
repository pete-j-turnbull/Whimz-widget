import readWidgetConfig from './pageConfig';
import objectAssign from 'object-assign';
import staticConfig from './staticConfig.json';

const defaultStyle = {
    display: 'block',
    float: 'none',
    margin: 0,
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    position: 'fixed',
    right: 0,
    top: 0,
    width: '290px', // TODO: set to 0
    height: '350px' // TODO: set to 0
};

let id = 0;
export default class WidgetHandler {
    constructor (widget) {
        const pageOptions = readWidgetConfig(widget);
        this.options = this.constructConfig(staticConfig, pageOptions);
        let iframe = this.iframe = this.iframeFactory();
        const {offset, zindex} = this.options.display;
        this.updateIframeStyle(defaultStyle, {
            top: offset,
            zIndex: zindex
        });
        widget.appendChild(iframe);
        iframe.onload = this.onIframeLoaded.bind(this);
        this.id = id++;
    }

    constructConfig (remoteConfig, pageConfig) {
        let display = objectAssign({}, remoteConfig.display);
        for (let attr in pageConfig) {
            display[attr] = display[attr] == null
                ? pageConfig[attr]
                : display[attr];
        }
        return objectAssign({}, remoteConfig, { display });
    }

    onIframeLoaded () {
        this.postMessage({
            id: this.id,
            iframeStyle: this._iframeStyle,
            ...this.options
        });
    }

    postMessage (obj) {
        this.iframe.contentWindow.postMessage({
            key: ENV.appMessageKey,
            config: obj
        }, '*');
    }

    handleMessage (message) {
        const {iframeStyle} = message;
        if (iframeStyle) {
            this.updateIframeStyle(iframeStyle);
        }
    }

    updateIframeStyle (...styles) {
        this._iframeStyle = objectAssign({}, ...styles);
        objectAssign(this.iframe.style, this._iframeStyle);
    }

    iframeFactory (options = {}) {
        let iframe = document.createElement('iframe');
        let widgetHost = LOCAL ? 'http://localhost:3000' : ENV.widgetHost;
        iframe.src = widgetHost + '/index.html';
        iframe.setAttribute('scrolling', 'no');
        return iframe;
    }
}