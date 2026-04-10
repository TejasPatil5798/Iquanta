import React, { useState } from "react";
import { X, MessageCircle, Phone, Info } from "lucide-react";

export function SalesSequences() {
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
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Automate your follow-ups
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Book more meetings with personalized, multi-touch sequences. Streamline
            place, making it easy for you to prioritize and execute the most
            cracks. Test messaging and track performance to consistently and predictably
            build pipeline.
          </p>

          <p className="text-gray-600 mb-6">
            Unlock this and more with Sales Hub Professional.
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

        <div className="w-full lg:w-[500px]">
          <img
            src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/conversation-intelligence/conversation-intelligence-hero-en.png?width=540&name=conversation-intelligence-hero-en.png"
            alt="Sequences hero"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 max-w-4xl mx-auto">
          Free up more time to close leads by putting follow-up <br />
          on autopilot
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-[550px]">
            <img
              src="https://focusedgrowth.com.au/wp-content/uploads/2022/12/hubspot-sales-automation.webp"
              alt="Sales automation"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Automate your follow-up, and put time <br />
              back into your day.
            </h3>
            <p className="text-gray-600 text-base sm:text-lg">
              Prevent prospects from slipping through the cracks,
              without the busywork. Send a series of timed emails to
              your prospect so you never lose touch. Choose from a
              list of messages, and enroll a contact right from your
              inbox. Tailor each message, choose exactly when it
              gets sent, and move on.
            </p>
          </div>
        </div>
      </div>

      {/* ===== SECTION 3 ===== */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Personalize and tailor your outreach.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Save your automated emails from becoming
            impersonal. Use personalization tokens to tailor the
            emails in your sequence with contact and company
            details from HubSpot CRM or Salesforce. Then add
            specific details to each message to connect with your
            prospects like only a human can.
          </p>
        </div>
        <div className="w-full lg:w-[600px]">
          <img
            src="https://www.hubspot.com/hs-fs/hubfs/1%20below%20hero.jpg?width=1280&height=813&name=1%20below%20hero.jpg"
            alt="Personalization"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* ===== SECTION 4 ===== */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="w-full lg:w-[600px]">
          <img
            src="https://www.autoarti.com/wp-content/uploads/2022/10/hubspot_marketing_hub_autoarti-1.png"
            alt="Data insights"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Use data to identify the best-performing <br />
            sequences.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Use email tracking to single out which sequences are
            working the hardest for you. Open, click, and reply data
            helps you hone in on which email templates and
            sequences are most effective, so you can optimize
            your emails to get the best results. Once you’ve
            pinpointed your best sequences, share them with the
            rest of your team to scale efficiency.
          </p>
        </div>
      </div>

      {/* ===== SECTION 5 (BUILD PIPELINE) ===== */}
      <div className="mt-28 max-w-6xl mx-auto">
        {/* TOP HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end mb-8 gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Build Pipeline
          </h2>
          <div className="text-center">
            <p className="font-semibold text-sm">Free Sales tools</p>
            <button
              onClick={handleCurrentPlan}
              className="mt-2 px-4 py-2 bg-gray-100 border rounded-md text-sm hover:bg-gray-200 transition"
            >
              Your current plan
            </button>
          </div>
          <div className="text-center">
            <p className="font-semibold text-sm">Sales Hub Professional</p>
            <button
              onClick={handleTalkToSales}
              className="mt-2 px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition"
            >
              Talk to Sales
            </button>
          </div>
        </div>

        {/* Table wrapper - horizontal scroll on mobile */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div>
              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300 border-b">
                <div className="p-4 font-medium">1-to-1 email</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Includes HubSpot branding</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">HubSpot branding removed</div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-medium">Canned snippets</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Up to 3 snippets</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Up to 5,000 snippets</div>
              </div>

              {/* ROW 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-medium">Email templates</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">3 templates</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">5,000 templates</div>
              </div>

              {/* TICK ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-medium">1:1 video messaging</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 flex justify-center border-l border-gray-300">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div>
                </div>
              </div>

              {/* TICK ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-medium">Sales email frequency controls</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 flex justify-center border-l border-gray-300">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div>
                </div>
              </div>

              {/* CALLING */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-medium">Calling</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 text-center border-l border-gray-300">3,000 minutes</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">HubSpot-provided phone numbers</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Up to 3 phone numbers. Not supported in all countries.</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">Call transcription and coaching</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Search, review, and comment on calls. 750 hours/month.</div>
              </div>

              {/* Coaching Playlists */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">Coaching Playlists</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 flex justify-center border-l border-gray-300">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div>
                </div>
              </div>

              {/* Conversation intelligence */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">Conversation intelligence</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Includes stats, insights, and call transcriptions.</div>
              </div>

              {/* HubSpot mobile app */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-medium">HubSpot mobile app</div>
                <div className="p-4 flex justify-center border-l border-gray-300"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div></div>
                <div className="p-4 flex justify-center border-l border-gray-300"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div></div>
              </div>

              {/* Live chat */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-medium">Live chat</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Includes HubSpot branding</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Remove HubSpot branding</div>
              </div>

              {/* Conversational bots */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">Conversational bots</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-500">Limited features</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Additional features</div>
              </div>

              {/* Facebook Messenger integration */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">Facebook Messenger integration</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600 px-2">Send and receive simple messages and quick replies</div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600 px-2">Includes advanced Messenger bot branching and advanced reporting</div>
              </div>

              {/* Sales automation */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-semibold">Sales automation</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Up to 300 fully customizable workflows.</div>
              </div>

              {/* ABM tools */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-medium">ABM tools and automation</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 flex justify-center border-l border-gray-300"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div></div>
              </div>

              {/* Breeze Customer Agent */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">Breeze Customer Agent</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">100 HubSpot Credits per conversation</div>
              </div>

              {/* Breeze Prospecting Agent */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">Breeze Prospecting Agent</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">This feature uses HubSpot Credits.</div>
              </div>

              {/* LinkedIn Sales Navigator */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4 font-medium">LinkedIn Sales Navigator and CRM Sync integrations</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 flex justify-center border-l border-gray-300"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div></div>
              </div>

              {/* Lead scoring */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">Lead scoring</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">Up to 5 scores.</div>
              </div>

              {/* Sequences */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
                <div className="p-4">Sequences</div>
                <div className="p-4 border-l border-gray-300"></div>
                <div className="p-4 text-center border-l border-gray-300 text-gray-600">5,000 sequences per account, and up to 500 email sends/user/day. LinkedIn actions require a Sales Navigator subscription.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 6 (CLOSE DEALS) ===== */}
      <div className="mt-32 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Close Deals</h2>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Deal pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-gray-300">
              <div className="p-4 font-semibold">Deal pipeline</div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">1 deal pipeline per account</div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">Up to 15 deal pipelines per account</div>
            </div>

            {/* Deal Summaries */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4">Deal Summaries</div>
              <div className="p-4 border-l border-gray-300"></div>
              <div className="p-4 flex justify-center border-l border-gray-300"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div></div>
            </div>

            {/* Documents */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4 font-semibold">Documents</div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">Up to 5 documents per account</div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">Up to 5,000 documents per account<br />Remove HubSpot branding</div>
            </div>

            {/* Goals */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4 font-semibold">Goals</div>
              <div className="p-4 border-l border-gray-300"></div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">Template goals</div>
            </div>

            {/* Meeting scheduling */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4 font-semibold">Meeting scheduling</div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">Maximum of 1 personal meetings link<br />Includes HubSpot branding</div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">1,000 personal & team meetings links<br />Remove HubSpot branding</div>
            </div>

            {/* AI Meeting Assistant */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4">AI Meeting Assistant</div>
              <div className="p-4 border-l border-gray-300"></div>
              <div className="p-4 flex justify-center border-l border-gray-300"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div></div>
            </div>

            {/* Sales Meeting Notetaker */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4">Sales Meeting Notetaker (Beta)</div>
              <div className="p-4 border-l border-gray-300"></div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">This feature does not use HubSpot Credits at this time.</div>
            </div>

            {/* Reporting dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4 font-semibold">Reporting dashboard</div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">10 dashboards, 50 reports per dashboard</div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">75 dashboards, 50 reports per dashboard</div>
            </div>

            {/* Sales analytics */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4">Sales analytics</div>
              <div className="p-4 border-l border-gray-300"></div>
              <div className="p-4 flex justify-center border-l border-gray-300"><div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div></div>
            </div>

            {/* Custom reporting */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4">Custom reporting</div>
              <div className="p-4 border-l border-gray-300"></div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600 px-2">Up to 100 custom reports and 10 million events per custom reporting query</div>
            </div>

            {/* Forecasting */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4 font-semibold">Forecasting</div>
              <div className="p-4 border-l border-gray-300"></div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600">Default and custom forecasting and reporting</div>
            </div>

            {/* Playbooks */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
              <div className="p-4 font-semibold">Playbooks</div>
              <div className="p-4 border-l border-gray-300"></div>
              <div className="p-4 text-center border-l border-gray-300 text-gray-600 px-2">Create up to 5 playbooks, and capture notes in playbooks</div>
            </div>

            {/* FOOT NOTE */}
            <div className="py-6 text-center text-sm text-gray-500 border-t">
              View the <span className="text-teal-600 font-medium cursor-pointer">Product & Services Catalog</span> for full technical limits and definitions
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
              <h2 className="text-xl font-semibold">Welcome to Sales Hub Professional</h2>
              <button onClick={() => setShowTrialModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Explore powerful tools to grow your business. For <strong>14 days</strong>, you'll get everything in Free Sales Tools and Sales Hub Starter, plus:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Advanced sales automation and sequences</li>
                <li>Predictive lead scoring and ABM tools</li>
                <li>Calling, meeting scheduling, and conversation intelligence</li>
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
                <p className="text-gray-800 font-medium">Free Sales Tools</p>
              </div>
              <p className="text-gray-600 mb-4">
                You are currently on the <strong>Free Sales Tools</strong> plan. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Basic email templates and snippets (limited)</li>
                <li>Deal pipeline (1 pipeline)</li>
                <li>Meeting scheduling with HubSpot branding</li>
                <li>Limited reporting dashboards</li>
              </ul>
              <p className="text-gray-600">
                Upgrade to <strong>Sales Hub Professional</strong> to unlock advanced automation, ABM tools, and remove HubSpot branding.
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