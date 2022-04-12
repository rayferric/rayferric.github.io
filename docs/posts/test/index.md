# Regen

🌌 **LCG-RNG** reverser for the Java programming language.
The library is able to reverse-engineer the internal state of any linear congruential pseudo-random number generator.
Works by finding integer solutions to a system of linear inequalities on consecutive random calls.

[![](https://img.shields.io/github/license/rayferric/regen?style=for-the-badge)](LICENSE)
[![](https://img.shields.io/github/v/release/rayferric/regen?style=for-the-badge)](https://github.com/rayferric/regen/releases)

## Features

- 🔥 Simple and Convenient API
- 💻 Multithreading Support
- 📐 Rich Linear Algebra Library
- 💨 Uncompromised Performance

## Getting Started

### Prerequisites

- ☕ **[Java SE Development Kit 8](https://www.azul.com/downloads/zulu-community/?version=java-8-lts&package=jdk)**

### Gradle

```groovy
repositories {
    maven {
        url 'https://jitpack.io'
    }
}

dependencies {
    implementation 'com.github.rayferric:regen:1.0.1'
}
```

### Example

```java
Random random = new Random(314159265359L);
RandomReverser reverser = new RandomReverser();

for(int i = 0; i < 30; i++) {
	int value = random.nextInt(256);
	int min = Math.max(value - 16, 0);
	int max = Math.min(value + 16, 255);
	RandomCall call = new JavaIntegerRangeCall(256, min, max);

	// For optimal performance, further calls should be registered in filter-only mode:
	if(i < 15)
		reverser.addCall(call);
	else
		reverser.addFilter(call);

	// Unmeasured calls can be skipped:
	random.nextBoolean();
	reverser.skip(JavaBooleanCall.SKIPS);
}

// The default Java RNG automatically scrambles the seed using XOR:
reverser.solve(LCG.JAVA).map(LCG.JAVA::scramble).forEach(System.out::println);
```

## About

### Authors

- Ray Ferric (**[rayferric](https://github.com/rayferric)**)

### License

This project is licensed under the MIT License. See the **[LICENSE](LICENSE)** file for details.