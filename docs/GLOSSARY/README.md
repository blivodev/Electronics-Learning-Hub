<div class="s9-hero">
  <div class="s9-badge-row"><span class="s9-chip">🔤 Electronics Glossary</span><span class="s9-chip green">● ~100 terms</span><span class="s9-chip amber">● jump-to categories</span></div>
  <h1>Every electronics term, defined</h1>
  <p>A single-page dictionary of the terms used across this hub — <b>analog/digital, microcontrollers, serial buses, PCB design, RTOS, and more</b>. Jump to a letter group below, or press <kbd>Ctrl</kbd>+<kbd>F</kbd> to search.</p>
</div>

<div class="s9-sec"><span class="n">01</span> · Jump to a category</div>
<div class="s9-cta" style="margin-top:.4rem">
  <a class="ghost" href="#a-c">🔠 A–C</a>
  <a class="ghost" href="#d-g">⚡ D–G</a>
  <a class="ghost" href="#h-m">🧩 H–M</a>
  <a class="ghost" href="#n-s">🔌 N–S</a>
  <a class="ghost" href="#t-z">🔋 T–Z</a>
</div>

<div class="s9-note">💡 <b>Getting around:</b> every bold term below is a dictionary-style entry with a one-line definition. Terms with links refer to each other in context. On the live BookStack wiki — <code>electronics.sektor9.dev</code> — many of these become hover-tooltip glossary links inside the tutorials.</div>

---

# Glossary of Electronics Terms

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

- **<a id="pull-up"></a>Pull-up / pull-down resistor** — a resistor that holds a pin at a defined logic level (high/low) when nothing else drives it; essential for buttons and open-drain lines.

- **<a id="pwm"></a>PWM (Pulse-Width Modulation)** — rapidly switching a pin between high and low, varying the duty cycle to fake an analog output (LED dimming, servo control).

- **<a id="gpio"></a>GPIO (General-Purpose Input/Output)** — a programmable pin that can be an input (read) or output (drive high/low); the fundamental way a microcontroller talks to the world.

- **<a id="i2c"></a>I²C (IIC / Two-Wire)** — a two-wire (SDA+SCL) serial bus for connecting sensors and displays; each device has an address.

- **<a id="spi-full"></a>SPI (Serial Peripheral Interface)** — a fast four-wire serial bus (MOSI/MISO/SCK/CS) used for SD cards, displays, and high-speed sensors.

- **<a id="uart-full"></a>UART (Serial)** — an asynchronous two-wire serial link (TX/RX) used for debugging and GPS/module communication; configurable baud rate.

- **<a id="adc-full"></a>ADC (Analog-to-Digital Converter)** — samples a continuous voltage and returns a number; on the ESP32 `analogRead()` returns 0–4095 (12-bit).

- **<a id="dac"></a>DAC (Digital-to-Analog Converter)** — converts a number to an analog voltage; the ESP32 has 2 (8-bit) DAC channels.

- **<a id="rtos"></a>RTOS (Real-Time Operating System)** — an OS for microcontrollers that schedules tasks with priorities and guarantees timing; e.g. FreeRTOS on the ESP32.

- **<a id="task"></a>Task (RTOS)** — a self-contained function scheduled by the RTOS; FreeRTOS runs the highest-priority ready task.

- **<a id="mutex"></a>Mutex** — a lock that guarantees exclusive access to a shared resource between tasks.

- **<a id="queue"></a>Queue (RTOS)** — a thread-safe buffer for passing data between tasks; FreeRTOS `xQueueSend`/`xQueueReceive`.

- **<a id="semaphore"></a>Semaphore** — a counter used for signaling between tasks (binary = mutex-like, counting = resource counting).

- **<a id="mosfet"></a>MOSFET** — a voltage-controlled transistor used to switch higher-power loads (motors, LEDs) from a microcontroller pin.

- **<a id="bjt"></a>BJT (Transistor)** — a current-controlled transistor; the classic amplifier and switch building block.

- **<a id="opamp"></a>Op-amp (Operational Amplifier)** — a high-gain differential amplifier; used for comparators, filters, and signal conditioning.

- **<a id="voltage-divider"></a>Voltage divider** — two resistors in series that produce a fraction of the input voltage; used to scale signals into ADC range.

- **<a id="decoupling"></a>Decoupling capacitor** — a small capacitor (0.1 µF typical) placed near a chip's power pin to smooth supply noise.

- **<a id="oscilloscope"></a>Oscilloscope** — an instrument that displays voltage vs time; essential for debugging signals, PWM, and serial.

- **<a id="multimeter"></a>Multimeter** — a handheld meter that measures voltage, current, and resistance; the first tool every electronics learner needs.

- **<a id="led"></a>LED (Light-Emitting Diode)** — a diode that emits light when forward-biased; needs a current-limiting resistor.

- **<a id="neo-pixel"></a>NeoPixel / WS2812** — an addressable RGB LED with an integrated driver chip; many can be chained on one data pin.

