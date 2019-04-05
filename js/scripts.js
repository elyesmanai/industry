YAHOO.util.Event.onDOMReady(function() {

    // initialize Konami Code
    if (typeof(Konami) != "undefined")
    {
        var konami = new Konami();
        konami.pattern = "38384040373937396665";
        konami.code = function() {
            alert("You now have 30 lives.");
        };
        konami.load();
    }

});
