function dgsSetViewerTarget(bool, callback)
    if not viewer then
        viewer = dgsCreateBrowser(0, 0, sW, sH, false, false, true, true, sW, sH)
        addEventHandler("onClientBrowserCreated", viewer,
            function()
                loadBrowserURL(viewer, "http://mta/local/html/main.html")
                
                addEventHandler("dgsViewerDomLoad", root,
                    function()
                        callback()
                    end
                )
            end
        )
    end
    viewerPush = bool
end
addEvent("dgsViewerDomLoad", true)