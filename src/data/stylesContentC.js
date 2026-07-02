    export const stylesContentC = {
  17: {
    scene1: {
      title: "The Cost of Milliseconds",
      subtitle: "A Quantitative Analysis of Network Latency vs. User Session Duration",
      low: {
        beat1: {
          visualHtml: `<div class="font-serif text-[6cqw] text-[#7f1d1d] font-bold border-b border-[#111111]/10 pb-[1cqw] mb-[1cqw] animate-spring-scale">100ms</div>`,
          title: "The Latency Threshold",
          desc: "Initial telemetry shows user drop-off begins far earlier than previously hypothesized."
        },
        beat2: {
          visualHtml: `<div class="font-serif text-[6cqw] text-[#7f1d1d] font-bold border-b border-[#111111]/10 pb-[1cqw] mb-[1cqw] animate-spring-scale">100ms <span class="text-[3cqw] text-[#4b5563] font-normal">➔ +8% Drop</span></div>`,
          title: "The Latency Threshold",
          desc: "Initial telemetry shows user drop-off begins far earlier than previously hypothesized.",
          subdesc: "A clear non-linear correlation exists between response delay and premature session termination."
        },
        beat3: {
          visualHtml: `<div class="font-serif text-[6cqw] text-[#7f1d1d] font-bold border-b border-[#111111]/10 pb-[1cqw] mb-[1cqw] animate-spring-scale">100ms <span class="text-[3cqw] text-[#4b5563] font-normal">➔ +8%</span> <span class="text-[3cqw] text-[#7f1d1d] font-bold">➔ 300ms (+32%)</span></div>`,
          title: "The Latency Threshold",
          desc: "Initial telemetry shows user drop-off begins far earlier than previously hypothesized.",
          subdesc: "A clear non-linear correlation exists between response delay and premature session termination.",
          punchline: "Every 100ms of additional latency costs 8% in active user retention."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-serif text-[#111111] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-1">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STAGE 01</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Request Initiated</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">User triggers action in mobile client.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-serif text-[#111111] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-1">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STAGE 01</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Request Initiated</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">User triggers action in mobile client.</p>
            </div>
            <div class="text-[1.5cqw] text-[#7f1d1d] animate-subtle-2">➔</div>
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-2">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STAGE 02</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Network Transit</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">Packet traverses cellular edge gateway.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-serif text-[#111111] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-1">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STAGE 01</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Request Initiated</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">User triggers action in mobile client.</p>
            </div>
            <div class="text-[1.5cqw] text-[#7f1d1d] animate-subtle-2">➔</div>
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-2">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STAGE 02</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Network Transit</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">Packet traverses cellular edge gateway.</p>
            </div>
            <div class="text-[1.5cqw] text-[#7f1d1d] animate-subtle-3">➔</div>
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-3">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STAGE 03</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Session Abandonment</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">UI block triggers user frustration and exit.</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="grid grid-cols-2 gap-[1.5cqw] max-w-[55cqw] mx-auto font-serif text-[#111111] text-left">
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-1">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">HYPOTHESIS A</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">The 300ms Retention Cliff</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Active user engagement degrades exponentially once round-trip time exceeds 300ms, leading to a permanent drop in daily active sessions.</p>
            </div>
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-2">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">TELEMETRY SCOPE</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">Global User Cohorts</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Analysis spans 12 million active mobile sessions across North America, Europe, and Asia-Pacific regions over a 30-day observation window.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[55cqw] mx-auto font-serif text-[#111111] text-left">
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-1">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">HYPOTHESIS A</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">The 300ms Retention Cliff</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Active user engagement degrades exponentially once round-trip time exceeds 300ms, leading to a permanent drop in daily active sessions.</p>
            </div>
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-2">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">TELEMETRY SCOPE</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">Global User Cohorts</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Analysis spans 12 million active mobile sessions across North America, Europe, and Asia-Pacific regions over a 30-day observation window.</p>
            </div>
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-3">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">IMPACT MATRIX</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">Retention Degrades</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Every 100ms of additional delay beyond the baseline correlates with an 8% drop in session length and a 4% increase in user churn.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-2 gap-[1.5cqw] max-w-[55cqw] mx-auto font-serif text-[#111111] text-left">
            <div class="p-[1.2cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-1">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">HYPOTHESIS A</span>
              <h3 class="text-[1.2cqw] font-bold text-[#7f1d1d] mt-[0.3cqw]">The 300ms Retention Cliff</h3>
              <p class="text-[0.85cqw] text-[#4b5563] mt-[0.3cqw] leading-relaxed">Active user engagement degrades exponentially once round-trip time exceeds 300ms, leading to a permanent drop in daily active sessions.</p>
            </div>
            <div class="p-[1.2cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-2">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">TELEMETRY SCOPE</span>
              <h3 class="text-[1.2cqw] font-bold text-[#7f1d1d] mt-[0.3cqw]">Global User Cohorts</h3>
              <p class="text-[0.85cqw] text-[#4b5563] mt-[0.3cqw] leading-relaxed">Analysis spans 12 million active mobile sessions across North America, Europe, and Asia-Pacific regions over a 30-day observation window.</p>
            </div>
            <div class="p-[1.2cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-3">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">IMPACT MATRIX</span>
              <h3 class="text-[1.2cqw] font-bold text-[#7f1d1d] mt-[0.3cqw]">Retention Degrades</h3>
              <p class="text-[0.85cqw] text-[#4b5563] mt-[0.3cqw] leading-relaxed">Every 100ms of additional delay correlates with an 8% drop in session length and a 4% increase in user churn.</p>
            </div>
            <div class="p-[1.2cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-4">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">RECOMMENDATION</span>
              <h3 class="text-[1.2cqw] font-bold text-[#7f1d1d] mt-[0.3cqw]">Optimize Edge Path</h3>
              <p class="text-[0.85cqw] text-[#4b5563] mt-[0.3cqw] leading-relaxed">Deploy localized edge servers and pre-warm client TCP connections to guarantee sub-150ms round-trip times globally.</p>
            </div>
          </div>
        `
      }
    },
    scene2: {
      title: "Path to Sub-100ms Response",
      subtitle: "Engineering Interventions for Edge Caching and Connection Pre-warming",
      low: {
        beat1: {
          visualHtml: `<div class="font-serif text-[6cqw] text-[#7f1d1d] font-bold border-b border-[#111111]/10 pb-[1cqw] mb-[1cqw] animate-spring-scale">TLS 1.3</div>`,
          title: "Pre-Warming Sockets",
          desc: "Establishing speculative TLS handshakes during app launch."
        },
        beat2: {
          visualHtml: `<div class="font-serif text-[6cqw] text-[#7f1d1d] font-bold border-b border-[#111111]/10 pb-[1cqw] mb-[1cqw] animate-spring-scale">TLS 1.3 <span class="text-[3cqw] text-[#4b5563] font-normal">+ Prefetch</span></div>`,
          title: "Pre-Warming Sockets",
          desc: "Establishing speculative TLS handshakes during app launch.",
          subdesc: "Speculative prefetching of critical user assets reduces time-to-interactive."
        },
        beat3: {
          visualHtml: `<div class="font-serif text-[6cqw] text-[#7f1d1d] font-bold border-b border-[#111111]/10 pb-[1cqw] mb-[1cqw] animate-spring-scale">TLS 1.3 <span class="text-[3cqw] text-[#4b5563] font-normal">+ Prefetch</span> <span class="text-[3cqw] text-[#7f1d1d] font-bold">➔ -42% Latency</span></div>`,
          title: "Pre-Warming Sockets",
          desc: "Establishing speculative TLS handshakes during app launch.",
          subdesc: "Speculative prefetching of critical user assets reduces time-to-interactive.",
          punchline: "Pre-warming and prefetching reduce initial page-load latency by 42%."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-serif text-[#111111] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-1">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STEP 01</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Socket Pre-warm</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">Establish speculative connection on app launch.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-serif text-[#111111] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-1">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STEP 01</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Socket Pre-warm</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">Establish speculative connection on app launch.</p>
            </div>
            <div class="text-[1.5cqw] text-[#7f1d1d] animate-subtle-2">➔</div>
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-2">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STEP 02</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Edge CDN Hit</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">Serve static assets from closest geo-node.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-serif text-[#111111] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-1">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STEP 01</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Socket Pre-warm</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">Establish speculative connection on app launch.</p>
            </div>
            <div class="text-[1.5cqw] text-[#7f1d1d] animate-subtle-2">➔</div>
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-2">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STEP 02</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Edge CDN Hit</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">Serve static assets from closest geo-node.</p>
            </div>
            <div class="text-[1.5cqw] text-[#7f1d1d] animate-subtle-3">➔</div>
            <div class="p-[1.5cqw] border border-[#111111]/20 bg-[#faf9f5] w-[16cqw] text-left shadow-sm animate-subtle-3">
              <span class="text-[0.9cqw] font-mono text-[#4b5563] block">STEP 03</span>
              <span class="font-bold text-[1.2cqw] block mt-[0.5cqw] text-[#7f1d1d]">Instant Hydration</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#4b5563]">Render UI with pre-fetched offline fallback data.</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="grid grid-cols-2 gap-[1.5cqw] max-w-[55cqw] mx-auto font-serif text-[#111111] text-left">
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-1">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">PROTOCOL OPTIMIZATION</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">HTTP/3 & QUIC</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Migrate client-server traffic to HTTP/3 to eliminate head-of-line blocking and reduce handshake overhead under weak cellular networks.</p>
            </div>
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-2">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">EDGE TOPOLOGY</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">Anycast DNS Routing</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Route API requests dynamically to the geographically closest edge node, ensuring DNS resolution times remain strictly under 20ms.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[55cqw] mx-auto font-serif text-[#111111] text-left">
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-1">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">PROTOCOL OPTIMIZATION</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">HTTP/3 & QUIC</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Migrate client-server traffic to HTTP/3 to eliminate head-of-line blocking and reduce handshake overhead under weak cellular networks.</p>
            </div>
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-2">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">EDGE TOPOLOGY</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">Anycast DNS Routing</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Route API requests dynamically to the geographically closest edge node, ensuring DNS resolution times remain strictly under 20ms.</p>
            </div>
            <div class="p-[1.5cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-3">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">CLIENT CACHING</span>
              <h3 class="text-[1.3cqw] font-bold text-[#7f1d1d] mt-[0.5cqw]">Stale-While-Revalidate</h3>
              <p class="text-[0.95cqw] text-[#4b5563] mt-[0.5cqw] leading-relaxed">Implement aggressive local caching with background revalidation, allowing the UI to render instantly using cached data.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-2 gap-[1.5cqw] max-w-[55cqw] mx-auto font-serif text-[#111111] text-left">
            <div class="p-[1.2cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-1">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">PROTOCOL OPTIMIZATION</span>
              <h3 class="text-[1.2cqw] font-bold text-[#7f1d1d] mt-[0.3cqw]">HTTP/3 & QUIC</h3>
              <p class="text-[0.85cqw] text-[#4b5563] mt-[0.3cqw] leading-relaxed">Migrate client-server traffic to HTTP/3 to eliminate head-of-line blocking and reduce handshake overhead under weak cellular networks.</p>
            </div>
            <div class="p-[1.2cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-2">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">EDGE TOPOLOGY</span>
              <h3 class="text-[1.2cqw] font-bold text-[#7f1d1d] mt-[0.3cqw]">Anycast DNS Routing</h3>
              <p class="text-[0.85cqw] text-[#4b5563] mt-[0.3cqw] leading-relaxed">Route API requests dynamically to the geographically closest edge node, ensuring DNS resolution times remain strictly under 20ms.</p>
            </div>
            <div class="p-[1.2cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-3">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">CLIENT CACHING</span>
              <h3 class="text-[1.2cqw] font-bold text-[#7f1d1d] mt-[0.3cqw]">Stale-While-Revalidate</h3>
              <p class="text-[0.85cqw] text-[#4b5563] mt-[0.3cqw] leading-relaxed">Implement aggressive local caching with background revalidation, allowing the UI to render instantly using cached data.</p>
            </div>
            <div class="p-[1.2cqw] border border-[#111111]/10 bg-[#faf9f5] rounded-sm animate-subtle-4">
              <span class="text-[0.8cqw] font-mono text-[#4b5563] uppercase tracking-wider block">VERIFICATION METRICS</span>
              <h3 class="text-[1.2cqw] font-bold text-[#7f1d1d] mt-[0.3cqw]">Target SLIs</h3>
              <p class="text-[0.85cqw] text-[#4b5563] mt-[0.3cqw] leading-relaxed">Measure P95 TTFB (Time to First Byte) under 80ms and P99 Page Load under 250ms across all targeted mobile devices.</p>
            </div>
          </div>
        `
      }
    }
  },
  18: {
    scene1: {
      title: "Incident #409: HikariCP Exhaustion",
      subtitle: "Analysis of the Transaction Leak in TransactionHistoryDAO",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-center space-x-2 bg-red-100 text-red-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-red-200 animate-spring-scale"><span class="text-[1.3cqw]">🔴</span><span>Issue #409: Pool Exhausted</span></div>`,
          title: "Outage Triggered",
          desc: "HikariCP connection pool reported 0 active connections available, blocking all incoming API requests."
        },
        beat2: {
          visualHtml: `<div class="flex items-center space-x-2 bg-red-100 text-red-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-red-200 animate-spring-scale"><span class="text-[1.3cqw]">🔴</span><span>Issue #409: Pool Exhausted</span></div>`,
          title: "Outage Triggered",
          desc: "HikariCP connection pool reported 0 active connections available, blocking all incoming API requests.",
          subdesc: "Thread dump analysis identified 48 threads blocked waiting for a connection from the pool."
        },
        beat3: {
          visualHtml: `<div class="flex items-center space-x-2 bg-red-100 text-red-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-red-200 animate-spring-scale"><span class="text-[1.3cqw]">🔴</span><span>Issue #409: Pool Exhausted</span></div>`,
          title: "Outage Triggered",
          desc: "HikariCP connection pool reported 0 active connections available, blocking all incoming API requests.",
          subdesc: "Thread dump analysis identified 48 threads blocked waiting for a connection from the pool.",
          punchline: "Unclosed statement in TransactionHistoryDAO leaked 100% of pool connections within 12 minutes."
        }
      },
      med: {
        beat1: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[50cqw] mx-auto font-sans animate-subtle-1">
            <div class="bg-slate-50 p-[1.2cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">Incident Timeline</span>
              <span class="text-xs bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full font-semibold">CRITICAL</span>
            </div>
            <div class="p-[1.5cqw] space-y-[1.2cqw] text-[1cqw]">
              <div class="flex items-start gap-[1cqw] animate-subtle-2">
                <span class="text-slate-400 font-mono text-[0.9cqw] w-[5cqw] shrink-0">14:02:10</span>
                <div>
                  <strong class="text-slate-800">Alert Triggered</strong>
                  <p class="text-slate-500 text-[0.9cqw]">HikariCP reporting 0 active connections available.</p>
                </div>
              </div>
            </div>
          </div>
        `,
        beat2: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[50cqw] mx-auto font-sans animate-subtle-1">
            <div class="bg-slate-50 p-[1.2cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">Incident Timeline</span>
              <span class="text-xs bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full font-semibold">CRITICAL</span>
            </div>
            <div class="p-[1.5cqw] space-y-[1.2cqw] text-[1cqw]">
              <div class="flex items-start gap-[1cqw] animate-subtle-2">
                <span class="text-slate-400 font-mono text-[0.9cqw] w-[5cqw] shrink-0">14:02:10</span>
                <div>
                  <strong class="text-slate-800">Alert Triggered</strong>
                  <p class="text-slate-500 text-[0.9cqw]">HikariCP reporting 0 active connections available.</p>
                </div>
              </div>
              <div class="flex items-start gap-[1cqw] animate-subtle-3">
                <span class="text-slate-400 font-mono text-[0.9cqw] w-[5cqw] shrink-0">14:05:35</span>
                <div>
                  <strong class="text-slate-800">Thread Dump Captured</strong>
                  <p class="text-slate-500 text-[0.9cqw]">Identified unclosed statement in TransactionHistoryDAO.</p>
                </div>
              </div>
            </div>
          </div>
        `,
        beat3: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[50cqw] mx-auto font-sans animate-subtle-1">
            <div class="bg-slate-50 p-[1.2cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">Incident Timeline</span>
              <span class="text-xs bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full font-semibold">CRITICAL</span>
            </div>
            <div class="p-[1.5cqw] space-y-[1.2cqw] text-[1cqw]">
              <div class="flex items-start gap-[1cqw] animate-subtle-2">
                <span class="text-slate-400 font-mono text-[0.9cqw] w-[5cqw] shrink-0">14:02:10</span>
                <div>
                  <strong class="text-slate-800">Alert Triggered</strong>
                  <p class="text-slate-500 text-[0.9cqw]">HikariCP reporting 0 active connections available.</p>
                </div>
              </div>
              <div class="flex items-start gap-[1cqw] animate-subtle-3">
                <span class="text-slate-400 font-mono text-[0.9cqw] w-[5cqw] shrink-0">14:05:35</span>
                <div>
                  <strong class="text-slate-800">Thread Dump Captured</strong>
                  <p class="text-slate-500 text-[0.9cqw]">Identified unclosed statement in TransactionHistoryDAO.</p>
                </div>
              </div>
              <div class="flex items-start gap-[1cqw] animate-subtle-4">
                <span class="text-slate-400 font-mono text-[0.9cqw] w-[5cqw] shrink-0">14:12:00</span>
                <div>
                  <strong class="text-slate-800">Hotfix Deployed</strong>
                  <p class="text-slate-500 text-[0.9cqw]">Wrapped statement in try-with-resources blocks.</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1">
            <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
              <span class="font-bold text-slate-800 text-[1cqw]">SQL Query Optimization Diff</span>
              <span class="text-xs bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full font-semibold">LEAK DETECTED</span>
            </div>
            <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
              <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">Connection conn = dataSource.getConnection();</div>
              <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">Statement stmt = conn.createStatement();</div>
              <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">ResultSet rs = stmt.executeQuery(SQL);</div>
              <div class="text-slate-500 mt-[1cqw] text-[0.8cqw] font-sans animate-subtle-3">Statement and ResultSet are never closed, leaking physical database connections.</div>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">SQL Query Optimization Diff</span>
                <span class="text-xs bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full font-semibold">LEAK DETECTED</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">Connection conn = dataSource.getConnection();</div>
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">Statement stmt = conn.createStatement();</div>
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">ResultSet rs = stmt.executeQuery(SQL);</div>
                <div class="text-slate-500 mt-[1cqw] text-[0.8cqw] font-sans animate-subtle-3">Statement and ResultSet are never closed, leaking physical database connections.</div>
              </div>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 rounded-xl bg-white shadow-sm flex flex-col justify-between animate-subtle-3">
              <div>
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Telemetry</span>
                <h4 class="font-bold text-slate-800 text-[1.1cqw] mt-[0.5cqw]">HikariCP Metrics</h4>
                <p class="text-[0.9cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Active: 50/50<br>Idle: 0<br>Threads Awaiting: 48</p>
              </div>
              <span class="text-[0.8cqw] font-mono text-red-500 mt-[1cqw]">[⚠️] CRITICAL EXHAUSTION</span>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">SQL Query Optimization Diff</span>
                <span class="text-xs bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full font-semibold">LEAK DETECTED</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">Connection conn = dataSource.getConnection();</div>
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">Statement stmt = conn.createStatement();</div>
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">ResultSet rs = stmt.executeQuery(SQL);</div>
                <div class="text-slate-500 mt-[1cqw] text-[0.8cqw] font-sans animate-subtle-3">Statement and ResultSet are never closed, leaking physical database connections.</div>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-3">
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Telemetry</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">HikariCP Metrics</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">Active: 50/50<br>Idle: 0<br>Threads Awaiting: 48</p>
              </div>
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-4">
                <span class="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">ROOT CAUSE</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">Statement Leak</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">TransactionHistoryDAO failed to close JDBC statements, preventing the physical connection from returning to the pool.</p>
              </div>
            </div>
          </div>
        `
      }
    },
    scene2: {
      title: "Hotfix & Prevention",
      subtitle: "Implementing Try-With-Resources and Connection Leak Detection",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-emerald-200 animate-spring-scale"><span class="text-[1.3cqw]">🟣</span><span>PR #104: Wrapped in try-with-resources</span></div>`,
          title: "Hotfix Deployed",
          desc: "Wrapped all database statement creations in try-with-resources blocks to guarantee automatic closure."
        },
        beat2: {
          visualHtml: `<div class="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-emerald-200 animate-spring-scale"><span class="text-[1.3cqw]">🟣</span><span>PR #104: Wrapped in try-with-resources</span></div>`,
          title: "Hotfix Deployed",
          desc: "Wrapped all database statement creations in try-with-resources blocks to guarantee automatic closure.",
          subdesc: "Configured HikariCP connection leak detection threshold to 5000ms."
        },
        beat3: {
          visualHtml: `<div class="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-emerald-200 animate-spring-scale"><span class="text-[1.3cqw]">🟣</span><span>PR #104: Wrapped in try-with-resources</span></div>`,
          title: "Hotfix Deployed",
          desc: "Wrapped all database statement creations in try-with-resources blocks to guarantee automatic closure.",
          subdesc: "Configured HikariCP connection leak detection threshold to 5000ms.",
          punchline: "Try-with-resources hotfix deployed; leak detection threshold set to 5000ms."
        }
      },
      med: {
        beat1: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[50cqw] mx-auto font-sans animate-subtle-1">
            <div class="bg-slate-50 p-[1.2cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">Verification Steps</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">VERIFIED</span>
            </div>
            <div class="p-[1.5cqw] space-y-[1.2cqw] text-[1cqw]">
              <div class="flex items-start gap-[1cqw] animate-subtle-2">
                <span class="text-emerald-500 font-bold text-[1cqw] shrink-0">[✓]</span>
                <div>
                  <strong class="text-slate-800">Unit Tests Passed</strong>
                  <p class="text-slate-500 text-[0.9cqw]">Verified connection closure across all 14 DAO methods.</p>
                </div>
              </div>
            </div>
          </div>
        `,
        beat2: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[50cqw] mx-auto font-sans animate-subtle-1">
            <div class="bg-slate-50 p-[1.2cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">Verification Steps</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">VERIFIED</span>
            </div>
            <div class="p-[1.5cqw] space-y-[1.2cqw] text-[1cqw]">
              <div class="flex items-start gap-[1cqw] animate-subtle-2">
                <span class="text-emerald-500 font-bold text-[1cqw] shrink-0">[✓]</span>
                <div>
                  <strong class="text-slate-800">Unit Tests Passed</strong>
                  <p class="text-slate-500 text-[0.9cqw]">Verified connection closure across all 14 DAO methods.</p>
                </div>
              </div>
              <div class="flex items-start gap-[1cqw] animate-subtle-3">
                <span class="text-emerald-500 font-bold text-[1cqw] shrink-0">[✓]</span>
                <div>
                  <strong class="text-slate-800">Load Test Successful</strong>
                  <p class="text-slate-500 text-[0.9cqw]">Pool active connections stabilized at 12 under 500 req/sec.</p>
                </div>
              </div>
            </div>
          </div>
        `,
        beat3: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[50cqw] mx-auto font-sans animate-subtle-1">
            <div class="bg-slate-50 p-[1.2cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">Verification Steps</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">VERIFIED</span>
            </div>
            <div class="p-[1.5cqw] space-y-[1.2cqw] text-[1cqw]">
              <div class="flex items-start gap-[1cqw] animate-subtle-2">
                <span class="text-emerald-500 font-bold text-[1cqw] shrink-0">[✓]</span>
                <div>
                  <strong class="text-slate-800">Unit Tests Passed</strong>
                  <p class="text-slate-500 text-[0.9cqw]">Verified connection closure across all 14 DAO methods.</p>
                </div>
              </div>
              <div class="flex items-start gap-[1cqw] animate-subtle-3">
                <span class="text-emerald-500 font-bold text-[1cqw] shrink-0">[✓]</span>
                <div>
                  <strong class="text-slate-800">Load Test Successful</strong>
                  <p class="text-slate-500 text-[0.9cqw]">Pool active connections stabilized at 12 under 500 req/sec.</p>
                </div>
              </div>
              <div class="flex items-start gap-[1cqw] animate-subtle-4">
                <span class="text-emerald-500 font-bold text-[1cqw] shrink-0">[✓]</span>
                <div>
                  <strong class="text-slate-800">Leak Detection Enabled</strong>
                  <p class="text-slate-500 text-[0.9cqw]">HikariCP leakDetectionThreshold set to 5000ms for production.</p>
                </div>
              </div>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1">
            <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
              <span class="font-bold text-slate-800 text-[1cqw]">SQL Query Optimization Diff</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">MERGED</span>
            </div>
            <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
              <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">- Connection conn = dataSource.getConnection();</div>
              <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ try (Connection conn = dataSource.getConnection();</div>
              <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+      Statement stmt = conn.createStatement();</div>
              <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+      ResultSet rs = stmt.executeQuery(SQL)) {</div>
              <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+      // process results</div>
              <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ }</div>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">SQL Query Optimization Diff</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">MERGED</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">- Connection conn = dataSource.getConnection();</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ try (Connection conn = dataSource.getConnection();</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+      Statement stmt = conn.createStatement();</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+      ResultSet rs = stmt.executeQuery(SQL)) {</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+      // process results</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ }</div>
              </div>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 rounded-xl bg-white shadow-sm flex flex-col justify-between animate-subtle-3">
              <div>
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Guardrails</span>
                <h4 class="font-bold text-slate-800 text-[1.1cqw] mt-[0.5cqw]">HikariCP Config</h4>
                <p class="text-[0.9cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">leakDetectionThreshold: 5000ms<br>maximumPoolSize: 50<br>minimumIdle: 10</p>
              </div>
              <span class="text-[0.8cqw] font-mono text-emerald-600 mt-[1cqw]">[✓] LEAK DETECTION ACTIVE</span>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">SQL Query Optimization Diff</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">MERGED</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">- Connection conn = dataSource.getConnection();</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ try (Connection conn = dataSource.getConnection();</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+      Statement stmt = conn.createStatement();</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+      ResultSet rs = stmt.executeQuery(SQL)) {</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+      // process results</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ }</div>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-3">
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Guardrails</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">HikariCP Config</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">leakDetectionThreshold: 5000ms<br>maximumPoolSize: 50<br>minimumIdle: 10</p>
              </div>
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-4">
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">VERIFICATION</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">Leak Resolved</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">Unit tests and load tests verify 100% connection closure. Leak detection active in production.</p>
              </div>
            </div>
          </div>
        `
      }
    }
  },
  19: {
    scene1: {
      title: "ADR 009: SQLite Storage",
      subtitle: "Selecting the Local Database Engine for Offline-First Synchronization",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-emerald-200 animate-spring-scale"><span class="text-[1.3cqw]">🟢</span><span>ADR 009: Approved</span></div>`,
          title: "Decision Approved",
          desc: "SQLite selected as the local database engine for offline-first data storage."
        },
        beat2: {
          visualHtml: `<div class="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-emerald-200 animate-spring-scale"><span class="text-[1.3cqw]">🟢</span><span>ADR 009: Approved</span></div>`,
          title: "Decision Approved",
          desc: "SQLite selected as the local database engine for offline-first data storage.",
          subdesc: "SQLite offers native-like performance, full ACID compliance, and robust relational querying."
        },
        beat3: {
          visualHtml: `<div class="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-emerald-200 animate-spring-scale"><span class="text-[1.3cqw]">🟢</span><span>ADR 009: Approved</span></div>`,
          title: "Decision Approved",
          desc: "SQLite selected as the local database engine for offline-first data storage.",
          subdesc: "SQLite offers native-like performance, full ACID compliance, and robust relational querying.",
          punchline: "SQLite selected over IndexedDB for native-like performance, ACID compliance, and robust relational querying."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">💾</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">01. Local Mutation</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Write directly to local SQLite database.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">💾</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">01. Local Mutation</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Write directly to local SQLite database.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">🔀</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">02. Outbox Queue</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Trigger inserts mutation in sync outbox queue.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">💾</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">01. Local Mutation</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Write directly to local SQLite database.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">🔀</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">02. Outbox Queue</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Trigger inserts mutation in sync outbox queue.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-3">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-3">
              <span class="text-[1.8cqw] block">📡</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">03. Sync Protocol</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Background worker pushes outbox to cloud.</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">ADR 009: SQLite Storage Context</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">APPROVED</span>
            </div>
            <div class="p-[1.2cqw] space-y-[0.8cqw] text-slate-600">
              <p><strong>Context:</strong> Our mobile application requires offline-first operation, allowing users to modify data without network access and synchronize changes atomically when online.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-[0.9cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between">
                <span class="font-bold text-slate-800 text-[1.1cqw]">ADR 009: SQLite Storage Context</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">APPROVED</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.8cqw] text-slate-600">
                <p><strong>Context:</strong> Our mobile application requires offline-first operation, allowing users to modify data without network access and synchronize changes atomically when online.</p>
                <p><strong>Decision:</strong> We will use SQLite as the local database engine, utilizing SQLCipher for encryption and triggers for automated outbox queueing.</p>
              </div>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 rounded-xl bg-white shadow-sm flex flex-col justify-between animate-subtle-3">
              <div>
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Alternatives</span>
                <h4 class="font-bold text-slate-800 text-[1.1cqw] mt-[0.5cqw]">IndexedDB</h4>
                <p class="text-[0.9cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Rejected due to inconsistent performance, lack of robust relational querying, and complex transaction management.</p>
              </div>
              <span class="text-[0.8cqw] font-mono text-red-500 mt-[1cqw]">[✗] REJECTED ALTERNATIVE</span>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-[0.9cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between">
                <span class="font-bold text-slate-800 text-[1.1cqw]">ADR 009: SQLite Storage Context</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">APPROVED</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.8cqw] text-slate-600">
                <p><strong>Context:</strong> Our mobile application requires offline-first operation, allowing users to modify data without network access and synchronize changes atomically when online.</p>
                <p><strong>Decision:</strong> We will use SQLite as the local database engine, utilizing SQLCipher for encryption and triggers for automated outbox queueing.</p>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-3">
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Alternatives</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">IndexedDB</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">Rejected due to inconsistent performance, lack of robust relational querying, and complex transaction management.</p>
              </div>
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-4">
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">CONSEQUENCES</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">ACID Compliance</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">Ensures robust local transactions, zero data corruption, and reliable outbox queue processing.</p>
              </div>
            </div>
          </div>
        `
      }
    },
    scene2: {
      title: "Sync Protocol Implementation",
      subtitle: "Database Schema and Outbox Queue Processing Flow",
      low: {
        beat1: {
          visualHtml: `<div class="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-emerald-200 animate-spring-scale"><span class="text-[1.3cqw]">📋</span><span>Table: outbox_queue</span></div>`,
          title: "Outbox Schema Defined",
          desc: "Created the outbox_queue table in SQLite to track all local database mutations."
        },
        beat2: {
          visualHtml: `<div class="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-emerald-200 animate-spring-scale"><span class="text-[1.3cqw]">📋</span><span>Table: outbox_queue</span></div>`,
          title: "Outbox Schema Defined",
          desc: "Created the outbox_queue table in SQLite to track all local database mutations.",
          subdesc: "Implemented SQLite triggers to automatically insert rows into outbox_queue on mutations."
        },
        beat3: {
          visualHtml: `<div class="flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-[1.5cqw] py-[0.5cqw] rounded-full text-[1.1cqw] font-semibold border border-emerald-200 animate-spring-scale"><span class="text-[1.3cqw]">📋</span><span>Table: outbox_queue</span></div>`,
          title: "Outbox Schema Defined",
          desc: "Created the outbox_queue table in SQLite to track all local database mutations.",
          subdesc: "Implemented SQLite triggers to automatically insert rows into outbox_queue on mutations.",
          punchline: "Outbox schema utilizes SQLite triggers to guarantee atomic queueing of all local mutations."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">⚡</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Trigger Fired</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">SQLite trigger fires on row insert/update.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">⚡</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Trigger Fired</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">SQLite trigger fires on row insert/update.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">📥</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Outbox Insert</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Mutation payload serialized and queued in outbox.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">⚡</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Trigger Fired</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">SQLite trigger fires on row insert/update.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">📥</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Outbox Insert</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Mutation payload serialized and queued in outbox.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-3">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-3">
              <span class="text-[1.8cqw] block">☁️</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">3. Server Acknowledge</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Server processes outbox and returns confirmation.</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1">
            <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
              <span class="font-bold text-slate-800 text-[1cqw]">SQLite Outbox Schema</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">ACTIVE</span>
            </div>
            <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
              <div>CREATE TABLE outbox_queue (</div>
              <div class="pl-[2cqw]">id INTEGER PRIMARY KEY AUTOINCREMENT,</div>
              <div class="pl-[2cqw]">table_name TEXT NOT NULL,</div>
              <div class="pl-[2cqw]">operation TEXT NOT NULL,</div>
              <div class="pl-[2cqw]">payload TEXT NOT NULL,</div>
              <div class="pl-[2cqw]">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</div>
              <div>);</div>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">SQLite Outbox Schema</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">ACTIVE</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div>CREATE TABLE outbox_queue (</div>
                <div class="pl-[2cqw]">id INTEGER PRIMARY KEY AUTOINCREMENT,</div>
                <div class="pl-[2cqw]">table_name TEXT NOT NULL,</div>
                <div class="pl-[2cqw]">operation TEXT NOT NULL,</div>
                <div class="pl-[2cqw]">payload TEXT NOT NULL,</div>
                <div class="pl-[2cqw]">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</div>
                <div>);</div>
              </div>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 rounded-xl bg-white shadow-sm flex flex-col justify-between animate-subtle-3">
              <div>
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Triggers</span>
                <h4 class="font-bold text-slate-800 text-[1.1cqw] mt-[0.5cqw]">SQLite Triggers</h4>
                <p class="text-[0.9cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">CREATE TRIGGER queue_insert AFTER INSERT ON users BEGIN INSERT INTO outbox_queue... END;</p>
              </div>
              <span class="text-[0.8cqw] font-mono text-emerald-600 mt-[1cqw]">[✓] TRIGGERS CONFIGURED</span>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">SQLite Outbox Schema</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">ACTIVE</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div>CREATE TABLE outbox_queue (</div>
                <div class="pl-[2cqw]">id INTEGER PRIMARY KEY AUTOINCREMENT,</div>
                <div class="pl-[2cqw]">table_name TEXT NOT NULL,</div>
                <div class="pl-[2cqw]">operation TEXT NOT NULL,</div>
                <div class="pl-[2cqw]">payload TEXT NOT NULL,</div>
                <div class="pl-[2cqw]">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</div>
                <div>);</div>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-3">
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Triggers</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">SQLite Triggers</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">CREATE TRIGGER queue_insert AFTER INSERT ON users BEGIN INSERT INTO outbox_queue... END;</p>
              </div>
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-4">
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">VERIFICATION</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">Atomic Sync</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">Triggers guarantee atomic, zero-overhead mutation tracking directly within SQLite's transaction boundary.</p>
              </div>
            </div>
          </div>
        `
      }
    }
  },
  20: {
    scene1: {
      title: "Edge LLM Performance",
      subtitle: "Comparing Latency, Accuracy, and Memory Footprint across Edge Models",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#3b82f6] font-bold border-b border-slate-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">42 t/s</div>`,
          title: "Llama-3 8B Baseline",
          desc: "Llama-3 8B achieves solid throughput but requires significant memory overhead on mobile devices."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#3b82f6] font-bold border-b border-slate-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">42 t/s <span class="text-[3cqw] text-slate-400 font-normal">vs. 68 t/s</span></div>`,
          title: "Llama-3 8B Baseline",
          desc: "Llama-3 8B achieves solid throughput but requires significant memory overhead on mobile devices.",
          subdesc: "Phi-3 3.8B achieves 60% higher throughput due to its smaller parameter count and optimized attention mechanism."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#3b82f6] font-bold border-b border-slate-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">42 t/s <span class="text-[3cqw] text-slate-400 font-normal">vs.</span> <span class="text-[6cqw] text-emerald-500 font-bold">68 t/s</span></div>`,
          title: "Llama-3 8B Baseline",
          desc: "Llama-3 8B achieves solid throughput but requires significant memory overhead on mobile devices.",
          subdesc: "Phi-3 3.8B achieves 60% higher throughput due to its smaller parameter count and optimized attention mechanism.",
          punchline: "Phi-3 achieves 60% higher throughput on mobile devices while maintaining 94% of Llama-3's accuracy."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">📥</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">01. Model Load</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Load quantized weights into NPU memory.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">📥</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">01. Model Load</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Load quantized weights into NPU memory.</p>
            </div>
            <div class="text-[2cqw] text-blue-500 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">⚡</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">02. TTFT</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Time to first token resolution (target sub-100ms).</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">📥</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">01. Model Load</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Load quantized weights into NPU memory.</p>
            </div>
            <div class="text-[2cqw] text-blue-500 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">⚡</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">02. TTFT</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Time to first token resolution (target sub-100ms).</p>
            </div>
            <div class="text-[2cqw] text-blue-500 animate-match-3">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-3">
              <span class="text-[1.8cqw] block">📤</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">03. Generation</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Continuous token generation (target 50+ tokens/sec).</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">Edge LLM Benchmark Matrix</span>
              <span class="text-xs bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-semibold">BENCHMARK</span>
            </div>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-50/50 border-b border-slate-200 text-[0.8cqw] text-slate-500 uppercase tracking-wider">
                  <th class="p-[1cqw]">Model</th>
                  <th class="p-[1cqw]">Throughput</th>
                  <th class="p-[1cqw]">TTFT</th>
                </tr>
              </thead>
              <tbody class="divide-y border-slate-200">
                <tr class="animate-subtle-2">
                  <td class="p-[1cqw] font-bold">Llama-3 8B</td>
                  <td class="p-[1cqw]">42 tokens/sec</td>
                  <td class="p-[1cqw]">120ms</td>
                </tr>
                <tr class="animate-subtle-3">
                  <td class="p-[1cqw] font-bold text-emerald-600">Phi-3 3.8B</td>
                  <td class="p-[1cqw] font-bold">68 tokens/sec</td>
                  <td class="p-[1cqw]">85ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        beat2: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">Edge LLM Benchmark Matrix</span>
              <span class="text-xs bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-semibold">BENCHMARK</span>
            </div>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-50/50 border-b border-slate-200 text-[0.8cqw] text-slate-500 uppercase tracking-wider">
                  <th class="p-[1cqw]">Model</th>
                  <th class="p-[1cqw]">Throughput</th>
                  <th class="p-[1cqw]">TTFT</th>
                  <th class="p-[1cqw]">RAM Footprint</th>
                </tr>
              </thead>
              <tbody class="divide-y border-slate-200">
                <tr class="animate-subtle-2">
                  <td class="p-[1cqw] font-bold">Llama-3 8B</td>
                  <td class="p-[1cqw]">42 tokens/sec</td>
                  <td class="p-[1cqw]">120ms</td>
                  <td class="p-[1cqw]">6.2 GB</td>
                </tr>
                <tr class="animate-subtle-3">
                  <td class="p-[1cqw] font-bold text-emerald-600">Phi-3 3.8B</td>
                  <td class="p-[1cqw] font-bold">68 tokens/sec</td>
                  <td class="p-[1cqw]">85ms</td>
                  <td class="p-[1cqw] font-bold">3.8 GB</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        beat3: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between">
              <span class="font-bold text-slate-800 text-[1.1cqw]">Edge LLM Benchmark Matrix</span>
              <span class="text-xs bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-semibold">BENCHMARK</span>
            </div>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-50/50 border-b border-slate-200 text-[0.8cqw] text-slate-500 uppercase tracking-wider">
                  <th class="p-[1cqw]">Model</th>
                  <th class="p-[1cqw]">Throughput</th>
                  <th class="p-[1cqw]">TTFT</th>
                  <th class="p-[1cqw]">RAM Footprint</th>
                  <th class="p-[1cqw]">MMLU Accuracy</th>
                </tr>
              </thead>
              <tbody class="divide-y border-slate-200">
                <tr class="animate-subtle-2">
                  <td class="p-[1cqw] font-bold">Llama-3 8B</td>
                  <td class="p-[1cqw]">42 tokens/sec</td>
                  <td class="p-[1cqw]">120ms</td>
                  <td class="p-[1cqw]">6.2 GB</td>
                  <td class="p-[1cqw]">66.4%</td>
                </tr>
                <tr class="animate-subtle-3">
                  <td class="p-[1cqw] font-bold text-emerald-600">Phi-3 3.8B</td>
                  <td class="p-[1cqw] font-bold">68 tokens/sec</td>
                  <td class="p-[1cqw]">85ms</td>
                  <td class="p-[1cqw] font-bold">3.8 GB</td>
                  <td class="p-[1cqw] font-bold">62.1%</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    },
    scene2: {
      title: "Edge Deployment Spec",
      subtitle: "Quantization and Memory Allocation Parameters for Mobile Devices",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#3b82f6] font-bold border-b border-slate-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">INT4</div>`,
          title: "AWQ Quantization",
          desc: "Quantizing weights to 4-bit integers to minimize model footprint on disk and RAM."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#3b82f6] font-bold border-b border-slate-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">INT4 <span class="text-[3cqw] text-slate-400 font-normal">➔ 3.8GB RAM</span></div>`,
          title: "AWQ Quantization",
          desc: "Quantizing weights to 4-bit integers to minimize model footprint on disk and RAM.",
          subdesc: "Limits maximum memory allocation to 3.8GB, ensuring compatibility with mid-range devices."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#3b82f6] font-bold border-b border-slate-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">INT4 <span class="text-[3cqw] text-slate-400 font-normal">➔</span> <span class="text-[6cqw] text-emerald-500 font-bold">3.8GB</span></div>`,
          title: "AWQ Quantization",
          desc: "Quantizing weights to 4-bit integers to minimize model footprint on disk and RAM.",
          subdesc: "Limits maximum memory allocation to 3.8GB, ensuring compatibility with mid-range devices.",
          punchline: "INT4 quantization enables real-time edge inference within a strict 4.5GB system memory envelope."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">🗜️</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Quantization</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Compress weights to INT4 using AWQ algorithm.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">🗜️</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Quantization</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Compress weights to INT4 using AWQ algorithm.</p>
            </div>
            <div class="text-[2cqw] text-blue-500 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">📦</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. ONNX Export</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Export quantized model to ONNX runtime format.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">🗜️</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Quantization</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Compress weights to INT4 using AWQ algorithm.</p>
            </div>
            <div class="text-[2cqw] text-blue-500 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">📦</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. ONNX Export</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Export quantized model to ONNX runtime format.</p>
            </div>
            <div class="text-[2cqw] text-blue-500 animate-match-3">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-3">
              <span class="text-[1.8cqw] block">🚀</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">3. Mobile NPU</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Execute inference directly on mobile hardware NPU.</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="grid grid-cols-2 gap-[1.5cqw] max-w-[55cqw] mx-auto font-sans text-slate-800 text-left">
            <div class="p-[1.5cqw] border border-slate-200 bg-white rounded-xl shadow-sm animate-subtle-1">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider block w-max">Quantization</span>
              <h3 class="text-[1.3cqw] font-bold text-slate-900 mt-[0.5cqw]">INT4 AWQ Parameters</h3>
              <p class="text-[0.95cqw] text-slate-500 mt-[0.5cqw] leading-relaxed">Weights are quantized to 4-bit using Activation-aware Weight Quantization (AWQ), reducing model size to 2.2GB while preserving 98% of FP16 perplexity.</p>
            </div>
            <div class="p-[1.5cqw] border border-slate-200 bg-white rounded-xl shadow-sm animate-subtle-2">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider block w-max">Memory</span>
              <h3 class="text-[1.3cqw] font-bold text-slate-900 mt-[0.5cqw]">RAM Allocation Limits</h3>
              <p class="text-[0.95cqw] text-slate-500 mt-[0.5cqw] leading-relaxed">Strict allocation limit of 3.8GB RAM for model execution, leaving ample memory headroom for other background application processes.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto font-sans text-slate-800 text-left">
            <div class="p-[1.2cqw] border border-slate-200 bg-white rounded-xl shadow-sm animate-subtle-1">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider block w-max">Quantization</span>
              <h3 class="text-[1.2cqw] font-bold text-slate-900 mt-[0.3cqw]">INT4 AWQ Parameters</h3>
              <p class="text-[0.85cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Weights are quantized to 4-bit using Activation-aware Weight Quantization (AWQ), reducing model size to 2.2GB while preserving 98% of FP16 perplexity.</p>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 bg-white rounded-xl shadow-sm animate-subtle-2">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider block w-max">Memory</span>
              <h3 class="text-[1.2cqw] font-bold text-slate-900 mt-[0.3cqw]">RAM Allocation Limits</h3>
              <p class="text-[0.85cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Strict allocation limit of 3.8GB RAM for model execution, leaving ample memory headroom for other background application processes.</p>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 bg-white rounded-xl shadow-sm animate-subtle-3">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider block w-max">NPU</span>
              <h3 class="text-[1.2cqw] font-bold text-slate-900 mt-[0.3cqw]">NPU Acceleration</h3>
              <p class="text-[0.85cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Leverages Apple Neural Engine (ANE) and Android NNAPI for hardware-accelerated matrix multiplications, boosting throughput by 3x.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-2 gap-[1.5cqw] max-w-[55cqw] mx-auto font-sans text-slate-800 text-left">
            <div class="p-[1.2cqw] border border-slate-200 bg-white rounded-xl shadow-sm animate-subtle-1">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider block w-max">Quantization</span>
              <h3 class="text-[1.2cqw] font-bold text-slate-900 mt-[0.3cqw]">INT4 AWQ Parameters</h3>
              <p class="text-[0.85cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Weights are quantized to 4-bit using Activation-aware Weight Quantization (AWQ), reducing model size to 2.2GB while preserving 98% of FP16 perplexity.</p>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 bg-white rounded-xl shadow-sm animate-subtle-2">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider block w-max">Memory</span>
              <h3 class="text-[1.2cqw] font-bold text-slate-900 mt-[0.3cqw]">RAM Allocation Limits</h3>
              <p class="text-[0.85cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Strict allocation limit of 3.8GB RAM for model execution, leaving ample memory headroom for other background application processes.</p>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 bg-white rounded-xl shadow-sm animate-subtle-3">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider block w-max">NPU</span>
              <h3 class="text-[1.2cqw] font-bold text-slate-900 mt-[0.3cqw]">NPU Acceleration</h3>
              <p class="text-[0.85cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Leverages Apple Neural Engine (ANE) and Android NNAPI for hardware-accelerated matrix multiplications, boosting throughput by 3x.</p>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 bg-white rounded-xl shadow-sm animate-subtle-4">
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider block w-max">Updates</span>
              <h3 class="text-[1.2cqw] font-bold text-slate-900 mt-[0.3cqw]">OTA Model Updates</h3>
              <p class="text-[0.85cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Supports background over-the-air (OTA) model updates, downloading delta weights incrementally when connected to Wi-Fi.</p>
            </div>
          </div>
        `
      }
    }
  },
  21: {
    scene1: {
      title: "Field Observations",
      subtitle: "Qualitative Insights from Smart Home Hub Setup and Daily Usage",
      low: {
        beat1: {
          visualHtml: `<div class="bg-white p-[1cqw] pb-[3cqw] rotate-2 shadow-lg border border-slate-200 max-w-[15cqw] mx-auto font-sketch text-slate-800 animate-float-sticky-1"><div class="aspect-square bg-slate-100 flex items-center justify-center text-[3cqw]">🏠</div><p class="text-[0.9cqw] text-slate-600 mt-[0.5cqw] text-center">Smart Home Hub Setup</p></div>`,
          title: "Physical Setup Friction",
          desc: "Users struggled with the mandatory physical ethernet connection required during initial hub unboxing."
        },
        beat2: {
          visualHtml: `<div class="bg-white p-[1cqw] pb-[3cqw] rotate-2 shadow-lg border border-slate-200 max-w-[15cqw] mx-auto font-sketch text-slate-800 animate-float-sticky-1"><div class="aspect-square bg-slate-100 flex items-center justify-center text-[3cqw]">🏠</div><p class="text-[0.9cqw] text-slate-600 mt-[0.5cqw] text-center">Smart Home Hub Setup</p></div>`,
          title: "Physical Setup Friction",
          desc: "Users struggled with the mandatory physical ethernet connection required during initial hub unboxing.",
          subdesc: "Most home routers are placed in closets or cabinets, leading to poor Wi-Fi range and setup abandonment."
        },
        beat3: {
          visualHtml: `<div class="bg-white p-[1cqw] pb-[3cqw] rotate-2 shadow-lg border border-slate-200 max-w-[15cqw] mx-auto font-sketch text-slate-800 animate-float-sticky-1"><div class="aspect-square bg-slate-100 flex items-center justify-center text-[3cqw]">🏠</div><p class="text-[0.9cqw] text-slate-600 mt-[0.5cqw] text-center">Smart Home Hub Setup</p></div>`,
          title: "Physical Setup Friction",
          desc: "Users struggled with the mandatory physical ethernet connection required during initial hub unboxing.",
          subdesc: "Most home routers are placed in closets or cabinets, leading to poor Wi-Fi range and setup abandonment.",
          punchline: "70% of users abandoned setup because their router was in a closet, far from the hub's intended location."
        }
      },
      med: {
        beat1: `
          <div class="grid grid-cols-3 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 1: Unboxing</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">User struggled with the plastic wrap. Took 3 minutes just to open the box.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#friction</span>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 1: Unboxing</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">User struggled with the plastic wrap. Took 3 minutes just to open the box.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#friction</span>
            </div>
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm rotate-2 animate-subtle-2">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 2: App Pairing</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">Bluetooth pairing succeeded on first attempt. App UI was intuitive.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#delight</span>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 1: Unboxing</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">User struggled with the plastic wrap. Took 3 minutes just to open the box.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#friction</span>
            </div>
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm rotate-2 animate-subtle-2">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 2: App Pairing</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">Bluetooth pairing succeeded on first attempt. App UI was intuitive.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#delight</span>
            </div>
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm -rotate-2 animate-subtle-3">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 3: First Sync</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">Firmware update took 12 minutes. User became distracted and walked away.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#boredom</span>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="grid grid-cols-2 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.3cqw] font-bold text-teal-700">Observation A: Physical Setup</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">The smart hub requires a physical ethernet connection to the router. Many users keep their router in a closet, leading to poor Wi-Fi coverage for the rest of the house.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-2 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.3cqw] font-bold text-teal-700">Observation A: Physical Setup</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">The smart hub requires a physical ethernet connection to the router. Many users keep their router in a closet, leading to poor Wi-Fi coverage for the rest of the house.</p>
            </div>
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm rotate-1 animate-subtle-2">
              <span class="text-[1.3cqw] font-bold text-teal-700">Observation B: Notification Fatigue</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">Users disabled push notifications within 48 hours because the motion sensor triggered on pets. We must implement object classification (human vs pet) on edge.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-2 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.3cqw] font-bold text-teal-700">Observation A: Physical Setup</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">The smart hub requires a physical ethernet connection to the router. Many users keep their router in a closet, leading to poor Wi-Fi coverage for the rest of the house.</p>
            </div>
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm rotate-1 animate-subtle-2">
              <span class="text-[1.3cqw] font-bold text-teal-700">Observation B: Notification Fatigue</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">Users disabled push notifications within 48 hours because the motion sensor triggered on pets. We must implement object classification (human vs pet) on edge.</p>
            </div>
            <div class="col-span-2 bg-yellow-50 p-[1.2cqw] shadow-md border border-yellow-200 rounded-sm rotate-1 animate-subtle-3">
              <span class="text-[1.3cqw] font-bold text-amber-800">★ Key Takeaway</span>
              <p class="text-[0.95cqw] text-slate-700 mt-[0.5cqw]">Physical unboxing friction and high false-alert rates are the two primary drivers of 30-day device churn. Engineering interventions must focus on Wi-Fi fallback and local NPU filtering.</p>
            </div>
          </div>
        `
      }
    },
    scene2: {
      title: "UX Interventions",
      subtitle: "Engineering Solutions to Address Setup Friction and Notification Fatigue",
      low: {
        beat1: {
          visualHtml: `<div class="bg-white p-[1cqw] pb-[3cqw] -rotate-2 shadow-lg border border-slate-200 max-w-[15cqw] mx-auto font-sketch text-slate-800 animate-float-sticky-1"><div class="aspect-square bg-slate-100 flex items-center justify-center text-[3cqw]">📡</div><p class="text-[0.9cqw] text-slate-600 mt-[0.5cqw] text-center">Wi-Fi Fallback</p></div>`,
          title: "Wi-Fi Fallback Mode",
          desc: "Implemented a temporary soft-AP Wi-Fi fallback mode during initial setup."
        },
        beat2: {
          visualHtml: `<div class="bg-white p-[1cqw] pb-[3cqw] -rotate-2 shadow-lg border border-slate-200 max-w-[15cqw] mx-auto font-sketch text-slate-800 animate-float-sticky-1"><div class="aspect-square bg-slate-100 flex items-center justify-center text-[3cqw]">📡</div><p class="text-[0.9cqw] text-slate-600 mt-[0.5cqw] text-center">Wi-Fi Fallback</p></div>`,
          title: "Wi-Fi Fallback Mode",
          desc: "Implemented a temporary soft-AP Wi-Fi fallback mode during initial setup.",
          subdesc: "Deployed edge-based pet classification algorithms directly on the camera's NPU."
        },
        beat3: {
          visualHtml: `<div class="bg-white p-[1cqw] pb-[3cqw] -rotate-2 shadow-lg border border-slate-200 max-w-[15cqw] mx-auto font-sketch text-slate-800 animate-float-sticky-1"><div class="aspect-square bg-slate-100 flex items-center justify-center text-[3cqw]">📡</div><p class="text-[0.9cqw] text-slate-600 mt-[0.5cqw] text-center">Wi-Fi Fallback</p></div>`,
          title: "Wi-Fi Fallback Mode",
          desc: "Implemented a temporary soft-AP Wi-Fi fallback mode during initial setup.",
          subdesc: "Deployed edge-based pet classification algorithms directly on the camera's NPU.",
          punchline: "Adding Wi-Fi fallback and edge-based pet filtering reduces setup abandonment by 85%."
        }
      },
      med: {
        beat1: `
          <div class="grid grid-cols-3 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 1: Soft-AP</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">Hub broadcasts setup Wi-Fi network. Mobile app connects directly.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#fallback</span>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 1: Soft-AP</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">Hub broadcasts setup Wi-Fi network. Mobile app connects directly.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#fallback</span>
            </div>
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm rotate-2 animate-subtle-2">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 2: Credentials</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">User inputs home Wi-Fi credentials. Hub connects and disables soft-AP.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#connected</span>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 1: Soft-AP</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">Hub broadcasts setup Wi-Fi network. Mobile app connects directly.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#fallback</span>
            </div>
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm rotate-2 animate-subtle-2">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 2: Credentials</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">User inputs home Wi-Fi credentials. Hub connects and disables soft-AP.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#connected</span>
            </div>
            <div class="bg-white p-[1cqw] shadow-md border border-slate-200 rounded-sm -rotate-2 animate-subtle-3">
              <span class="text-[1.4cqw] font-bold text-teal-700">Step 3: Edge Filter</span>
              <p class="text-[1cqw] text-slate-600 mt-[0.5cqw]">Local NPU model filters out non-human motion before sending alerts.</p>
              <span class="text-[0.8cqw] text-slate-400 block mt-[1cqw]">#quiet</span>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="grid grid-cols-2 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.3cqw] font-bold text-teal-700">Intervention A: Soft-AP Setup</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">By broadcasting a temporary setup Wi-Fi network, we eliminate the need for a physical ethernet connection, allowing users to configure the hub from any room in the house.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-2 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.3cqw] font-bold text-teal-700">Intervention A: Soft-AP Setup</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">By broadcasting a temporary setup Wi-Fi network, we eliminate the need for a physical ethernet connection, allowing users to configure the hub from any room in the house.</p>
            </div>
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm rotate-1 animate-subtle-2">
              <span class="text-[1.3cqw] font-bold text-teal-700">Intervention B: Edge Pet Filter</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">Deploying a lightweight MobileNetV2 model on the camera's local NPU allows us to classify motion events. Alerts are suppressed if only pets are detected.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-2 gap-[1.5cqw] text-left max-w-[55cqw] mx-auto font-sketch text-slate-800">
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm -rotate-1 animate-subtle-1">
              <span class="text-[1.3cqw] font-bold text-teal-700">Intervention A: Soft-AP Setup</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">By broadcasting a temporary setup Wi-Fi network, we eliminate the need for a physical ethernet connection, allowing users to configure the hub from any room in the house.</p>
            </div>
            <div class="bg-white p-[1.2cqw] shadow-md border border-slate-200 rounded-sm rotate-1 animate-subtle-2">
              <span class="text-[1.3cqw] font-bold text-teal-700">Intervention B: Edge Pet Filter</span>
              <p class="text-[0.95cqw] text-slate-600 mt-[0.5cqw]">Deploying a lightweight MobileNetV2 model on the camera's local NPU allows us to classify motion events. Alerts are suppressed if only pets are detected.</p>
            </div>
            <div class="col-span-2 bg-teal-50 p-[1.2cqw] shadow-md border border-teal-200 rounded-sm rotate-1 animate-subtle-3">
              <span class="text-[1.3cqw] font-bold text-teal-800">★ Engineering Verification Plan</span>
              <p class="text-[0.95cqw] text-slate-700 mt-[0.5cqw]">Verify soft-AP signal strength exceeds -60dBm within 10 meters. Test edge NPU classification accuracy against the standard COCO dataset, targeting >92% precision for human/pet differentiation.</p>
            </div>
          </div>
        `
      }
    }
  },
  22: {
    scene1: {
      title: "Runbook: Pool Recovery",
      subtitle: "Emergency Diagnostics and Recovery Procedures for Database Connection Exhaustion",
      low: {
        beat1: {
          visualHtml: `<div class="border-[0.3cqw] border-yellow-500 p-[1.5cqw] font-mono text-yellow-500 text-center max-w-[25cqw] mx-auto animate-blink-red"><div class="text-[2cqw]">⚠️ WARNING ⚠️</div><div class="text-[1.2cqw] text-white mt-[0.5cqw]">POOL EXHAUSTION DETECTED</div></div>`,
          title: "Outage Alert Triggered",
          desc: "HikariCP reported 0 active connections available. Error rate on API gateways spiked to 12%."
        },
        beat2: {
          visualHtml: `<div class="border-[0.3cqw] border-yellow-500 p-[1.5cqw] font-mono text-yellow-500 text-center max-w-[25cqw] mx-auto animate-blink-red"><div class="text-[2cqw]">⚠️ WARNING ⚠️</div><div class="text-[1.2cqw] text-white mt-[0.5cqw]">POOL EXHAUSTION DETECTED</div></div>`,
          title: "Outage Alert Triggered",
          desc: "HikariCP reported 0 active connections available. Error rate on API gateways spiked to 12%.",
          subdesc: "Primary diagnostic command executed: show processlist; identified 42 threads in 'Sleep' state."
        },
        beat3: {
          visualHtml: `<div class="border-[0.3cqw] border-yellow-500 p-[1.5cqw] font-mono text-yellow-500 text-center max-w-[25cqw] mx-auto animate-blink-red"><div class="text-[2cqw]">⚠️ WARNING ⚠️</div><div class="text-[1.2cqw] text-white mt-[0.5cqw]">POOL EXHAUSTION DETECTED</div></div>`,
          title: "Outage Alert Triggered",
          desc: "HikariCP reported 0 active connections available. Error rate on API gateways spiked to 12%.",
          subdesc: "Primary diagnostic command executed: show processlist; identified 42 threads in 'Sleep' state.",
          punchline: "Outage detected when HikariCP active connections equal max pool size (50/50) and error rate exceeds 5%."
        }
      },
      med: {
        beat1: `
          <div class="grid grid-cols-3 gap-[1.5cqw] font-mono text-left w-full max-w-[55cqw] mx-auto text-white">
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-yellow-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>01_ALERT</span>
                <span class="bg-yellow-950 text-yellow-400 px-1.5 py-0.5 rounded text-[0.8cqw]">FAIL</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">HikariCP reporting 0 active connections available.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885420</div>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] font-mono text-left w-full max-w-[55cqw] mx-auto text-white">
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-yellow-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>01_ALERT</span>
                <span class="bg-yellow-950 text-yellow-400 px-1.5 py-0.5 rounded text-[0.8cqw]">FAIL</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">HikariCP reporting 0 active connections available.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885420</div>
            </div>
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-2">
              <div class="text-yellow-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>02_DUMP</span>
                <span class="bg-yellow-950 text-yellow-400 px-1.5 py-0.5 rounded text-[0.8cqw]">EXEC</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">Thread dump captured. 48 threads blocked awaiting connection.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885425</div>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] font-mono text-left w-full max-w-[55cqw] mx-auto text-white">
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-yellow-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>01_ALERT</span>
                <span class="bg-yellow-950 text-yellow-400 px-1.5 py-0.5 rounded text-[0.8cqw]">FAIL</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">HikariCP reporting 0 active connections available.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885420</div>
            </div>
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-2">
              <div class="text-yellow-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>02_DUMP</span>
                <span class="bg-yellow-950 text-yellow-400 px-1.5 py-0.5 rounded text-[0.8cqw]">EXEC</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">Thread dump captured. 48 threads blocked awaiting connection.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885425</div>
            </div>
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-3">
              <div class="text-red-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>03_LEAK</span>
                <span class="bg-red-950 text-red-400 px-1.5 py-0.5 rounded text-[0.8cqw]">WARN</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">Identified unclosed statement in TransactionHistoryDAO.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885430</div>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto font-mono text-left text-white">
            <div class="col-span-2 bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-yellow-400 font-bold text-[1.2cqw] border-b border-slate-800 pb-[0.5cqw] mb-[1cqw]">DIAGNOSTIC LOGS</div>
              <div class="text-[0.9cqw] text-slate-300 space-y-[0.3cqw]">
                <div>[14:02:10] HikariPool-1 - Connection active: 50, idle: 0, waiting: 48</div>
                <div class="text-red-400">[14:02:15] pool.GetConnectionTimeoutException: Connection is not available</div>
                <div>[14:05:35] Thread dump captured. 42 threads waiting for connection.</div>
              </div>
            </div>
            <div class="p-[1.5cqw] bg-slate-900 rounded-xl border border-slate-800 flex flex-col justify-between animate-match-2">
              <div>
                <span class="text-xs bg-red-950 text-red-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Metrics</span>
                <h4 class="font-bold text-white text-[1.1cqw] mt-[0.5cqw]">Pool Status</h4>
                <p class="text-[0.9cqw] text-slate-400 mt-[0.3cqw] leading-relaxed">Active: 50/50<br>Idle: 0<br>Waiting: 48</p>
              </div>
              <span class="text-[0.8cqw] text-red-400 mt-[1cqw]">[⚠️] EXHAUSTED</span>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto font-mono text-left text-white">
            <div class="col-span-2 bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-yellow-400 font-bold text-[1.2cqw] border-b border-slate-800 pb-[0.5cqw] mb-[1cqw]">DIAGNOSTIC LOGS</div>
              <div class="text-[0.9cqw] text-slate-300 space-y-[0.3cqw]">
                <div>[14:02:10] HikariPool-1 - Connection active: 50, idle: 0, waiting: 48</div>
                <div class="text-red-400">[14:02:15] pool.GetConnectionTimeoutException: Connection is not available</div>
                <div>[14:05:35] Thread dump captured. 42 threads waiting for connection.</div>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-2">
                <span class="text-xs bg-red-950 text-red-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Metrics</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Pool Status</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">Active: 50/50<br>Idle: 0<br>Waiting: 48</p>
              </div>
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-3">
                <span class="text-xs bg-yellow-950 text-yellow-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Command</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Show Processlist</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">show processlist;<br>Identified 42 threads in 'Sleep' state.</p>
              </div>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto font-mono text-left text-white">
            <div class="col-span-2 bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-yellow-400 font-bold text-[1.2cqw] border-b border-slate-800 pb-[0.5cqw] mb-[1cqw]">DIAGNOSTIC LOGS</div>
              <div class="text-[0.9cqw] text-slate-300 space-y-[0.3cqw]">
                <div>[14:02:10] HikariPool-1 - Connection active: 50, idle: 0, waiting: 48</div>
                <div class="text-red-400">[14:02:15] pool.GetConnectionTimeoutException: Connection is not available</div>
                <div>[14:05:35] Thread dump captured. 42 threads waiting for connection.</div>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-2">
                <span class="text-xs bg-red-950 text-red-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Metrics</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Pool Status</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">Active: 50/50<br>Idle: 0<br>Waiting: 48</p>
              </div>
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-3">
                <span class="text-xs bg-yellow-950 text-yellow-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Command</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Show Processlist</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">show processlist;<br>Identified 42 threads in 'Sleep' state.</p>
              </div>
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-4">
                <span class="text-xs bg-red-950 text-red-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Root Cause</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Unclosed Statements</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">TransactionHistoryDAO failed to close JDBC statements, leaking connections.</p>
              </div>
            </div>
          </div>
        `
      }
    },
    scene2: {
      title: "Emergency Recovery",
      subtitle: "Step-by-Step Mitigation and Post-Recovery Verification",
      low: {
        beat1: {
          visualHtml: `<div class="border-[0.3cqw] border-emerald-500 p-[1.5cqw] font-mono text-emerald-500 text-center max-w-[25cqw] mx-auto animate-spring-scale"><div class="text-[2cqw]">🚀 RECOVERY 🚀</div><div class="text-[1.2cqw] text-white mt-[0.5cqw]">MITIGATION ACTIVE</div></div>`,
          title: "Connections Terminated",
          desc: "Terminated all idle database connections in 'Sleep' state to free up pool capacity."
        },
        beat2: {
          visualHtml: `<div class="border-[0.3cqw] border-emerald-500 p-[1.5cqw] font-mono text-emerald-500 text-center max-w-[25cqw] mx-auto animate-spring-scale"><div class="text-[2cqw]">🚀 RECOVERY 🚀</div><div class="text-[1.2cqw] text-white mt-[0.5cqw]">MITIGATION ACTIVE</div></div>`,
          title: "Connections Terminated",
          desc: "Terminated all idle database connections in 'Sleep' state to free up pool capacity.",
          subdesc: "Initiated rolling restart of application nodes to clear leaked connections."
        },
        beat3: {
          visualHtml: `<div class="border-[0.3cqw] border-emerald-500 p-[1.5cqw] font-mono text-emerald-500 text-center max-w-[25cqw] mx-auto animate-spring-scale"><div class="text-[2cqw]">🚀 RECOVERY 🚀</div><div class="text-[1.2cqw] text-white mt-[0.5cqw]">MITIGATION ACTIVE</div></div>`,
          title: "Connections Terminated",
          desc: "Terminated all idle database connections in 'Sleep' state to free up pool capacity.",
          subdesc: "Initiated rolling restart of application nodes to clear leaked connections.",
          punchline: "Mitigation achieved by killing idle transactions and rolling restart of application containers."
        }
      },
      med: {
        beat1: `
          <div class="grid grid-cols-3 gap-[1.5cqw] font-mono text-left w-full max-w-[55cqw] mx-auto text-white">
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-emerald-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>01_KILL</span>
                <span class="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded text-[0.8cqw]">PASS</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">Killed 42 sleeping database connections.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885440</div>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] font-mono text-left w-full max-w-[55cqw] mx-auto text-white">
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-emerald-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>01_KILL</span>
                <span class="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded text-[0.8cqw]">PASS</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">Killed 42 sleeping database connections.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885440</div>
            </div>
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-2">
              <div class="text-emerald-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>02_RESTART</span>
                <span class="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded text-[0.8cqw]">PASS</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">Rolling restart of app containers completed.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885450</div>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] font-mono text-left w-full max-w-[55cqw] mx-auto text-white">
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-emerald-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>01_KILL</span>
                <span class="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded text-[0.8cqw]">PASS</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">Killed 42 sleeping database connections.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885440</div>
            </div>
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-2">
              <div class="text-emerald-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>02_RESTART</span>
                <span class="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded text-[0.8cqw]">PASS</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">Rolling restart of app containers completed.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885450</div>
            </div>
            <div class="bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-3">
              <div class="text-emerald-400 font-bold text-[1.1cqw] flex items-center justify-between">
                <span>03_MONITOR</span>
                <span class="bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded text-[0.8cqw]">PASS</span>
              </div>
              <p class="text-[0.9cqw] text-slate-400 mt-[0.5cqw]">Pool active connections stabilized at 12/50.</p>
              <div class="text-[0.8cqw] text-slate-500 mt-[1cqw]">timestamp: 1719885460</div>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto font-mono text-left text-white">
            <div class="col-span-2 bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-emerald-400 font-bold text-[1.2cqw] border-b border-slate-800 pb-[0.5cqw] mb-[1cqw]">RECOVERY STEPS</div>
              <div class="text-[0.9cqw] text-slate-300 space-y-[0.3cqw]">
                <div>1. Terminate sleeping connections: CALL mysql.rds_kill(thread_id);</div>
                <div class="text-slate-500">2. Rolling restart of app nodes: kubectl rollout restart deployment/api-gateway;</div>
                <div class="text-slate-500">3. Verify pool metrics stabilized below 30% active capacity.</div>
              </div>
            </div>
            <div class="p-[1.5cqw] bg-slate-900 rounded-xl border border-slate-800 flex flex-col justify-between animate-match-2">
              <div>
                <span class="text-xs bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Mitigation</span>
                <h4 class="font-bold text-white text-[1.1cqw] mt-[0.5cqw]">Step 1 Complete</h4>
                <p class="text-[0.9cqw] text-slate-400 mt-[0.3cqw] leading-relaxed">Killed 42 idle connections. Free pool capacity restored.</p>
              </div>
              <span class="text-[0.8cqw] text-emerald-400 mt-[1cqw]">[✓] CAPACITY RESTORED</span>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto font-mono text-left text-white">
            <div class="col-span-2 bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-emerald-400 font-bold text-[1.2cqw] border-b border-slate-800 pb-[0.5cqw] mb-[1cqw]">RECOVERY STEPS</div>
              <div class="text-[0.9cqw] text-slate-300 space-y-[0.3cqw]">
                <div>1. Terminate sleeping connections: CALL mysql.rds_kill(thread_id);</div>
                <div>2. Rolling restart of app nodes: kubectl rollout restart deployment/api-gateway;</div>
                <div class="text-slate-500">3. Verify pool metrics stabilized below 30% active capacity.</div>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-2">
                <span class="text-xs bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Mitigation</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Step 2 Complete</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">Rolling restart of API gateways completed.</p>
              </div>
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-3">
                <span class="text-xs bg-yellow-950 text-yellow-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Verification</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Check Pool Active</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">Active: 12/50<br>Idle: 38<br>Waiting: 0</p>
              </div>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto font-mono text-left text-white">
            <div class="col-span-2 bg-slate-900 p-[1.5cqw] rounded-xl border border-slate-800 animate-match-1">
              <div class="text-emerald-400 font-bold text-[1.2cqw] border-b border-slate-800 pb-[0.5cqw] mb-[1cqw]">RECOVERY STEPS</div>
              <div class="text-[0.9cqw] text-slate-300 space-y-[0.3cqw]">
                <div>1. Terminate sleeping connections: CALL mysql.rds_kill(thread_id);</div>
                <div>2. Rolling restart of app nodes: kubectl rollout restart deployment/api-gateway;</div>
                <div>3. Verify pool metrics stabilized below 30% active capacity.</div>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-2">
                <span class="text-xs bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Mitigation</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Step 2 Complete</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">Rolling restart of API gateways completed.</p>
              </div>
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-3">
                <span class="text-xs bg-yellow-950 text-yellow-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Verification</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Check Pool Active</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">Active: 12/50<br>Idle: 38<br>Waiting: 0</p>
              </div>
              <div class="p-[1cqw] bg-slate-900 rounded-xl border border-slate-800 animate-match-4">
                <span class="text-xs bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Post-Mortem</span>
                <h4 class="font-bold text-white text-[1cqw] mt-[0.3cqw]">Incident Logged</h4>
                <p class="text-[0.85cqw] text-slate-400 mt-[0.2cqw]">Incident #409 resolved. Outage duration: 18 minutes. Hotfix scheduled.</p>
              </div>
            </div>
          </div>
        `
      }
    }
  },
  23: {
    scene1: {
      title: "Handoff Readiness",
      subtitle: "Systemic Audit of Infrastructure, Security, and Telemetry before Release",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#15803d] font-bold border-b border-emerald-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">1 / 4</div>`,
          title: "Infrastructure Provisioned",
          desc: "Production databases, caching layers, and API gateways fully provisioned and verified."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#15803d] font-bold border-b border-emerald-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">3 / 4</div>`,
          title: "Infrastructure Provisioned",
          desc: "Production databases, caching layers, and API gateways fully provisioned and verified.",
          subdesc: "Static security scans and penetration testing completed with zero high-severity vulnerabilities."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#15803d] font-bold border-b border-emerald-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">4 / 4</div>`,
          title: "Infrastructure Provisioned",
          desc: "Production databases, caching layers, and API gateways fully provisioned and verified.",
          subdesc: "Static security scans and penetration testing completed with zero high-severity vulnerabilities.",
          punchline: "All 4 core readiness pillars audited and approved for production handoff."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-[#064e3b] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">🔒</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Security Scan</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Static analysis and dependency vulnerability scans completed.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-[#064e3b] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">🔒</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Security Scan</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Static analysis and dependency vulnerability scans completed.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">📊</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Load Test</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Verified system throughput up to 1000 req/sec.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-[#064e3b] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">🔒</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Security Scan</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Static analysis and dependency vulnerability scans completed.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">📊</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Load Test</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Verified system throughput up to 1000 req/sec.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-3">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-3">
              <span class="text-[1.8cqw] block">📝</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">3. Sign-Off</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Engineering and product leads sign off on release.</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="border border-emerald-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-emerald-50 p-[1cqw] border-b border-emerald-200 flex items-center justify-between">
              <span class="font-bold text-[#064e3b] text-[1.1cqw]">Production Handoff Readiness Ledger</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">AUDITING</span>
            </div>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-emerald-50/50 border-b border-emerald-200 text-[0.8cqw] text-[#064e3b] uppercase tracking-wider">
                  <th class="p-[1cqw]">Pillar</th>
                  <th class="p-[1cqw]">Status</th>
                  <th class="p-[1cqw]">Details</th>
                </tr>
              </thead>
              <tbody class="divide-y border-emerald-200">
                <tr class="animate-subtle-2">
                  <td class="p-[1cqw] font-bold">Infrastructure</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] READY</td>
                  <td class="p-[1cqw]">All production databases and caches provisioned.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        beat2: `
          <div class="border border-emerald-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-emerald-50 p-[1cqw] border-b border-emerald-200 flex items-center justify-between">
              <span class="font-bold text-[#064e3b] text-[1.1cqw]">Production Handoff Readiness Ledger</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">AUDITING</span>
            </div>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-emerald-50/50 border-b border-emerald-200 text-[0.8cqw] text-[#064e3b] uppercase tracking-wider">
                  <th class="p-[1cqw]">Pillar</th>
                  <th class="p-[1cqw]">Status</th>
                  <th class="p-[1cqw]">Details</th>
                </tr>
              </thead>
              <tbody class="divide-y border-emerald-200">
                <tr class="animate-subtle-2">
                  <td class="p-[1cqw] font-bold">Infrastructure</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] READY</td>
                  <td class="p-[1cqw]">All production databases and caches provisioned.</td>
                </tr>
                <tr class="animate-subtle-3">
                  <td class="p-[1cqw] font-bold">Security</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] READY</td>
                  <td class="p-[1cqw]">Static scans and penetration testing completed.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        beat3: `
          <div class="border border-emerald-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-emerald-50 p-[1cqw] border-b border-emerald-200 flex items-center justify-between">
              <span class="font-bold text-[#064e3b] text-[1.1cqw]">Production Handoff Readiness Ledger</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">APPROVED</span>
            </div>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-emerald-50/50 border-b border-emerald-200 text-[0.8cqw] text-[#064e3b] uppercase tracking-wider">
                  <th class="p-[1cqw]">Pillar</th>
                  <th class="p-[1cqw]">Status</th>
                  <th class="p-[1cqw]">Details</th>
                </tr>
              </thead>
              <tbody class="divide-y border-emerald-200">
                <tr class="animate-subtle-2">
                  <td class="p-[1cqw] font-bold">Infrastructure</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] READY</td>
                  <td class="p-[1cqw]">All production databases and caches provisioned.</td>
                </tr>
                <tr class="animate-subtle-3">
                  <td class="p-[1cqw] font-bold">Security</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] READY</td>
                  <td class="p-[1cqw]">Static scans and penetration testing completed.</td>
                </tr>
                <tr class="animate-subtle-4">
                  <td class="p-[1cqw] font-bold">Telemetry</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] READY</td>
                  <td class="p-[1cqw]">Grafana dashboards and APM alerts configured.</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    },
    scene2: {
      title: "Deployment Ledger",
      subtitle: "Step-by-Step Handoff Execution and Verification Log",
      low: {
        beat1: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#15803d] font-bold border-b border-emerald-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">Step 1</div>`,
          title: "Database Migrations",
          desc: "Executed DDL migration scripts to apply composite indexes and outbox triggers."
        },
        beat2: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#15803d] font-bold border-b border-emerald-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">Step 2</div>`,
          title: "Database Migrations",
          desc: "Executed DDL migration scripts to apply composite indexes and outbox triggers.",
          subdesc: "Deployed updated API gateway and sync worker containers to Kubernetes cluster."
        },
        beat3: {
          visualHtml: `<div class="font-mono text-[6cqw] text-[#15803d] font-bold border-b border-emerald-200 pb-[1cqw] mb-[1cqw] animate-spring-scale">Step 3</div>`,
          title: "Database Migrations",
          desc: "Executed DDL migration scripts to apply composite indexes and outbox triggers.",
          subdesc: "Deployed updated API gateway and sync worker containers to Kubernetes cluster.",
          punchline: "Deployment ledger verifies zero-downtime database migrations and instant rollback capability."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-[#064e3b] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">💾</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. DB Migrations</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Apply composite indexes and outbox triggers to SQLite.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-[#064e3b] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">💾</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. DB Migrations</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Apply composite indexes and outbox triggers to SQLite.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">🚀</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Deploy Containers</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Rolling deployment of API gateways and background workers.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-[#064e3b] max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">💾</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. DB Migrations</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Apply composite indexes and outbox triggers to SQLite.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">🚀</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Deploy Containers</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Rolling deployment of API gateways and background workers.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-3">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-emerald-200 bg-white shadow-sm w-[16cqw] text-left animate-match-3">
              <span class="text-[1.8cqw] block">🧪</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">3. Smoke Tests</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-[#374151]">Run automated end-to-end integration and sync tests.</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="border border-emerald-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-emerald-50 p-[1cqw] border-b border-emerald-200 flex items-center justify-between">
              <span class="font-bold text-[#064e3b] text-[1.1cqw]">Deployment Execution Ledger</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">EXECUTING</span>
            </div>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-emerald-50/50 border-b border-emerald-200 text-[0.8cqw] text-[#064e3b] uppercase tracking-wider">
                  <th class="p-[1cqw]">Step</th>
                  <th class="p-[1cqw]">Status</th>
                  <th class="p-[1cqw]">Command</th>
                </tr>
              </thead>
              <tbody class="divide-y border-emerald-200">
                <tr class="animate-subtle-2">
                  <td class="p-[1cqw] font-bold">1. DB Migration</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] SUCCESS</td>
                  <td class="p-[1cqw] font-mono text-[0.8cqw]">flyway migrate -target=3.4.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        beat2: `
          <div class="border border-emerald-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-emerald-50 p-[1cqw] border-b border-emerald-200 flex items-center justify-between">
              <span class="font-bold text-[#064e3b] text-[1.1cqw]">Deployment Execution Ledger</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">EXECUTING</span>
            </div>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-emerald-50/50 border-b border-emerald-200 text-[0.8cqw] text-[#064e3b] uppercase tracking-wider">
                  <th class="p-[1cqw]">Step</th>
                  <th class="p-[1cqw]">Status</th>
                  <th class="p-[1cqw]">Command</th>
                </tr>
              </thead>
              <tbody class="divide-y border-emerald-200">
                <tr class="animate-subtle-2">
                  <td class="p-[1cqw] font-bold">1. DB Migration</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] SUCCESS</td>
                  <td class="p-[1cqw] font-mono text-[0.8cqw]">flyway migrate -target=3.4.0</td>
                </tr>
                <tr class="animate-subtle-3">
                  <td class="p-[1cqw] font-bold">2. Container Deploy</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] SUCCESS</td>
                  <td class="p-[1cqw] font-mono text-[0.8cqw]">kubectl rollout status deployment/sync-worker</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        beat3: `
          <div class="border border-emerald-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-sans text-[0.9cqw] animate-subtle-1">
            <div class="bg-emerald-50 p-[1cqw] border-b border-emerald-200 flex items-center justify-between">
              <span class="font-bold text-[#064e3b] text-[1.1cqw]">Deployment Execution Ledger</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">COMPLETED</span>
            </div>
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-emerald-50/50 border-b border-emerald-200 text-[0.8cqw] text-[#064e3b] uppercase tracking-wider">
                  <th class="p-[1cqw]">Step</th>
                  <th class="p-[1cqw]">Status</th>
                  <th class="p-[1cqw]">Command</th>
                </tr>
              </thead>
              <tbody class="divide-y border-emerald-200">
                <tr class="animate-subtle-2">
                  <td class="p-[1cqw] font-bold">1. DB Migration</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] SUCCESS</td>
                  <td class="p-[1cqw] font-mono text-[0.8cqw]">flyway migrate -target=3.4.0</td>
                </tr>
                <tr class="animate-subtle-3">
                  <td class="p-[1cqw] font-bold">2. Container Deploy</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] SUCCESS</td>
                  <td class="p-[1cqw] font-mono text-[0.8cqw]">kubectl rollout status deployment/sync-worker</td>
                </tr>
                <tr class="animate-subtle-4">
                  <td class="p-[1cqw] font-bold">3. Smoke Verification</td>
                  <td class="p-[1cqw] text-emerald-600 font-bold">[✓] SUCCESS</td>
                  <td class="p-[1cqw] font-mono text-[0.8cqw]">npm run test:prod-smoke</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    }
  },
  24: {
    scene1: {
      title: "Query Optimization",
      subtitle: "Refactoring the Transaction History Query to Eliminate Full Table Scans",
      low: {
        beat1: {
          visualHtml: `<div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[35cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1"><div class="bg-red-50 p-[0.8cqw] border-b border-slate-200 text-red-800 font-sans font-bold">Slow Query (240ms)</div><div class="p-[1cqw] bg-slate-950 text-red-400">SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC;</div></div>`,
          title: "Slow Query Identified",
          desc: "Identified a high-frequency query performing full table scans on the transactions table."
        },
        beat2: {
          visualHtml: `<div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[35cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1"><div class="bg-red-50 p-[0.8cqw] border-b border-slate-200 text-red-800 font-sans font-bold">Slow Query (240ms)</div><div class="p-[1cqw] bg-slate-950 text-red-400">SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC;</div></div>`,
          title: "Slow Query Identified",
          desc: "Identified a high-frequency query performing full table scans on the transactions table.",
          subdesc: "Refactored query to select only required columns and apply a composite index."
        },
        beat3: {
          visualHtml: `<div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[35cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1"><div class="bg-red-50 p-[0.8cqw] border-b border-slate-200 text-red-800 font-sans font-bold">Slow Query (240ms)</div><div class="p-[1cqw] bg-slate-950 text-red-400">SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC;</div></div>`,
          title: "Slow Query Identified",
          desc: "Identified a high-frequency query performing full table scans on the transactions table.",
          subdesc: "Refactored query to select only required columns and apply a composite index.",
          punchline: "Adding a composite index and limit clause reduces query execution time from 240ms to 4.2ms."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">🔴</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Full Table Scan</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Database scans all rows to match user_id (240ms execution).</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">🔴</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Full Table Scan</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Database scans all rows to match user_id (240ms execution).</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">🟢</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Index Lookup</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Composite index (user_id, created_at) enables instant lookup.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">🔴</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Full Table Scan</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Database scans all rows to match user_id (240ms execution).</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">🟢</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Index Lookup</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Composite index (user_id, created_at) enables instant lookup.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-3">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-3">
              <span class="text-[1.8cqw] block">⚡</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">3. Covered Scan</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Query fully satisfied by index, avoiding table heap access (4.2ms).</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1">
            <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
              <span class="font-bold text-slate-800 text-[1cqw]">SQL Query Optimization Diff</span>
              <span class="text-xs bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full font-semibold">SLOW QUERY</span>
            </div>
            <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
              <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">- SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC;</div>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">SQL Query Optimization Diff</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">OPTIMIZED</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">- SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC;</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ SELECT id, amount, status, created_at FROM transactions</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ WHERE user_id = ? LIMIT 20;</div>
              </div>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 rounded-xl bg-white shadow-sm flex flex-col justify-between animate-subtle-3">
              <div>
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Analysis</span>
                <h4 class="font-bold text-slate-800 text-[1.1cqw] mt-[0.5cqw]">Query Plan</h4>
                <p class="text-[0.9cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">Selecting only required columns avoids fetching large blob fields, reducing network payload size by 90%.</p>
              </div>
              <span class="text-[0.8cqw] font-mono text-emerald-600 mt-[1cqw]">[✓] COLUMNS OPTIMIZED</span>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">SQL Query Optimization Diff</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">OPTIMIZED</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div class="text-red-400 bg-red-950/30 px-2 py-0.5 rounded animate-subtle-2">- SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC;</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ SELECT id, amount, status, created_at FROM transactions</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ FORCE INDEX (idx_user_created)</div>
                <div class="text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded animate-subtle-3">+ WHERE user_id = ? LIMIT 20;</div>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-3">
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Analysis</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">Query Plan</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">Selecting only required columns avoids fetching large blob fields, reducing network payload size by 90%.</p>
              </div>
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-4">
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">INDEX</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">Composite Index</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">FORCE INDEX forces SQLite to use the composite index (user_id, created_at), avoiding full table scans.</p>
              </div>
            </div>
          </div>
        `
      }
    },
    scene2: {
      title: "Index Migration Spec",
      subtitle: "DDL Migration Script and Production Rollout Strategy",
      low: {
        beat1: {
          visualHtml: `<div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[35cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1"><div class="bg-emerald-50 p-[0.8cqw] border-b border-slate-200 text-emerald-800 font-sans font-bold">DDL Migration</div><div class="p-[1cqw] bg-slate-950 text-emerald-400">CREATE INDEX CONCURRENTLY idx_user_created ON transactions (user_id, created_at DESC);</div></div>`,
          title: "Composite Index Created",
          desc: "Wrote Flyway DDL migration script to create the composite index concurrently."
        },
        beat2: {
          visualHtml: `<div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[35cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1"><div class="bg-emerald-50 p-[0.8cqw] border-b border-slate-200 text-emerald-800 font-sans font-bold">DDL Migration</div><div class="p-[1cqw] bg-slate-950 text-emerald-400">CREATE INDEX CONCURRENTLY idx_user_created ON transactions (user_id, created_at DESC);</div></div>`,
          title: "Composite Index Created",
          desc: "Wrote Flyway DDL migration script to create the composite index concurrently.",
          subdesc: "Verified index usage using EXPLAIN QUERY PLAN; query now performs COVERING INDEX scan."
        },
        beat3: {
          visualHtml: `<div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[35cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1"><div class="bg-emerald-50 p-[0.8cqw] border-b border-slate-200 text-emerald-800 font-sans font-bold">DDL Migration</div><div class="p-[1cqw] bg-slate-950 text-emerald-400">CREATE INDEX CONCURRENTLY idx_user_created ON transactions (user_id, created_at DESC);</div></div>`,
          title: "Composite Index Created",
          desc: "Wrote Flyway DDL migration script to create the composite index concurrently.",
          subdesc: "Verified index usage using EXPLAIN QUERY PLAN; query now performs COVERING INDEX scan.",
          punchline: "Online index creation executed concurrently to prevent table locking on production databases."
        }
      },
      med: {
        beat1: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">📝</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Generate DDL</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Create Flyway migration script with index DDL.</p>
            </div>
          </div>
        `,
        beat2: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">📝</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Generate DDL</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Create Flyway migration script with index DDL.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">🧪</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Dry Run</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Execute migration on staging environment to verify safety.</p>
            </div>
          </div>
        `,
        beat3: `
          <div class="flex items-center justify-center gap-[2cqw] font-mono text-slate-800 max-w-[55cqw] mx-auto">
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-1">
              <span class="text-[1.8cqw] block">📝</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">1. Generate DDL</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Create Flyway migration script with index DDL.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-2">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-2">
              <span class="text-[1.8cqw] block">🧪</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">2. Dry Run</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Execute migration on staging environment to verify safety.</p>
            </div>
            <div class="text-[2cqw] text-emerald-600 animate-match-3">➔</div>
            <div class="p-[1.5cqw] rounded-xl border border-slate-200 bg-white shadow-sm w-[16cqw] text-left animate-match-3">
              <span class="text-[1.8cqw] block">🚀</span>
              <span class="font-bold text-[1.1cqw] block mt-[0.5cqw]">3. Online Build</span>
              <p class="text-[0.9cqw] mt-[0.2cqw] text-slate-500">Build index concurrently on production without table locks.</p>
            </div>
          </div>
        `
      },
      high: {
        beat1: `
          <div class="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden text-left max-w-[55cqw] mx-auto font-mono text-[0.85cqw] animate-subtle-1">
            <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
              <span class="font-bold text-slate-800 text-[1cqw]">Flyway DDL Migration</span>
              <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">ACTIVE</span>
            </div>
            <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
              <div>-- V3.4.1__add_composite_index.sql</div>
              <div class="text-emerald-400">CREATE INDEX CONCURRENTLY idx_user_created</div>
              <div class="text-emerald-400">ON transactions (user_id, created_at DESC);</div>
            </div>
          </div>
        `,
        beat2: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">Flyway DDL Migration</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">ACTIVE</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div>-- V3.4.1__add_composite_index.sql</div>
                <div class="text-emerald-400">CREATE INDEX CONCURRENTLY idx_user_created</div>
                <div class="text-emerald-400">ON transactions (user_id, created_at DESC);</div>
              </div>
            </div>
            <div class="p-[1.2cqw] border border-slate-200 rounded-xl bg-white shadow-sm flex flex-col justify-between animate-subtle-3">
              <div>
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Explain</span>
                <h4 class="font-bold text-slate-800 text-[1.1cqw] mt-[0.5cqw]">Explain Plan</h4>
                <p class="text-[0.9cqw] text-slate-500 mt-[0.3cqw] leading-relaxed">EXPLAIN QUERY PLAN SELECT...<br>➔ SEARCH TABLE transactions USING COVERING INDEX idx_user_created</p>
              </div>
              <span class="text-[0.8cqw] font-mono text-emerald-600 mt-[1cqw]">[✓] COVERING INDEX VERIFIED</span>
            </div>
          </div>
        `,
        beat3: `
          <div class="grid grid-cols-3 gap-[1.5cqw] max-w-[58cqw] mx-auto text-left font-sans">
            <div class="col-span-2 border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden font-mono text-[0.85cqw] animate-subtle-1">
              <div class="bg-slate-50 p-[1cqw] border-b border-slate-200 flex items-center justify-between font-sans">
                <span class="font-bold text-slate-800 text-[1cqw]">Flyway DDL Migration</span>
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-semibold">ACTIVE</span>
              </div>
              <div class="p-[1.2cqw] space-y-[0.5cqw] bg-slate-950 text-slate-300">
                <div>-- V3.4.1__add_composite_index.sql</div>
                <div class="text-emerald-400">CREATE INDEX CONCURRENTLY idx_user_created</div>
                <div class="text-emerald-400">ON transactions (user_id, created_at DESC);</div>
              </div>
            </div>
            <div class="space-y-[1cqw] flex flex-col justify-between">
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-3">
                <span class="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Explain</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">Explain Plan</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">EXPLAIN QUERY PLAN SELECT...<br>➔ SEARCH TABLE transactions USING COVERING INDEX idx_user_created</p>
              </div>
              <div class="p-[1cqw] border border-slate-200 rounded-xl bg-white shadow-sm animate-subtle-4">
                <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">ROLLBACK</span>
                <h4 class="font-bold text-slate-800 text-[1cqw] mt-[0.3cqw]">Rollback DDL</h4>
                <p class="text-[0.85cqw] text-slate-500 mt-[0.2cqw]">DROP INDEX IF EXISTS idx_user_created;</p>
              </div>
            </div>
          </div>
        `
      }
    }
  }
};