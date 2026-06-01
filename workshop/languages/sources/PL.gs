// Polish

#define LANGUAGE_NAME "POLISH"
#define SAVE_FILE "languages\sources\save.txt"

global ShouldUseLanguage = 0

SetScriptLanguage(getscriptpath()+"\sources\pol.png")
InitLanguage()

def InitLanguage()
	ShouldUseLanguage = 0
	local f = 0

	if WorkshopFileType(SAVE_FILE) != 1 then
		if LANGUAGE_NAME == "ENGLISH" then
			f = WriteWorkshopFile(SAVE_FILE)
			WriteLine(f, LANGUAGE_NAME)
			CloseFile(f)
			ShouldUseLanguage = 1
			launchlang()
		end
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
	
	RedirectText("Media:", "Media:")
	RedirectText("LAUNCH", "URUCHOM")
	RedirectText("EXIT", "WYJDè")
	RedirectText("Current Resolution: ", "RozdzielczoúÊ ekranu: ")
	RedirectText("Resolution:", "Rozdzia≥ka:")
	RedirectText("Fullscreen", "Pe≥ny ekran")
	RedirectText("Borderless", "Okno bez ramki")
	RedirectText("windowed mode", "Okno")
	RedirectText("16 Bit", "16 Bit")
	RedirectText("Use launcher", "Uruchamiaj Launcher'em")
	RedirectText("LOADING", "£ADOWANIE")
	RedirectText("Load", "Za≥πduj")
	RedirectText("Delete", "UsuÒ")
	RedirectText("BACK", "WrÛÊ")
	
	RedirectText("MULTIPLAYER", "MULTIPLAYER")
	RedirectText("NEW GAME", "NOWA GRA")
	RedirectText("LOAD GAME", "ZA£ADUJ GR ")
	RedirectText("OPTIONS", "OPCJE")
	RedirectText("QUIT", "WYJDè")
	RedirectText("Quit", "Wyjdü")
	RedirectText("PRESS ANY KEY TO CONTINUE", "NACIåNIJ DOWOLNY PRZYCISK BY KONTYNUOWA∆")
