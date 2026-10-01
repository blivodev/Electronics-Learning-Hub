# Choose Your Path

Welcome to the learning paths. This is where the hub turns from a reference library into a **guided
curriculum**: each path is an ordered, beginner-to-advanced route that weaves the core electronics
and microcontroller concepts in just when you need them. You don't read everything — you pick **one
board** (or the pure electronics path) and follow its track to working projects.

Every path is self-contained but shares the same underlying **core concepts**: electricity, Ohm's
law, components, circuits, microcontrollers, and projects. Learn them once in any path and they
transfer everywhere.

> 💡 **New to electronics?** Each path starts with a beginner tutorial, then adds components,
> circuits, and a real project you can build (breadboard → firmware → done). Start small, finish
> something that lights up, and build from there.

---

## 🧭 The four paths

| Track | What you'll do | Where it leads | Start |
|-------|----------------|----------------|-------|
| **Arduino (AVR)** | 8-bit AVR in C — the friendliest on-ramp to bare-metal micros | Blinking LED → structured C → registers | [Begin the Arduino path](arduino/index.md) |
| **ESP32 (Xtensa/RISC-V)** | Dual-core IoT SoC — Wi-Fi/Bluetooth, C/C++ *and* MicroPython | IoT and connected devices you control from a browser | [Begin the ESP32 path](esp32/index.md) |
| **Microcontrollers (general)** | The core MCU concepts — GPIO, timers, ADC, serial, RTOS — that apply to every board | Understand *any* chip, not just one | [MCU path](mcu/index.md) |
| **Circuits & Schematics** | The electronics that make everything work — Ohm's law, schematics, soldering, PCB design | Design and build your own circuits and boards | [Circuits path](circuits/index.md) |

**Not sure which one?** Use this quick rule of thumb:

- Want to **learn** microcontroller concepts on the most forgiving hardware → **Arduino**.
- Want to build something **connected** (Wi-Fi, IoT, a web dashboard) → **ESP32**.
- Want the **theory behind every board** and to switch chips freely → **Microcontrollers (general)**.
- Want to master the **electronics** side and design your own PCBs → **Circuits & Schematics**.

---

## 🪜 The difficulty ladder at a glance

All paths share the same ramp. Here's the shape so you know what's coming and can gauge your level:

| Rung | Difficulty | Typical outcome |
|------|-----------|-----------------|
| 🟢 **Beginner** | Follow-along, no prior experience | Blink an LED; read a schematic; use a multimeter |
| 🟡 **Warming up** | Concepts + a bit of math | PWM, ADC, serial; solder a joint; breadboard a project |
| 🟠 **Intermediate** | Deliberate practice | Bare-metal registers; C++ classes; debounce & interrupts |
| 🔴 **Advanced** | Real systems thinking | RTOS, PCB design in KiCad, Rust ownership on hardware |

Each path's own page has a detailed table pinpointing where its steps fall on this ladder.

---

## 🧱 Core concepts (board-agnostic)

These five pages are shared by **every** path. Reading them in a path's order is enough; revisiting
any one is always useful:

- [How electricity works](../concepts/01-electricity.md) — voltage, current, resistance
- [Ohm's law & components](../concepts/02-components.md) — resistors, LEDs, capacitors
- [Circuits & schematics](../concepts/03-circuits.md) — the blueprint language
- [Microcontroller basics](../concepts/04-microcontrollers.md) — what's inside the chip
- [From breadboard to board (projects)](../concepts/05-projects.md) — putting it all together

---

## 📚 Reference libraries (used by every path)

- **Synthesized tutorials** — deep, code-heavy single-topic courses:
  [Arduino in C](../synthesized/arduino-c.md) · [ESP32 in C++](../synthesized/esp32-cpp.md) ·
  [Rust on embedded](../synthesized/embedded-rust.md) · [MicroPython](../synthesized/micropython.md)
- **Curated resources** — the best free tutorials, docs, and videos:
  [videos](../resources/curated/videos.md) · [circuits](../resources/curated/circuits.md) ·
  [microcontrollers](../resources/curated/microcontrollers.md) · [arduino](../resources/curated/arduino.md) ·
  [esp32](../resources/curated/esp32.md) · [communities](../resources/curated/communities.md)
- **[Electronics Glossary](../GLOSSARY/README.md)** — every term, hover-linked and explained
- **[Back to the hub home](../index.md)**

> Looking for the full wiki? The complete book/chapter library lives in BookStack at
> **`electronics.sektor9.dev`**.

---

*Pick one path and continue in it — consistency beats breadth when you're starting out.*
