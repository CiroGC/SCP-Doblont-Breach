// Italian

#define LANGUAGE_NAME "ITALIAN"
#define SAVE_FILE "languages\sources\save.txt"

global ShouldUseLanguage = 0

SetScriptLanguage(getscriptpath()+"\sources\it.png")
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
	RedirectText("LAUNCH", "AVVIA")
	RedirectText("EXIT", "ESCI")
	RedirectText("Current Resolution: ", "Risoluzione Attuale: ")
	RedirectText("Resolution:", "Risoluzione:")
	RedirectText("Fullscreen", "Schermo intero")
	RedirectText("Borderless", "Senza confini")
	RedirectText("windowed mode", "modalità finestra")
	RedirectText("16 Bit", "16 Bit")
	RedirectText("Use launcher", "Usa launcher")
	RedirectText("LOADING", "CARICAMENTO")
	RedirectText("Load", "Carica")
	RedirectText("Delete", "Elimina")
	RedirectText("BACK", "INDIETRO")
	
	RedirectText("MULTIPLAYER", "MULTIPLAYER")
	RedirectText("NEW GAME", "NUOVA PARTITA")
	RedirectText("LOAD GAME", "CARICA PARTITA")
	RedirectText("OPTIONS", "OPZIONI")
	RedirectText("QUIT", "ESCI")
	RedirectText("Quit", "Esci")
	RedirectText("PRESS ANY KEY TO CONTINUE", "PREMI QUALSIASI TASTO PER CONTINUARE")
