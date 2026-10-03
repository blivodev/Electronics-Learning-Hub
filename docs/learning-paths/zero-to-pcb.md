# Electronics Zero to PCB

> **Level:** 🟢 Beginner → 🔴 Hard · **Est. time:** ~12 weeks (5-8 hrs/week) · **Progress:** tick each step as you finish it

**What you'll learn:** Electronics from absolute zero — voltage/current/resistance, components, breadboard circuits, and finally designing and ordering your own PCB.

**Who it's for:** Complete beginners with zero electronics background who want to build real circuits and boards.

---

## How this path works

Follow the steps **in order** — each builds on the last. Tick a checkbox when you finish a step. Steps are 📚 book, 📝 tutorial, or 🎬 video.

Each step notes **what you'll learn** and **why it matters**.

**Legend:** 🟢 Beginner · 🟠 Intermediate · 🔴 Hard · ⚫ Advanced

---

## 🟢 Stage 1 — The fundamentals (weeks 1-4)

*Goal: the mental model of electricity and the five components you'll use everywhere.*

- [ ] **1. Electricity basics** · 🟢 · 📝 [Electricity & Voltage/Current/Resistance](https://elecdocs.sektor9.dev/concepts/01-electricity/) · **Learn:** voltage (pressure), current (flow), resistance, and the water-analogy model. **Why:** everything else is a combination of these three ideas.
- [ ] **2. Ohm's Law & components** · 🟢 · 📝 [Ohm's Law & Components](https://elecdocs.sektor9.dev/concepts/02-components/) · **Learn:** resistors, LEDs, capacitors, transistors, diodes — and the resistor color code. **Why:** these are the parts in your first hundred projects; meet them now.
- [ ] **3. Lessons in Electric Circuits** · 🟢 · 📚 [All About Circuits — free textbook](https://www.allaboutcircuits.com/textbook/) · **Learn:** the complete free electronics textbook (Kuphaldt) — DC, AC, semiconductors. **Why:** the reference you'll return to for years; free and thorough.
- [ ] **4. Ben Eater's electronics** · 🟢 · 🎬 [Ben Eater — 8-bit computer playlist](https://www.youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU) · **Learn:** see the theory become real hardware on a breadboard — logic gates, clocks, memory. **Why:** watching circuits work is the fastest way to believe the theory.
- [ ] **5. Practical lab habits** · 🟢 · 📝 [SparkFun — how to use a multimeter](https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter) · **Learn:** measure voltage, current, resistance, continuity safely. **Why:** the multimeter is your first test instrument; a circuit you can't measure is a guess.
- [ ] **6. Circuit simulation** · 🟢 · 📝 [Wokwi — browser circuit simulator](https://docs.wokwi.com/) · **Learn:** simulate Arduino/ESP32 circuits before building them. **Why:** simulate first, build second — it catches mistakes for free.

## 🟠 Stage 2 — Breadboards & circuits (weeks 5-8)

*Goal: build working circuits and read what they do.*

- [ ] **7. Circuits & schematics** · 🟠 · 📝 [Circuits & Schematics](https://elecdocs.sektor9.dev/concepts/03-circuits/) · **Learn:** series/parallel, reading a schematic, the breadboard. **Why:** the schematic is the "blueprint" language — you must read it to build.
- [ ] **8. From breadboard to board** · 🟠 · 📝 [From Breadboard to Board](https://elecdocs.sektor9.dev/concepts/05-projects/) · **Learn:** your first real project structure — power, input, output. **Why:** structure prevents the "why is it on fire" moments.
- [ ] **9. GreatScott!'s builds** · 🟠 · 🎬 [GreatScott!](https://www.youtube.com/@greatscottlab) · **Learn:** real project builds with sound theory and real debugging. **Why:** see the full cycle — idea → schematic → build → debug — done well.
- [ ] **10. Oscilloscope & test gear** · 🟠 · 🎬 [EEVblog's oscilloscope tutorials](https://www.youtube.com/@EEVblog) · **Learn:** what a scope shows you — waveforms, timing, noise. **Why:** the scope reveals what circuits *actually* do, not what you expect.
- [ ] **11. Soldering** · 🟢 · 📝 [Adafruit — excellent soldering guide](https://learn.adafruit.com/adafruit-guide-excellent-soldering) · **Learn:** through-hole then SMD soldering technique. **Why:** soldering is the physical skill every maker needs; practice it early.
- [ ] **12. Troubleshooting** · 🟠 · 📝 [SparkFun — how to troubleshoot](https://learn.sparkfun.com/tutorials/how-to-troubleshoot-circuits) · **Learn:** systematic debugging: power first, then signals, then components. **Why:** 90% of electronics time is debugging; learn the method.

## 🔴 Stage 3 — Design a real PCB (weeks 9-12)

*Goal: go from breadboard to a manufactured board.*

- [ ] **13. KiCad basics** · 🔴 · 📝 [PCB Design with KiCad](https://elecdocs.sektor9.dev/synthesized/pcb-design-kicad/) · **Learn:** schematic → footprint → board → Gerbers in KiCad. **Why:** the end-to-end flow of every real board.
- [ ] **14. KiCad docs** · 🔴 · 📚 [KiCad Documentation](https://docs.kicad.org/) · **Learn:** the official manual — footprints, routing, copper pours, DRC. **Why:** when the tutorial isn't enough, the manual is authoritative.
- [ ] **15. PCB design rules** · 🔴 · 📝 [PCB Design Tutorial](https://www.alternatezone.com/electronics/files/PCBDesignTutorialRevA.pdf) · **Learn:** trace widths, clearances, decoupling, ground planes. **Why:** design rules are what make a board work (not just route).
- [ ] **16. Phil's Lab PCB series** · 🔴 · 🎬 [Phil's Lab](https://www.youtube.com/@PhilsLab) · **Learn:** professional-grade PCB design in KiCad, start to finish. **Why:** see how a working professional lays out real boards.
- [ ] **17. Order from a fab** · 🔴 · 📝 [JLCPCB / PCBWay guides](https://jlcpcb.com/help) · **Learn:** generate Gerbers, upload, choose options, order. **Why:** $2 for 5 boards makes your designs real.
- [ ] **18. Assemble & test** · 🔴 · 📝 [Reflow soldering (Adafruit)](https://learn.adafruit.com/adafruit-guide-excellent-soldering) · **Learn:** solder your SMD board and bring it up with a multimeter/scope. **Why:** the satisfying, humbling final step — your design on real hardware.

---

## 🎯 Milestone project — "Your first PCB"

**Goal:** design, order, and assemble a real board. Estimated 2-3 weeks. **Prereq:** stages 1-3.

1. **Design** a small PCB in KiCad (an ATtiny85 or ESP32 breakout with an LED + button).
2. **Route** it with proper decoupling and trace widths.
3. **Run** the DRC (design rule check) until it passes.
4. **Generate** Gerbers and order from a fab.
5. **Assemble** and test — LED blinks when the button is pressed.
6. **Write** `docs/design.md` with your schematic decisions.

**Checklist**

- [ ] schematic complete in KiCad
- [ ] board routed, DRC passes
- [ ] Gerbers generated and ordered
- [ ] board assembled
- [ ] LED + button work
- [ ] `docs/design.md` written

## 📌 Related resources

- **Community:** [Electronics communities](https://elecdocs.sektor9.dev/resources/curated/communities/)
- **Simulate:** [Wokwi](https://docs.wokwi.com/)
- **Test gear:** [w2aew](https://www.youtube.com/@w2aew) — superb scope/measurement tutorials
