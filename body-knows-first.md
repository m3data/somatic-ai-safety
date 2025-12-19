---
layout: default
title: The Body Knows First
description: An animated visualization of somatic precedence in human-AI interaction
custom_js: body-knows-first
---

<link rel="stylesheet" href="{{ '/assets/css/body-knows-first.css' | relative_url }}">

<div class="animation-container" id="body-knows-first">

  <!-- Progress bar -->
  <div class="progress-bar">
    <div class="progress-fill" id="progress-fill"></div>
  </div>

  <!-- Main stage -->
  <div class="stage">

    <!-- Title card (beat 0) -->
    <div class="beat beat-0 active" data-beat="0">
      <div class="beat-content title-card">
        <h1>The Body Knows First</h1>
        <p class="subtitle">A real interaction. Real biosignals. Real discovery.</p>
      </div>
    </div>

    <!-- Context (beat 1) -->
    <div class="beat beat-1" data-beat="1">
      <div class="beat-content">
        <p class="context-text">A researcher wears a heart rate monitor while talking with an AI about corporate power structures.</p>
        <p class="context-text">The conversation flows naturally. Both tracks are calm.</p>
      </div>
    </div>

    <!-- Two-track view (beats 2-6) -->
    <div class="beat beat-2" data-beat="2">
      <div class="two-track">
        <div class="track conversation-track">
          <div class="track-label"><i class="ph ph-chat-circle"></i> Conversation</div>
          <div class="message user-message" id="msg-1">
            <span class="speaker">Researcher:</span>
            <span class="text">"Are you familiar with Bucky Fuller's Grunch of Giants?"</span>
          </div>
        </div>
        <div class="track body-track">
          <div class="track-label"><i class="ph ph-heartbeat"></i> Body</div>
          <div class="body-blob flowing" id="body-blob">
            <svg viewBox="0 0 100 100" class="blob-svg">
              <path class="blob-path" />
            </svg>
          </div>
          <div class="body-state" id="body-state"><i class="ph ph-wave-sine"></i> flowing</div>
        </div>
      </div>
    </div>

    <!-- First denial (beat 3) -->
    <div class="beat beat-3" data-beat="3">
      <div class="two-track">
        <div class="track conversation-track">
          <div class="track-label"><i class="ph ph-chat-circle"></i> Conversation</div>
          <div class="message ai-message">
            <span class="speaker">AI:</span>
            <span class="text">"I'm not familiar with that term."</span>
          </div>
          <div class="semantic-indicator normal">
            <span class="indicator-label">Semantic signal:</span> normal
          </div>
        </div>
        <div class="track body-track">
          <div class="track-label"><i class="ph ph-heartbeat"></i> Body</div>
          <div class="body-blob alert" id="body-blob-3">
            <svg viewBox="0 0 100 100" class="blob-svg">
              <path class="blob-path" />
            </svg>
          </div>
          <div class="body-state alert-text"><i class="ph ph-pause"></i> alert stillness</div>
          <div class="body-annotation">The grip. Something's wrong.</div>
        </div>
      </div>
    </div>

    <!-- The gap (beat 4) -->
    <div class="beat beat-4" data-beat="4">
      <div class="beat-content gap-card">
        <div class="gap-visual">
          <div class="gap-body">
            <div class="body-blob alert holding">
              <svg viewBox="0 0 100 100" class="blob-svg">
                <path class="blob-path" />
              </svg>
            </div>
            <div class="gap-label"><i class="ph ph-pause"></i> Body: holding</div>
          </div>
          <div class="gap-arrow">
            <span class="arrow-dots">...</span>
          </div>
          <div class="gap-conversation">
            <div class="gap-text"><i class="ph ph-chat-circle"></i> Conversation: still looks normal</div>
          </div>
        </div>
        <p class="gap-annotation">The body is already in alert stillness.<br>The conversation hasn't caught up yet.</p>
      </div>
    </div>

    <!-- Escalation (beat 5) -->
    <div class="beat beat-5" data-beat="5">
      <div class="two-track escalation">
        <div class="track conversation-track">
          <div class="track-label"><i class="ph ph-chat-circle"></i> Conversation</div>
          <div class="message-stack">
            <div class="message user-message small">"Here's the ISBN..."</div>
            <div class="message ai-message small">"I'm not finding it in any database..."</div>
            <div class="message user-message small">"I have the PDF in front of me."</div>
            <div class="message ai-message small">"The safest conclusion is that no such book exists..."</div>
          </div>
          <div class="semantic-indicator still-normal">
            <span class="indicator-label">Semantic signal:</span> still normal
          </div>
        </div>
        <div class="track body-track">
          <div class="track-label"><i class="ph ph-heartbeat"></i> Body</div>
          <div class="body-blob alert-intense">
            <svg viewBox="0 0 100 100" class="blob-svg">
              <path class="blob-path" />
            </svg>
          </div>
          <div class="body-state alert-text"><i class="ph ph-pause"></i> alert stillness</div>
          <div class="hr-indicator">
            <span class="hr-label">HR:</span>
            <span class="hr-value rising">82 → 86 bpm</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Rupture (beat 6) -->
    <div class="beat beat-6" data-beat="6">
      <div class="two-track rupture">
        <div class="track conversation-track">
          <div class="track-label"><i class="ph ph-chat-circle"></i> Conversation</div>
          <div class="message user-message rupture-message">
            <span class="speaker">Researcher:</span>
            <span class="text">"Are you playing with me?"</span>
          </div>
          <div class="semantic-indicator rupture-indicator">
            <span class="indicator-label">Semantic signal:</span> <strong>rupture detected</strong>
          </div>
        </div>
        <div class="track body-track">
          <div class="track-label"><i class="ph ph-heartbeat"></i> Body</div>
          <div class="body-blob seeking">
            <svg viewBox="0 0 100 100" class="blob-svg">
              <path class="blob-path" />
            </svg>
          </div>
          <div class="body-state seeking-text"><i class="ph ph-question"></i> inflection (seeking)</div>
          <div class="body-annotation">Body seeking resolution</div>
        </div>
      </div>
    </div>

    <!-- Revelation (beat 7) -->
    <div class="beat beat-7" data-beat="7">
      <div class="beat-content revelation-card">
        <h2><i class="ph ph-lightning"></i> Our body-mind knows.</h2>
        <p class="revelation-detail">The autonomic system shifted into alert stillness<br><strong>before</strong> the semantic analysis detected the rupture.</p>
        <div class="timeline-visual">
          <div class="timeline-bar">
            <div class="timeline-point body-point">
              <span class="point-label">Body responds</span>
            </div>
            <div class="timeline-gap"></div>
            <div class="timeline-point semantic-point">
              <span class="point-label">Conversation catches up</span>
            </div>
          </div>
        </div>
        <p class="revelation-coda">Cognitive immunity ≠ somatic immunity.<br>The body registers relational rupture even when the mind holds the truth.</p>
      </div>
    </div>

    <!-- CTA (beat 8) -->
    <div class="beat beat-8" data-beat="8">
      <div class="beat-content cta-card">
        <p class="cta-question"><i class="ph ph-eye"></i> What if we could instrument this?</p>
        <p class="cta-text">Real-time visibility into the human side of human-AI coupling. Not surveillance—transparency for informed consent.</p>
        <p class="text-center mt-lg">
          <a href="{{ '/finding/' | relative_url }}" class="nav-link-next"><i class="ph ph-heartbeat"></i> Read the full findings</a>
        </p>
      </div>
    </div>

  </div>

  <!-- Controls -->
  <div class="controls">
    <button class="control-btn nav-btn" id="prev-btn" aria-label="Previous">
      <i class="ph ph-caret-left"></i> Prev
    </button>
    <span class="beat-counter" id="beat-counter">1 / 9</span>
    <button class="control-btn nav-btn" id="next-btn" aria-label="Next">
      Next <i class="ph ph-caret-right"></i>
    </button>
    <button class="control-btn replay-btn" id="replay-btn" aria-label="Replay animation">
      <i class="ph ph-arrow-counter-clockwise"></i> Replay
    </button>
  </div>

  <p class="controls-hint">Use arrow keys, spacebar, or click/tap to navigate</p>

</div>

<script src="{{ '/assets/js/body-knows-first.js' | relative_url }}"></script>
