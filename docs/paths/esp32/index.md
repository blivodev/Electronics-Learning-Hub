# ESP32 (Xtensa/RISC-V) Path

The **ESP32** is a family of powerful, cheap, dual-core microcontrollers from Espressif. Unlike a
plain AVR, every ESP32 has **Wi-Fi and Bluetooth built in**, plus fast clock speeds (240 MHz), a
lot of RAM/flash, and — on newer chips like the S3 and C6 — **RISC-V** cores alongside the classic
**Xtensa** ones. For a few dollars you get a full **IoT (Internet of Things)** brain that can serve
web pages, talk to the cloud, and wake from deep sleep on a battery for months.

> ⚠️ **Voltage warning — read this before wiring anything:** ESP32 GPIO pins run at **3.3 V**, not
> 5 V. Sending 5 V into a GPIO pin can permanently damage the chip. Convert signals if you ever mix
> 5 V boards (like an Arduino Uno) with an ESP32.

This path assumes you've done the [Arduino path](../arduino/index.md) (or already know the
`setup()`/`loop()` style) — the ESP32 is often programmed the exact same way via the Arduino IDE.

> 💡 **Quick start:** jump straight to the [Beginner tutorial](beginner.md) to get an ESP32 blinking
> and connecting to Wi-Fi today.

---

## 🗺️ The ESP32 track, step by step

Ordered *beginner → advanced*; the core concepts are board-agnostic and shared with the Arduino
path. Begin with the basic foundations, then hit the **Beginner tutorial**, then go deeper.

### 1. The very basics — how electricity works
The same voltage/current/resistance foundation every board needs. You'll especially care about
current draw once you run Wi-Fi.
→ [How electricity works](../../concepts/01-electricity.md)

### 2. The parts you'll handle
LEDs, resistors, buttons, and (soon) sensors. Same parts as the Arduino path — good news, your
helpers carry over.
→ [Ohm's law & components](../../concepts/02-components.md)

### 3. Making your first circuit
Breadboards and schematics — but remember: ESP32 is **3.3 V** logic, and many ESP32 modules fit
breadboards directly.
→ [Circuits & schematics](../../concepts/03-circuits.md)

### 4. What a microcontroller actually is
The general MCU ideas behind GPIO, pins, and the `setup()`/`loop()` runtime that ESP32 code also
uses.
→ [Microcontroller basics](../../concepts/04-microcontrollers.md)

### ✅ Step 4½ — the Beginner tutorial (do this now)
Get an ESP32 set up, blink the onboard LED, read a GPIO, connect to **Wi-Fi**, and see the
**MicroPython vs C** choice explained — with runnable code in both.
→ [**ESP32 Beginner (C & MicroPython) tutorial**](beginner.md) ← start here if you skipped ahead

### 5. Turn what you learned into a connected project
Projects, sensors, and bringing the whole path together into something real.
→ [From breadboard to board (projects)](../../concepts/05-projects.md)

### 6. Go deeper: C/C++ and MicroPython
Two synthesized references — the C/C++ (Arduino-framework) deep dive and the MicroPython one:
- [ESP32 in C++ (synthesized)](../../synthesized/esp32-cpp.md)
- [MicroPython (synthesized)](../../synthesized/micropython.md)

---

## 📚 The universal reference

- **[ESP32 Resources](../../resources/curated/esp32.md)** — boards, tools, and datasheet links
- **[Microcontroller Resources](../../resources/curated/microcontrollers.md)** — core MCU knowledge
- **[Curated Videos](../../resources/curated/videos.md)** — the best beginner ESP32 video walkthroughs
- **[Electronics Glossary](../../GLOSSARY/README.md)** — look up any term you hit

---

## ✅ What "done" looks like

When you finish this path you should be able to:
- Explain what an ESP32 is, and the difference between the Xtensa and RISC-V variants.
- Set up an ESP32 in the Arduino IDE (board manager + port) and flash a sketch.
- Keep GPIO safe at **3.3 V**, and know which pins to avoid (e.g. and wiring to an onboard LED).
- Read inputs and control outputs, the same way as on Arduino — plus the Wi-Fi API.
- Connect to a **2.4 GHz** Wi-Fi network and print the connection status over serial.
- Explain when to use **C/C++ (Arduino framework)** vs **MicroPython**, and flash either.

---

*Next: **[Begin the Beginner tutorial](beginner.md)** or jump back to [choose a path](../index.md).*
