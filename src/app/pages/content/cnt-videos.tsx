import { useState } from "react";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { X, MessageCircle, Phone, Info } from "lucide-react";

export function CntVideos() {
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
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100 min-h-screen">
      {/* ===== SECTION 1 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-snug">
            All-in-One Video <br />
            Marketing & Hosting
          </h1>

          <p className="text-gray-600 mb-3">
            From video hosting to editing—clip, repurpose, and optimize content faster 
            with HubSpot’s CRM-connected video tools.
          </p>

          <p className="text-gray-600 mb-5">
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

          <p className="text-sm text-gray-400 mt-2">
            No commitment or credit card required.
          </p>
        </div>

        <div className="flex justify-center w-full lg:w-1/2">
  <img
    src="https://www.hubspot.com/hubfs/WBZ%202025%20Rebrand/Product%20UIs/2025-%20Content%20Hub/EN/video-header-EN.png"
    alt="video marketing"
    className="w-full max-w-4xl lg:max-w-5xl h-auto rounded-lg"
  />
</div>
      </div>

      {/* ===== CENTER TITLE ===== */}
      <h2 className="text-3xl font-bold text-center mb-16">
        Video marketing made easy
      </h2>

      {/* ===== SECTION 2 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        <div className="flex justify-center w-full lg:w-1/2">
  <img
    src="https://www.hubspot.com/hs-fs/hubfs/DO%20NOT%20USE%20-%20WBZ%202025%20Rebrand-%20contact%20Teenie%20Rose%20for%20usage/Product%20UIs%20-%20contact%20Teenie%20Rose%20for%20usage/2025-%20Content%20Hub/EN/video-body1-EN.png?width=600"
    alt="video editing"
    className="w-full max-w-4xl lg:max-w-5xl h-auto rounded-lg"
  />
</div>

        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4">
            Create and share videos faster with AI.
          </h2>

          <p className="text-gray-600">
            Breeze lets you scale your videos with speed and ease:
            find shareable clips, create social posts, and translate 
            videos with AI.
          </p>
        </div>
      </div>

      {/* ===== SECTION 3 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4">
            Edit your clips to perfection—no <br/>
            experience needed.
          </h2>

          <p className="text-gray-600">
            With HubSpot's clip editor, turn long videos into
            branded, ready-to-share content using simple, 
            transcript-based editing. Add captions, crop for any
            platform, and style clips with logos, backgrounds, and
            brand kits—all in just a few clicks.
          </p>
        </div>

        <div className="flex justify-center w-full lg:w-1/2">
  <img
    src="https://www.hubspot.com/hs-fs/hubfs/DO%20NOT%20USE%20-%20WBZ%202025%20Rebrand-%20contact%20Teenie%20Rose%20for%20usage/Product%20UIs%20-%20contact%20Teenie%20Rose%20for%20usage/2025-%20Content%20Hub/EN/video-body2-EN.png?width=600"
    alt="video editor"
    className="w-full max-w-4xl lg:max-w-5xl h-auto rounded-lg"
  />
</div>
      </div>

      {/* ===== SECTION 4 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Imported%20sitepage%20images/video-body3-PT.png?width=600&name=video-body3-PT.png"
            alt="video analytics"
            className="w-full max-w-2xl lg:max-w-3xl rounded-lg"
          />
        </div>

        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4">
            Capture leads and get the full picture <br/>
            with video analytics.
          </h2>

          <p className="text-gray-600">
            Embed videos on any CMS and convert viewers when 
            they're most engaged using in-video forms and CTAs.
            Track omnichannel engagement and see how video 
            influences metrics like conversions and revenue.
          </p>
        </div>
      </div>

      {/* ===== SECTION 5 (TABLE) ===== */}
      <div className="mt-20 overflow-x-auto">
        <div className="min-w-[800px]">
          <h2 className="text-4xl font-bold mb-10">Create Content</h2>
          <div className="grid grid-cols-3 border-t border-gray-300">
            {/* Empty corner cell */}
            <div></div>

            {/* FREE header */}
            <div className="text-center py-6 font-semibold border-l border-gray-300">
              Free Content tools
              <div className="mt-3 flex justify-center">
                <button
                  onClick={handleCurrentPlan}
                  className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md text-sm border hover:bg-gray-200 transition"
                >
                  Your current plan
                </button>
              </div>
            </div>

            {/* PRO header */}
            <div className="text-center py-6 font-semibold border-l border-gray-300">
              Content Hub Professional
              <div className="mt-3 flex justify-center">
                <button
                  onClick={handleTalkToSales}
                  className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition"
                >
                  Talk to Sales
                </button>
              </div>
            </div>

            {/* All table rows – unchanged from original */}
            {/* ROW: Ad management */}
            <div className="py-6 border-t">Ad management</div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* ROW: AI assistants */}
            <div className="py-6 border-t flex items-center gap-2">
              <HiOutlineCpuChip className="text-gray-600 text-sm" />
              AI assistants
            </div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* ROW: AI image generator */}
            <div className="py-6 border-t flex items-center gap-2">
              <HiOutlineCpuChip className="text-gray-600 text-sm" />
              AI image generator
            </div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* ROW: CTAs */}
            <div className="py-6 border-t">CTAs</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 text-center px-4">
              Includes custom targeting by device type, country, referral URL, and more.
            </div>

            {/* ROW: Forms */}
            <div className="py-6 border-t flex items-center gap-2">
              <HiOutlineCpuChip className="text-gray-600 text-sm" />
              Forms
            </div>
            <div className="py-6 border-t border-l text-center text-gray-500">
              Limited features
            </div>
            <div className="py-6 border-t border-l text-center text-gray-600">
              Remove HubSpot branding <br /> Additional features
            </div>

            {/* ROW: Landing pages */}
            <div className="py-6 border-t">Landing pages</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 30 total landing pages. Includes HubSpot branding.
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 10K landing pages. Includes custom templates, smart content for personalization, A/B testing, adaptive testing, and SEO recommendations. Remove HubSpot branding. <br />
              <span className="text-xs text-gray-400">(Note: Dynamic pages don’t count against your landing page limit.)</span>
            </div>

            {/* ROW: Live chat */}
            <div className="py-6 border-t">Live chat</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Conversational bots, Limited features
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Conversational bots, Additional features, Advanced reporting
            </div>

            {/* ROW: Facebook Messenger integration */}
            <div className="py-6 border-t">Facebook Messenger integration</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Send and receive simple messages and quick replies
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Includes advanced Messenger bot branching and advanced reporting
            </div>

            {/* ROW: Logged-in visitor identification */}
            <div className="py-6 border-t">Logged-in visitor identification</div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* ROW: Draggable chat widget */}
            <div className="py-6 border-t">Draggable chat widget</div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* ROW: Website pages */}
            <div className="py-6 border-t">Website pages</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 30 total website pages. Includes HubSpot branding. Favicon is not customizable.
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 10K website pages. Includes smart content for personalization, A/B testing, adaptive testing, and SEO recommendations. Remove HubSpot branding. <br />
              <span className="text-xs text-gray-400">(Note: Dynamic pages do not count against your website page limit.)</span>
            </div>

            {/* ROW: 99.95% measured uptime */}
            <div className="py-6 border-t">99.95% measured uptime</div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* ROW: Advanced menus */}
            <div className="py-6 border-t">Advanced menus</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Applies to website pages and blog posts. Does not include landing pages.
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Applies to website pages and blog posts. Does not include landing pages.
            </div>

            {/* ROW: Apex hosting and redirects */}
            <div className="py-6 border-t">Apex hosting and redirects</div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* ROW: Automatically-generated XML sitemap */}
            <div className="py-6 border-t">Automatically-generated XML sitemap</div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* ROW: Cookie Management Tools */}
            <div className="py-6 border-t">Cookie Management Tools</div>
            <div className="py-6 border-t border-l text-sm text-gray-500 px-4">
              Basic consent banner (limited)
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Create up to 100 consent banners with different geotargeting rules, languages, and banner templates. Includes support for GPC signals. Allow visitors to update their consent preferences with the cookie settings button. <strong>Remove HubSpot branding.</strong>
            </div>

            {/* Connect a custom domain */}
            <div className="py-6 border-t">Connect a custom domain</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Custom domain security settings */}
            <div className="py-6 border-t">Custom domain security settings</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Design manager */}
            <div className="py-6 border-t">Design manager</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Drag-and-drop editor */}
            <div className="py-6 border-t">Drag-and-drop editor</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Local website development */}
            <div className="py-6 border-t">Local website development</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Mobile optimization */}
            <div className="py-6 border-t">Mobile optimization</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Premium hosting */}
            <div className="py-6 border-t">Premium hosting</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Site export */}
            <div className="py-6 border-t">Site export</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Website structure import */}
            <div className="py-6 border-t">Website structure import</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Content staging */}
            <div className="py-6 border-t">Content staging</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Site tree */}
            <div className="py-6 border-t">Site tree</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Content library */}
            <div className="py-6 border-t">Content library</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Includes content library module, with HubSpot branding.
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Includes content library module, remove HubSpot branding. Additional features.
            </div>

            {/* URL mappings */}
            <div className="py-6 border-t">URL mappings</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Smart content for pages */}
            <div className="py-6 border-t">Smart content for pages</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Content embed */}
            <div className="py-6 border-t">Content embed</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 3 blocks per page.
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Unlimited blocks per page.
            </div>

            {/* A/B testing */}
            <div className="py-6 border-t">A/B testing</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Adaptive testing */}
            <div className="py-6 border-t">Adaptive testing</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Test up to 5 page variations at a time.
            </div>

            {/* AI translation */}
            <div className="py-6 border-t">AI translation</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Automatically translate content.
            </div>

            {/* Breeze Customer Agent */}
            <div className="py-6 border-t">Breeze Customer Agent</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              100 HubSpot Credits per conversation
            </div>

            {/* Case studies (Beta) */}
            <div className="py-6 border-t">Case studies (Beta)</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 10,000 case studies
            </div>

            {/* Content remix (Beta) */}
            <div className="py-6 border-t">Content remix (Beta)</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Generate up to 20 pieces of content per day.
            </div>

            {/* Podcasts */}
            <div className="py-6 border-t">Podcasts</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 5 podcasts and 1K podcast episodes.
            </div>

            {/* Video creation & editing */}
            <div className="py-6 border-t">Video creation & editing</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Multi-language content creation */}
            <div className="py-6 border-t">Multi-language content creation</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 3 HubSpot-supported languages
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Unlimited HubSpot-supported languages
            </div>

            {/* Reporting dashboard */}
            <div className="py-6 border-t">Reporting dashboard</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              10 dashboards, 50 reports per dashboard
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              75 dashboards, 50 reports per dashboard
            </div>

            {/* Website traffic analytics */}
            <div className="py-6 border-t">Website traffic analytics</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Standard web analytics dashboard
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Customizable website traffic analytics
            </div>

            {/* Contact create attribution */}
            <div className="py-6 border-t">Contact create attribution</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Track up to 10,000 logged contact interactions
            </div>

            {/* SEO analytics */}
            <div className="py-6 border-t">SEO analytics</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Google Search Console integration */}
            <div className="py-6 border-t">Google Search Console integration</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* SEO recommendations & optimizations */}
            <div className="py-6 border-t">SEO recommendations & optimizations</div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Basic recommendations.
            </div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Advanced recommendations, full site auditing, and topics.
            </div>

            {/* HubDB */}
            <div className="py-6 border-t">HubDB</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Dynamic pages */}
            <div className="py-6 border-t">Dynamic pages</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Memberships */}
            <div className="py-6 border-t">Memberships</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 2 access groups.
            </div>

            {/* Member blog */}
            <div className="py-6 border-t">Member blog</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 2 access groups.
            </div>

            {/* Password-protected pages */}
            <div className="py-6 border-t">Password-protected pages</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l flex justify-center">
              <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">✓</div>
            </div>

            {/* Video hosting & management */}
            <div className="py-6 border-t">Video hosting & management</div>
            <div className="py-6 border-t border-l"></div>
            <div className="py-6 border-t border-l text-sm text-gray-600 px-4">
              Up to 150 videos
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
              <button
                onClick={() => setShowTalkModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-800 mb-4 font-medium">
                Anki, how would you like to connect with us?
              </p>
              <div className="space-y-4">
                <button className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <div className="font-semibold">Chat with us</div>
                      <div className="text-xs text-gray-500">Recommended</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Get quick answers and feature guidance
                      </div>
                    </div>
                  </div>
                </button>
                <button className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <div className="font-semibold">Call us</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Get our customer support phone number and give us a call
                      </div>
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
              <button
                onClick={() => setShowTrialModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
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
                <button
                  onClick={handleGetStarted}
                  className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition"
                >
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
              <button
                onClick={() => setShowPlanModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
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
                <li>Basic video hosting</li>
                <li>Up to 30 landing pages</li>
                <li>Limited forms and CTAs</li>
                <li>HubSpot branding on all content</li>
              </ul>
              <p className="text-gray-600">
                Upgrade to <strong>Content Hub Professional</strong> to unlock AI tools, advanced analytics, and remove HubSpot branding.
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPlanModal(false)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                >
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