const color= "\x1b[1;35m";
const underline= "\x1b[94;4m";
const normal= "\x1b[0m";
export const introMessage = [
	// +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
	// |                                                                             |
	// |  ┓ •  ┓     ┓     ┓                                                         |
	// |  ┣┓┓╋┏┣┓┏┓╋ ┣┓╋┏┳┓┃                                                         |
	// |  ┗┛┗┗┗┛┗┗┻┗•┛┗┗┛┗┗┗┓                                                        |
	// |                    ┗━━━━━━━━━━━━━━━━┓                                       |
	// |  Follow these steps to get started: ┃                                       |
	// |                                     ┃                                       |
	// |  1. Connect to Tailscale (sidebar)  ┗━━━━━┓                                 |
	// |  2. TODO: Connect to Bluetooth device over┃network                          |
	// |  3. Run bitchat:                          ┗━━━┓                             |
	// |         # https://github.com/ShilohEye/bitchat-terminal                     |
	// |         bitchat                               ┃                             |
	// |                                               ┃                             |
	// |         or                                    ┃                             |
	// |                                               ┗━━┓                          |
	// |         # https://github.com/kaganisildak/bitchat-python                    |
	// |         cd bitchat-python                        ┃                          |
	// |         python3 bitchat.py                       ┃                          |
	// |                                                  ┃                          |
	// |         or                                       ┃                          |
	// |                                                  ┃                          |
	// |         # https://github.com/dearabhin/bitchat-cli                          |
	// |         cd bitchat-cli                           ┃                          |
	// |         python3 main.py                          ┃                          |
	// |                                                  ┃                          |
	// |         or                                       ┃                          |
	// |                                                  ┃                          |
	// |         # all 3 side-by-side                     ┃                          |
	// |         ./start_tmux.sh                          ┃                          |
	// |                                                  ┗━━━━━━━━━━━━━━━━━━━━━━━━━╸|
	// +~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
	"",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                                                                             |",
	"|  " + color + "┓ •  ┓     ┓     ┓" + normal + "                                                         |",
	"|  " + color + "┣┓┓╋┏┣┓┏┓╋ ┣┓╋┏┳┓┃" + normal + "                                                         |",
	"|  " + color + "┗┛┗┗┗┛┗┗┻┗•┛┗┗┛┗┗┗" + normal + " ┓                                                       |",
	"|                     ┗━━━━━━━━━━━━━━━━┓                                      |",
	"|  Follow these steps to get started:  ┃                                      |",
	"|                                      ┃                                      |",
	"|  1. Connect to Tailscale (sidebar)   ┗━━━━┓                                 |",
	"|  2. TODO: Connect to Bluetooth device over┃network                          |",
	"|  3. Run bitchat:                          ┗━━━┓                             |",
	"|         # https://github.com/ShilohEye/bitchat-terminal                     |",
	"|         bitchat                               ┃                             |",
	"|                                               ┃                             |",
	"|         or                                    ┃                             |",
	"|                                               ┗━━┓                          |",
	"|         # https://github.com/kaganisildak/bitchat-python                    |",
	"|         cd bitchat-python                        ┃                          |",
	"|         python3 bitchat.py                       ┃                          |",
	"|                                                  ┃                          |",
	"|         or                                       ┃                          |",
	"|                                                  ┃                          |",
	"|         # https://github.com/dearabhin/bitchat-cli                          |",
	"|         cd bitchat-cli                           ┃                          |",
	"|         python3 main.py                          ┃                          |",
	"|                                                  ┃                          |",
	"|         or                                       ┃                          |",
	"|                                                  ┃                          |",
	"|         # all 3 side-by-side                     ┃                          |",
	"|         ./start_tmux.sh                          ┃                          |",
	"|                                                  ┗━━━━━━━━━━━━━━━━━━━━━━━━━╸|",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	""
];
export const errorMessage = [
	color + "CheerpX could not start" + normal,
	"",
	"Check the DevTools console for more information",
	"",
	"CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
	"",
	"Give it a try from a desktop version / another browser!",
	"",
	"CheerpX internal error message is:",
	""
];
export const unexpectedErrorMessage = [
	color + "WebVM encountered an unexpected error" + normal,
	"",
	"Check the DevTools console for further information",
	"",
	"Please consider reporting a bug!",
	"",
	"CheerpX internal error message is:",
	""
];
