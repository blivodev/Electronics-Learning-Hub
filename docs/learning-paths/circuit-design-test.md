# Circuit Design & Test

> **Level:** 🟢 Beginner → 🟠 Intermediate · **Est. time:** ~8 weeks (4-6 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** The electronics lab skills — reading schematics, using test gear, troubleshooting, and building circuits that actually work the first time.

**Who it's for:** Beginners who've learned the theory and now want the hands-on skills of a real electronics bench.

---

## How this path works

Follow the steps **in order**. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — Lab basics (weeks 1-3)

*Goal: safe, competent hands — the physical skills.*

- [ ] **1. The multimeter** · 🟢 · 📝 [How to use a multimeter (SparkFun)](https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter) · **Learn:** measuring voltage, current, resistance, continuity — and the common mistakes. **Why:** the first tool; a circuit you can't measure is a guess.
- [ ] **2. Soldering basics** · 🟢 · 📝 [Adafruit — excellent soldering](https://learn.adafruit.com/adafruit-guide-excellent-soldering) · **Learn:** through-hole then SMD technique — wetting, joints, rework. **Why:** soldering is the physical skill behind every build; practice makes joints reliable.
- [ ] **3. Electronics safety** · 🟢 · 🎬 [EEVblog — safety](https://www.youtube.com/@EEVblog) · **Learn:** mains, charged capacitors, and the habits that keep you safe. **Why:** the one lesson you must not skip — capacitors can bite you hours after unplugging.
- [ ] **4. Reading a schematic** · 🟢 · 📝 [How to read schematics (All About Circuits)](https://www.allaboutcircuits.com/textbook/) · **Learn:** symbols, nets, reference designators, power/ground conventions. **Why:** the blueprint language — read it before you build it.
- [ ] **5. Prototyping on the breadboard** · 🟢 · 📝 [Breadboard basics (SparkFun)](https://learn.sparkfun.com/tutorials/how-to-use-a-breadboard) · **Learn:** power rails, rows, and why some pins are shared. **Why:** breadboard errors are the most common beginner bug.

## 🟠 Stage 2 — Test & troubleshoot (weeks 4-6)

*Goal: see signals and find faults systematically.*

- [ ] **6. The oscilloscope** · 🟠 · 🎬 [w2aew's oscilloscope tutorials](https://www.youtube.com/@w2aew) · **Learn:** trigger, probes, timebase, and reading waveforms. **Why:** the scope is the window into what circuits actually do.
- [ ] **7. Scope measurements in practice** · 🟠 · 📝 [EEVblog — scope tutorials](https://www.youtube.com/@EEVblog) · **Learn:** measure voltage, frequency, rise time, and noise. **Why:** turn "looks fine" into measured numbers.
- [ ] **8. The logic analyzer** · 🟠 · 📝 [Saleae logic analyzer](https://www.saleae.com/) · **Learn:** capture I²C, SPI, and UART to see exactly what your MCU sends. **Why:** protocol debugging is 10x faster with a logic analyzer.
- [ ] **9. Troubleshooting circuits** · 🟠 · 📝 [How to troubleshoot (SparkFun)](https://learn.sparkfun.com/tutorials/how-to-troubleshoot-circuits) · **Learn:** systematic debugging — power first, then signals, then components. **Why:** 90% of electronics time is debugging; learn the method, not just the facts.
- [ ] **10. The systematic debug loop** · 🟠 · 🎬 [Big Clive — teardowns](https://www.youtube.com/@BigCliveDotCom) · **Learn:** how a pro analyzes and finds faults in real circuits. **Why:** teardowns teach the analyze-hypothesize-test loop.

## 🟠 Stage 3 — Build & measure (weeks 7-8)

*Goal: design, build, and document a working board.*

- [ ] **11. Signal integrity basics** · 🟠 · 📝 [Signal integrity (All About Circuits)](https://www.allaboutcircuits.com/textbook/) · **Learn:** noise, grounding, decoupling, and why probes load circuits. **Why:** the difference between "works on the bench" and "works reliably."
- [ ] **12. Decoupling & power integrity** · 🟠 · 📝 [Decoupling capacitors explained](https://www.allaboutcircuits.com/textbook/) · **Learn:** why every IC needs a 0.1 µF cap near its pin. **Why:** most "glitchy" circuits are power-integrity problems.
- [ ] **13. A full bench project** · 🟠 · 🎬 [The Signal Path](https://www.youtube.com/@TheSignalPath) · **Learn:** see a pro design, build, and measure RF/analog hardware. **Why:** the gold standard of careful bench work.
- [ ] **14. Document your work** · 🟠 · 📝 [Schematic capture in KiCad](https://docs.kicad.org/) · **Learn:** turn your breadboard into a clean, shareable schematic. **Why:** a documented design is a reusable one.

---

## 🎯 Milestone project — "Build, break, find, fix, document"

**Goal:** the complete bench cycle. Estimated 2-3 weeks. **Prereq:** all stages.

1. **Design** a simple circuit on the breadboard (e.g. an RC filter or an LED driver).
2. **Build** it, then **measure** its waveforms with the scope (compare to theory).
3. **Introduce** one deliberate bug (wrong resistor, swapped pins) and find it with your debug method.
4. **Measure** the frequency response or timing and verify it matches the design.
5. **Capture** a clean KiCad schematic of the design.
6. **Write** a short test report (`docs/test-report.md`).

**Checklist**

- [ ] circuit built on breadboard
- [ ] waveforms measured and match theory
- [ ] deliberate bug found and fixed
- [ ] measurement verified against design
- [ ] KiCad schematic captured
- [ ] `docs/test-report.md` written

## 📌 Related resources

- **Videos:** [EEVblog](https://www.youtube.com/@EEVblog), [w2aew](https://www.youtube.com/@w2aew)
- **Teardowns:** [Big Clive](https://www.youtube.com/@BigCliveDotCom)
- **Reference:** [All About Circuits](https://www.allaboutcircuits.com/textbook/)
