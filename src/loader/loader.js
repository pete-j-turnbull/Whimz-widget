import WidgetHandler from './WidgetHandler';

export function loader () {
    let widgetContainers = document.getElementsByClassName('whims-widget');
    let widgetMap = {};
    widgetContainers = Array.prototype.slice.call(widgetContainers);

    widgetContainers.forEach(widget => {
        let widgetHandler = new WidgetHandler(widget);
        widgetMap[widgetHandler.id] = widgetHandler;
    });

    window.addEventListener('message', function (e) {
        let widgetHost = LOCAL ? 'http://localhost:3000' : ENV.widgetHost;
        if (e.origin === widgetHost && e.data && e.data.key === ENV.appMessageKey) {
            const {id, ...config} = e.data.config;
            if (widgetMap[id]) {
                widgetMap[id].handleMessage(config);
            }
        }
    });
}

export default loader();
