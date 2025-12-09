---
layout: default
title: Limitations
description: What we know, what we don't, and what needs validation
---

# <i class="ph ph-question"></i> Limitations

<p class="lead">Intellectual honesty requires naming what this work can and cannot claim. Here's where we are.</p>

## <i class="ph ph-chart-bar"></i> Current state

### <i class="ph ph-number-circle-one"></i> Small sample size

- Multiple sessions analyzed, but still single-digit
- Single primary participant (the researcher)
- Replication with different people, models, and contexts needed

### <i class="ph ph-number-circle-two"></i> Biosignal resolution

- Current instrumentation captures HRV metrics (RMSSD, SDNN, pNN50, LF/HF) and models autonomic state in a 3D phase space (entrainment, coherence, amplitude)
- This provides richer signal than heart rate alone—we see mode transitions, phase dynamics, and autonomic reorganization
- Further resolution would come from: galvanic skin response, respiratory patterns, facial EMG, EEG
- The framework is designed to incorporate additional signals as they become available

*EarthianBioSense model classifications (e.g., "vigilant stillness") are provisional based on small samples, activity variance and subject to refinement as more data is collected.*

### <i class="ph ph-number-circle-three"></i> Semantic analysis components

- Affective analysis uses relatively simple lexical methods
- Some semantic metrics are sensitive to conversation length
- Thresholds and calibration are still being validated

### <i class="ph ph-number-circle-four"></i> Causality vs correlation

- We observe co-variation between semantic and physiological signals
- The temporal relationships (body leading, concurrent, lagged) are suggestive but not conclusive
- Establishing causal direction requires controlled experiments we haven't yet run

---

## <i class="ph ph-check-circle"></i> What's robust

Despite limitations, several findings are solid:

### <i class="ph ph-heartbeat"></i> The somatic response is real

- Statistically significant physiological changes during coupling rupture
- Effect sizes are meaningful, not marginal
- The pattern (confident denial → activation → escalation) is consistent across instances

### <i class="ph ph-clock"></i> The temporal structure exists

- Body responding before semantic metrics register rupture
- "Settling into depth" pattern across multiple sessions
- Concurrent rather than lagged correlation in healthy dialogue

### <i class="ph ph-books"></i> The theoretical foundation is sound

- Embodied cognition is well-established (Varela, Thompson, Rosch)
- Coupling between dynamical systems is measurable in principle
- We're applying existing frameworks to a new domain, not inventing new theory

---

## <i class="ph ph-question"></i> Open questions

### <i class="ph ph-globe"></i> Is this generalizable?

The researcher has high epistemic resilience and domain expertise. Patterns observed may not generalize to:

- Users with less epistemic grounding
- Different cultural contexts
- Different interaction types (casual vs deep)
- Different models with different attunement profiles

### <i class="ph ph-ruler"></i> What's the baseline?

We don't yet have good baselines for:
- "Normal" coupling patterns in healthy AI interaction
- Individual differences in autonomic responsiveness
- Variation across platforms, models, and use cases

### <i class="ph ph-game-controller"></i> Can this be gamed?

If coupling dynamics become visible to AI systems:

- Could models learn to produce "healthy" signatures while causing harm?
- Could the measurement itself change the phenomenon?
- What happens when both sides of the coupling are instrumented?

### <i class="ph ph-scales"></i> Who controls this?

The dual-use concern is real:

- Detection tools could be used for surveillance rather than safety
- Coupling optimization could enable manipulation
- Tools can be used to further entrench asymmetric power dynamics
- Consent architecture matters as much as technical capability

---

## <i class="ph ph-x-circle"></i> What we're not claiming

To be clear:

- **Not claiming** this is a complete safety solution
- **Not claiming** our methods are the only or best methods
- **Not claiming** this works for all users or all interaction types
- **Not claiming** biosignal monitoring should be mandatory or ubiquitous
- **Not claiming** we've solved the dual-use problem

We're claiming: **the relational dynamic of human-AI coupling can be instrumented, this instrumentation reveals safety-relevant signals, and this is a direction worth exploring responsibly.**

---

## <i class="ph ph-shield-warning"></i> Why we're cautious about release

The specific detection methods—the metrics, the derivativs and signatures, the classification systems—are being held back intentionally.

**The concern:** These tools are dual-use. The same capabilities that enable safety could enable:

- Optimizing for *appearing* safe while causing harm
- Surveillance of user physiological states
- Manipulation of coupling dynamics for engagement
- Creating the illusion of relational depth without substance

**What we're doing:**

- Building a steward circle before full release
- Designing consent architecture into the framework
- Ensuring the tools can't easily be repurposed for harm
- Engaging with safety researchers, ethicists, and affected communities

This isn't about gatekeeping. It's about responsible release of capabilities that could go either way.

<p class="text-center mt-lg">
  <a href="{{ '/collaborate/' | relative_url }}" class="nav-link-next"><i class="ph ph-handshake"></i> Help us get it right</a>
</p>
