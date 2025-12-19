/**
 * Body Knows First - Animation Controller
 *
 * Auto-plays through narrative beats demonstrating somatic precedence.
 * No external dependencies.
 */

(function() {
  'use strict';

  // ==========================================================================
  // Configuration
  // ==========================================================================

  const CONFIG = {
    beats: [
      { id: 0, duration: 0, name: 'title' },
      { id: 1, duration: 0, name: 'context' },
      { id: 2, duration: 0, name: 'question' },
      { id: 3, duration: 0, name: 'first-denial' },
      { id: 4, duration: 0, name: 'gap' },
      { id: 5, duration: 0, name: 'escalation' },
      { id: 6, duration: 0, name: 'rupture' },
      { id: 7, duration: 0, name: 'revelation' },
      { id: 8, duration: 0, name: 'cta' }
    ],
    // Manual navigation mode - user controls pace
    autoPlay: false,
    transitionDuration: 800,
    // SVG path for blob shapes
    blobPaths: {
      flowing: "M50,15 C70,15 85,30 85,50 C85,70 70,85 50,85 C30,85 15,70 15,50 C15,30 30,15 50,15",
      alert: "M50,20 C65,20 78,33 78,50 C78,67 65,80 50,80 C35,80 22,67 22,50 C22,33 35,20 50,20",
      seeking: "M50,18 C70,22 82,30 82,50 C82,70 70,82 50,82 C30,78 18,70 18,50 C18,30 30,18 50,18"
    }
  };

  // ==========================================================================
  // State
  // ==========================================================================

  let currentBeat = 0;
  let isPlaying = false;
  let timeoutId = null;

  // ==========================================================================
  // DOM Elements
  // ==========================================================================

  const container = document.getElementById('body-knows-first');
  const progressFill = document.getElementById('progress-fill');
  const replayBtn = document.getElementById('replay-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const beatCounter = document.getElementById('beat-counter');
  const beats = document.querySelectorAll('.beat');

  // ==========================================================================
  // Blob Path Animation
  // ==========================================================================

  function initBlobPaths() {
    // Set initial blob paths for all SVGs
    document.querySelectorAll('.blob-path').forEach(path => {
      path.setAttribute('d', CONFIG.blobPaths.flowing);
    });
  }

  // ==========================================================================
  // Beat Management
  // ==========================================================================

  function showBeat(beatIndex) {
    // Clamp to valid range
    beatIndex = Math.max(0, Math.min(beatIndex, CONFIG.beats.length - 1));

    // Hide all beats
    beats.forEach(beat => {
      beat.classList.remove('active', 'fade-in');
    });

    // Show target beat
    const targetBeat = document.querySelector(`.beat-${beatIndex}`);
    if (targetBeat) {
      targetBeat.classList.add('active', 'fade-in');
    }

    // Update progress
    updateProgress(beatIndex);

    // Update current beat
    currentBeat = beatIndex;

    // Update navigation buttons
    updateNavButtons();
  }

  function updateNavButtons() {
    // Update prev/next button states
    if (prevBtn) {
      prevBtn.disabled = currentBeat === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = currentBeat === CONFIG.beats.length - 1;
    }

    // Update beat counter
    if (beatCounter) {
      beatCounter.textContent = `${currentBeat + 1} / ${CONFIG.beats.length}`;
    }

    // Show replay button on last beat
    if (currentBeat === CONFIG.beats.length - 1) {
      replayBtn.classList.add('visible');
    } else {
      replayBtn.classList.remove('visible');
    }
  }

  function goToNextBeat() {
    if (currentBeat < CONFIG.beats.length - 1) {
      showBeat(currentBeat + 1);
    }
  }

  function goToPrevBeat() {
    if (currentBeat > 0) {
      showBeat(currentBeat - 1);
    }
  }

  function updateProgress(beatIndex) {
    const totalBeats = CONFIG.beats.length - 1; // Exclude final CTA beat
    const progress = (beatIndex / totalBeats) * 100;
    progressFill.style.width = `${Math.min(progress, 100)}%`;
  }

  function advanceToNextBeat() {
    const nextBeat = currentBeat + 1;

    if (nextBeat < CONFIG.beats.length) {
      showBeat(nextBeat);

      // Schedule next advance if not final beat
      const beatConfig = CONFIG.beats[nextBeat];
      if (beatConfig.duration > 0) {
        timeoutId = setTimeout(advanceToNextBeat, beatConfig.duration);
      } else {
        // Final beat reached
        onAnimationComplete();
      }
    }
  }

  // ==========================================================================
  // Playback Control
  // ==========================================================================

  function startAnimation() {
    if (isPlaying) return;

    isPlaying = true;
    currentBeat = 0;

    // Hide replay button during playback
    replayBtn.classList.remove('visible');

    // Start from first beat
    showBeat(0);

    // Schedule first advance
    const firstBeatDuration = CONFIG.beats[0].duration;
    timeoutId = setTimeout(advanceToNextBeat, firstBeatDuration);
  }

  function stopAnimation() {
    isPlaying = false;
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  }

  function replayAnimation() {
    stopAnimation();

    // Reset progress
    progressFill.style.width = '0%';

    // Small delay before restart
    setTimeout(() => {
      startAnimation();
    }, 300);
  }

  function onAnimationComplete() {
    isPlaying = false;

    // Show replay button
    replayBtn.classList.add('visible');

    // Set progress to 100%
    progressFill.style.width = '100%';
  }

  // ==========================================================================
  // Event Listeners
  // ==========================================================================

  function bindEvents() {
    // Replay button
    replayBtn.addEventListener('click', replayAnimation);

    // Navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', goToPrevBeat);
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', goToNextBeat);
    }

    // Keyboard controls
    document.addEventListener('keydown', function(e) {
      // Arrow keys for navigation
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNextBeat();
        e.preventDefault();
      }
      if (e.key === 'ArrowLeft') {
        goToPrevBeat();
        e.preventDefault();
      }
      // R for replay
      if (e.key === 'r' || e.key === 'R') {
        replayAnimation();
      }
    });

    // Click/tap on stage to advance (optional, for easier mobile use)
    const stage = document.querySelector('.stage');
    if (stage) {
      stage.addEventListener('click', function(e) {
        // Don't advance if clicking on a link or button
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
          return;
        }
        goToNextBeat();
      });
    }
  }

  // ==========================================================================
  // Initialization
  // ==========================================================================

  function init() {
    if (!container) {
      console.error('Animation container not found');
      return;
    }

    // Initialize blob paths
    initBlobPaths();

    // Bind events
    bindEvents();

    // Show first beat (manual navigation mode)
    showBeat(0);
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
