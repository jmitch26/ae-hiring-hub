"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "targets", label: "Targets & Pacing" },
  { id: "profiles", label: "Candidate Profiles" },
  { id: "process", label: "Interview Process" },
  { id: "slas", label: "SLAs & Accountability" },
  { id: "attraction", label: "Talent Attraction" },
  { id: "qoh", label: "Quality of Hire" },
  { id: "challenges", label: "Current Challenges" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s.el && s.el.offsetTop <= scrollPos) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F8F9FA" }}>
      {/* Top header bar */}
      <header
        style={{
          background: "#1B2A3B",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "3px solid #FF4A00",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: "#FF4A00",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: 700,
                color: "white",
              }}
            >
              Z
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 }}>AE Hiring Hub</div>
              <div style={{ fontSize: "0.7rem", color: "#94A3B8", lineHeight: 1.2 }}>
                Last updated: May 2026
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav style={{ display: "flex", gap: 4 }} className="hidden-mobile">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  padding: "6px 12px",
                  borderRadius: 6,
                  fontSize: "0.78rem",
                  fontWeight: activeSection === item.id ? 600 : 400,
                  background: activeSection === item.id ? "rgba(255,74,0,0.2)" : "transparent",
                  color: activeSection === item.id ? "#FF8A65" : "#CBD5E1",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: 20,
              display: "none",
            }}
            className="show-mobile"
          >
            ☰
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "#253545",
              padding: "8px 0",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 24px",
                  background: "transparent",
                  border: "none",
                  color: activeSection === item.id ? "#FF8A65" : "#CBD5E1",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px 80px" }}>

        {/* ─── OVERVIEW ─── */}
        <section id="overview" style={{ marginBottom: 48 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #1B2A3B 0%, #2D4A6B 100%)",
              borderRadius: 16,
              padding: "40px 40px",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 200,
                height: 200,
                background: "rgba(255,74,0,0.1)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -40,
                right: 80,
                width: 150,
                height: 150,
                background: "rgba(255,74,0,0.05)",
                borderRadius: "50%",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#FF4A00",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  marginBottom: 16,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Single Source of Truth
              </div>
              <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
                AE Hiring Hub
              </h1>
              <p style={{ color: "#CBD5E1", maxWidth: 600, lineHeight: 1.7, marginBottom: 24, fontSize: "0.95rem" }}>
                This page is the definitive reference for Account Executive hiring at Zapier — covering
                our hiring targets, candidate profiles, interview process, SLAs, and talent attraction
                strategy. It reflects both current practices and active evolutions as of Q2 2026.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  { label: "DRI", value: "Bonnie Dilber, Jade Austin, Navid Zolfaghari" },
                  { label: "Support", value: "Darcell E., Em B., Matt O., Kyungho R., Ryan K., Alex K." },
                  { label: "Timeline", value: "EOY 2026" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      padding: "8px 14px",
                      fontSize: "0.8rem",
                    }}
                  >
                    <span style={{ color: "#94A3B8", marginRight: 6 }}>{item.label}:</span>
                    <span style={{ color: "white", fontWeight: 500 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TARGETS & PACING ─── */}
        <section id="targets" style={{ marginBottom: 48 }}>
          <SectionHeader
            label="Targets & Pacing"
            title="Hiring Goals & Monthly Cadence"
            subtitle="EOY targets by segment with monthly pacing to hit plan"
          />

          {/* Monthly pacing callout */}
          <div
            style={{
              background: "white",
              border: "2px solid #FF4A00",
              borderRadius: 12,
              padding: "24px 28px",
              marginBottom: 20,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#FF4A00", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 4 }}>
                Monthly Hiring Target
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#1B2A3B", lineHeight: 1 }}>
                4 AEs
                <span style={{ fontSize: "1rem", fontWeight: 400, color: "#64748B", marginLeft: 8 }}>per month</span>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: 10 }}>Ideal monthly mix:</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[
                  { segment: "Mid Market", count: "2", color: "#3B82F6", bg: "#EFF6FF" },
                  { segment: "Enterprise", count: "1", color: "#8B5CF6", bg: "#F5F3FF" },
                  { segment: "Large Enterprise", count: "0.5", color: "#F59E0B", bg: "#FFFBEB" },
                ].map((s) => (
                  <div
                    key={s.segment}
                    style={{
                      background: s.bg,
                      border: `1px solid ${s.color}30`,
                      borderRadius: 8,
                      padding: "10px 16px",
                      textAlign: "center",
                      minWidth: 100,
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, color: s.color }}>{s.count}</div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", marginTop: 2 }}>{s.segment}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* EOY segment goals */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {[
              {
                segment: "Large Enterprise (LENT)",
                color: "#F59E0B",
                bg: "#FFFBEB",
                border: "#FCD34D",
                goal: "1 pod → 8 AEs total",
                detail: "5 currently in place → 8 by EOY. 3 net hires. Effectively one LENT pod.",
                note: "Opportunistic until Q4 (5 in place until Sept 2026, add 3 in Q4)",
              },
              {
                segment: "Enterprise (ENT)",
                color: "#8B5CF6",
                bg: "#F5F3FF",
                border: "#C4B5FD",
                goal: "2 pods → 13 AEs total",
                detail: "6 currently in place → 8 by end of H1 / 14 by EOY. +4 in Q3, +2 in Q4.",
                note: "Target high ratio of internal fills from MM",
              },
              {
                segment: "Mid Market (MM)",
                color: "#3B82F6",
                bg: "#EFF6FF",
                border: "#93C5FD",
                goal: "3 pods → 23 AEs total",
                detail: "15 currently in place → 23 by EOY. Primary hiring volume segment.",
                note: "Take more shots on MM; expect 30–35% attrition due to promo paths & riskier profiles",
              },
            ].map((item) => (
              <div
                key={item.segment}
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                  borderRadius: 12,
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: item.color,
                    color: "white",
                    padding: "3px 10px",
                    borderRadius: 20,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    letterSpacing: "0.03em",
                  }}
                >
                  {item.segment}
                </div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#1B2A3B", marginBottom: 6 }}>
                  {item.goal}
                </div>
                <div style={{ fontSize: "0.825rem", color: "#475569", marginBottom: 8, lineHeight: 1.5 }}>
                  {item.detail}
                </div>
                <div
                  style={{
                    fontSize: "0.775rem",
                    color: item.color,
                    background: "rgba(255,255,255,0.6)",
                    borderRadius: 6,
                    padding: "6px 10px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.note}
                </div>
              </div>
            ))}
          </div>

          {/* 2026 progress */}
          <div className="section-card" style={{ marginTop: 20 }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1B2A3B", marginBottom: 4 }}>
              2026 Hires to Date
            </h3>
            <p style={{ fontSize: "0.825rem", color: "#64748B", marginBottom: 16 }}>
              2 AE hires against a projected 20 total AEs for the year
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { role: "Mid Market AE", count: 0 },
                { role: "Enterprise AE", count: 1 },
                { role: "Large Enterprise AE", count: 1 },
              ].map((r) => (
                <div
                  key={r.role}
                  style={{
                    background: "#F1F5F9",
                    borderRadius: 6,
                    padding: "6px 12px",
                    fontSize: "0.8rem",
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      background: "#1B2A3B",
                      color: "white",
                      borderRadius: 4,
                      padding: "1px 6px",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  >
                    {r.count}
                  </span>
                  <span style={{ color: "#475569" }}>{r.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CANDIDATE PROFILES ─── */}
        <section id="profiles" style={{ marginBottom: 48 }}>
          <SectionHeader
            label="Candidate Profiles"
            title="Who We're Hiring"
            subtitle="Updated profiles for each AE segment — reflecting expanded criteria as of April 2026"
          />

          {/* Enterprise / LENT */}
          <div className="section-card" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div
                style={{
                  background: "#F5F3FF",
                  border: "1px solid #C4B5FD",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#7C3AED",
                }}
              >
                Enterprise / LENT AE
              </div>
              <span style={{ fontSize: "0.825rem", color: "#64748B" }}>5+ yrs (ENT) · 8+ yrs (LENT)</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#475569", marginBottom: 16, lineHeight: 1.6 }}>
              Continue targeting strong sales experience while expanding the profile. Now genuinely open to
              hardware, professional services, Solutions Architecture, consulting, and investment banking.
              Non-sales backgrounds require adoptive-level AI fluency at minimum.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table className="criteria-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Experience</td>
                    <td>5+ yrs (ENT) or 8+ yrs (LENT); direct enterprise sales OR consultants / SEs / technical customer-facing roles with equivalent complexity</td>
                  </tr>
                  <tr>
                    <td>Deal Size</td>
                    <td>Demonstrated history closing $250K+ ARR deals or managing equivalent-value consulting engagements; more flexible here if risk in sales experience is offset by AI fluency</td>
                  </tr>
                  <tr>
                    <td>Industry</td>
                    <td>SaaS preferred; hardware, professional services, or deep-tech now acceptable if deal complexity is comparable</td>
                  </tr>
                  <tr>
                    <td>Sales Motion</td>
                    <td>Multi-threaded, multi-stakeholder; comfort navigating 6–12 month cycles</td>
                  </tr>
                  <tr>
                    <td>AI Fluency</td>
                    <td><strong>Adoptive</strong> is the target for non-traditional profiles (actively uses AI in workflow); <strong>Capable</strong> for more traditional profiles. Slope matters more than snapshot — growth demonstrated during the process is valid evidence</td>
                  </tr>
                  <tr>
                    <td>Curiosity Signal</td>
                    <td>Tinkering on nights/weekends; self-taught projects; engaged in AI/tech communities; asks great questions in process</td>
                  </tr>
                  <tr>
                    <td>Hustle Signal</td>
                    <td>Evidence of making things happen without a roadmap; low ego, high output indicators</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Midmarket */}
          <div className="section-card" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div
                style={{
                  background: "#EFF6FF",
                  border: "1px solid #93C5FD",
                  borderRadius: 8,
                  padding: "6px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#1D4ED8",
                }}
              >
                Mid Market AE
              </div>
              <span style={{ fontSize: "0.825rem", color: "#64748B" }}>2–5 yrs · Open to unconventional backgrounds</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#475569", marginBottom: 16, lineHeight: 1.6 }}>
              Very open to non-sellers and unconventional backgrounds — community builders, teachers, consultants,
              finance professionals. Curiosity, hustle, and AI fluency over pedigree.
            </p>
            <div style={{ overflowX: "auto" }}>
              <table className="criteria-table">
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Experience</td>
                    <td>2–5 years; direct sales preferred but not required; any role demonstrating persuasion, communication, and customer empathy (consulting, investment banking, teaching, etc.)</td>
                  </tr>
                  <tr>
                    <td>Industry</td>
                    <td>Open; background in tech, education, community, or any field where the candidate has built something or taught others</td>
                  </tr>
                  <tr>
                    <td>AI Fluency</td>
                    <td><strong>Adoptive</strong> is the target for non-traditional profiles (actively building or automating with AI, not just using ChatGPT for basic tasks); <strong>Capable</strong> for more traditional profiles. Slope matters more than snapshot</td>
                  </tr>
                  <tr>
                    <td>Curiosity Signal</td>
                    <td>Tinkering on nights/weekends; self-taught projects; engaged in AI/tech communities; asks great questions in process</td>
                  </tr>
                  <tr>
                    <td>Hustle Signal</td>
                    <td>Evidence of making things happen without a roadmap; low ego, high output indicators</td>
                  </tr>
                  <tr>
                    <td>Growth Trajectory</td>
                    <td>Slope matters more than snapshot — growth demonstrated during the hiring process itself is valid evidence</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              style={{
                background: "#FFF7ED",
                border: "1px solid #FED7AA",
                borderRadius: 8,
                padding: "10px 14px",
                marginTop: 14,
                fontSize: "0.8rem",
                color: "#92400E",
                lineHeight: 1.5,
              }}
            >
              <strong>Note:</strong> Adoptive-level AI fluency will continue to narrow this funnel — stay tool-agnostic and be comfortable with personal use cases. We are also considering evolving the presentation stage as the current bar may be too rigorous.
            </div>
          </div>

          {/* AI Fluency levels */}
          <div className="section-card" style={{ marginBottom: 20 }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1B2A3B", marginBottom: 14 }}>AI Fluency Levels Defined</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {[
                {
                  level: "Transformative",
                  desc: "Building with OpenAI, Claude, or automation projects; creating workflows and tools",
                  color: "#059669",
                  bg: "#ECFDF5",
                },
                {
                  level: "Adoptive",
                  desc: "Actively uses AI in workflow for real tasks; exploring and building personal use cases",
                  color: "#2563EB",
                  bg: "#EFF6FF",
                },
                {
                  level: "Capable",
                  desc: "Comfortable using AI tools; understands the space but not deeply building with it",
                  color: "#7C3AED",
                  bg: "#F5F3FF",
                },
              ].map((item) => (
                <div
                  key={item.level}
                  style={{
                    background: item.bg,
                    borderRadius: 8,
                    padding: "14px",
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <div style={{ fontWeight: 700, color: item.color, fontSize: "0.85rem", marginBottom: 4 }}>
                    {item.level}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#475569", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profiles being tested */}
          <div className="section-card">
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1B2A3B", marginBottom: 14 }}>
              Profiles We Are Actively Testing
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  num: "1",
                  name: "Core ICP",
                  desc: "Strong technical background + enterprise selling experience with a blend of startup fit and enterprise depth.",
                  examples: "John Gauntlet, Ben Arnon",
                  status: "Performing well",
                  statusColor: "#059669",
                  statusBg: "#ECFDF5",
                },
                {
                  num: "2",
                  name: "Very Technical / Super-User",
                  desc: "Highly technical or Zapier super-user without strong enterprise sales background.",
                  examples: "David Laderbergh, Nate Olson",
                  status: "Not fit for LENT/ENT",
                  statusColor: "#DC2626",
                  statusBg: "#FEF2F2",
                },
                {
                  num: "3",
                  name: "Seasoned Seller / Lower Tech",
                  desc: "Experienced enterprise sellers who may lack deep technical backgrounds but are curious and open to learning.",
                  examples: "TBD — leadership interest in testing",
                  status: "Under testing",
                  statusColor: "#D97706",
                  statusBg: "#FFFBEB",
                },
                {
                  num: "4",
                  name: "Verticalized Seller",
                  desc: "Industry-focused sellers. If a candidate demonstrates strong technical curiosity and can translate value across stakeholder levels, this could meaningfully expand our pool.",
                  examples: "Gustavo Rearte",
                  status: "Expanding",
                  statusColor: "#2563EB",
                  statusBg: "#EFF6FF",
                },
              ].map((p) => (
                <div
                  key={p.num}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "14px",
                    background: "#F8FAFC",
                    borderRadius: 8,
                    border: "1px solid #E2E8F0",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      background: "#1B2A3B",
                      color: "white",
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      flexShrink: 0,
                    }}
                  >
                    {p.num}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#1B2A3B" }}>{p.name}</span>
                      <span
                        style={{
                          background: p.statusBg,
                          color: p.statusColor,
                          padding: "2px 8px",
                          borderRadius: 20,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                        }}
                      >
                        {p.status}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.825rem", color: "#475569", marginBottom: 4, lineHeight: 1.5 }}>{p.desc}</div>
                    <div style={{ fontSize: "0.775rem", color: "#94A3B8" }}>Examples: {p.examples}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INTERVIEW PROCESS ─── */}
        <section id="process" style={{ marginBottom: 48 }}>
          <SectionHeader
            label="Interview Process"
            title="Streamlined 4-Stage Process"
            subtitle="Applies to all L1–L5 AE roles — condensed to improve speed without sacrificing signal"
          />

          <div className="section-card" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                {
                  stage: "Stage 1",
                  title: "Recruiter Screen",
                  desc: "Initial alignment on background, motivations, and role fit. Adds a coachability prompt: 'What feedback did you receive recently, and what specifically changed in your behavior afterward?'",
                  icon: "👤",
                  color: "#3B82F6",
                },
                {
                  stage: "Stage 2",
                  title: "Job Fit",
                  desc: "Work history (previously a separate chronological interview) is now incorporated here. Hiring Managers are encouraged to cut this stage short if the candidate is clearly not a strong fit.",
                  icon: "🤝",
                  color: "#8B5CF6",
                },
                {
                  stage: "Stage 3",
                  title: "Presentation / Technical",
                  desc: "Candidates build a workflow on Zapier, with AI. Re-weighted toward insight-led discovery. Includes a required POV/Insights moment — we want to see candidates can give customers a reason to keep talking before the demo. Scoring includes: insight creation, value quantification, and guidance toward a clear next step.",
                  icon: "💡",
                  color: "#F59E0B",
                },
                {
                  stage: "Stage 4",
                  title: "Bar Raiser",
                  desc: "Sr. Leader + Bar Raiser. Default to pre-scheduling this after the Presentation to compress cycle time. Live references completed within 72 hours of Bar Raiser.",
                  icon: "⭐",
                  color: "#10B981",
                },
              ].map((item, idx, arr) => (
                <div
                  key={item.stage}
                  style={{
                    display: "flex",
                    gap: 16,
                    paddingBottom: idx < arr.length - 1 ? 20 : 0,
                    marginBottom: idx < arr.length - 1 ? 20 : 0,
                    borderBottom: idx < arr.length - 1 ? "1px dashed #E2E8F0" : "none",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: item.color + "15",
                        border: `2px solid ${item.color}40`,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                      }}
                    >
                      {item.icon}
                    </div>
                    {idx < arr.length - 1 && (
                      <div style={{ width: 2, flex: 1, background: "#E2E8F0", marginTop: 8 }} />
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: item.color,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.stage}
                      </span>
                    </div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1B2A3B", marginBottom: 6 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.825rem", color: "#475569", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key process principles */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              {
                title: "Coachability Assessment",
                desc: "Assess via observable behavior change — not self-report. Score what actually changes after one piece of feedback.",
                icon: "🔄",
                color: "#3B82F6",
              },
              {
                title: "Executive Presence",
                desc: "Redefine as clarity + control (not polish). Explicitly assess: would you trust this person to run an exec call?",
                icon: "🎯",
                color: "#8B5CF6",
              },
              {
                title: "Discovery Prompt",
                desc: "Candidates run discovery on their current/most recent product — not Zapier. This reduces unfamiliarity noise and evaluates real behaviors.",
                icon: "💬",
                color: "#F59E0B",
              },
              {
                title: "Target: <30 Days",
                desc: "Default to pre-scheduling remaining interviews post-Job Fit. Strong candidates (3.7+ scored) withdraw by day 26–29.",
                icon: "⚡",
                color: "#10B981",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: 10,
                  padding: "16px",
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <div style={{ fontSize: 20, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1B2A3B", marginBottom: 4 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#64748B", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SLAs & ACCOUNTABILITY ─── */}
        <section id="slas" style={{ marginBottom: 48 }}>
          <SectionHeader
            label="SLAs & Accountability"
            title="Hiring Team Service Level Agreements"
            subtitle="Enforced timelines for interviewers, hiring managers, and recruiters"
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 20 }}>
            {[
              { action: "Calibration profile feedback", deadline: "24 hours", icon: "📋", color: "#3B82F6" },
              { action: "Interviewer decision (communicate)", deadline: "4 hours post-interview", icon: "✅", color: "#10B981" },
              { action: "Scorecard submission", deadline: "24 hours post-interview", icon: "📝", color: "#8B5CF6" },
              { action: "Live references", deadline: "72 hours post–Bar Raiser", icon: "📞", color: "#F59E0B" },
              { action: "Manager CFH scorecard", deadline: "Before Bar Raiser", icon: "👔", color: "#EF4444" },
              { action: "Sourced candidate call scheduling", deadline: "24 hours of expressed interest", icon: "📅", color: "#06B6D4" },
            ].map((item) => (
              <div
                key={item.action}
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: 10,
                  padding: "16px",
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: item.color + "15",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.775rem", color: "#64748B", marginBottom: 2 }}>{item.action}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.875rem", color: item.color }}>{item.deadline}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Candidate engagement SLA */}
          <div
            className="section-card"
            style={{ marginBottom: 20, borderLeft: "4px solid #FF4A00" }}
          >
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1B2A3B", marginBottom: 8 }}>
              Candidate Engagement Cadence
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#FF4A00", marginBottom: 4 }}>AE + Sales Manager Roles</div>
                <div style={{ fontSize: "0.825rem", color: "#475569", lineHeight: 1.6 }}>
                  Maintain a <strong>48-hour contact cadence</strong> (owned by Recruiter/HM depending on stage; Recruiting orchestrates). Use texting in addition to email/calls. Commit to <strong>5–7 touchpoints for passive candidates</strong>.
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#FF4A00", marginBottom: 4 }}>Executive Engagement</div>
                <div style={{ fontSize: "0.825rem", color: "#475569", lineHeight: 1.6 }}>
                  Leverage Wade & Navid for <strong>targeted candidate engagement</strong> where it meaningfully increases close rates. Engage managers weekly with <strong>5–10 follow-up outreach touches</strong> to top candidates.
                </div>
              </div>
            </div>
          </div>

          {/* Escalation path */}
          <div className="section-card">
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1B2A3B", marginBottom: 14 }}>
              SLA Escalation Path
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { step: "1", action: "Initial reminder in hiring channel", color: "#3B82F6" },
                { step: "2", action: "Reminder + Manager + Bonnie tagged in", color: "#F59E0B" },
                { step: "3", action: "Reminder + Navid (expected resolution by EOD)", color: "#EF4444" },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 14px",
                    background: "#F8FAFC",
                    borderRadius: 8,
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div
                    style={{
                      background: item.color,
                      color: "white",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.step}
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#1B2A3B" }}>{item.action}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TALENT ATTRACTION ─── */}
        <section id="attraction" style={{ marginBottom: 48 }}>
          <SectionHeader
            label="Talent Attraction"
            title="Sourcing & Attraction Strategies"
            subtitle="Active programs and initiatives to expand the AE pipeline — Q2 2026"
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {[
              {
                icon: "💸",
                title: "Referral Program",
                status: "Active — through June 30, 2026",
                statusColor: "#059669",
                statusBg: "#ECFDF5",
                owner: "Bonnie",
                bullets: [
                  "Internal bonus: $5,000 (up from $1,500) for any Zapien referral hired and completing 90 days",
                  "External bonus: $5,000 for anyone outside Zapier whose referral is hired and completes 90 days",
                  "Covers AE, Automation Strategist, Sales Leadership, Sales Engineer (pre-sales)",
                ],
              },
              {
                icon: "🏆",
                title: "AI Builder Contest",
                status: "Target launch: May 2026",
                statusColor: "#D97706",
                statusBg: "#FFFBEB",
                owner: "Bonnie / Jade / Navid",
                bullets: [
                  "$25,000 prize for the winner",
                  "Candidates share what they've built — serves as a sourcing funnel",
                  "Designed to attract AI-fluent, builder-minded candidates not in traditional sales pipelines",
                  "Secondary benefit: marketing opportunity for Zapier",
                ],
              },
              {
                icon: "🌐",
                title: "Community Engagement",
                status: "Timeline TBD",
                statusColor: "#64748B",
                statusBg: "#F1F5F9",
                owner: "Bonnie (Dan S. to assist)",
                bullets: [
                  "Active engagement in AI/tech/Zapier communities: Discord, Reddit, Claude Community, etc.",
                  "Reach out to non-technical people actively building with AI",
                  "Identify people sharing solutions they're building",
                ],
              },
              {
                icon: "🍽️",
                title: "Seller Dinners",
                status: "Ongoing — first event: Atlanta",
                statusColor: "#2563EB",
                statusBg: "#EFF6FF",
                owner: "Jade / Ryan K. (support: Darcell, Em, Parsa)",
                bullets: [
                  "Host dinners connecting current Zapier sellers with strong candidates aligned to ICP",
                  "Conversations around AI and opportunities at Zapier",
                  "Build warm pipeline through peer-to-peer engagement",
                ],
              },
              {
                icon: "🔄",
                title: "Internal Pathways",
                status: "Timeline TBD",
                statusColor: "#64748B",
                statusBg: "#F1F5F9",
                owner: "TBD",
                bullets: [
                  "Right person / wrong seat: Zapiens feeling stagnant or maximized elsewhere",
                  "Product experts: AI engineers, support team, others with deep product knowledge + sales interest",
                  "Options: 3-month secondment (job waiting if it doesn't pan out), outreach to regrettable exits / Zapier alumni",
                ],
              },
              {
                icon: "🤖",
                title: "GTM Generalist Application",
                status: "Active",
                statusColor: "#059669",
                statusBg: "#ECFDF5",
                owner: "Recruiting",
                bullets: [
                  "Designed to attract non-traditional profiles who don't self-select into role-specific postings",
                  "Captures candidates interested in GTM broadly who may fit AE and other revenue roles",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: 12,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.925rem", color: "#1B2A3B", marginBottom: 4 }}>
                      {item.title}
                    </div>
                    <span
                      style={{
                        background: item.statusBg,
                        color: item.statusColor,
                        padding: "2px 8px",
                        borderRadius: 20,
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
                <ul style={{ flex: 1, margin: 0, paddingLeft: 18 }}>
                  {item.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: "0.8rem", color: "#475569", marginBottom: 4, lineHeight: 1.5 }}>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 12, fontSize: "0.75rem", color: "#94A3B8", borderTop: "1px solid #F1F5F9", paddingTop: 10 }}>
                  Owner: <span style={{ color: "#64748B", fontWeight: 500 }}>{item.owner}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── QUALITY OF HIRE ─── */}
        <section id="qoh" style={{ marginBottom: 48 }}>
          <SectionHeader
            label="Quality of Hire"
            title="What Differentiates Top Performers"
            subtitle="Based on 2025 AE Quality of Hire Readout — 12 hires analyzed, 7 top performers vs. 5 low performers"
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 20 }}>
            <div
              style={{
                background: "#ECFDF5",
                border: "1px solid #6EE7B7",
                borderRadius: 12,
                padding: "20px",
              }}
            >
              <div style={{ fontWeight: 700, color: "#065F46", fontSize: "0.9rem", marginBottom: 12 }}>
                ✅ Keep / Double Down
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.825rem", color: "#047857" }}>
                {[
                  "Insight-led discovery (not just good questions)",
                  "Meeting control and clarity",
                  "Observable coachability (visible behavior change)",
                  "Stakeholder navigation and multi-threading",
                  "Formal SaaS experience",
                  "Well-validated startup experience",
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: 5, lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "#FEF2F2",
                border: "1px solid #FECACA",
                borderRadius: 12,
                padding: "20px",
              }}
            >
              <div style={{ fontWeight: 700, color: "#7F1D1D", fontSize: "0.9rem", marginBottom: 12 }}>
                ⚠️ De-Emphasize
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.825rem", color: "#991B1B" }}>
                {[
                  "Product knowledge alone (without business case building)",
                  "Energy without evidence of outcomes",
                  "Resume labels without transferability testing",
                  "\"Spikes\" that don't connect to full-cycle selling",
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: 5, lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "#EFF6FF",
                border: "1px solid #BFDBFE",
                borderRadius: 12,
                padding: "20px",
              }}
            >
              <div style={{ fontWeight: 700, color: "#1E3A8A", fontSize: "0.9rem", marginBottom: 12 }}>
                🔍 Tighten Evaluation
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.825rem", color: "#1E40AF" }}>
                {[
                  "POV/Insight requirement (must give customer a reason to keep talking)",
                  "Time management and quality of close",
                  "Coaching dependency signals",
                  "Communication style risk (persistent vs. annoying)",
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: 5, lineHeight: 1.5 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* QoH rubric */}
          <div className="section-card">
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1B2A3B", marginBottom: 14 }}>
              QoH Rubric: What Differentiates Top vs. Low Performers
            </h3>
            <div style={{ overflowX: "auto" }}>
              <table className="criteria-table">
                <thead>
                  <tr>
                    <th style={{ minWidth: 160 }}>Dimension</th>
                    <th>Top Performers</th>
                    <th>Lower Performers</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sales Discovery", "Deep, layered, metric-driven, customer-led", "Verbose, uneven depth, sometimes self-led"],
                    ["POV & Value", "Clear point of view; anticipates value before demo", "Often reactive; value emerges late or inconsistently"],
                    ["Learning Loop", "Actively seeks feedback and applies it visibly", "Aware of feedback, but slower translation into behavior"],
                    ["Self-Awareness", "Can name weaknesses and mitigation strategies", "Can name weaknesses, with less evidence of behavior change"],
                    ["Use of Tech/AI", "Strategic, outcome-driven, contextual", "Tool-fluent but sometimes feature-forward"],
                    ["Collaboration", "Pulls in others intentionally to accelerate outcomes", "Either over-indexes on independence or over-involves"],
                    ["Executive Presence", "Concise, structured, directional", "Long-winded, tangential, or overly tactical"],
                    ["Project Management", "Organized, effective management of entire sales cycle; knows when/how to bring the right people in", "Disjointed processes, missing follow-up opportunities, ineffective stakeholder and deal management"],
                  ].map(([dim, top, low], i) => (
                    <tr key={i}>
                      <td>{dim}</td>
                      <td>
                        <span style={{ color: "#047857", fontSize: "0.825rem" }}>{top}</span>
                      </td>
                      <td>
                        <span style={{ color: "#991B1B", fontSize: "0.825rem" }}>{low}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5 top performer traits */}
          <div className="section-card" style={{ marginTop: 16 }}>
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1B2A3B", marginBottom: 14 }}>
              5 Repeatable Strengths of Top Performers
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {[
                {
                  title: "Curiosity + Synthesis",
                  desc: "Learn fast, ask layered questions, turn what they hear into a clear point of view — not just more questions.",
                  icon: "🔬",
                },
                {
                  title: "Strong Sales Acumen",
                  desc: "Quantify impact, clarify urgency, and link customer pain to a business case and next step.",
                  icon: "💼",
                },
                {
                  title: "Startup Fit",
                  desc: "Operate well without perfect structure, take accountability, show strong 'motor' with practical deal project management.",
                  icon: "🚀",
                },
                {
                  title: "Cross-functional Leverage",
                  desc: "Know when and how to pull in SEs, execs, product, and others without relying on hero mode.",
                  icon: "🤝",
                },
                {
                  title: "Coachability + Self-Awareness",
                  desc: "Can name gaps — and more importantly, show visible behavior change when given feedback.",
                  icon: "📈",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: 8,
                    padding: "14px",
                  }}
                >
                  <div style={{ fontSize: 20, marginBottom: 8 }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.825rem", color: "#1B2A3B", marginBottom: 4 }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "0.775rem", color: "#64748B", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CURRENT CHALLENGES ─── */}
        <section id="challenges" style={{ marginBottom: 48 }}>
          <SectionHeader
            label="Current Challenges"
            title="State of AE Hiring — April 2026"
            subtitle="Headline: this is not primarily a pipeline volume problem — it's an alignment problem across hiring profile, EVP, and enablement"
          />

          <div
            style={{
              background: "#1B2A3B",
              borderRadius: 12,
              padding: "20px 24px",
              marginBottom: 20,
              color: "white",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#94A3B8", marginBottom: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              TLDR
            </div>
            <p style={{ fontSize: "0.875rem", color: "#CBD5E1", lineHeight: 1.7, margin: 0 }}>
              We do not primarily have a pipeline volume problem — we have an alignment problem across hiring profile,
              enablement, and EVP. Until those are reconciled, we will keep burning candidate volume without materially
              improving hiring outcomes. <strong style={{ color: "white" }}>The goal is ramped reps, not filled seats.</strong>
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 }}>
            {[
              {
                num: "1",
                title: "Profile: Hiring bar may be too narrow",
                color: "#EF4444",
                bg: "#FEF2F2",
                points: [
                  "1,458 candidates engaged in 2026 → 167 recruiter screens → 79 job fits → 20 presentations → 2 hires",
                  "Job fit passthrough rate: 28% (target: 40–50%); Presentation passthrough: 33% (target: 50–60%)",
                  "AI fluency bar disproportionately screens out seasoned enterprise sellers with needed deal size and relationship skills",
                  "Over 7,000 applicants engaged in the past year → 800+ candidates met → only 21 total hires",
                ],
              },
              {
                num: "2",
                title: "EVP: Zapier opportunity isn't compelling enough to target candidates",
                color: "#F59E0B",
                bg: "#FFFBEB",
                points: [
                  "Outbound reply rates: 4–13% for AE roles vs. 20–50% for other roles sent by the same recruiters",
                  "~1/3 of candidates who enter the process opt out after recruiter screen or job fit",
                  "Concerns around attainment, ramp time, and likelihood of success are not being overcome by compensation changes",
                  "Time to hire: 59 days for AE vs. 43 for all Sales/Success and 34 across all biz hiring",
                ],
              },
              {
                num: "3",
                title: "Process: Pass-thru rates remain below target",
                color: "#3B82F6",
                bg: "#EFF6FF",
                points: [
                  "28% passthrough at presentation stage; candidates report not consistently feeling set up for success",
                  "May be missing high-potential candidates due to a too-rigorous presentation bar",
                  "Sourcing response rate: 10.4% vs. 27.4% across Zapier overall",
                  "Sourcing conversion rate: 7.4% vs. 12.9% across Zapier overall",
                ],
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: 12,
                  padding: "20px",
                  borderLeft: `4px solid ${item.color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div
                    style={{
                      background: item.bg,
                      color: item.color,
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.num}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "0.925rem", color: "#1B2A3B" }}>{item.title}</div>
                </div>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {item.points.map((p, i) => (
                    <li key={i} style={{ fontSize: "0.825rem", color: "#475569", marginBottom: 5, lineHeight: 1.5 }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Funnel data */}
          <div className="section-card">
            <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1B2A3B", marginBottom: 14 }}>
              Funnel Data by Segment (Oct 2025 – Apr 2026)
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {[
                {
                  segment: "Enterprise AE",
                  color: "#8B5CF6",
                  rows: [
                    ["Inbound", "1,221 apps", "33 to job fit (2.7%)", "1 hire"],
                    ["Agency", "20 apps", "10 to job fit (50%)", "0 hires"],
                    ["Sourced", "53 screens", "17 to job fit (32%)", "0 hires"],
                    ["Referral", "32 apps", "6 to job fit (19%)", "0 hires"],
                    ["Total", "1,326", "66 to job fit (5%)", "1 hire"],
                  ],
                },
                {
                  segment: "Mid Market AE",
                  color: "#3B82F6",
                  rows: [
                    ["Inbound", "678 apps", "26 to job fit", "0 hires"],
                    ["Agency", "4 apps", "0 to job fit", "0 hires"],
                    ["Sourced", "40 screens", "15 to job fit", "0 hires"],
                    ["Referral", "19 apps", "2 to job fit", "0 hires"],
                    ["Total", "741", "43 to job fit", "0 hires"],
                  ],
                },
                {
                  segment: "Large Enterprise AE",
                  color: "#F59E0B",
                  rows: [
                    ["Inbound", "330 apps", "9 to job fit", "0 hires"],
                    ["Agency", "21 apps", "7 to job fit", "1 hire"],
                    ["Sourced", "24 screens", "10 to job fit", "0 hires"],
                    ["Referral", "8 apps", "1 to job fit", "1 hire"],
                    ["Total", "383", "27 to job fit", "2 hires"],
                  ],
                },
              ].map((table) => (
                <div key={table.segment}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      color: table.color,
                      marginBottom: 8,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {table.segment}
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.775rem" }}>
                    <thead>
                      <tr>
                        {["Source", "Volume", "Advancement", "Hired"].map((h) => (
                          <th
                            key={h}
                            style={{
                              background: "#F1F5F9",
                              color: "#475569",
                              padding: "6px 8px",
                              textAlign: "left",
                              fontWeight: 600,
                              fontSize: "0.7rem",
                              borderBottom: "1px solid #E2E8F0",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, i) => (
                        <tr
                          key={i}
                          style={{
                            background: i === table.rows.length - 1 ? "#F8FAFC" : "white",
                            fontWeight: i === table.rows.length - 1 ? 700 : 400,
                          }}
                        >
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              style={{
                                padding: "6px 8px",
                                borderBottom: "1px solid #F1F5F9",
                                color: "#1B2A3B",
                              }}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            color: "#94A3B8",
            fontSize: "0.775rem",
            paddingTop: 24,
            borderTop: "1px solid #E2E8F0",
          }}
        >
          AE Hiring Hub · Zapier · Last updated May 2026 · DRI: Bonnie Dilber, Jade Austin, Navid Zolfaghari
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          display: "inline-block",
          background: "#FF4A00",
          color: "white",
          padding: "3px 10px",
          borderRadius: 20,
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1B2A3B", marginBottom: 4, lineHeight: 1.3 }}>
        {title}
      </h2>
      <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.5 }}>{subtitle}</p>
    </div>
  );
}
