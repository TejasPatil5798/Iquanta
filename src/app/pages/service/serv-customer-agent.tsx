
import React, { useState } from "react";
import { X, MessageCircle, Phone, Info } from "lucide-react";

export function ServCustomerAgent() {
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
            Resolve issues instantly <br />
            with an always-on Breeze <br />
            Customer agent
          </h1>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">
                  Engage customers with natural, human-like interactions
                </span>{" "}
                and customize its personality to match your brand.
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">
                  Train the agent in minutes
                </span>{" "}
                on your business content to provide accurate responses,
                complete with verifiable source citations.
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">
                  Handle routine queries seamlessly
                </span>{" "}
                while instantly routing complex issues to your team.
              </p>
            </div>
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">→</div>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">
                  Monitor performance effectively
                </span>{" "}
                with detailed reporting on resolutions, handoffs, and
                customer sentiment.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            Unlock this and more with Service Hub Professional.
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
        <div className="w-full lg:w-[400px]">
          <img
            src="https://preview.redd.it/by-the-way-sofi-chat-support-is-useless-v0-qyizjvcc5dmc1.jpg?width=640&crop=smart&auto=webp&s=40a3336f7f51fa9aa168ccb6b1b919f31457ffc8"
            alt="Customer Agent"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 max-w-4xl mx-auto">
          Delayed responses? Not anymore with Breeze
          Customer Agent: an AI concierge for the front office
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-12">
          Give your marketing, sales, and service teams an AI assistant that engages prospects, converts opportunities, and
          provides ongoing customer support.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-[550px]">
            <img
              src="https://49739354.fs1.hubspotusercontent-na1.net/hubfs/49739354/__hs-marketplace__/scale-support-1.png"
              alt="Support"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Instant, 24/7 support
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Eliminate response delays with instant, always-on
              support that engages prospects and customers 24/7,
              turning inquiries into opportunities regardless of time
              zones or business hours.
            </p>
          </div>
        </div>
      </div>

      {/* ===== SECTION 3 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Seamless support across channels
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Provide consistent customer experiences wherever
            conversations happen (chat, WhatsApp, Facebook,
            email, or voice) and automatically transfer to a rep
            when human support is needed, ensuring customers
            get the right help on complex queries.
          </p>
        </div>
        <div className="w-full lg:w-[600px]">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQFIho0srYpuCQ/feedshare-shrink_1280/B4DZc1jIxuHAA0-/0/1748950093321?e=2147483647&v=beta&t=Wtyzh8lZFZ-2SRUpRpTWdB3bP_33dR7x-PMjmBSv04c"
            alt="Channels"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* ===== SECTION 4 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        <div className="w-full lg:w-[600px]">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMjxcVUaAYNc33MuZ_5_NQxDnjy0nsAzSiszIIYW4Y5CAvp8ga"
            alt="Setup"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Quick setup, trusted responses
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Deliver accurate support in minutes using your trusted
            content sources. Transform knowledge base articles,
            URLs, help sites, and blogs into personalized customer
            responses without technical expertise—no guesswork,
            just reliable information powered by your approved
            materials.
          </p>
        </div>
      </div>

      {/* ===== SECTION 5 : SCALE SUPPORT ===== */}
      <div className="mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12 gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Scale Support</h2>
          <div className="text-center">
            <p className="font-semibold text-gray-800">Free Service tools</p>
            <button
              onClick={handleCurrentPlan}
              className="mt-3 px-5 py-2 rounded-md bg-gray-100 text-gray-600 border hover:bg-gray-200 transition"
            >
              Your current plan
            </button>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-800">Service Hub Professional</p>
            <button
              onClick={handleTalkToSales}
              className="mt-3 px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
            >
              Talk to Sales
            </button>
          </div>
        </div>

        {/* Table wrapper - horizontal scroll */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Help Desk Workspace</div>
                <div className="p-6 text-center text-gray-500 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Facebook Messenger integration</div>
                <div className="p-6 text-center text-gray-500 md:border-l">
                  Send and receive simple messages and quick replies
                </div>
                <div className="p-6 text-center text-gray-500 md:border-l">
                  Includes advanced Messenger bot branching and advanced reporting
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Custom Channels API</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Help desk automation</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center text-gray-500 md:border-l">
                  Up to 300 workflows.
                </div>
              </div>
              {/* Row 5 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">WhatsApp integration</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center text-gray-500 md:border-l">
                  Up to 1,000 messages per month
                </div>
              </div>
              {/* Row 6 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Breeze Customer Agent</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center text-gray-500 md:border-l">
                  100 HubSpot Credits per conversation
                </div>
              </div>
              {/* Row 7 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Knowledge base</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center text-gray-500 md:border-l">
                  1 knowledge base per account with up to 2,000 articles.
                </div>
              </div>
              {/* Row 8 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Knowledge base single sign-on</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center text-gray-600 md:border-l">
                  Up to 2 access groups for private knowledge base
                </div>
              </div>
              {/* Row 9 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Customer portal</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center text-gray-600 md:border-l">
                  Up to 2 access groups for customer portal
                </div>
              </div>
              {/* Row 10 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">SLAs</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 11 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Reporting dashboard</div>
                <div className="p-6 text-center md:border-l">10 dashboards</div>
                <div className="p-6 text-center md:border-l">75 dashboards</div>
              </div>
              {/* Row 12 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Service analytics</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 13 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Insights dashboard</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 14 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Live chat</div>
                <div className="p-6 text-center md:border-l">Includes HubSpot branding</div>
                <div className="p-6 text-center md:border-l">Remove HubSpot branding</div>
              </div>
              {/* Row 15 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Conversational bots</div>
                <div className="p-6 text-center md:border-l">Limited features</div>
                <div className="p-6 text-center md:border-l">Additional features</div>
              </div>
              {/* Row 16 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Logged-in visitor identification</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 17 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Draggable chat widget</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 18 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Calling</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center md:border-l">3,000 minutes</div>
              </div>
              {/* Row 19 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Call transcription and coaching</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center md:border-l">
                  750 hrs transcription/month
                </div>
              </div>
              {/* Row 20 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Coaching Playlists</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 21 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">1-to-1 email</div>
                <div className="p-6 text-center md:border-l">Includes branding</div>
                <div className="p-6 text-center md:border-l">Branding removed</div>
              </div>
              {/* Row 22 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">1:1 video messaging</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 23 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Canned snippets</div>
                <div className="p-6 text-center md:border-l">Up to 3</div>
                <div className="p-6 text-center md:border-l">Up to 5,000</div>
              </div>
              {/* Row 24 */}
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6">Email templates</div>
                <div className="p-6 text-center md:border-l">3 templates</div>
                <div className="p-6 text-center md:border-l">5,000 templates</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECTION 6 : DRIVE RETENTION ===== */}
      <div className="mt-28">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Drive Retention</h2>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Customer success workspace</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Health Score</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center md:border-l">1 score</div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Projects</div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Customer feedback surveys</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center md:border-l">
                  50 NPS surveys, 50 CES surveys, and 100 CSAT surveys
                </div>
              </div>
              {/* Row 5 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Feedback Topics</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center md:border-l">
                  This feature does not use HubSpot Credits at this time.
                </div>
              </div>
              {/* Row 6 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Custom surveys</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center md:border-l px-6">
                  100 custom surveys. Add unlimited questions, use diverse question
                  types (star ratings, radio select, text fields), and easily share
                  your survey as a link in an email.
                </div>
              </div>
              {/* Row 7 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6">Post-chat feedback</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 8 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Repeating tasks and task queues</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 flex justify-center md:border-l">
                  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
                </div>
              </div>
              {/* Row 9 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Goals</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center md:border-l">Template goals</div>
              </div>
              {/* Row 10 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Playbooks</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center md:border-l">
                  Create up to 5 playbooks, and capture notes in playbooks
                </div>
              </div>
              {/* Row 11 */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                <div className="p-6 font-medium">Meeting scheduling</div>
                <div className="p-6 text-center md:border-l">
                  Maximum of 1 personal meetings link <br />
                  Includes HubSpot branding
                </div>
                <div className="p-6 text-center md:border-l">
                  1,000 personal & team meetings links <br />
                  Remove HubSpot branding
                </div>
              </div>
              {/* Row 12 */}
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 font-medium">Sequences</div>
                <div className="p-6 md:border-l"></div>
                <div className="p-6 text-center md:border-l">
                  5,000 sequences per account, and up to 500 email sends/user/day.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-8">
          View the{" "}
          <span className="text-teal-600 font-medium cursor-pointer">
            Product & Services Catalog ↗
          </span>{" "}
          for full technical limits and definitions
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
              <h2 className="text-xl font-semibold">Welcome to Service Hub Professional</h2>
              <button onClick={() => setShowTrialModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Explore powerful tools to grow your business. For <strong>14 days</strong>, you'll get everything in Free Service Tools and Service Hub Starter, plus:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Breeze Customer Agent with AI capabilities</li>
                <li>Help desk automation and SLA management</li>
                <li>Knowledge base and customer portal</li>
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
          <div className="bg-white rounded-lg w-full mt-10 max-w-md mx-4">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-semibold">Your Current Plan</h2>
              <button onClick={() => setShowPlanModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-blue-500" />
                <p className="text-gray-800 font-medium">Free Service Tools</p>
              </div>
              <p className="text-gray-600 mb-4">
                You are currently on the <strong>Free Service Tools</strong> plan. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Basic help desk and ticketing</li>
                <li>Live chat with HubSpot branding</li>
                <li>Limited reporting dashboards</li>
                <li>Email templates and snippets (limited)</li>
              </ul>
              <p className="text-gray-600">
                Upgrade to <strong>Service Hub Professional</strong> to unlock Breeze Customer Agent, automation, knowledge base, and remove HubSpot branding.
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