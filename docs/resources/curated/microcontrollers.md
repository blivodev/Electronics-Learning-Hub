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