end
def lang(FromPublic)
	StopAllRedirectText()
	if FromPublic == 0 then 
        FreeFonts(True)
        LoadFonts(False)
	end
	
	RedirectText("Media:", "Media:")
	RedirectText("LAUNCH", "URUCHOM")
	RedirectText("EXIT", "WYJDè")
	RedirectText("Current Resolution: ", "RozdzielczoúÊ ekranu: ")
	RedirectText("Resolution:", "Rozdzia≥ka:")
	RedirectText("Fullscreen", "Pe≥ny ekran")
	RedirectText("Borderless", "Okno bez ramki")
	RedirectText("windowed mode", "Okno")
	RedirectText("16 Bit", "16 Bit")
	RedirectText("Use launcher", "Uruchamiaj Launcher'em")
	RedirectText("LOADING", "£ADOWANIE")
	RedirectText("Load", "Za≥πduj")
	RedirectText("Delete", "UsuÒ")
	RedirectText("BACK", "WrÛÊ")
	
	RedirectText("MULTIPLAYER", "MULTIPLAYER")
	RedirectText("NEW GAME", "NOWA GRA")
	RedirectText("LOAD GAME", "ZA£ADUJ GR ")
	RedirectText("OPTIONS", "OPCJE")
	RedirectText("QUIT", "WYJDè")
	RedirectText("Quit", "Wyjdü")
	RedirectText("PRESS ANY KEY TO CONTINUE", "NACIåNIJ DOWOLNY PRZYCISK BY KONTYNUOWA∆")
	//
	RedirectText("Move Backward", "Ruch do ty≥u")
	//
	RedirectText("Back", "WrÛÊ")
	RedirectText("Page", "Strona")
	RedirectText("OFFICIAL", "OFICJALNE.")
	RedirectText("HISTORY", "HISTORIA")
	RedirectText("FAVORITES", "ULUBIONE")
	RedirectText("LOCAL", "LOKALNE")
	RedirectText("Servers", "Serwery")
	RedirectText("Players", "Gracze")
	RedirectText("Map seed:", "Seed mapy (èiarno).")
	RedirectText("Ping", "Ping")
	RedirectText("JOIN SERVER", "DO£•CZ NA SERWER")
	RedirectText("REFRESH SERVER", "ODSZWIEØ SERWER")
	RedirectText("DIRECT CONNECT", "PO£•CZ BEZPOåREDNIO.")
	RedirectText("SETTINGS", "USTAWIENIA")
	RedirectText("CREATE LOBBY", "STW”RZ LOBBY")
	RedirectText("DELETE SERVER", "USU— SERWER")
	RedirectText("ADD SERVER", "DODAJ SERWER")
	RedirectText("Name:", "Nazwa:")
	RedirectText("Name change not available", "Nie moøna zmieniÊ nazwy")
	RedirectText("Enable intro sequence:", "Odegraj Intro:")
	RedirectText("Difficulty:", "Poziom trudnoúci:")
	RedirectText("Safe", "Safe")
	RedirectText("Euclid", "Euclid")
	RedirectText("Keter", "Keter")
	RedirectText("Custom", "W≥asny")
	RedirectText("RESTART VOICE", "G£OS RESTARU")
	RedirectText("START GAME", "ZACZNIJ GR ")
	RedirectText("SERVER IS RESTARTING", "SERWER SI  RESETUJE")
	RedirectText("START", "START")
	RedirectText("See players HUD", "WidocznoúÊ HUD gracza")
	RedirectText("See players HP Bar", "WidocznoúÊ zdrowia gracza")
	RedirectText("Download speed (bytes/ms)", "PrendkoúÊ pobierania (bity/ms)")
	RedirectText("Voice chat", "Czat G≥osowy")
	RedirectText("Players volume:", "G≥oúnoúÊ graczy:")
	RedirectText("Reload server list", "Odszwieø listÍ serwerÛw")
	RedirectText("VOICE", "G£OS")
	RedirectText("Current input", "Current input")
	RedirectText("Connect", "Po≥πcz")
	RedirectText("Close", "Zamknij")
	RedirectText("Version", "Wersjaˇ")
	RedirectText("Web URL", "Link URL")
	RedirectText("No Cheat", "Bez oszukiwania")
	RedirectText("Max players", "Maksimum graczy")
	RedirectText("Jump mode", "Tryb Skoku")
	RedirectText("Gravity", "Grawitacja")
	RedirectText("Keep inventory", "Zachowaj ekwipunek")
	RedirectText("CREATE", "StwÛrz")
	RedirectText("Refresh", "Odúwieø.")
	RedirectText("Server:", "Serwer:")
	RedirectText("Not Ready", "Nie gotowy")
	RedirectText("READY", "GOTOWY")
	RedirectText("Ready", "Gotowy")
	RedirectText("Nickname", "Pseudonim")
	RedirectText("CHECK MICROPHONE", "PrÛba mikrofonu")
	RedirectText("Resume", "WznÛwˇ")
	RedirectText("Achievements", "OúiπgniÍcia")
	RedirectText("Options", "Ustawienia")
	RedirectText("Suicide", "SamobÛjstwo")
	RedirectText("PAUSED", "Wstrzymane")
	RedirectText("Player volume:", "G≥oúnoúÊ gracza:")
	RedirectText("Friends can join", "Tylko Przyjaciele mogπ do≥πczyÊ")
	RedirectText("Private room", "Prywatny pokÛj")
	RedirectText("RECEIVING DATA", "ODBIERANIE DANYCH")
	
	RedirectText("ACHIEVEMENTS", "OSI•GNI CIA")
	RedirectText("OPTIONS", "OPCJE")
	RedirectText("QUIT?", "WYJåCIE?")
	RedirectText("YOU DIED", "NIE ØYJESZ")

	RedirectText("GRAPHICS","GRAFIKA")
	RedirectText("Enable bump mapping:", "W≥πcz mapowanie wypuk≥oúci:")
	RedirectText("VSync:", "VSync")
	RedirectText("Anti-aliasing:", "Anti-aliasing:")
	RedirectText("Enable room lights:", "W≥πcz úwiat≥a w pokoju:")
	RedirectText("Screen gamma", "Gamma ekranu")
	RedirectText("Particle amount:", "IloúÊ efektÛw czπsteczkowych:")
	RedirectText("Texture LOD Bias:","LOD tekstur:")
	RedirectText("Cameras quality:","JakoúÊ kamery")
	RedirectText("Disable gamma update:","Wy≥πcz updato'wanie gammy:")
	RedirectText("Save textures in the VRAM","Zapisz tekstury w VRAM:")
	RedirectText("Cameras update interval:", "Przerwa w updato'wanie kamery:")

	RedirectText("AUDIO","AUDIO")
	RedirectText("Music volume:","G≥oúnoúÊ muzyki:")
	RedirectText("Sound volume:","G≥oúnoúÊ dzwiÍku:")

	RedirectText("Sound auto-release:","DzwiÍk auto-wyzwolenia:")
	RedirectText("Enable user tracks:","W≥πcz utwory urzytkownika:")
	RedirectText("User track mode","Tryb utworu urzytkownika")
	RedirectText("Scan for User Tracks","Skanuj utwory urzytkownikÛw")
	RedirectText("CONTROLS","KONTROLKI")
	RedirectText("Mouse sensitivity:","Czu≥oúÊ myszy:")
	RedirectText("Invert mouse Y-axis:","Odwrotne obroty myszy w osi Y")
	RedirectText("Mouse smoothing:","P≥ynna myszka")
	RedirectText("Control configuration", "Konfiguracja kontroli")
	RedirectText("Move Forward", "Ruch do przodu")
	RedirectText("Strafe Left", "Ruch w lewo")
	RedirectText("Strafe Right", "Ruch w prawo")
	RedirectText("Quick Save", "Szybki zapis")
	RedirectText("Chat", "Chat")
	RedirectText("Jump", "Skok")
	RedirectText("Manual Blink", "Mrugnij")
	RedirectText("Sprint", "Bieg")
	RedirectText("Open/Close Inventory", "OtwÛrz/Zamknij Ekwipunek")
	RedirectText("Crouch", "Skradaj siÍ")
	RedirectText("Open/Close Console", "OtwÛrz/Zamknij KonsolÍ")
	RedirectText("Voice", "G≥os")
	RedirectText("(Muted)", "(Wyciszony)")
	RedirectText("Server list is clear", "Lista serwerÛw jest pusta")
	RedirectText("Local servers are searched only on", "Lokalne serwery sπ tylko wyszukiwalne")
	RedirectText("port 50021", "port 50021")
	
	RedirectText("ADVANCED", "ZAAWANSOWANE")
	RedirectText("Show HUD", "POKAØ HUD")
	RedirectText("Enable console", "W£•CZ KONSOL ")
	RedirectText("MULTIPLAYER", "MULTIPLAYER")
	RedirectText("Open console on error", "OtwÛrz konsolÍ przy b≥Ídzie")
	RedirectText("Achievement popups", "Powiadomienia o achievementach")
	RedirectText("Show FPS", "Pokaø FPS")
	RedirectText("Framelimit:", "Limit Klatek")
	RedirectText("Antialiased text:", "Wygladzony tekst:")
	RedirectText("'E' button interaction", "Nacisnij 'E'")
	RedirectText("MODDED", "SPOLECZNOSC")
	
	InitLoadingScreens(getscriptpath()+"\sources\plloadingscreens.ini")
	InitInfoClues(getscriptpath()+"\sources\plclues.ini")
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