- **<a id="servo"></a>Servo motor** — a motor with position feedback controlled by a PWM pulse width (typically 1–2 ms at 50 Hz).

- **<a id="h-bridge"></a>H-bridge** — a transistor circuit that lets a motor spin both directions by reversing current flow.

- **<a id="isr"></a>Interrupt Service Routine (ISR)** — code that runs when an interrupt fires; should be short and avoid blocking calls.

- **<a id="debounce"></a>Debouncing** — the practice of ignoring the mechanical bouncing of a switch contact (software delay or RC filter).

- **<a id="iomux"></a>Pin muxing (IOMUX)** — remapping a microcontroller pin's function (e.g. UART TX to a different pin).

- **<a id="bootloader-esp"></a>Bootloader (MCU)** — built-in ROM code that loads user firmware over USB/serial; on the ESP32 held by GPIO0 during reset.

- **<a id="flash"></a>Flash memory (MCU)** — non-volatile storage for firmware; on the ESP32 also stores filesystem (SPIFFS/LittleFS).

- **<a id="watchdog"></a>Watchdog timer** — a timer that resets the MCU if the firmware stops responding; guards against hangs.

- **<a id="gpio-interrupt"></a>GPIO interrupt** — triggering code on a pin edge (rising/falling); used for buttons and sensors without polling.

- **<a id="pcb"></a>PCB (Printed Circuit Board)** — a board with copper traces connecting components; designed in KiCad/EasyEDA then fabricated.

- **<a id="schematic"></a>Schematic** — the symbolic circuit diagram showing how components connect; the first step of any PCB design.

- **<a id="footprint"></a>Footprint (PCB)** — the physical pad layout on a board that a component solders onto; chosen per component in the EDA tool.

- **<a id="gerber"></a>Gerber files** — the standard format (RS-274X) that describes each copper/solder-mask layer for PCB fabrication.

- **<a id="vias"></a>Via** — a plated hole connecting copper layers of a PCB; used to route signals between layers.

- <a id="through-hole"></a>**Through-hole vs SMD** — two component mounting styles: leads through holes (easier to hand-solder) vs surface-mount pads (smaller, machine-assembled).

- **<a id="reflow"></a>Reflow soldering** — melting solder paste in an oven/plate to attach SMD components to a board.

- **<a id="solder"></a>Solder** — a low-melting-point metal alloy that joins components to the board; lead-free (Sn-Ag-Cu) is standard.

- **<a id="battery"></a>Battery** — a portable DC power source; Li-ion/LiPo cells need charge-protection circuits (do not over-discharge).

- **<a id="regulator"></a>Voltage regulator** — a component that outputs a fixed voltage (e.g. 5V, 3.3V) from a higher/unstable input; linear (LDO) or switching (buck/boost).

- **<a id="buck"></a>Buck converter** — a switching regulator that steps voltage down efficiently; the ESP32 dev boards use one to derive 3.3V.

- **<a id="ground"></a>Ground (GND)** — the 0V reference node; everything in a circuit is measured relative to it. Star grounding avoids loops.

- **<a id="noise"></a>Noise (electronics)** — unwanted voltage fluctuations on signals; reduced by decoupling, shielding, and proper grounding.

- **<a id="ble"></a>BLE (Bluetooth Low Energy)** — a low-power wireless protocol on the ESP32; used for beacons, sensors, and phone apps.

- **<a id="mqtt"></a>MQTT** — a lightweight publish/subscribe message protocol for IoT over Wi-Fi; the ESP32 talks to brokers like Mosquitto.

- **<a id="http-server"></a>HTTP server (ESP32)** — running a web server on the ESP32 to serve pages/control GPIO from a browser.

- **<a id="spiffs"></a>SPIFFS / LittleFS** — filesystems for the ESP32 flash; store config, web assets, and data that survives reboot.

- **<a id="tiny-ml"></a>TinyML** — running small machine-learning models (TensorFlow Lite Micro) on microcontrollers like the ESP32/STM32.

- **<a id="jtag"></a>JTAG / SWD** — hardware debugging interfaces to step code, set breakpoints, and flash MCUs (ST-Link, J-Link).

- **<a id="logic-analyzer"></a>Logic analyzer** — an instrument that captures digital signals over time; invaluable for debugging I²C/SPI/UART.

- **<a id="software-uart"></a>Software serial / bit-banging** — implementing a protocol in code (toggling pins manually) when no hardware peripheral is available.

- **<a id="watchdog-esp"></a>Watchdog on ESP32** — the built-in TWDT (Task Watchdog) resets the chip if a task hangs; enable it in long-running projects.

- **<a id="deep-sleep"></a>Deep sleep (ESP32)** — an ultra-low-power mode where the CPU is off and only RTC + ULP run; wake by timer or GPIO.

- **<a id="esp-now"></a>ESP-NOW** — Espressif's connectionless peer-to-peer protocol; low-latency, low-power communication between ESP32s without Wi-Fi infrastructure.

---

*Built with MkDocs Material · part of the sektor9.dev learning ecosystem.*
