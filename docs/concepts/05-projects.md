# From Breadboard to Board: The Project Ladder

This page is the payoff. You now know electricity, the components, how to read a
schematic, and what a microcontroller does. Time to **build things that work**. We'll climb
a proven ladder — five projects, each adding one new skill on top of the last:

1. **Blink** — the "Hello, world" of embedded (digital output, `delay`)
2. **Button** — the flip side (digital *input*, decisions in code)
3. **Sensor** — reading the real world (analog/timed input)
4. **Motor** — controlling power (transistor / PWM)
5. **Network** — your device joins the internet (Wi-Fi / ESP32)

Each step is small, measurable, and reuses the last. When you can do all five, you can
build most of what beginners dream up.

```mermaid
flowchart LR
    B["1. Blink<br/>digital OUTPUT"] --> T["2. Button<br/>digital INPUT"]
    T --> S["3. Sensor<br/>read real world"]
    S --> M["4. Motor<br/>switch power"]
    M --> N["5. Network<br/>connect & publish"]
```

---

## Step 1 — Blink: your first running program

**Goal:** make the built-in LED on your board turn on and off every second.

**Skills unlocked:** getting the board connected, uploading code, and using pins as digital
*outputs* with `digitalWrite()` + `delay()`.

**Hardware:** just your board (Arduino Uno or ESP32) or an Arduino + a breadboard LED/resistor.

**Build:**

1. Install the **Arduino IDE** (or use the web editor), plug your board in via USB, and
   select the right **board** and **port** under the Tools menu.
2. Upload this program (repeated from the microcontroller page):

   ```cpp
   void setup() {
     pinMode(LED_BUILTIN, OUTPUT);   // the onboard LED as an output
   }
   void loop() {
     digitalWrite(LED_BUILTIN, HIGH); // on
     delay(1000);                     // 1 s
     digitalWrite(LED_BUILTIN, LOW);  // off
     delay(1000);                     // 1 s
   }
   ```

3. Click the **Upload** arrow. After a moment, the built-in LED should blink.

**How it worked, traced:** `setup()` runs once and tells pin 13 (where the LED lives) to be
an output. `loop()` runs forever — set HIGH, wait, set LOW, wait. The **timer** peripheral
counts the milliseconds for `delay()`, and the **GPIO** hardware actually flips the pin's
voltage. Millions of clock ticks, one blinking light.

**Play with it:** change the `delay(1000)` numbers to make it blink faster/slower, or move
the LED to another pin and blink two of them.

---

## Step 2 — Button: make the board *listen*

**Goal:** press a pushbutton and have an LED respond to your input.

**Skills unlocked:** digital **inputs** with `digitalRead()`, and making decisions with
`if/else`. You're no longer just emitting — you're *reacting*.

**Hardware:** board + breadboard, pushbutton, 10 kΩ resistor, LED, resistors, jumpers.

**Build:**

