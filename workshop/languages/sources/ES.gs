// SPANISH

#define LANGUAGE_NAME "ESPANOL"
#define SAVE_FILE "languages\sources\save.txt"

global ShouldUseLanguage = 0

SetScriptLanguage(getscriptpath()+"\sources\es.png")
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
	
	RedirectText("Media:", "Redes:")
	RedirectText("LAUNCH", "LAUNCH")
	RedirectText("EXIT", "SALIRè")
	RedirectText("Current Resolution: ", "Resolucion actual: ")
	RedirectText("Resolution:", "Resolucion")
	RedirectText("Fullscreen", "Fullscreen")
	RedirectText("Borderless", "Ventana")
	RedirectText("windowed mode", "sin bordes")
	RedirectText("16 Bit", "16 Bit")
	RedirectText("Use launcher", "Usar launcher")
	RedirectText("LOADING", "CARGANDO")
	RedirectText("Load", "Cargar")
	RedirectText("Delete", "Borrar")
	RedirectText("BACK", "VOLVER")
	
	RedirectText("MULTIPLAYER", "MULTIJUGADOR")
	RedirectText("NEW GAME", "NUEVO JUEGO")
	RedirectText("LOAD GAME", "CARGAR JUEGO")
	RedirectText("OPTIONS", "OPCIONES")
	RedirectText("QUIT", "SALIR")
	RedirectText("Quit", "Salir")
	RedirectText("PRESS ANY KEY TO CONTINUE", "PRESIONA CUALQUIER TECLA PARA CONTINUAR")
