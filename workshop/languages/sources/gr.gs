// GERMANY

#define LANGUAGE_NAME "GERMANY"
#define SAVE_FILE "languages\sources\save.txt"

global ShouldUseLanguage = 0

SetScriptLanguage(getscriptpath()+"\sources\gr.png")
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
	
	RedirectText("Media:", "Medien:")
	RedirectText("LAUNCH", "START")
	RedirectText("EXIT", "AUSGANG")
	RedirectText("Current Resolution: ", "Aktuelle Auflosung:")
	RedirectText("Resolution:", "Auflosung")
	RedirectText("Fullscreen", "Voller Bildschirm")
	RedirectText("Borderless", "Randlus")
	RedirectText("windowed mode", "Windows Modus")
	RedirectText("16 Bit", "16 Bit")
	RedirectText("Use launcher", "Launcher Verwenden")
	RedirectText("LOADING", "LADEN")
	RedirectText("Load", "Laden")
	RedirectText("Delete", "Loschen")
	RedirectText("BACK", "HINTEN")
	
	RedirectText("MULTIPLAYER", "MEHRSPIELER")
	RedirectText("NEW GAME", "NEUES SPIEL")
	RedirectText("LOAD GAME", "SPLIEL LADET")
	RedirectText("OPTIONS", "OPTIONEN")
	RedirectText("QUIT", "VERLASSEN")
	RedirectText("Quit", "Verlassen")
	RedirectText("PRESS ANY KEY TO CONTINUE", "DRUCKE EINE BELIBIEGE TASTE")
