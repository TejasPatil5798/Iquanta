
import React, { useState } from "react";
import { X, MessageCircle, Phone, Info } from "lucide-react";

export function CntPodcast() {
  // Modal states
  const [showTalkModal, setShowTalkModal] = useState(false);
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);

  const handleTalkToSales = () => setShowTalkModal(true);
  const handleStartTrial = () => setShowTrialModal(true);
  const handleCurrentPlan = () => setShowPlanModal(true);
  const handleGetStarted = () => {
    console.log("Get started clicked");
    setShowTrialModal(false);
  };

  return (
    <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12 min-h-screen">
      {/* ===== SECTION 1 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        {/* LEFT */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Maximize Content Reach <br />
            with Podcasts
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-6">
            HubSpot’s Podcast tool is infused with AI capabilities, designed to
            empower marketers to create, produce, repurpose, and distribute
            podcasts more easily and efficiently.
          </p>

          <p className="text-gray-600 mb-6">
            Unlock this and more with Content Hub Professional.
          </p>

         <div className="flex flex-col gap-4 w-fit">
            <div className="mt-6 flex flex-col gap-4 w-full sm:w-80"></div>
            <button
              onClick={handleTalkToSales}
              className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
            >
              Talk to Sales
            </button>

            <button
              onClick={handleStartTrial}
              className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
            >
              Start 14-day trial
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-3">
            No commitment or credit card required.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[500px]">
          <img
            src="https://cdn2.hubspot.net/hubfs/53/Video%20Hosting%20Screenshot.png"
            alt="Podcast UI"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 max-w-4xl mx-auto">
          Extend your reach by catering to audiences with audio content preferences
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[550px]">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGsy7_GtA9hlHJYF_hIMSZYAXjcJoYfWyj3CLn6wZJ5t9_qedb"
              alt="Distribute Episode"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Podcast Hosting
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Host your audio files at HubSpot and use an RSS feed for ease of
              distribution across podcast directories (i.e. Spotify, Apple Podcasts, etc.)
            </p>
          </div>
        </div>
      </div>

      {/* ===== SECTION 3 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        {/* LEFT TEXT */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Create podcast episodes using our high-quality AI audio
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            No studio audio? No problem! Repurpose your content by turning your
            written content into audio files for your podcast episodes.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[600px]">
          <img
            src="https://makewebbetter.com/wp-content/uploads/2024/08/hubspot-podcasts.webp"
            alt="AI Podcast Audio"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* ===== SECTION 4 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-[600px]">
          <img
            src="https://community.hubspot.com/t5/image/serverpage/image-id/142654i37E73679DBF3D887/image-size/large?v=v2&px=999"
            alt="Share Podcast"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Easily share your podcast episodes in your pages
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Create a website page, landing page, or blog post featuring your podcast
            episodes with our Podcast Episode Module to easily publish and share.
          </p>
        </div>
      </div>

      {/* ===== SECTION 5 : TABLE (Create Content) ===== */}
      <div className="mt-28 overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Top Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Create Content
            </h2>

            <div className="text-center mt-6 md:mt-0">
              <p className="font-semibold text-gray-800">Free Content tools</p>
              <button
                onClick={handleCurrentPlan}
                className="mt-3 px-5 py-2 rounded-md bg-gray-100 text-gray-600 border hover:bg-gray-200 transition"
              >
                Your current plan
              </button>
            </div>

            <div className="text-center mt-6 md:mt-0">
              <p className="font-semibold text-gray-800">Content Hub Professional</p>
              <button
                onClick={handleTalkToSales}
                className="mt-3 px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
              >
                Talk to Sales
              </button>
            </div>
          </div>

          {/* Table rows – all original rows preserved, only made responsive */}
          <div className="border-t border-gray-300">
            {/* ROW: Ad management */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Ad management</div>
              <div className="py-6 flex justify-center border-l"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 flex justify-center border-l"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* ROW: AI assistants */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 flex items-center gap-2 font-medium">AI assistants</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 flex justify-center border-l"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* ROW: AI image generator */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">AI image generator</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 flex justify-center border-l"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* ROW: CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">CTAs</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-gray-600 text-center px-4">Includes custom targeting by device type, country, referral URL, and more.</div>
            </div>

            {/* ROW: Forms */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Forms</div>
              <div className="py-6 border-l text-center text-gray-500">Limited features</div>
              <div className="py-6 border-l text-center text-gray-600">Remove HubSpot branding <br /> Additional features</div>
            </div>

            {/* ROW: Landing pages */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Landing pages</div>
              <div className="py-6 border-l text-sm text-gray-600 px-4">Up to 30 total landing pages. Includes HubSpot branding.</div>
              <div className="py-6 border-l text-sm text-gray-600 px-4">Up to 10K landing pages. Includes custom templates, smart content, A/B testing, and SEO recommendations.</div>
            </div>

            {/* ROW: Live chat */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Live chat</div>
              <div className="py-6 border-l text-center text-gray-600">Includes HubSpot branding</div>
              <div className="py-6 border-l text-center text-gray-600">Remove HubSpot branding</div>
            </div>

            {/* ROW: Conversational bots */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Conversational bots</div>
              <div className="py-6 border-l text-center text-gray-500">Limited features</div>
              <div className="py-6 border-l text-center text-gray-600">Additional features</div>
            </div>

            {/* ROW: Facebook Messenger integration */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Facebook Messenger integration</div>
              <div className="py-6 border-l text-center text-gray-600 px-2">Send and receive simple messages and quick replies</div>
              <div className="py-6 border-l text-center text-gray-600 px-2">Includes advanced bot branching and reporting</div>
            </div>

            {/* ROW: Logged-in visitor identification */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Logged-in visitor identification</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 flex justify-center border-l"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* ROW: Draggable chat widget */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Draggable chat widget</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 flex justify-center border-l"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* ROW: Website pages */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Website pages</div>
              <div className="py-6 border-l text-sm text-gray-600 px-4">Up to 30 total website pages. Includes HubSpot branding. Favicon not customizable.</div>
              <div className="py-6 border-l text-sm text-gray-600 px-4">Up to 10K website pages. Includes personalization, A/B testing, and SEO recommendations.</div>
            </div>

            {/* ROW: 99.95% measured uptime */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">99.95% measured uptime</div>
              <div className="py-6 flex justify-center border-l"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 flex justify-center border-l"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* ROW: Advanced menus */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
              <div className="py-6 font-medium">Advanced menus</div>
              <div className="py-6 border-l text-center text-gray-600 px-2">Applies to website pages and blog posts</div>
              <div className="py-6 border-l text-center text-gray-600 px-2">Applies to website pages and blog posts</div>
            </div>

            {/* Apex hosting */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Apex hosting and redirects</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* XML sitemap */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Automatically-generated XML sitemap</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Cookie management */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-center">
              <div className="py-6 font-medium">Cookie Management Tools</div>
              <div className="py-6 border-l text-sm text-gray-600 px-4">Create up to 100 consent banners with different geotargeting rules, languages, and templates. Includes support for GPC signals. Allow visitors to update their consent preferences.</div>
              <div className="py-6 border-l text-sm text-gray-600 px-4">Create up to 100 consent banners with advanced rules, languages, templates, and support for GPC signals. Remove HubSpot branding.</div>
            </div>

            {/* Custom domain */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Connect a custom domain</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Security */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Custom domain security settings</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Design manager */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Design manager</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Drag and drop */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Drag-and-drop editor</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Local dev */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Local website development</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Mobile optimization */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Mobile optimization</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Premium hosting */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Premium hosting</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Site export */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Site export</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Website structure import */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Website structure import</div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Content staging */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Content staging</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Site tree */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Site tree</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Content library */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-center">
              <div className="py-6 font-medium">Content library</div>
              <div className="py-6 border-l text-sm text-gray-600 px-4">Includes content library module, with HubSpot branding.</div>
              <div className="py-6 border-l text-sm text-gray-600 px-4">Includes content library module, plus gated access and remove branding.</div>
            </div>

            {/* URL mappings */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">URL mappings</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Smart content */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b">
              <div className="py-6 font-medium">Smart content for pages</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Content embed */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Content embed</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Up to 3 blocks per page.</div>
            </div>

            {/* A/B testing */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">A/B testing</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Adaptive testing */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Adaptive testing</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Test up to 5 page variations at a time.</div>
            </div>

            {/* AI translation */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">AI translation</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Automatically translate content.</div>
            </div>

            {/* Breeze Customer Agent */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Breeze Customer Agent</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">100 HubSpot Credits per conversation</div>
            </div>

            {/* Case studies */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Case studies (Beta)</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Up to 10,000 case studies</div>
            </div>

            {/* Content remix */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Content remix (Beta)</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Generate up to 20 pieces of content per day.</div>
            </div>

            {/* Podcasts */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Podcasts</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Up to 5 podcasts and 1K episodes</div>
            </div>

            {/* Video creation */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Video creation & editing</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Multi-language */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Multi-language content creation</div>
              <div className="py-6 border-l text-center px-4">Up to 3 supported languages</div>
              <div className="py-6 border-l text-center px-4">Unlimited supported languages</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 6 : Manage Content (Table) ===== */}
      <div className="mt-32 overflow-x-auto">
        <div className="min-w-[800px]">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Manage Content
          </h2>

          <div className="border-t border-gray-300">
            {/* Reporting dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Reporting dashboard</div>
              <div className="py-6 border-l text-center px-4">10 dashboards, 50 reports per dashboard</div>
              <div className="py-6 border-l text-center px-4">75 dashboards, 50 reports per dashboard</div>
            </div>

            {/* Website traffic */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6">Website traffic analytics</div>
              <div className="py-6 border-l text-center">Standard web analytics dashboard</div>
              <div className="py-6 border-l text-center">Customizable website traffic analytics</div>
            </div>

            {/* Contact attribution */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6">Contact create attribution</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Track up to 10,000 logged contact interactions</div>
            </div>

            {/* SEO analytics */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6">SEO analytics</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Google Search Console */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6">Google Search Console integration</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* SEO recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">SEO recommendations & optimizations</div>
              <div className="py-6 border-l text-center">Basic recommendations.</div>
              <div className="py-6 border-l text-center px-4">Advanced recommendations, full site auditing, and topics.</div>
            </div>

            {/* HubDB */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">HubDB</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Dynamic pages */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6">Dynamic pages</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Memberships */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Memberships</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Up to 2 access groups.</div>
            </div>

            {/* Member blog */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Member blog</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Up to 2 access groups.</div>
            </div>

            {/* Password-protected pages */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6">Password-protected pages</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l flex justify-center"><div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div></div>
            </div>

            {/* Video hosting & management */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
              <div className="py-6 font-medium">Video hosting & management</div>
              <div className="py-6 border-l"></div>
              <div className="py-6 border-l text-center px-4">Up to 150 videos</div>
            </div>

            {/* Footnote row */}
            <div className="py-6 border-t text-sm text-gray-500 col-span-3 text-center">
              View the Product & Services Catalog for full technical limits and definitions
            </div>
          </div>
        </div>
      </div>

      {/* ===== MODAL: Talk to Sales ===== */}
      {showTalkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-semibold">Talk to an Expert</h2>
              <button onClick={() => setShowTalkModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-800 mb-4 font-medium">Anki, how would you like to connect with us?</p>
              <div className="space-y-4">
                <button className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <div className="font-semibold">Chat with us</div>
                      <div className="text-xs text-gray-500">Recommended</div>
                      <div className="text-sm text-gray-600 mt-1">Get quick answers and feature guidance</div>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <div className="font-semibold">Call us</div>
                      <div className="text-sm text-gray-600 mt-1">Get our customer support phone number and give us a call</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL: Start 14-day Trial ===== */}
      {showTrialModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-semibold">Welcome to Content Hub Professional</h2>
              <button onClick={() => setShowTrialModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Explore powerful tools to grow your business. For <strong>14 days</strong>, you'll get everything in Free Tools and Content Hub Starter, plus:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>AI-powered content tools like Content remix and SEO</li>
                <li>Tailored guidance to get the most out of your trial</li>
                <li>Support by chat, phone, or email</li>
                <li>You won't be charged, trials are completely free</li>
              </ul>
              <p className="text-gray-700 mb-6">
                At the end of your trial, your account will return to your current plan. Upgrade any time before <strong>Jul 21, 2026</strong> to restore full access of your professional features.
              </p>
              <div className="flex justify-end">
                <button onClick={handleGetStarted} className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL: Your Current Plan ===== */}
      {showPlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-semibold">Your Current Plan</h2>
              <button onClick={() => setShowPlanModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-blue-500" />
                <p className="text-gray-800 font-medium">Free Content Tools</p>
              </div>
              <p className="text-gray-600 mb-4">
                You are currently on the <strong>Free Content Tools</strong> plan. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Basic podcast hosting</li>
                <li>Up to 30 landing pages</li>
                <li>Limited forms and CTAs</li>
                <li>HubSpot branding on all content</li>
              </ul>
              <p className="text-gray-600">
                Upgrade to <strong>Content Hub Professional</strong> to unlock AI tools, advanced analytics, and remove HubSpot branding.
              </p>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setShowPlanModal(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