end
def lang(FromPublic)
	StopAllRedirectText()
	if FromPublic == 0 then 
        FreeFonts(True)
        LoadFonts(False)
	end
	
	RedirectText("Media:", "Redes:")
	RedirectText("LAUNCH", "LAUNCH")
	RedirectText("EXIT", "SALIRè")
	RedirectText("Current Resolution: ", "Resolucion actual: ")
	RedirectText("Resolution:", "Resolucion")
	RedirectText("Fullscreen", "Fullscreen")
	RedirectText("Borderless", "Ventana")
	RedirectText("windowed mode", "sin bordes")
	RedirectText("16 Bit", "16 Bit")
	RedirectText("Use launcher", "Usar launcher")
	RedirectText("LOADING", "CARGANDO")
	RedirectText("Load", "Cargar")
	RedirectText("Delete", "Borrar")
	RedirectText("BACK", "VOLVER")
	
	RedirectText("MULTIPLAYER", "MULTIJUGADOR")
	RedirectText("NEW GAME", "NUEVO JUEGO")
	RedirectText("LOAD GAME", "CARGAR JUEGO")
	RedirectText("OPTIONS", "OPCIONES")
	RedirectText("QUIT", "SALIR")
	RedirectText("Quit", "Salir")
	RedirectText("PRESS ANY KEY TO CONTINUE", "PRESIONA CUALQUIER TECLA PARA CONTINUAR")
	//
	RedirectText("Move Backward", "Retroceder")
	//
	RedirectText("Back", "Volver")
	RedirectText("Page", "Pagina")
	RedirectText("OFFICIAL", "OFICIAL")
	RedirectText("HISTORY", "JUGADOS")
	RedirectText("FAVORITES", "FAVORITOS")
	RedirectText("LOCAL", "LOCAL")
	RedirectText("Servers", "Servidores")
	RedirectText("Players", "Usuarios")
	RedirectText("Map seed:", "Semilla")
	RedirectText("Ping", "Ping")
	RedirectText("JOIN SERVER", "UNIRSE")
	RedirectText("REFRESH SERVER", "RECARGAR")
	RedirectText("DIRECT CONNECT", "CONECTARSE")
	RedirectText("SETTINGS", "AJUSTES")
	RedirectText("CREATE LOBBY", "CREAR LOBBY")
	RedirectText("DELETE SERVER", "BORRAR SERVER")
	RedirectText("ADD SERVER", "AGREGAR SERVER")
	RedirectText("Name:", "Nombre:")
	RedirectText("Name change not available", "Cambio de nombre no disponible")
	RedirectText("Enable intro sequence:", "Habilitar intro:")
	RedirectText("Difficulty:", "Dificultad:")
	RedirectText("Safe", "Safe")
	RedirectText("Euclid", "Euclid")
	RedirectText("Keter", "Keter")
	RedirectText("Custom", "Custom")
	RedirectText("RESTART VOICE", "REINICIAR VOZ")
	RedirectText("START GAME", "INICIAR")
	RedirectText("SERVER IS RESTARTING", "SERVIDOR REINICIANDO")
	RedirectText("START", "INICIAR")
	RedirectText("See players HUD", "Ver jugadores en el HUD")
	RedirectText("See players HP Bar", "Ver la barra de HP")
	RedirectText("Download speed (bytes/ms)", "Descarga (bytes/ms)")
	RedirectText("Voice chat", "Chat de voz")
	RedirectText("Players volume:", "Voces:")
	RedirectText("Reload server list", "Recargar lista")
	RedirectText("VOICE", "VOZ")
	RedirectText("Current input", "Entrada actual")
	RedirectText("Connect", "Unirse")
	RedirectText("Close", "Cerrar")
	RedirectText("Open", "Abrir")
	RedirectText("Version", "Version")
	RedirectText("Web URL", "Web URL")
	RedirectText("No Cheat", "No Cheat")
	RedirectText("Max players", "Max players")
	RedirectText("Jump mode", "Salto")
	RedirectText("Gravity", "Gravedad")
	RedirectText("Keep inventory", "Conservar Inv")
	RedirectText("CREATE", "CREAR")
	RedirectText("Refresh", "Recargar")
	RedirectText("Server:", "Servidor:")
	RedirectText("DISCONNECT", "DESCONECTARSE")
	RedirectText("Not Ready", "En espera")
	RedirectText("READY", "PREPARADO")
	RedirectText("Ready", "Estado")
	RedirectText("Nickname", "Nickname")
	RedirectText("CHECK MICROPHONE", "PROBAR MICROFONO")
	RedirectText("Resume", "Reanudar")
	RedirectText("Achievements", "Logros")
	RedirectText("Options", "Opciones")
	RedirectText("Suicide", "Suicidarse")
	RedirectText("PAUSED", "PAUSADO")
	
	RedirectText("Player volume:", "Volumen:")
	RedirectText("Friends can join", "Pueden unirse amigos")
	RedirectText("Private room", "Sala privada")
	RedirectText("RECEIVING DATA", "RECIBIENDO DATOS")
	
	RedirectText("ACHIEVEMENTS", "LOGROS")
	RedirectText("OPTIONS", "OPCIONES")
	RedirectText("QUIT?", "SALIR?")
	RedirectText("YOU DIED", "HAS MUERTO")

	RedirectText("GRAPHICS","GRAFICOS")
	RedirectText("Enable bump mapping:", "Habilitar bump mapping:")
	RedirectText("VSync:", "VSync:")
	RedirectText("Anti-aliasing:", "Anti-aliasing:")
	RedirectText("Enable room lights:", "Iluminacion de salas:")
	RedirectText("Screen gamma", "Gamma")
	RedirectText("Particle amount:", "Cantidad de particulas:")
	RedirectText("Texture LOD Bias:","Texture LOD Bias:")
	RedirectText("Cameras quality:","Calidad de camaras:")
	RedirectText("Disable gamma update:","Deshabilitar gamma update:")
	RedirectText("Save textures in the VRAM","Guardar texturas en la VRAM")
	RedirectText("Cameras update interval:", "Intervalo de actualizacion de camaras:")

	RedirectText("AUDIO","AUDIO")
	RedirectText("Music volume:","Volumen de la musica:")
	RedirectText("Sound volume:","Volumen del juego:")

	RedirectText("Sound auto-release:","Autolanzamiento del sonido:")
	RedirectText("Enable user tracks:","Habilitar pistas del usuario:")
	RedirectText("User track mode","Modo de reproduccion:")
	RedirectText("Scan for User Tracks","Buscar pistas")
	RedirectText("CONTROLS","CONTROLES")
	RedirectText("Mouse sensitivity:","Sensibilidad:")
	RedirectText("Invert mouse Y-axis:","Invertir eje Y del mouse:")
	RedirectText("Mouse smoothing:","Mouse smoothing:")
	RedirectText("Control configuration", "Configuracion de controles")
	RedirectText("Move Forward", "Avanzar")
	RedirectText("Strafe Left", "Izquierda")
	RedirectText("Strafe Right", "Derecha")
	RedirectText("Quick Save", "Guardar")
	RedirectText("Chat", "Chat")
	RedirectText("Jump", "Salto")
	RedirectText("Manual Blink", "Parpadear")
	RedirectText("Sprint", "Correr")
	RedirectText("Open/Close Inventory", "Inventario")
	RedirectText("Crouch", "Agacharse")
	RedirectText("Open/Close Console", "Consola")
	RedirectText("Voice", "Voz")
	RedirectText("(Muted)", "(Silenciado)")
	RedirectText("Server list is clear", "Lista de servidores vacia")
	RedirectText("Local servers are searched only on", "Los servidores locales se buscan solo en")
	RedirectText("port 50021", "puerto 50021")
	
	RedirectText("ADVANCED", "AVANZADO")
	RedirectText("Show HUD", "Mostrar HUD")
	RedirectText("Enable console", "Habilitar Consola")
	RedirectText("MULTIPLAYER", "MULTIJUGADOR")
	RedirectText("Open console on error", "Errores en la consola")
	RedirectText("Achievement popups", "Popups de logros")
	RedirectText("Show FPS", "Mostrar FPS")
	RedirectText("Framelimit:", "Limite de FPS")
	RedirectText("Antialiased text:", "Texto suavizado:")
	RedirectText("'E' button interaction", "Interaccion con 'E'")
	RedirectText("COMMUNITY", "COMUNIDAD")
	
	InitLoadingScreens(getscriptpath()+"\sources\esloadingscreens.ini")
	InitInfoClues(getscriptpath()+"\sources\esclues.ini")
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