end
def lang(FromPublic)
	StopAllRedirectText()
	if FromPublic == 0 then 
        FreeFonts(True)
        LoadFonts(False)
	end

	RedirectText("Media:", "Media:")
	RedirectText("LAUNCH", "AVVIA")
	RedirectText("EXIT", "ESCI")
	RedirectText("Current Resolution: ", "Risoluzione attuale: ")
	RedirectText("Resolution:", "Risoluzione:")
	RedirectText("Fullscreen", "Schermo intero")
	RedirectText("Borderless", "Senza confini")
	RedirectText("windowed mode", "modalità finestra")
	RedirectText("16 Bit", "16 Bit")
	RedirectText("Use launcher", "Usa launcher")
	RedirectText("LOADING", "CARICAMENTO")
	RedirectText("Load", "Carica")
	RedirectText("Delete", "Elimina")
	RedirectText("BACK", "INDIETRO")
	
	RedirectText("MULTIPLAYER", "MULTIPLAYER")
	RedirectText("NEW GAME", "NUOVA PARTITA")
	RedirectText("LOAD GAME", "CARICA PARTITA")
	RedirectText("OPTIONS", "OPZIONI")
	RedirectText("QUIT", "ESCI")
	RedirectText("Quit", "Esci")
	RedirectText("PRESS ANY KEY TO CONTINUE", "PREMI QUALSIASI TASTO PER CONTINUARE")
	//
	RedirectText("Move Backward", "Muoversi all'indietro")
	//
	RedirectText("Back", "Indietro")
	RedirectText("Page", "Pagina")
	RedirectText("OFFICIAL", "UFFICIALE.")
	RedirectText("HISTORY", "CRONOLOGIA")
	RedirectText("FAVORITES", "PREFERITI")
	RedirectText("LOCAL", "LOCALE")
	RedirectText("Servers", "Server")
	RedirectText("Players", "Giocatori")
	RedirectText("Map seed:", "Seed della mappa")
	RedirectText("Ping", "Ping")
	RedirectText("JOIN SERVER", "UNISCITI AL SERVER")
	RedirectText("REFRESH SERVER", "RICARICA SERVER")
	RedirectText("DIRECT CONNECT", "COLLEGAMENTO DIRETTO.")
	RedirectText("SETTINGS", "IMPOSTAZIONI")
	RedirectText("CREATE LOBBY", "CREA LOBBY")
	RedirectText("DELETE SERVER", "ELIMINA SERVER")
	RedirectText("ADD SERVER", "AGGIUNGI SERVER")
	RedirectText("Name:", "Nome:")
	RedirectText("Name change not available", "Nome non disponibile")
	RedirectText("Enable intro sequence:", "Abilita intro:")
	RedirectText("Difficulty:", "Difficoltà:")
	RedirectText("Safe", "Safe")
	RedirectText("Euclid", "Euclid")
	RedirectText("Keter", "Keter")
	RedirectText("Custom", "Personalizzata")
	RedirectText("RESTART VOICE", "RIPRISTINO DELLA VOCE")
	RedirectText("START GAME", "INIZIA LA PARTITA")
	RedirectText("SERVER IS RESTARTING", "IL SERVER SI STA RICARICANDO")
	RedirectText("START", "START")
	RedirectText("See players HUD", "Controlla l'HUD dei giocatori")
	RedirectText("See players HP Bar", "Controlla la barra HP dei giocatori")
	RedirectText("Download speed (bytes/ms)", "Velocità di download (bytes/ms)")
	RedirectText("Voice chat", "Chat vocale")
	RedirectText("Players volume:", "Volume dei giocatori:")
	RedirectText("Reload server list", "Ricarica la lista dei server")
	RedirectText("VOICE", "VOCE")
	RedirectText("Current input", "Current input")
	RedirectText("Connect", "Connetti")
	RedirectText("Close", "Chiudi")
	RedirectText("Version", "Versione")
	RedirectText("Web URL", "Link URL")
	RedirectText("No Cheat", "Niente cheat")
	RedirectText("Max players", "Massimo dei giocatori")
	RedirectText("Jump mode", "Modalità salto")
	RedirectText("Gravity", "Gravità")
	RedirectText("Keep inventory", "Mantieni inventario")
	RedirectText("CREATE", "CREA")
	RedirectText("Refresh", "Ricarica.")
	RedirectText("Server:", "Server:")
	RedirectText("Not Ready", "Non Pronto")
	RedirectText("READY", "PRONTO")
	RedirectText("Ready", "Pronto")
	RedirectText("Nickname", "Soprannome")
	RedirectText("CHECK MICROPHONE", "CONTROLLA MICROFONO")
	RedirectText("Resume", "Riprendi")
	RedirectText("Achievements", "Risultati")
	RedirectText("Options", "Opzioni")
	RedirectText("Suicide", "Suicidati")
	RedirectText("PAUSED", "PAUSA")
	RedirectText("Player volume:", "Volume del giocatore:")
	RedirectText("Friends can join", "Gli amici si possono unire")
	RedirectText("Private room", "Stanza privata")
	RedirectText("RECEIVING DATA", "RICEVENDO I DATI")
	
	RedirectText("ACHIEVEMENTS", "RISULTATI")
	RedirectText("OPTIONS", "OPZIONI")
	RedirectText("QUIT?", "USCIRE?")
	RedirectText("YOU DIED", "SEI MORTO")

	RedirectText("GRAPHICS","GRAFICA")
	RedirectText("Enable bump mapping:", "Attiva la mappatura dei bump:")
	RedirectText("VSync:", "VSync")
	RedirectText("Anti-aliasing:", "Anti-aliasing:")
	RedirectText("Enable room lights:", "Attiva le luci della stanza:")
	RedirectText("Screen gamma", "Gamma dello schermo")
	RedirectText("Particle amount:", "Quantità delle particelle:")
	RedirectText("Texture LOD Bias:","LDD texture:")
	RedirectText("Cameras quality:","Qualità delle camere")
	RedirectText("Disable gamma update:","Disattiva l'aggiornamento della gamma:")
	RedirectText("Save textures in the VRAM","Salva le texture nella VRAM:")
	RedirectText("Cameras update interval:", "Intervallo di aggiornamento delle telecamere:")

	RedirectText("AUDIO","AUDIO")
	RedirectText("Music volume:","Volume della musica:")
	RedirectText("Sound volume:","Volume dei suoni:")

	RedirectText("Sound auto-release:","Dzwiêk auto-wyzwolenia:")
	RedirectText("Enable user tracks:","W³¹cz utwory urzytkownika:")
	RedirectText("User track mode","Tryb utworu urzytkownika")
	RedirectText("Scan for User Tracks","Skanuj utwory urzytkowników")
	RedirectText("CONTROLS","COMANDI")
	RedirectText("Mouse sensitivity:","Sensibilità del mouse:")
	RedirectText("Invert mouse Y-axis:","Inverti mouse Y-axis")
	RedirectText("Mouse smoothing:","Fluidità del mouse")
	RedirectText("Control configuration", "Configurazione dei comandi")
	RedirectText("Move Forward", "Muoversi avanti")
	RedirectText("Strafe Left", "Muoversi a sinistra")
	RedirectText("Strafe Right", "Muoversi a destra")
	RedirectText("Quick Save", "Salvataggio Rapido")
	RedirectText("Chat", "Chat")
	RedirectText("Jump", "Salta")
	RedirectText("Manual Blink", "Sbattimento Manuale")
	RedirectText("Sprint", "Corri")
	RedirectText("Open/Close Inventory", "Apri/Chiudi Inventario")
	RedirectText("Crouch", "Accovacciati ")
	RedirectText("Open/Close Console", "Apri/Chiudi Console")
	RedirectText("Voice", "Voce")
	RedirectText("(Muted)", "(Mutato)")
	RedirectText("Server list is clear", "La lista dei server è libera")
	RedirectText("Local servers are searched only on", "I server locali vengono cercati solo su")
	RedirectText("port 50021", "port 50021")
	
	RedirectText("ADVANCED", "AVANZATO")
	RedirectText("Show HUD", "Mostra HUD")
	RedirectText("Enable console", "Abilita console")
	RedirectText("MULTIPLAYER", "MULTIPLAYER")
	RedirectText("Open console on error", "Apri console in caso di errore")
	RedirectText("Achievement popups", "Popup dei risultati")
	RedirectText("Show FPS", "Mostra FPS")
	RedirectText("Framelimit:", "Limite dei frame:")
	RedirectText("Antialiased text:", "Testo antialias:")
	RedirectText("'E' button interaction", "Pulsante d'interazione 'E'")
	RedirectText("MODDED", "MODDATO")
	
	InitLoadingScreens(getscriptpath()+"\sources\itloadingscreens.ini")
	InitInfoClues(getscriptpath()+"\sources\itclues.ini")
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