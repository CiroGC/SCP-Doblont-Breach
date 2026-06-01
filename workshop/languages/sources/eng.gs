#define LANGUAGE_NAME "ENGLISH"
#define SAVE_FILE "languages\sources\save.txt"
global ShouldUseLanguage = 0

SetScriptLanguage(getscriptpath()+"\sources\eng.png")
InitLanguage()

def InitLanguage()
	ShouldUseLanguage = 0
	local f = 0

	if WorkshopFileType(SAVE_FILE) != 1 then
		debuglog("Savefile: "+"workshop\"+SAVE_FILE)
		f = WriteWorkshopFile(SAVE_FILE)
		WriteLine(f, LANGUAGE_NAME)
		CloseFile(f)
		ShouldUseLanguage = 1
		launchlang()
		return
	end
	
	f = ReadWorkshopFile(SAVE_FILE)
	local strlang = ""
	strlang = ReadLine(f)
	if strlang == LANGUAGE_NAME then 
		ShouldUseLanguage = 1
		launchlang()
	end
	CloseFile(f)
end

def launchlang()
	StopAllRedirectText()
	FreeFonts(True)
	LoadFonts(True)
end

def lang(FromPublic)
	StopAllRedirectText()
	if FromPublic == 0 then 
        FreeFonts(True)
        LoadFonts(False)
	end
    
	InitLoadingScreens("Loadingscreens\loadingscreens.ini")
	InitInfoClues("Data\clues.ini")
end

def OnClickWorkshopLanguage()
	f = WriteWorkshopFile(SAVE_FILE)
	WriteLine(f, LANGUAGE_NAME)
	CloseFile(f)
	lang(False)
end

public def OnLoadingFonts()

end

public def OnLaunchGame()
	if ShouldUseLanguage then lang(True)
end