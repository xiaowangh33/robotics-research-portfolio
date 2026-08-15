/*
 * Advisor-specific copy lives in this file on purpose.
 * Replace this object to reuse the portfolio for another lab.
 */
window.PORTFOLIO_FIT = {
  shortLabel: "FSU · OPTIMAL ROBOTICS LABORATORY",
  advisor: "Christian Hubicki",
  lab: "Optimal Robotics Laboratory",
  university: "Florida State University",
  degree: "Mechanical Engineering PhD · Fall 2027",
  intro:
    "ORL is a particularly strong fit because its work treats locomotion as a coupled problem in dynamics, optimization, adaptation, and physical failure—not as policy inference in isolation.",
  connections: [
    {
      index: "01",
      title: "Failure-adaptive and risk-aware control",
      body:
        "My proposed estimator turns timing faults—stale observations, delayed actions, jitter, and missed cycles—into an explicit uncertainty signal. That creates a concrete bridge to controllers that adapt when failure becomes more likely rather than merely tolerating a fixed disturbance envelope."
    },
    {
      index: "02",
      title: "PaReMPC and fast model adaptation",
      body:
        "PaReMPC points toward adaptation that remains inside a fast, physically structured control loop. I want to study whether short-horizon state prediction and calibrated confidence can update an RL or MPC controller without making the real-time schedule itself less reliable."
    },
    {
      index: "03",
      title: "Real-time optimization",
      body:
        "The estimator is only useful if its compute cost, timestamp semantics, and worst-case latency are part of the design. My experience with 50 Hz policies over 500 Hz–2 kHz lower-level loops makes this a systems question as much as an algorithmic one."
    },
    {
      index: "04",
      title: "Hybrid locomotion and all-terrain UGVs",
      body:
        "A wheel-legged robot exposes discrete contact changes, continuous wheel motion, impacts, and changing traction in one platform. That makes ORL’s hybrid locomotion and all-terrain UGV work a natural setting for testing timing-aware prediction under real terrain transitions."
    }
  ],
  closing:
    "The intended contribution is narrow and testable: determine when timing uncertainty should change the controller’s belief, action, or risk tolerance, then validate the answer on real legged and wheel-legged hardware."
};
