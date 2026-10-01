# Glossary of Electronics Terms

> **Getting around:** Every bold term below is a dictionary-style entry with a one-line
> definition. Terms with links refer to each other in context. This is a single-page
> glossary for now; it will grow into a hover-tooltip index as the wiki expands.
>
> *(Tip: on the live BookStack wiki — `electronics.sektor9.dev` — many of these become
> hover-tooltip glossary links inside the tutorials.)*

---

## 🔠 A–C

- **<a id="analog-signal"></a>Analog signal** — a signal whose value varies continuously (like a microphone's voltage) rather than jumping between discrete levels. See [Digital signal](#digital-signal).

- **<a id="adc"></a>ADC (Analog-to-Digital Converter)** — hardware that samples a continuous voltage and converts it to a number the CPU can read. On the ESP32: `analogRead()`.

- **<a id="ampere"></a>Ampere (amp, A)** — the SI unit of electric current; how many electrons flow past a point per second. See [Current](#current), [Ohm's law](#ohms-law).

- **<a id="avr"></a>AVR** — the Atmel (now Microchip) 8-bit microcontroller family used in the Arduino Uno (ATmega328P).

- **<a id="baud-rate"></a>Baud rate** — the number of symbol changes per second on a serial line; 9600 baud ≈ 9600 bits/s. The ESP32's default debug baud is 115200. See [Serial](#serial).

- **<a id="breadboard"></a>Breadboard** — a reusable solderless board with rows of connected sockets for prototyping circuits quickly.

- **<a id="button"></a>Button (push switch)** — a momentary switch; connect it with a pull-up or pull-down so the pin reads a defined level when unpressed. See [Input pull-up](#input-pull-up).

- **<a id="capacitance"></a>Capacitance** — the ability of a component (a [Capacitor](#capacitor)) to store charge, measured in farads (F).

- **<a id="capacitor"></a>Capacitor** — a passive component that stores energy in an electric field; used for decoupling (smoothing power) and timing. See [Decoupling capacitor](#decoupling-capacitor).

- **<a id="clock"></a>Clock (clock signal)** — the periodic square wave that paces a microcontroller; a 16 MHz AVR executes close to one instruction per clock tick.

- **<a id="current"></a>Current** — the rate of electric charge flow, measured in amps (A). Flows through a circuit. See [Ohm's law](#ohms-law).

- **<a id="cpp-class"></a>C++ class** — in the ESP32 track, an object that bundles a peripheral's state (a pin) with its behavior (on/off), keeping hardware details tidy. See [Object](#object).

## ⚡ D–G

- **<a id="datasheet"></a>Datasheet** — the manufacturer's authoritative document describing a chip's pins, registers, electrical limits, and timing. The ultimate reference for any microcontroller.

- **<a id="debounce"></a>Debounce** — cleaning up the noisy on/off chatter a physical button produces when pressed, giving one clean edge instead of many. See [Button](#button).

- **<a id="decoupling-capacitor"></a>Decoupling capacitor** — a capacitor placed near an IC to absorb supply-voltage spikes and keep the chip's power stable. See [Capacitor](#capacitor).

- **<a id="digital-signal"></a>Digital signal** — a signal with only discrete levels (HIGH/LOW, 1/0), as opposed to [Analog signal](#analog-signal). See [GPIO](#gpio).

- **<a id="duty-cycle"></a>Duty cycle** — the fraction of a [PWM](#pwm) period the output is HIGH, expressed as a %; 50 % gives the LED half brightness (on average).

- **<a id="esp32"></a>ESP32** — Espressif's dual-core, Wi-Fi/Bluetooth-enabled SoC; the basis of the ESP32 devkit boards and this hub's C/C++ and MicroPython tracks.

- **<a id="ground"></a>Ground (GND)** — the common 0 V reference for a circuit; every rail, device, and signal refers back to ground. **Shared ground between boards is mandatory.**

- **<a id="gpio"></a>GPIO (General-Purpose Input/Output)** — a pin you can configure as digital input or output, e.g. to read a button or drive an LED. See [Pin](#pin), [Register](#register).

## 🧩 H–M

- **<a id="i2c"></a>I²C (I2C)** — a two-wire serial bus (SDA + SCL) for connecting sensors and small devices; used by many breakout boards.

- **<a id="input-pull-up"></a>Input pull-up** — a pin configured as an input with an internal resistor pulling it HIGH; reading LOW then means "pressed/active". Saves an external resistor. See [Pull-up resistor](#pull-up-resistor).

- **<a id="led"></a>LED (light-emitting diode)** — a diode that emits light; needs a [Resistor](#resistor) to limit current. Long leg = anode, short leg = cathode.

- **<a id="logic-level"></a>Logic level** — the voltage that counts as HIGH vs LOW. The ESP32 is 3.3 V logic and is **not 5 V tolerant** — feeding it 5 V can damage it.

- **<a id="memory-mapped-io"></a>Memory-mapped I/O** — hardware registers exposed as ordinary memory addresses; setting a "pin" is just writing to a register. Core to the Arduino-in-C track. See [Register](#register).

- **<a id="mermaid"></a>Mermaid** — the diagram language used across these tutorials to draw flowcharts and sequence diagrams.

- **<a id="mcu"></a>Microcontroller (MCU)** — a self-contained computer-on-a-chip: CPU, RAM, flash, and I/O on one die.

- **<a id="micropython"></a>MicroPython** — a lean reimplementation of Python 3 that runs directly on microcontrollers with a live [REPL](#repl).

- **<a id="no_std"></a>no_std** — the Rust mode that forgoes the standard library (no OS/heap) for bare-metal targets. Core concept of the [embedded Rust tutorial](../synthesized/embedded-rust.md).

## 🔌 N–S

- **<a id="neopixel"></a>NeoPixel / WS2812** — individually addressable RGB LED chips chained on a single data wire; driven in MicroPython via the `neopixel` module.

- **<a id="object"></a>Object (language concept)** — a programming construct bundling data and the functions that act on it; in C++ it's how we wrap a sensor or a pin. See [C++ class](#cpp-class).

- **<a id="ohm"></a>Ohm (Ω)** — the SI unit of electrical resistance.

- **<a id="ohms-law"></a>Ohm's law** — `V = I × R`: voltage = current × resistance. The single most-used equation in electronics. See [Voltage](#voltage), [Current](#current), [Resistance](#resistance).

- **<a id="output"></a>Output (pin)** — a GPIO configured to drive a HIGH or LOW voltage, e.g. to light an [LED](#led).

- **<a id="pin"></a>Pin** — a physical or logical I/O terminal on a chip or board. See [GPIO](#gpio).

- **<a id="pointer"></a>Pointer** — a programming variable that holds a *memory address* instead of a value; essential for register-level access in [AVR](#avr) C and for bridging to hardware in [Rust](#rust). See [Memory-mapped I/O](#memory-mapped-io).

- **<a id="pull-up-resistor"></a>Pull-up resistor** — a resistor from a signal to VCC that holds the line HIGH when nothing drives it low. See [Input pull-up](#input-pull-up).

- **<a id="pwm"></a>PWM (Pulse-Width Modulation)** — rapidly toggling a pin HIGH/LOW with a controlled [Duty cycle](#duty-cycle); an LED appears a dimmer brightness (or a motor turns slower) at lower duty.

- **<a id="repl"></a>REPL (Read-Eval-Print Loop)** — an interactive prompt where each line runs instantly; MicroPython's signature workflow. See [MicroPython](#micropython).

- **<a id="register"></a>Register** — a tiny piece of memory, often one byte, that controls or reflects hardware; e.g. `DDRB`, `PORTB` on the AVR. See [Memory-mapped I/O](#memory-mapped-io).

- **<a id="resistance"></a>Resistance** — how strongly a component opposes current, measured in ohms (Ω). See [Ohm's law](#ohms-law).

- **<a id="resistor"></a>Resistor** — a passive component that resists current, protecting an [LED](#led) or setting a reference level. Typical LED series value: 220 Ω.

- **<a id="rust"></a>Rust** — a systems language with compile-time memory safety (ownership); well-suited to [no_std](#no_std) embedded dev.

- **<a id="serial"></a>Serial** — a method of sending data one bit at a time over a wire; the "Serial Monitor" and 9600/115200 baud links. See [Baud rate](#baud-rate).

- **<a id="spi"></a>SPI** — a four-wire high-speed serial interface for external chips and displays.

- **<a id="soc"></a>SoC (System-on-Chip)** — an integrated circuit that puts CPU plus peripherals (Wi-Fi, timers, ADC) together, like the [ESP32](#esp32).

## 🔋 T–Z

- **<a id="timer"></a>Timer** — internal hardware that counts clock cycles; powers delays, [PWM](#pwm), and microsecond timing.

- **<a id="voltage"></a>Voltage (V)** — electrical "pressure" or potential difference between two points, measured in volts. See [Ohm's law](#ohms-law).

- **<a id="ws2812"></a>WS2812** — see [NeoPixel / WS2812](#neopixel).

- **<a id="wifi"></a>Wi-Fi** — the wireless networking protocol built into the [ESP32](#esp32); used in the HTTP server tutorial to control an LED from a browser.

---

*Built with MkDocs Material · part of the sektor9.dev learning ecosystem.*
