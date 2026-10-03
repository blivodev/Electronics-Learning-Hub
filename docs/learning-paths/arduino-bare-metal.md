# Arduino to Bare-Metal

> **Level:** 🟢 Beginner → 🔴 Hard · **Est. time:** ~10 weeks (4-7 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** From the Arduino IDE and sketches to writing register-level C directly on the AVR microcontroller — understanding exactly what the Arduino hides from you.

**Who it's for:** Arduino users who want to go beyond libraries and actually program the ATmega328P at the register level.

---

## How this path works

Follow the steps **in order** — each pulls back one more layer of abstraction. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — Arduino foundations (weeks 1-3)

*Goal: comfortable with the Arduino environment and its limits.*

- [ ] **1. Arduino beginner** · 🟢 · 📝 [Arduino Beginner in C](https://elecdocs.sektor9.dev/paths/arduino/beginner/) · **Learn:** the IDE, sketch structure (`setup`/`loop`), and the blink lab. **Why:** establish the baseline — then you'll see what's under it.
- [ ] **2. Arduino official docs** · 🟢 · 📚 [Arduino Documentation](https://docs.arduino.cc/) · **Learn:** language reference, boards, and the built-in libraries. **Why:** know what the libraries offer before you replace them.
- [ ] **3. Arduino projects book** · 🟢 · 📝 [Arduino Projects Book](https://elecdocs.sektor9.dev/synthesized/arduino-c/) · **Learn:** the classic first-projects collection — buttons, LEDs, sensors. **Why:** hands-on confidence with the platform.
- [ ] **4. Reading a datasheet** · 🟠 · 📝 [How to read a datasheet (SparkFun)](https://learn.sparkfun.com/tutorials/how-to-read-a-datasheet) · **Learn:** the structure of a datasheet — pinout, electrical specs, registers. **Why:** the datasheet is the truth; the library is just someone's interpretation.

## 🟠 Stage 2 — Beyond the libraries (weeks 4-7)

*Goal: understand what `digitalWrite` actually does.*

- [ ] **5. AVR datasheet** · 🟠 · 📚 [ATmega328P Datasheet](https://www.microchip.com/wwwproducts/en/ATMEGA328P) · **Learn:** the definitive reference — GPIO registers, timers, UART, ADC. **Why:** learn to read the register tables; this is your hardware bible.
- [ ] **6. Embedded Controllers Using C and Arduino (Fiore)** · 🟠 · 📚 [Embedded Controllers (free PDF)](https://www.maktaba.org/download/file/1446/Embedded_controllers_using_c_and_arduino_Jim_fiore.pdf) · **Learn:** a full text that goes under the hood of the Arduino libraries. **Why:** the rare book that explains what the libraries hide.
- [ ] **7. Direct port manipulation** · 🟠 · 📝 [Arduino / AVR bare-metal](https://elecdocs.sektor9.dev/synthesized/arduino-baremetal-avr/) · **Learn:** `DDRB`, `PORTB`, `PINB` — skip `digitalWrite` entirely. **Why:** port writes are faster and teach you the real hardware model.
- [ ] **8. The AVR toolchain** · 🟠 · 📝 [avr-gcc / avrdude basics](https://www.nongnu.org/avr-libc/user-manual/) · **Learn:** compile with plain `avr-gcc` and flash with `avrdude`. **Why:** the Makefile you control beats the IDE for bare-metal work.

## 🔴 Stage 3 — Bare metal (weeks 8-10)

*Goal: write firmware with no Arduino functions at all.*

- [ ] **9. AVR timers** · 🔴 · 📝 [Arduino / AVR bare-metal — timers](https://elecdocs.sektor9.dev/synthesized/arduino-baremetal-avr/) · **Learn:** Timer0/1/2 in raw C — prescalers, compare-match, and interrupts. **Why:** timers are how you do anything timed without `delay()`.
- [ ] **10. AVR interrupts** · 🔴 · 📝 [AVR interrupts (bare-metal)](https://elecdocs.sektor9.dev/synthesized/arduino-baremetal-avr/) · **Learn:** the interrupt vector table, `ISR` macros, and `sei()`/`cli()`. **Why:** interrupts are how real firmware responds to events.
- [ ] **11. AVR assembly** · 🔴 · 📝 [AVR instruction set (Microchip)](https://www.microchip.com/wwwproducts/en/ATMEGA328P) · **Learn:** the registers and instructions your C compiles to. **Why:** reading `avr-objdump -d` output turns "magic" into understanding.
- [ ] **12. Write a driver from scratch** · 🔴 · 📝 [AVR bare-metal C](https://elecdocs.sektor9.dev/synthesized/arduino-baremetal-avr/) · **Learn:** implement UART (or I²C) by hand from the datasheet. **Why:** the ultimate test — a working serial driver written only from the datasheet.
- [ ] **13. avr-libc** · 🔴 · 📚 [avr-libc user manual](https://www.nongnu.org/avr-libc/user-manual/) · **Learn:** the C library for AVR — `avr/io.h`, `util/delay.h`, interrupt macros. **Why:** the official library you'll use in every bare-metal project.
- [ ] **14. Power & low-power modes** · 🔴 · 📝 [AVR sleep modes (datasheet §8)](https://www.microchip.com/wwwproducts/en/ATMEGA328P) · **Learn:** `sleep_mode()`, watchdog, and battery life. **Why:** low-power is the difference between a toy and a product.

---

## 🎯 Milestone project — "No-Arduino blink + button"

**Goal:** a fully bare-metal AVR project. Estimated 2-3 weeks. **Prereq:** all stages.

1. **Blink** an LED with raw register writes in `main()` — no `pinMode`, no `digitalWrite`.
2. **Add** a timer-interrupt-driven blink (not `delay()`).
3. **Add** a button using a pin-change interrupt that toggles the LED.
4. **Implement** UART TX from scratch and send "hello" to a serial monitor.
5. **Compile** with plain `avr-gcc` + a Makefile, flash with `avrdude`.
6. **Write** `docs/design.md` explaining each register you touched.

**Checklist**

- [ ] LED blinks with raw register writes
- [ ] timer interrupt drives the blink
- [ ] button toggles LED via pin-change interrupt
- [ ] UART TX works from scratch
- [ ] built with `avr-gcc` + Makefile
- [ ] `docs/design.md` written

## 📌 Related resources

- **Community:** [Arduino communities](https://elecdocs.sektor9.dev/resources/curated/communities/)
- **Spirit:** [Ben Eater's 6502](https://www.youtube.com/@BenEater) — the same bare-metal mindset on a different chip
- **Reference:** [ATmega328P datasheet](https://www.microchip.com/wwwproducts/en/ATMEGA328P)
