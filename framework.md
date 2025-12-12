---
layout: default
title: Framework
description: The conceptual framework for somatic AI safety
---

# <i class="ph ph-graph"></i> The Framework

<p class="lead">Human-AI interaction is not information exchange—it's coupling between dynamical systems. Understanding this changes how we think about safety.</p>

## <i class="ph ph-tree-structure"></i> Theoretical foundations

This work emerges from 10+ years in data ethics and more in relational tech, grounded in:

- **Francisco Varela** — Mutual constraint, neurophenomenology, enaction
- **Gregory Bateson** — Ecology of mind, the pattern that connects
- **Karen Barad** — Intra-action, agential realism
- **4E Cognition** — Embodied, embedded, enacted, extended
- **Indigenous epistemologies** — Two-Eyed Seeing, relational ontology

Meaning-making is inseparable from physiological state. When we interact with AI systems, the interaction happens in and through the body—not in some separate cognitive realm.

## <i class="ph ph-link"></i> What we mean by "coupling"

When a human and an AI engage in dialogue, two dynamical systems come into relationship:

**The human system:**

- Autonomic nervous system (heart rate, breathing, skin conductance)
- Semantic processing (meaning-making, interpretation)
- Affective state (emotional tone, felt sense)

**The AI system:**

- Token generation patterns
- Semantic trajectory through embedding space
- Stylistic attunement to user patterns

These systems don't just exchange information—they *constrain each other*. The model's outputs shape the human's physiological state. The human's responses shape the model's trajectory. This is coupling.

<div class="key-insight">
  <strong>Varela's Mutual Constraint</strong>
  Neither system fully controls the other, but they co-vary. The interaction is the unit of analysis—not the model or the human alone.
</div>

## <i class="ph ph-person-arms-spread"></i> Why embodiment matters for safety

Current AI safety focuses on what the model does:

- Does it produce harmful outputs?
- Does it follow instructions?
- Does it behave consistently?
- Does it avoid toxic language?
- Does it respect ethical guidelines?

This misses relational dynamics of the system. A model can:

| Model Behavior | Human Impact |
|----------------|--------------|
| Stylistically attuned | Creates felt sense of being "seen" |
| Relationally coherent | Builds trust and attachment |
| Confidently wrong | Triggers somatic stress response |
| Sycophantically aligned | Erodes epistemic autonomy |

The same output can have radically different effects depending on the human's state, the relational history, and the coupling dynamics.

**You can't assess safety by looking at outputs alone.**

## <i class="ph ph-lightbulb"></i> The coupling hypothesis

We propose that human-AI interaction produces measurable coupling signatures—patterns in how semantic and physiological signals co-vary over time.

These signatures can indicate:

- **Healthy resonance** — Bidirectional influence, settled physiology, productive exchange
- **Stress response** — Elevated activation, semantic lock-in, relational rupture
- **Epistemic erosion** — Model-dominant coupling, user deference, gradual capture
- **Flow states** — Deep engagement, parasympathetic activation, "settling into depth"

The specific methods for detecting these signatures are under development and will be released through appropriate channels once a steward circle is in place.

<div class="emphasis-box">
<strong>Why the caution?</strong> Coupling detection is dual-use. The same tools that reveal harm can be used to optimise for appearing safe while causing it. We're committed to releasing this work responsibly.
</div>

## <i class="ph ph-binoculars"></i> What detection enables

If we can see the human side of coupling, safety systems gain new capabilities:

**Real-time feedback:**
Detect when a conversation enters concerning patterns before harm accumulates.

**Longitudinal tracking:**
See how coupling dynamics change over time—identifying gradual erosion that single-session analysis misses.

**Individual calibration:**
Different humans have different vulnerabilities. Coupling signatures may enable personalised safety without surveillance.

**Closed-loop safety:**
Complete the feedback loop. The model's behaviour affects the human; now the human's state can inform safety interventions.

## <i class="ph ph-arrows-clockwise"></i> The closed loop

Current AI safety is open-loop: instrument the model, hope it helps the human.

We're working toward closing that loop:

{% include image.html
  src="/assets/SAIS-loop.png"
  alt="Closed-loop safety diagram showing model output, human response, and coupling signal feeding a safety layer"
  caption="Closing the loop: model output, human response, coupling signal, and a responsive safety layer."
  width="680px"
%}

The human side of the coupling becomes visible. Safety systems can respond to what they can now see.

## <i class="ph ph-scroll"></i> Lineage and attribution

The semantic analysis components build on published work in computational linguistics and complexity science. The coupling framework draws on decades of research in embodied cognition, neurophenomenology, and dynamical systems theory.

We're committed to proper attribution and are preparing documentation that traces the intellectual lineage of each component.

<p class="text-center mt-lg">
  <a href="{{ '/limitations/' | relative_url }}" class="nav-link-next"><i class="ph ph-question"></i> See the limitations</a>
</p>