1. Wire the **button** so one side connects to +5 V and the other to a digital pin (say
   pin 2), plus a **10 kΩ pull-down resistor** from pin 2 to ground. (The resistor keeps the
   pin a solid LOW when the button is up, so it doesn't "float" and read random noise.)
2. Wire an **LED + series resistor** from another pin (say pin 13) to ground, as you did in
   the circuits section.
3. Upload:

   ```cpp
   const int buttonPin = 2;
   const int ledPin = 13;

   void setup() {
     pinMode(ledPin, OUTPUT);
     pinMode(buttonPin, INPUT);
   }
   void loop() {
     int state = digitalRead(buttonPin);   // HIGH = pressed
     if (state == HIGH) {
       digitalWrite(ledPin, HIGH);         // LED on while held
     } else {
       digitalWrite(ledPin, LOW);
     }
   }
   ```

**How it worked:** `digitalRead()` returns HIGH (5 V) or LOW (0 V). The `if` decides what to
do with that. Note the **floating-pin lesson**: without the pull-down resistor the input
reads garbage — this is the single most common input bug, and worth internalizing.

**Play with it:** add debounce (a short delay or logic to ignore contact bounce), or make
one press toggle the LED instead of hold it.

---

## Step 3 — Sensor: read the real world

**Goal:** measure distance (or light/temperature) and react to it.

**Skills unlocked:** **analog/timed inputs** (ADC and `pulseIn`), using sensor libraries, and
printing data to the **Serial Monitor** so you can *see* what the board senses.

**Hardware:** an **HC-SR04 ultrasonic** distance sensor (or any beginner sensor — a
light-dependent resistor works too) on a breadboard.

**Build:**

1. Wire the HC-SR04: **VCC → 5 V**, **GND → GND**, **Trig → a digital pin** (e.g. 9),
   **Echo → another pin** (e.g. 10).
2. Upload — the core idea: fire a 10 µs pulse on **Trig**, listen for the return on
   **Echo**, and turn the round-trip time into a distance:

   ```cpp
   const int trig = 9, echo = 10;
   void setup() {
     Serial.begin(9600);
     pinMode(trig, OUTPUT);
     pinMode(echo, INPUT);
   }
   void loop() {
     digitalWrite(trig, LOW);
     delayMicroseconds(2);
     digitalWrite(trig, HIGH);
     delayMicroseconds(10);
     digitalWrite(trig, LOW);

     long duration = pulseIn(echo, HIGH);          // microseconds
     float cm = duration * 0.034 / 2;              // speed of sound, halve round-trip
     Serial.print("Distance: ");
     Serial.print(cm);
     Serial.println(" cm");
     delay(200);
   }
   ```

3. Open **Serial Monitor** (Tools → Serial Monitor, 9600 baud). Move your hand toward and
   away from the sensor and watch the numbers change.

**How it worked:** the sensor sends ultrasound, times the echo, and we convert "time" into
"distance" with a tiny bit of math. This is the bridge from *turning things on/off* to
*sensing the physical world* — the heart of most real projects.

---

## Step 4 — Motor: control real power

**Goal:** spin a DC motor (and control its speed) from a microcontroller.

**Skills unlocked:** **transistors as power switches** and **PWM** for smooth speed control.
This is where you realize the board can't drive everything directly.

**Hardware:** board + breadboard, small DC motor (5 V), an **NPN transistor**
(2N2222/2N3904), a **diode** (1N4007), a **resistor** (220 Ω), separate motor power (can be
the board's 5 V for a tiny motor), jumpers.

**Build:**

1. Connect the **motor** between + power and the **collector** of the transistor.
2. Connect the transistor's **emitter** to ground.
3. Connect the transistor's **base** through a **220 Ω resistor** to a PWM-capable pin
   (e.g. `~9`).
4. Put the **diode** across the motor (cathode toward +) to absorb the voltage spike when
   the motor turns off — this protects the transistor.
5. Upload — `analogWrite(9, 255)` is full speed; lower values give slower, smooth rotation:

   ```cpp
   const int motorPin = 9;
   void setup() { pinMode(motorPin, OUTPUT); }
   void loop() {
     for (int duty = 0; duty <= 255; duty += 5) {
       analogWrite(motorPin, duty);   // ramp up
       delay(10);
     }
     delay(1000);
     for (int duty = 255; duty >= 0; duty -= 5) {
       analogWrite(motorPin, duty);   // ramp down
       delay(10);
     }
     delay(1000);
   }
   ```

**How it worked:** the GPIO pin only sources a few milliamps — not enough for a motor. The
**transistor** is the real switch: the small pin current opens the base, letting a large
current flow from the supply through the motor. **PWM** (`analogWrite`) flips the pin on/off
thousands of times a second; the motor coasting between pulses averages out to a smooth
lower speed. The **diode** clamps the motor's kickback voltage so it doesn't zap the
transistor.

---

## Step 5 — Network: your device goes online (IoT)

**Goal:** get your board on Wi-Fi so it can send data to, or be controlled from, the
internet.

**Skills unlocked:** **IoT with the ESP32** — connecting to Wi-Fi, and the real-world step
past the breadboard-and-wires world. If you're on a plain Arduino with no Wi-Fi, this is the
step where you switch to an **ESP32** (which runs the same Arduino-style code).

**Hardware:** an **ESP32** dev board (with built-in Wi-Fi + Bluetooth), plus anything from
steps 1–3 (say the button or sensor) reattached to the ESP32's 3.3 V logic.

**Build:**

1. In the **Arduino IDE**, add the **ESP32 board package** (Board Manager), then select
   *"ESP32 Dev Module"* and your USB port.
2. Upload this minimal **connect-to-Wi-Fi** sketch (fill in your network name/password):

   ```cpp
   #include <WiFi.h>
   const char* ssid = "YourWiFiName";
   const char* password = "YourPassword";

   void setup() {
     Serial.begin(115200);
     WiFi.begin(ssid, password);
     Serial.print("Connecting");
     while (WiFi.status() != WL_CONNECTED) {
       delay(500);
       Serial.print(".");
     }
     Serial.println("\nConnected! IP: " + WiFi.localIP().toString());
   }
   void loop() {
     // your device is online — publish a sensor reading, serve a web page, etc.
     delay(5000);
   }
   ```

3. Open the **Serial Monitor** (115200 baud) and watch the board report its **IP address**.
   That address means your project is now a networked device on your home network.

**How it worked / what next:** the ESP32's **Wi-Fi peripheral** handles the hard radio work;
your code just called two functions to join the network. From here, the sky's the limit:
publish sensor readings to a dashboard, host a little web page that turns your LED on from
your phone, or send an alert when distance gets too close. (Your *Network* step doesn't have
to be this exact sketch — it just has to cross the line from "microcontroller in a box" to
"device that can talk to the world.")

---

## The ladder in one table

| Step | Skill you learned | Foundational idea |
|---|---|---|
| 1 Blink | digital output + delay | GPIO as output, clock/timer |
| 2 Button | digital input + if/else | reading states, pull-up/down |
| 3 Sensor | analog/timed input | measuring the real world (ADC / pulseIn) |
| 4 Motor | transistor + PWM | switching real power |
| 5 Network | Wi-Fi / IoT | peripherals + connecting to the world |

Replay it on a new board (ESP32 after Arduino, or MicroPython after C/Arduino) and the same
ladder still works — the skills transfer, only the syntax changes.

## Watch & learn

Verified, step-by-step build-alongs for each rung:

- [Arduino: Blinking an LED — TheGeekPub (blink)](https://www.youtube.com/watch?v=6v2FSeUunpE)
- [Arduino Input/Output – Becky Stern for Digi-Key (button & sensor)](https://www.youtube.com/watch?v=iw63hngE75g)
- [Get Started with Ultrasonic Sensors and Arduino – Rachel De Barros (sensor)](https://www.youtube.com/watch?v=ZqQgxgnH9wg)
- [Tutorial 05 for Arduino: Motors & Transistors – Jeremy Blum (motor)](https://www.youtube.com/watch?v=5bHPKU4ybHY)
- [Getting Started with ESP32 – Tomasz Tarnowski (network)](https://www.youtube.com/watch?v=tc3Qnf79Ny8)

---

Congratulations — that little blinking LED was the first step into a field where you can
now read schematics, pick components with Ohm's law, and build devices that sense, act, and
connect. Keep climbing the ladder, one working project at a time.
