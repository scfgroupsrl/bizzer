jQuery("#wrapper").load(AppFramework.URL_MODULES + "bizzer/template/wrapper.html");

jQuery('<link>')
        .appendTo('head')
        .attr({type: 'text/css', rel: 'stylesheet'})
        .attr('href', AppFramework.URL_MODULES + "bizzer/template/css/style.css");


appFramework.setMsgListener(function(e,data) {
    eval(data);
});

// run external app
appFramework.loadExternal({
    onReady: function () {
        var iframe = jQuery("#iframe-wrapper");

        // just 2 tricks to make fading working on android:
        // 1) use css instead of jquery fade
        // 2) set a small timeout after iframe ready before "launche" the animation ( workaround )
        window.setTimeout(function () {
            iframe.addClass("fade-in");
            jQuery("#wrapper-table").remove();
        }, 500);

    }
});