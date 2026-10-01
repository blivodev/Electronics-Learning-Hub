# ESP32 Resources

A curated, working library for learning the Espressif ESP32 family — official SDK docs, Arduino-core integration, MicroPython, datasheets/devkits, and the best tutorials. Every link below has been checked and is live.

## ESP-IDF (Official SDK)

- **ESP-IDF Programming Guide** — https://docs.espressif.com/projects/esp-idf/en/latest/esp32/ — The full official documentation: getting started, API references, and every peripheral.
- **ESP-IDF on GitHub** — https://github.com/espressif/esp-idf — Source, issues, and the release notes; clone or browse to see the real code behind the APIs.
- **ESP-IDF Releases** — https://github.com/espressif/esp-idf/releases — Changelogs and release candidates; pick the LTS/stable branch for real projects.
- **API Reference** — https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/ — The definitive API reference for GPIO, ADC, Wi-Fi, Bluetooth, timers, and everything else.
- **Get Started Guide** — https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html — Step-by-step setup of the toolchain and first blink in IDF-land.
- **Example Programs (IdfExamples)** — https://github.com/espressif/esp-idf/tree/master/examples — Readable, complete example projects for every peripheral; copy-paste to learn the API.
- **Peripheral docs: GPIO API** — https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/gpio.html — Example of the detailed peripheral reference pages for configuring pins.

## Arduino-ESP32

- **arduino-esp32 on GitHub** — https://github.com/espressif/arduino-esp32 — Espressif's official Arduino core port of the ESP32; the most common way beginners start.
- **Arduino-ESP32 Documentation** — https://docs.espressif.com/projects/arduino-esp32/en/latest/ — Official docs for the Arduino core: install, libraries, boards, and examples.
- **Installation Guide** — https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html — Official steps for adding ESP32 boards to the Arduino IDE / arduino-cli.
- **arduino-esp32 libraries** — https://github.com/espressif/arduino-esp32/tree/master/libraries — The bundled per-peripheral libraries shipped with the Arduino core.

## MicroPython

- **MicroPython ESP32 Docs** — https://docs.micropython.org/en/latest/esp32/ — Official MicroPython port documentation for ESP32; REPL and quickstart notes.
- **MicroPython on GitHub** — https://github.com/micropython/micropython — The firmware source and ports, including the ESP32 boards.
- **machine module reference** — https://docs.micropython.org/en/latest/library/machine.html — The core hardware API (Pin, ADC, PWM, UART, I2C, SPI) used across ports.
- **MicroPython ESP32 quickref** — https://docs.micropython.org/en/latest/esp32/quickref.html — A compact cheat-sheet of the main ESP32 MicroPython commands.

## Datasheets & Boards

- **Espressif DevKits** — https://www.espressif.com/en/products/devkits — Official development boards (DevKitC, DevKitM) and their documentation links.
- **ESP32-DevKitC product page** — https://www.espressif.com/en/products/hardware/esp32-devkitc/overview — Official page for the most common starter board, with pinout and layout docs.
- **ESP32 SoC page** — https://www.espressif.com/en/products/socs/esp32 — Official product overview with the datasheet and technical reference manual links.
- **ESP32 (Wikipedia)** — https://en.wikipedia.org/wiki/ESP32 — Approachable overview of the chips, variants, and the broader ESP32 family.
- **TinyPICO** — https://tinypico.com/ — A tiny, battery-friendly third-party ESP32 dev board with great docs; good example of the ecosystem.
- **ElectroSchematics: ESP32 DevKitC pinout** — https://www.electroschematics.com/esp32-devkitc-pinout/ — Handy visual pinout reference for the common DevKitC board.

## Tutorials & Learn Sites

- **Random Nerd Tutorials** — https://randomnerdtutorials.com/ — Arguably the best ESP32 tutorial site; huge library of practical projects and wiring diagrams.
- **ESP32 Pinout Reference** — https://randomnerdtutorials.com/esp32-pinout-reference-gpios/ — The go-to pinout/gpio guide: which pins are safe, ADC/DAC/PWM channels, strapping pins.
- **ESP32 ADC (Arduino) tutorial** — https://randomnerdtutorials.com/esp32-adc-analog-read-arduino-ide/ — Clear walkthrough of analog reading plus the pin/attenuation gotchas.
- **Last Minute Engineers** — https://lastminuteengineers.com/esp32/ — Friendly ESP32 getting-started tutorial hub aimed at Arduino users.
- **DeepBlue Embedded** — https://deepbluembedded.com/esp32/ — Well-written ESP32 tutorials with code and clear explanations.
- **DeepBlue: ESP32 ADC tutorial** — https://deepbluembedded.com/esp32-adc-tutorial/ — Detailed ADC tutorial including calibration and nonlinearity discussions.
- **Random Nerd: ESP32 Projects** — https://randomnerdtutorials.com/projects-esp32/ — A curated index of dozens of complete ESP32 projects.
- **Random Nerd: ESP32 Web Server** — https://randomnerdtutorials.com/esp32-web-server-arduino-ide/ — Great entry project: build an ESP32 web server and control outputs from a browser.
- **Wokwi (in-browser simulator)** — https://wokwi.com/ — Free browser simulator for ESP32/Arduino; build and test circuits and firmware without hardware.
- **Last Minute Engineers: ESP32 Overview** — https://lastminuteengineers.com/ — Clear getting-started guides for ESP32 and peripherals (pinouts, wiring).

## Community

- **ESP32 Official Forum** — https://www.esp32.com/ — Espressif's community forum; great for chip-level and IDF questions.

## Suggested Reading Order

1. If you're coming from Arduino, install the **Arduino-ESP32 core** and blink an LED (https://docs.espressif.com/projects/arduino-esp32/en/latest/).
2. Read the **Random Nerd Tutorials pinout guide** so you know which pins are safe to touch.
3. Rebuild the same projects in **MicroPython** to compare the two workflows.
4. When you outgrow libraries, start the official **ESP-IDF Get Started** guide and read the **API Reference** per peripheral.
5. For advanced questions, use the **ESP32 forum** and the communities page.
