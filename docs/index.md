# Electronics Learning Hub

A **beginner-friendly electronics, circuits & embedded-systems learning resource**. Whether you've
never touched a breadboard or you can already blink an LED and want to understand *why*, this hub
meets you where you are. Pick a board — **Arduino (AVR), ESP32, or a general microcontroller** — and
learn with beginner-first tutorials, hands-on projects, a curated bookmark library, a glossary with
hover-tooltips, and a clear difficulty ladder.

Everything here is organized on one principle: **don't read everything, follow a path.** You pick a
single track and it hands you exactly the concept at the moment you need it — then builds on it with
code, a project, and curated resources.

> The full learning wiki — a library of books and chapters — lives in BookStack at
> **`electronics.sektor9.dev`**. This docs site is the guided, path-based companion.

---

## 🧭 Choose your path

Pick **one** and follow its whole track — you don't need to read the rest:

- [**Arduino (AVR)**](paths/arduino/index.md) — 8-bit AVR in C, the friendliest entry point. Blink an LED in your first hour.
- [**ESP32 (Xtensa/RISC-V)**](paths/esp32/index.md) — dual-core IoT SoC, C/C++/MicroPython. Build something connected.
- [**Microcontrollers (general)**](paths/mcu/index.md) — the core concepts (GPIO, timers, ADC, serial) that apply to every board.
- [**Circuits & Schematics**](paths/circuits/index.md) — the electronics that make it all work: Ohm's law, schematics, soldering, PCB design.

❓ **New and unsure?** Start with the [Arduino path](paths/arduino/index.md) — it's the gentlest ramp —
or browse the [difficulty ladder](paths/index.md#the-difficulty-ladder-at-a-glance) to see the whole
progression at once.

---

## 🪜 Where each path sits

| Path | Beginner | Intermediate | Advanced |
|------|:--------:|:------------:|:--------:|
| **Arduino (AVR)** | 🟢 first blink | 🟠 bare-metal C | 🔴 registers |
| **ESP32** | 🟢 Wi-Fi blink | 🟠 C++ classes | 🔴 ESP-IDF / deep IoT |
| **Microcontrollers (general)** | 🟢 what's a chip | 🟠 peripherals | 🔴 RTOS |
| **Circuits & Schematics** | 🟢 Ohm's law | 🟠 multimeter & soldering | 🔴 KiCad PCB design |

The full explainer, with per-path detail, is on the [paths overview](paths/index.md).

---

## 📚 What's here

- **Core concepts** — the shared foundation: [electricity](concepts/01-electricity.md),
  [Ohm's law & components](concepts/02-components.md), [circuits & schematics](concepts/03-circuits.md),
  [microcontroller basics](concepts/04-microcontrollers.md), [projects](concepts/05-projects.md).
- **Synthesized tutorials** — deep, code-heavy single-topic courses:
  [Arduino (C)](synthesized/arduino-c.md) · [ESP32 (C/C++)](synthesized/esp32-cpp.md) ·
  [Rust on embedded](synthesized/embedded-rust.md) · [MicroPython](synthesized/micropython.md).
- **Curated resource library** — a big bookmark bar of free tutorials, docs, videos and
  communities, starting with the [video library](resources/curated/videos.md).
- **Glossary** — every term linked with a hover-tooltip and a detailed page ([start here](GLOSSARY/README.md)).
- **Wiki** — the full library of books/chapters lives in BookStack at **`electronics.sektor9.dev`**.

---

## 🚀 Quick start (if you have 15 minutes)

1. Read [How electricity works](concepts/01-electricity.md) — it's just water-in-a-pipe.
2. Open the [Arduino Beginner tutorial](paths/arduino/beginner.md) and blink your first LED.
3. Look up any word you don't know in the [Glossary](GLOSSARY/README.md).

That's the whole on-ramp. From there, the paths take over.

---

*Built with MkDocs Material · part of the sektor9.dev learning ecosystem.*
