# Microcontroller Resources

A curated, working library for understanding microcontrollers themselves — the general concepts, peripherals (GPIO/timers/ADC), RTOS, bare-metal C, and tooling. Every link is checked and live.

## General Introductions

- **Wikipedia: Microcontroller** — https://en.wikipedia.org/wiki/Microcontroller — The best single overview of what an MCU is and how it differs from a microprocessor.
- **All About Circuits** — https://www.allaboutcircuits.com/ — Free, textbook-quality electronics and microcontroller education.
- **Electronics Tutorials** — https://www.electronics-tutorials.ws/ — Classic, structured lessons from basic circuits up to microcontroler/peripheral topics.
- **Embedded.com** — https://www.embedded.com/ — Long-running embedded-industry news, columns, and technical articles.
- **Texas Instruments MCUs** — https://www.ti.com/microcontrollers-mcus-processors.html — A second major MCU vendor; MSP430/CC26xx families with extensive docs.
- **Microchip AVR** — https://www.microchip.com/en-us/product/ATmega328P — Official product page and datasheet for the chip inside the classic Arduino Uno.
- **Wikipedia: ATmega328P** — https://en.wikipedia.org/wiki/ATmega328P — Friendly background on the most common entry-mcu so you understand "real" chips.
- **ARM developer site** — https://developer.arm.com/ — The architecture behind STM32, RP2040, and most modern MCUs; instruction-set and processor references.
- **Starter kits & platforms** — pair the concepts here with a physical board: Arduino Uno (AVR), ESP32, Raspberry Pi Pico, or an STM32 Nucleo.

## GPIO, Timers & ADC — the essentials

- **SparkFun: How to Read a Schematic** — https://learn.sparkfun.com/tutorials/how-to-read-a-schematic — Foundational for understanding the hardware around any MCU pin.
- **Wikipedia: AVR microcontrollers** — https://en.wikipedia.org/wiki/AVR_microcontrollers — Register-level overview of a mainstream 8-bit MCU family.
- **Pico-SDK (GitHub)** — https://github.com/raspberrypi/pico-sdk — Official C/C++ SDK for the RP2040/RP2350; a clean, well-documented modern example of peripheral APIs (GPIO, timers, ADC).
- **Teensy (PJRC)** — https://www.pjrc.com/teensy/ — Fast, well-supported Arm dev boards (Arduino-compatible) with superb documentation.

## RTOS & Real-Time Concepts

- **FreeRTOS** — https://freertos.org/ — The de-facto standard open-source RTOS; enormous documentation and runs on almost everything.
- **Zephyr Project** — https://www.zephyrproject.org/ — A modern, Linux-inspired RTOS ideal for multi-board portability.

## Bare-Metal C

- **Barr Group** — https://barrgroup.com/ — Embedded-systems consulting house known for the _Making Embedded Systems_ book and classic bare-metal C articles.
- **Making Embedded Systems (Elecia White, O'Reilly)** — https://www.amazon.com/Making-Embedded-Systems-Patterns-Practices/dp/1449302149 — The best practical bridge from hobby code to professional firmware patterns.
- Practice bare metal on an AVR (see arduino.md's avr-libc link) or a cheap STM32 Nucleo board.

## More RTOS & Real-Time Concepts

- **Zephyr Documentation** — https://docs.zephyrproject.org/latest/index.html — The full Zephyr manual: kernel services, device-driver model, Devicetree, and 1,000+ supported boards.
- **FreeRTOS Kernel (GitHub)** — https://github.com/FreeRTOS/FreeRTOS-Kernel — The isolated kernel source and per-MCU ports (including RISC-V and Arm); drop it straight into your own firmware.
- **FreeRTOS Developer Documentation** — https://www.freertos.org/Documentation/02-Kernel/02-Kernel-features/00-Developer-docs — Kernel-feature and API reference for tasks, queues, semaphores, and SMP.

## PIO & the RP2040 / RP2350

- **RP2040 Datasheet** — https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf — The definitive manual for the Pico chip: QSPI XIP, dual Cortex-M0+, and the full Programmable I/O (PIO) subsystem chapter.
- **Pico SDK Examples (GitHub)** — https://github.com/raspberrypi/pico-examples — Readable C/C++ examples for GPIO, timers, ADC, DMA, PIO, USB, and FreeRTOS on the Pico.
- **Raspberry Pi Pico Python SDK (PIO guide)** — https://pip.raspberrypi.com/documents/RP-008355-DS-raspberry-pi-pico-python-sdk.pdf — Official PDF covering the `rp2` module and writing custom PIO programs from MicroPython — the friendliest way into PIO.
- **Getting Started with Raspberry Pi Pico (C/C++ SDK)** — https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf — The official book: toolchain setup, building, flashing, and the first PIO/DMA examples from C.
- **Raspberry Pi Pico-series C/C++ SDK Manual** — https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf — The complete SDK reference: every hardware API (GPIO, PIO, DMA, USB) with examples.

## Register-Level Programming

- **ATmega328P Datasheet** — https://www.microchip.com/en-us/product/ATmega328P — Microchip's official page and datasheet for the classic Uno chip; the register descriptions here make bare-metal GPIO/timers click.
- **Embedded Programming: ATmega328P in Pure C** — https://siwit.co/AVR — A free lesson path that skips the Arduino abstraction and drives DDRx/PORTx/PINx, timers, and interrupts directly from registers.
- **CircuitBread: Lessons in Electric Circuits, Vol. IV (Digital)** — https://www.circuitbread.com/textbooks/lessons-in-electric-circuits-volume-iv-digital — Free, public-domain digital-logic text (gates, counters, registers) that pairs with register-level firmware work.

## Concrete Boards to Learn On

- **ST STM32 32-bit MCUs** — https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html — The industry's most popular Arm Cortex-M family; huge ecosystem and docs.
- **ST Nucleo boards** — https://www.st.com/en/evaluation-tools/nucleo-boards.html — Cheap, breadboard-friendly dev boards for learning STM32 properly.
- **Raspberry Pi Pico** — https://www.raspberrypi.com/products/raspberry-pi-pico/ — A $4 RP2040 board with official C++/MicroPython SDKs; great bare-metal-friendly starting point.
- **Raspberry Pi Forums** — https://forums.raspberrypi.com/ — Big, active community for Pico and RP2040 questions.

## Tools & Community Resources

- **ElectroSchematics** — https://www.electroschematics.com/ — Circuits and hookup guides for using MCUs with real-world peripherals.
- **CircuitBread** — https://www.circuitbread.com/ — Tutorials and a friendly community for electronics and microcontrollers.
- **Hackaday.io** — https://hackaday.io/ — Project log platform where thousands of MCU builds are documented in detail.
- **Keil (µVision/Keil MDK)** — https://www.keil.com/ — The long-standard IDE/toolchain for Arm MCUs (free tools for hobbyists).
- **SEGGER (J-Link / Embedded Studio)** — https://www.segger.com/ — Industry-standard debug probes and a free cross-platform embedded IDE.
- **CMake** — https://cmake.org/ — The build system used by pico-sdk, ESP-IDF, and most modern embedded projects; worth learning early.

## Suggested Reading Order

1. Read **Wikipedia: Microcontroller** to frame what you're learning.
2. Get a breadboard-and-LED board (any of the above) and drive GPIO, then a timer, then ADC.
3. Read **SparkFun's How to Read a Schematic** and the AVR/register material to see what happens electrically.
4. Once single-tasking clicks, read **FreeRTOS** and **Zephyr** docs to learn scheduling and concurrency.
5. Level up your C with the **Making Embedded Systems** book.
