# Arduino to Bare-Metal

> **Level:** 🟢 Beginner → 🔴 Hard · **Est. time:** ~10 weeks · **Progress:** track your checkboxes below

**What you'll learn:** From the Arduino IDE and sketches to writing register-level C directly on the AVR microcontroller — understanding what the Arduino hides from you.

**Who it's for:** Arduino users who want to go beyond libraries and actually program the ATmega328P.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — Arduino foundations (weeks 1-3)

- [ ] **1. Arduino beginner** · 🟢 · 📝 [Arduino Beginner in C](https://elecdocs.sektor9.dev/paths/arduino/beginner/) — the IDE, sketch structure, and the blink lab.
- [ ] **2. Arduino official docs** · 🟢 · 📚 [Arduino Documentation](https://docs.arduino.cc/) — language reference, boards, and built-in libraries.
- [ ] **3. Arduino projects book** · 🟢 · 📝 [Arduino Projects Book](https://elecdocs.sektor9.dev/synthesized/arduino-c/) — the classic first-projects collection.

## 🟠 Stage 2 — Beyond the libraries (weeks 4-7)

- [ ] **4. AVR datasheet** · 🟠 · 📚 [ATmega328P Datasheet](https://www.microchip.com/wwwproducts/en/ATMEGA328P) — the definitive reference. Learn to read the register tables.
- [ ] **5. Embedded Controllers Using C and Arduino (Fiore)** · 🟠 · 📚 [Embedded Controllers (free PDF)](https://www.maktaba.org/download/file/1446/Embedded_controllers_using_c_and_arduino_Jim_fiore.pdf) — goes under the hood of the Arduino libraries.
- [ ] **6. Direct port manipulation** · 🟠 · 📝 [Arduino / AVR bare-metal](https://elecdocs.sektor9.dev/synthesized/arduino-baremetal-avr/) — `DDRB`, `PORTB`, `PINB`: skip `digitalWrite` entirely.

## 🔴 Stage 3 — Bare metal (weeks 8-10)

- [ ] **7. AVR timers** · 🔴 · 📝 [Arduino / AVR bare-metal — timers](https://elecdocs.sektor9.dev/synthesized/arduino-baremetal-avr/) — Timer0/1/2 in raw C with interrupts.
- [ ] **8. AVR assembly** · 🔴 · 📝 [AVR instruction set (Microchip)](https://www.microchip.com/wwwproducts/en/ATMEGA328P) — the registers and instructions your C compiles to.
- [ ] **9. Write a driver from scratch** · 🔴 · 📝 [AVR bare-metal C](https://elecdocs.sektor9.dev/synthesized/arduino-baremetal-avr/) — implement UART or I²C by hand from the datasheet.
- [ ] **10. avr-libc** · 🔴 · 📚 [avr-libc documentation](https://www.nongnu.org/avr-libc/user-manual/) — the C library for AVR: `avr/io.h`, interrupts, and the build toolchain.

---

## 🎯 Milestone project

Put it together: **blink an LED without any Arduino functions** — raw register writes in `main()`, with a timer interrupt, compiled with plain `avr-gcc` and flashed with `avrdude`. Then add a button using a pin-change interrupt.

## 📌 Related resources

- [Arduino community](https://elecdocs.sektor9.dev/resources/curated/communities/)
- [Ben Eater's 6502 (different, but the same bare-metal spirit)](https://www.youtube.com/@BenEater)
