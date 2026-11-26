import { useState } from "react";
import {
  Sparkles,
  Plane,
  ExternalLink,
  Code2,
  CheckCircle2,
  Server,
  Cloud,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22m1.4 9.74V9.96H5.06v8.54h2.8z" />
    </svg>
  );
}

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "rajalaxmigandadi@gmail.com";
  const holidayPlannerUrl = "https://ai-holiday-planner.trialrun.in/";
  const githubProfile = "https://github.com/RajalaxmiGandadi";
  const githubRepo = "https://github.com/RajalaxmiGandadi/holiday-planner";
  const linkedinProfile = "https://www.linkedin.com/in/rajalaxmi-gandadi";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 text-lg tracking-wider">
              R
            </div>
            <div>
              <span className="font-bold text-slate-100 tracking-tight text-lg">trialrun.in</span>
              <span className="hidden sm:inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                Showcase Hub
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={linkedinProfile}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center sm:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Full Stack &amp; Cloud-Native AI Engineer</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Rajalaxmi
              </span>
            </h1>
            <p className="max-w-3xl text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
              Crafting high-performance, full-stack microservices and intelligent Generative AI
              applications. Specialized in Java 17, Spring Boot 3, Google Gemini models, React, and
              Google Cloud Run serverless architectures.
            </p>
          </div>

          {/* Action Links & Social Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-3 justify-center sm:justify-start">


            <a
              href={linkedinProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium bg-slate-900 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <LinkedinIcon className="w-5 h-5 text-sky-400" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium bg-slate-900 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <GithubIcon className="w-5 h-5 text-slate-300" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-4 h-4 text-slate-500" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium bg-slate-900/60 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>{copiedEmail ? "Copied Email!" : email}</span>
            </button>
          </div>
        </section>

        {/* Featured Project Spotlight */}
        <section className="space-y-6" id="projects">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                Featured Flagship
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Highlighted Project
              </h2>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Live in Production
            </span>
          </div>

          {/* Project Showcase Card */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/15 transition-all" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Info Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Generative AI
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold uppercase tracking-wider">
                    Full-Stack Cloud Native
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-semibold uppercase tracking-wider">
                    Microservices
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Holiday Planner – AI Travel Assistant
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                    An intelligent, cloud-native travel companion that generates end-to-end,
                    curated holiday itineraries in real time. Powered by{" "}
                    <strong className="text-white font-medium">Google Gemini LLMs</strong> with strict
                    schema contracts, it delivers authentic airline flight routes, hotel options with
                    imagery, curated attractions, and destination weather predictions.
                  </p>
                </div>

                {/* Key Architectural Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                    <span>Multi-model cascade fallback (Gemini 2.5 Flash &rarr; 2.0 Flash)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                    <span>Java 17 &amp; Spring Boot 3 enterprise orchestration API</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                    <span>React 19 SPA with Tailwind CSS &amp; dynamic sliders</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <span>Nginx reverse-proxy &amp; Google Cloud Run serverless deployment</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {[
                    "Google Gemini API",
                    "Java 17",
                    "Spring Boot 3",
                    "React 19",
                    "Vite",
                    "Tailwind CSS",
                    "Docker",
                    "Google Cloud Run",
                    "Nginx",
                    "Cloud Build CI/CD"
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {/*<a
                    href={holidayPlannerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/25 hover:brightness-110 active:scale-95 transition-all"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>*/}
                  <a
                      href={holidayPlannerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5"
                  >
                    <Plane className="w-5 h-5" />
                    <span>Try Holiday Planner App</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                  </a>

                  <a
                    href={githubRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all border border-slate-700"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Source Code</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 shadow-inner space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">ai-holiday-planner.trialrun.in</span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                          <Plane className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Smart Route Engine</div>
                          <div className="text-xs text-slate-400">Non-stop &amp; connecting flights</div>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">
                        7+ Options
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Curated Accommodations</div>
                          <div className="text-xs text-slate-400">Budget to luxury hotel slider</div>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">
                        Verified
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-teal-500/20 text-teal-400">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Attraction Discovery</div>
                          <div className="text-xs text-slate-400">Rich Wikipedia &amp; official links</div>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono">
                        3-Col Grid
                      </span>
                    </div>
                  </div>

                  <a
                    href={holidayPlannerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full block py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 rounded-xl transition-colors border border-indigo-500/20"
                  >
                    Test Live AI Travel Search &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise & Skills Grid */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              Technical Core
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Skills &amp; Architecture Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Generative AI</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Google Gemini API, Structured JSON output schemas, zero-shot constrained prompts, multi-model fallback resiliency.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Backend Systems</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Java 17, Spring Boot 3, Spring MVC, REST API design, Jackson serialization, multi-stage microservices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Frontend UI / UX</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                React 19, Vite, Tailwind CSS, Lucide icons, responsive layout design, state management.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Cloud &amp; DevOps</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Google Cloud Run, Docker multi-stage builds, Nginx reverse proxying, Cloud Build CI/CD, GitOps.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Social Section */}
        <section className="rounded-3xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900 border border-slate-800 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Let's Connect &amp; Collaborate</h2>
          <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
            Interested in discussing full-stack development, Generative AI integration, or cloud engineering?
            Feel free to reach out directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={linkedinProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-lg transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all"
            >
              <GithubIcon className="w-5 h-5" />
              <span>Follow on GitHub</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/30 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Send an Email</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Rajalaxmi &bull; Hosted on trialrun.io</p>
      </footer>
    </div>
  );
}
