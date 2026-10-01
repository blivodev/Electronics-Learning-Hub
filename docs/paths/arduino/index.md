# Arduino (AVR) Path

The **friendliest on-ramp to microcontrollers**. An Arduino board (like the Uno, which runs an
**AVR** chip — the ATmega328P) is a tiny computer you can program in **C/C++** to blink LEDs, read
buttons and sensors, drive motors, and talk to other chips. Because Arduino is an open-source
platform backed by a huge community, it's the classic first board for absolute beginners.

This path takes you from your first blinking LED to writing structured C that reads inputs and
produces real outputs — weaving in the core electronics concepts as you need them.

> 💡 **Not sure where to start?** Begin with the [Beginner tutorial](beginner.md). It needs no
> prior experience and gets a real program onto your board within the first hour.

---

## 🗺️ The Arduino track, step by step

The path is ordered *beginner → advanced*. Steps 1–5 pull in the core (board-agnostic) concepts as
you need them; the **synthesized** pages go deeper into Arduino-specific C. Work top to bottom.

### 1. The very basics — how electricity works
Before wiring anything, learn the three quantities every circuit depends on: **voltage, current,
and resistance**, and how they relate through **Ohm's law**.
→ [How electricity works](../../concepts/01-electricity.md)

### 2. The parts you'll handle
LEDs, resistors, buttons, and how to read a resistor's color bands. These are the components in
every starter kit and in every example on this path.
→ [Ohm's law & components](../../concepts/02-components.md)

### 3. Making your first circuit
How a breadboard connects things, the difference between a *schematic* and a physical circuit, and
the rule that current must always flow in a complete loop.
→ [Circuits & schematics](../../concepts/03-circuits.md)

### 4. What a microcontroller actually is
What the AVR chip inside your board does, what a *pin* is (input vs. output), and how code running
in a `loop()` controls real electronics.
→ [Microcontroller basics](../../concepts/04-microcontrollers.md)

### ✅ Step 4½ — the Beginner tutorial (do this now)
Your first real program: the anatomy of a sketch, `pinMode`/`digitalWrite`/`delay`, arrays,
functions, reading a button, PWM dimming, and serial output — all in C, with runnable code.
→ [**Arduino Beginner (C) tutorial**](beginner.md) ← start here if you skipped ahead

### 5. Turn what you learned into a project
Bring the concepts and your beginner code together into a complete buildable project.
→ [From breadboard to board (projects)](../../concepts/05-projects.md)

### 6. Go deeper in C
The full synthesized reference for writing Arduino programs the "C way": variables, control flow,
functions, and hardware registers.
→ [Arduino in C (synthesized)](../../synthesized/arduino-c.md)

---

## 📚 The universal reference

These apply to every board in the hub, not just Arduino:

- **[Microcontroller Resources](../../resources/curated/microcontrollers.md)** — core MCU knowledge and guides
- **[Arduino Resources](../../resources/curated/arduino.md)** — board-specific references and starter kits
- **[Curated Videos](../../resources/curated/videos.md)** — the best beginner Arduino video walkthroughs
- **[Electronics Glossary](../../GLOSSARY/README.md)** — look up any term you hit as you go

---

## ✅ What "done" looks like

When you finish this path you should be able to:
- Explain voltage, current, resistance, and Ohm's law well enough to size a resistor for an LED.
- Read a simple schematic and wire it on a breadboard.
- Explain what `setup()` and `loop()` do, and why every Arduino sketch has them.
- Use `pinMode`, `digitalWrite`, `delay`, arrays, and functions to control LEDs and read a button.
- Dim an LED with PWM (`analogWrite`) and print data to the serial monitor.

Then you'll have the exact foundation needed to move up to the **ESP32** and its Wi-Fi/Bluetooth.

---

*Next: **[Begin the Beginner tutorial](beginner.md)** or jump back to [choose a path](../index.md).*
