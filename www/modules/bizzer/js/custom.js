jQuery("#wrapper").load(AppFramework.URL_MODULES + "bizzer/template/wrapper.html");

jQuery('<link>')
        .appendTo('head')
        .attr({type: 'text/css', rel: 'stylesheet'})
        .attr('href', AppFramework.URL_MODULES + "bizzer/template/css/style.css");

// run external app
appFramework.loadExternal();