end
def lang(FromPublic)
	StopAllRedirectText()
	if FromPublic == 0 then 
        FreeFonts(True)
        LoadFonts(False)
	end
	
	RedirectText("Media:", "Medien:")
	RedirectText("LAUNCH", "START")
	RedirectText("EXIT", "AUSGANG")
	RedirectText("Current Resolution: ", "Aktuelle Auflosung:")
	RedirectText("Resolution:", "Auflosung")
	RedirectText("Fullscreen", "Voller Bildschirm")
	RedirectText("Borderless", "Randlus")
	RedirectText("windowed mode", "Windows-Modus")
	RedirectText("16 Bit", "16 Bit")
	RedirectText("Use launcher", "Launcher Verwenden")
	RedirectText("LOADING", "LADEN")
	RedirectText("Load", "Laden")
	RedirectText("Delete", "Loschen")
	RedirectText("BACK", "HINTEN")
	
	RedirectText("MULTIPLAYER", "MEHRSPIELER")
	RedirectText("NEW GAME", "NEUES SPIEL")
	RedirectText("LOAD GAME", "SPLIEL LADET")
	RedirectText("OPTIONS", "OPTIONEN")
	RedirectText("QUIT", "VERLASSEN")
	RedirectText("Quit", "Verlassen")
	RedirectText("PRESS ANY KEY TO CONTINUE", "DRUCKE EINE BELIBIEGE TASTE")
	//
	RedirectText("Move Backward", "Ruckwertz Bewegen")
	//
	RedirectText("Back", "Zuruck")
	RedirectText("Page", "Seite")
	RedirectText("OFFICIAL", "OFFIZIEL")
	RedirectText("HISTORY", "GESCHICHTE")
	RedirectText("FAVORITES", "FAVORITEN")
	RedirectText("LOCAL", "LOKAL")
	RedirectText("Servers", "Servers")
	RedirectText("Players", "Spieler")
	RedirectText("Map seed:", "")
	RedirectText("Ping", "Ping")
	RedirectText("JOIN SERVER", "SERVER BEITRETEN")
	RedirectText("REFRESH SERVER", "SERVER AKTUALISIEREN")
	RedirectText("DIRECT CONNECT", "DIREKTE VERBINDUNG")
	RedirectText("SETTINGS", "EINSTELUNGEN")
	RedirectText("CREATE LOBBY", "LOBBY ERSTELLEN")
	RedirectText("DELETE SERVER", "SERVER LOSCHEN")
	RedirectText("ADD SERVER", "SERVER HINZUFUGEN")
	RedirectText("Name:", "Name:")
	RedirectText("Name change not available", "Name andern nicht moglich")
	RedirectText("Difficulty:", "Schwiriegkeit:")
	RedirectText("Safe", "Sicher")
	RedirectText("Euclid", "Euklid")
	RedirectText("Keter", "Keter")
	RedirectText("Custom", "Custom")
	RedirectText("RESTART VOICE", "NEUSTART STIMME")
	RedirectText("START GAME", "SPIEL STARTEN")
	RedirectText("SERVER IS RESTARTING", "SERVER NEUSTARTEN")
	RedirectText("START", "STARTEN")
	RedirectText("See players HUD", "Siehe Spieler HUD")
	RedirectText("See players HP Bar", "Spieler HP Bar ansehen")
	RedirectText("Download speed (bytes/ms)", "Download-Geschwindigkeit (Bytes/ms)")
	RedirectText("Voice chat", "Sprach chat")
	RedirectText("Players volume:", "Spielervolumen:")
	RedirectText("Reload server list", "Serverliste neu laden")
	RedirectText("VOICE", "STIMME")
	RedirectText("Current input", "Stromeingang")
	RedirectText("Connect", "Verbinden")
	RedirectText("Close", "Schliesen")
	RedirectText("Open", "Offnen")
	RedirectText("Version", "Version")
	RedirectText("Web URL", "Web URL")
	RedirectText("No Cheat", "Kein Schummeln")
	RedirectText("Max players", "Maximale Spieler")
	RedirectText("Jump mode", "Sprungmodus")
	RedirectText("Gravity", "Schwerkraft")
	RedirectText("Keep inventory", "Inventar behalten")
	RedirectText("CREATE", "ERSTELLEN")
	RedirectText("Refresh", "Auffrischen")
	RedirectText("Server:", "Server:")
	RedirectText("DISCONNECT", "TRENNEN")
	RedirectText("Not Ready", "Nicht Bereit")
	RedirectText("READY", "BEREIT")
	RedirectText("Ready", "Bereit")
	RedirectText("Nickname", "Nickname")
	RedirectText("CHECK MICROPHONE", "MIKROFON PRUFEN")
	RedirectText("Resume", "Fortsetzen")
	RedirectText("Achievements", "Errungenschaften")
	RedirectText("Options", "Optionen")
	RedirectText("Suicide", "Selbstmord")
	RedirectText("PAUSED", "PAUSIERT")
	
	RedirectText("Player volume:", "Player Volumen:")
	RedirectText("Friends can join", "Freunde konnen mitmachen")
	RedirectText("Private room", "Pivater raum")
	RedirectText("RECEIVING DATA", "EMPFANGEN VON DATEN")
	
	RedirectText("ACHIEVEMENTS", "ERRUNGENSCHAFTEN")
	RedirectText("OPTIONS", "OPTIONEN")
	RedirectText("QUIT?", "VERLASSEN?")
	RedirectText("YOU DIED", "DU BIST GESTORBEN")

	RedirectText("GRAPHICS","GRAPHIK")
	RedirectText("Enable bump mapping:", "Bump Mapping aktivieren:")
	RedirectText("VSync:", "VSync:")
	RedirectText("Anti-aliasing:", "Anti-aliasing:")
	RedirectText("Enable room lights:", "Raumbeleuchtung aktivieren:")
	RedirectText("Screen gamma", "Bildschirm Gamma")
	RedirectText("Particle amount:", "Partikelmenge:")
	RedirectText("Texture LOD Bias:","Textur LOD Bias:")
	RedirectText("Cameras quality:","Qualitat:")
	RedirectText("Disable gamma update:","Gamma Update deaktivieren:")
	RedirectText("Save textures in the VRAM","Speichern von Texturen im VRAM")
	RedirectText("Cameras update interval:", "Aktualisierungsintervall der Kameras:")

	RedirectText("AUDIO","AUDIO")
	RedirectText("Music volume:","Musiklautstarke:")
	RedirectText("Sound volume:","Lautstarke:")

	RedirectText("Sound auto-release:","Automatische Sound-Veroffentlichung:")
	RedirectText("Enable user tracks:","Benutzer-Tracks aktivieren:")
	RedirectText("User track mode","Benutzer-Track-Modus:")
	RedirectText("Scan for User Tracks","Nach Benutzerspuren suchen")
	RedirectText("CONTROLS","STEUERUNG")
	RedirectText("Mouse sensitivity:","Empfindlichkeit der Maus:")
	RedirectText("Invert mouse Y-axis:","Maus invertieren Y-Achse:")
	RedirectText("Mouse smoothing:","Mausglattung:")
	RedirectText("Control configuration", "Steuerungskonfiguration")
	RedirectText("Move Forward", "Vorwerz Bewegen")
	RedirectText("Strafe Left", "Strafe Links")
	RedirectText("Strafe Right", "Strafe Rechts")
	RedirectText("Quick Save", "Schnelles Speichern")
	RedirectText("Chat", "Chat")
	RedirectText("Jump", "Springen")
	RedirectText("Manual Blink", "Manuelles Blinken")
	RedirectText("Sprint", "Sprinten")
	RedirectText("Open/Close Inventory", "Inventar offnen/schliesen")
	RedirectText("Crouch", "Krichen")
	RedirectText("Open/Close Console", "Konsole offnen/schliesen")
	RedirectText("Voice", "Stimme")
	RedirectText("(Muted)", "(Stummgeschaltet)")
	RedirectText("Server list is clear", "Serverliste ist klar")
	RedirectText("Local servers are searched only on", "Lokale Server werden nur auf durchsucht")
	RedirectText("port 50021", "port 50021")
	
	RedirectText("ADVANCED", "FORTGESCHRITTEN")
	RedirectText("Show HUD", "HUD anzeigen")
	RedirectText("Enable console", "Konsole aktivieren")
	RedirectText("MULTIPLAYER", "MEHRSPIELER")
	RedirectText("Open console on error", "Konsole bei Fehler offnen")
	RedirectText("Achievement popups", "Erfolgs-Popups")
	RedirectText("Show FPS", "FPS anzeigen")
	RedirectText("Framelimit:", "Rahmenbegrenzung")
	RedirectText("Antialiased text:", "Antialiasierter Text:")
	RedirectText("'E' button interaction", "Interaktion mit der Schaltflache 'E'")
	RedirectText("COMMUNITY", "GEMEINSCHAFT")
	
	InitLoadingScreens(getscriptpath()+"\sources\grloadingscreens.ini")
	InitInfoClues(getscriptpath()+"\sources\grclues.ini")
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