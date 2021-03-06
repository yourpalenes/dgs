function dgsCreateButton(x,y,sx,sy,text,relative,parent,textColor,scalex,scaley,norimg,selimg,cliimg,norcolor,hovcolor,clicolor)
	assert(tonumber(x),"Bad argument @dgsCreateButton at argument 1, expect number got "..type(x))
	assert(tonumber(y),"Bad argument @dgsCreateButton at argument 2, expect number got "..type(y))
	assert(tonumber(sx),"Bad argument @dgsCreateButton at argument 3, expect number got "..type(sx))
	assert(tonumber(sy),"Bad argument @dgsCreateButton at argument 4, expect number got "..type(sy))
	if viewerPush and viewer then
		if not lastButtonID then
			lastButtonID = 0
		end
		lastButtonID = lastButtonID + 1
		executeBrowserJavascript(viewer, "Button.create("..lastButtonID..", "..x..", "..y..", "..sx..", "..sy..", '"..(text or "").."', '"..parent.."');")
		return "button-"..lastButtonID
	end
	if isElement(parent) then
		assert(dgsIsDxElement(parent),"Bad argument @dgsCreateButton at argument 7, expect dgs-dxgui got "..dgsGetType(parent))
	end
	local button = createElement("dgs-dxbutton")
	local _x = dgsIsDxElement(parent) and dgsSetParent(button,parent,true,true) or table.insert(CenterFatherTable,button)
	dgsSetType(button,"dgs-dxbutton")
	dgsSetData(button,"renderBuffer",{})
	local norcolor = norcolor or styleSettings.button.color[1]
	local hovcolor = hovcolor or styleSettings.button.color[2]
	local clicolor = clicolor or styleSettings.button.color[3]
	dgsSetData(button,"color",{norcolor,hovcolor,clicolor})
	local norimg = norimg or dgsCreateTextureFromStyle(styleSettings.button.image[1])
	local hovimg = selimg or dgsCreateTextureFromStyle(styleSettings.button.image[2])
	local cliimg = cliimg or dgsCreateTextureFromStyle(styleSettings.button.image[3])
	dgsSetData(button,"image",{norimg,hovimg,cliimg})
	dgsAttachToTranslation(button,resourceTranslation[sourceResource or getThisResource()])
	if type(text) == "table" then
		dgsElementData[button]._translationText = text
		text = dgsTranslate(button,text,sourceResource)
	end
	dgsSetData(button,"text",tostring(text))
	dgsSetData(button,"textColor",tonumber(textColor) or styleSettings.button.textColor)
	local textSizeX,textSizeY = tonumber(scalex) or styleSettings.button.textSize[1], tonumber(scaley) or styleSettings.button.textSize[2]
	dgsSetData(button,"textSize",{textSizeX,textSizeY})
	dgsSetData(button,"shadow",{_,_,_})
	dgsSetData(button,"font",styleSettings.button.font or systemFont)
	dgsSetData(button,"clickoffset",{0,0})
	dgsSetData(button,"textOffset",{0,0,false})
	dgsSetData(button,"clip",false)
	dgsSetData(button,"clickType",1)	--1:LMB;2:Wheel;3:RMB
	dgsSetData(button,"wordbreak",false)
	dgsSetData(button,"colorcoded",false)
	dgsSetData(button,"alignment",{"center","center"})
	calculateGuiPositionSize(button,x,y,relative or false,sx,sy,relative or false,true)
	triggerEvent("onDgsCreate",button,sourceResource)
	return button
end
