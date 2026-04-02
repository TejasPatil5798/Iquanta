import React from "react";

export function SalesSequences() {
  return (
    <div className="bg-white px-6 sm:px-10 py-12 min-h-screen">

      {/* ===== SECTION 1 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
           Automate your follow-ups
          </h1>

          <p className="text-gray-600 text-lg mb-6">
           Book more meetings with personalized, multi-touch sequences. Streamline
           place, making it easy for you to prioritize and execute the most
           cracks. Test messaging and track performance to consistently and predictably
           build pipeline
          </p>

          <p className="text-gray-600 mb-6">
            Unlock this and more with Sales Hub Professional.
          </p>

          <div className="flex flex-col gap-4 w-full sm:w-80">
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
              Talk to Sales
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
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
            alt=""
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>


      {/* ===== SECTION 2 ===== */}
      <div className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 max-w-4xl mx-auto">
        Free up more time to close leads by putting follow-up <br/>
        on autopilot
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-[550px]">
            <img
              src="https://focusedgrowth.com.au/wp-content/uploads/2022/12/hubspot-sales-automation.webp"
              alt=""
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Automate your follow-up, and put time <br/>
              back into your day.
            </h3>

            <p className="text-gray-600 text-lg">
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
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
           Personalize and tailor your outreach.
          </h2>

          <p className="text-gray-600 text-lg">
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
            alt=""
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>


      {/* ===== SECTION 4 ===== */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="w-full lg:w-[600px]">
          <img
            src="https://www.autoarti.com/wp-content/uploads/2022/10/hubspot_marketing_hub_autoarti-1.png"
            alt=""
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
           Use data to identify the best-performing <br/>
           sequences.
          </h2>

          <p className="text-gray-600 text-lg">
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
  <div className="grid grid-cols-3 items-end mb-8">

    {/* LEFT TITLE */}
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
      Build Pipeline
    </h2>

    {/* COLUMN 2 HEADER */}
    <div className="text-center">
      <p className="font-semibold text-sm">Free Sales tools</p>
      <button className="mt-2 px-4 py-2 bg-gray-100 border rounded-md text-sm">
        Your current plan
      </button>
    </div>

    {/* COLUMN 3 HEADER */}
    <div className="text-center">
      <p className="font-semibold text-sm">Sales Hub Professional</p>
      <button className="mt-2 px-4 py-2 bg-black text-white rounded-md text-sm">
        Talk to Sales
      </button>
    </div>

  </div>

  {/* TABLE */}
  <div>

    {/* ROW 1 */}
    <div className="grid grid-cols-3 border-t border-gray-300 border-b">
      <div className="p-4 font-medium">
        1-to-1 email
      </div>
      <div className="p-4 text-center border-l border-gray-300 text-gray-600">
        Includes HubSpot branding
      </div>
      <div className="p-4 text-center border-l border-gray-300 text-gray-600">
        HubSpot branding removed
      </div>
    </div>

    {/* ROW 2 */}
    <div className="grid grid-cols-3 border-b border-gray-300">
      <div className="p-4 font-medium">
        Canned snippets
      </div>
      <div className="p-4 text-center border-l border-gray-300 text-gray-600">
        Up to 3 snippets
      </div>
      <div className="p-4 text-center border-l border-gray-300 text-gray-600">
        Up to 5,000 snippets
      </div>
    </div>

    {/* ROW 3 */}
    <div className="grid grid-cols-3 border-b border-gray-300">
      <div className="p-4 font-medium">
        Email templates
      </div>
      <div className="p-4 text-center border-l border-gray-300 text-gray-600">
        3 templates
      </div>
      <div className="p-4 text-center border-l border-gray-300 text-gray-600">
        5,000 templates
      </div>
    </div>

    {/* TICK ROW */}
    <div className="grid grid-cols-3 border-b border-gray-300">
      <div className="p-4 font-medium">
        1:1 video messaging
      </div>
      <div className="p-4 border-l border-gray-300"></div>
      <div className="p-4 flex justify-center border-l border-gray-300">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">
          ✓
        </div>
      </div>
    </div>

    {/* TICK ROW */}
    <div className="grid grid-cols-3 border-b border-gray-300">
      <div className="p-4 font-medium">
        Sales email frequency controls
      </div>
      <div className="p-4 border-l border-gray-300"></div>
      <div className="p-4 flex justify-center border-l border-gray-300">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">
          ✓
        </div>
      </div>
    </div>

    {/* CALLING */}
    <div className="grid grid-cols-3 border-b border-gray-300">
      <div className="p-4 font-medium">
        Calling
      </div>
      <div className="p-4 border-l border-gray-300"></div>
      <div className="p-4 text-center border-l border-gray-300">
        3,000 minutes
      </div>
    </div>

    <div className="grid grid-cols-3 border-b border-gray-300">
      <div className="p-4">
        HubSpot-provided phone numbers
      </div>
      <div className="p-4 border-l border-gray-300"></div>
      <div className="p-4 text-center border-l border-gray-300 text-gray-600">
        Up to 3 phone numbers. Not supported in all countries.
      </div>
    </div>

    <div className="grid grid-cols-3 border-b border-gray-300">
      <div className="p-4">
        Call transcription and coaching
      </div>
      <div className="p-4 border-l border-gray-300"></div>
      <div className="p-4 text-center border-l border-gray-300 text-gray-600">
        Search, review, and comment on calls. 750 hours/month.
      </div>
    </div>

  </div>

</div>
      
{/* Coaching Playlists */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Coaching Playlists</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 flex justify-center border-l border-gray-300">
    <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div>
  </div>
</div>

{/* Conversation intelligence */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Conversation intelligence</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    Includes stats, insights, and call transcriptions.
  </div>
</div>

{/* HubSpot mobile app */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4 font-medium">HubSpot mobile app</div>
  <div className="p-4 flex justify-center border-l border-gray-300">
    <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div>
  </div>
  <div className="p-4 flex justify-center border-l border-gray-300">
    <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div>
  </div>
</div>

{/* Live chat */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4 font-medium">Live chat</div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    Includes HubSpot branding
  </div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    Remove HubSpot branding
  </div>
</div>

{/* Conversational bots */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Conversational bots</div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-500">
    Limited features
  </div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    Additional features
  </div>
</div>

{/* Facebook Messenger integration */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Facebook Messenger integration</div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600 px-4">
    Send and receive simple messages and quick replies
  </div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600 px-4">
    Includes advanced Messenger bot branching and advanced reporting
  </div>
</div>

{/* Sales automation */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4 font-semibold">Sales automation</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    Up to 300 fully customizable workflows.
  </div>
</div>

{/* ABM tools */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4 font-medium">ABM tools and automation</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 flex justify-center border-l border-gray-300">
    <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div>
  </div>
</div>

{/* Breeze Customer Agent */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Breeze Customer Agent</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    100 HubSpot Credits per conversation
  </div>
</div>

{/* Breeze Prospecting Agent */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Breeze Prospecting Agent</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    This feature uses HubSpot Credits.
  </div>
</div>
{/* LinkedIn Sales Navigator and CRM Sync integrations */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4 font-medium">LinkedIn Sales Navigator and CRM Sync integrations</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 flex justify-center border-l border-gray-300">
    <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</div>
  </div>
</div>
{/* Lead scroling */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Lead scoring</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    Up to 5 scores.
  </div>
</div>
{/* Sequences */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Sequences</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    5,000 sequences per account, and up to 500
    email sends/user/day.LinkedIn actions require
    a Sles Navigator subscription.
  </div>
</div>

{/* ===== SECTION 6 (CLOSE DEALS) ===== */}
<div className="mt-32 max-w-6xl mx-auto">

  {/* HEADER */}
  <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
    Close Deals
  </h2>

  {/* TABLE */}

  {/* Deal pipeline */}
  <div className="grid grid-cols-3 border-t border-b border-gray-300">
    <div className="p-4 font-semibold">Deal pipeline</div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      1 deal pipeline per account
    </div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      Up to 15 deal pipelines per account
    </div>
  </div>

  {/* Deal summaries */}
  <div className="grid grid-cols-3 border-b border-gray-300">
    <div className="p-4">Deal Summaries</div>
    <div className="p-4 border-l border-gray-300"></div>
    <div className="p-4 flex justify-center border-l border-gray-300">
      <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">
        ✓
      </div>
    </div>
  </div>

  {/* Documents */}
  <div className="grid grid-cols-3 border-b border-gray-300">
    <div className="p-4 font-semibold">Documents</div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      Up to 5 documents per account
    </div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      Up to 5,000 documents per account <br />
      Remove HubSpot branding
    </div>
  </div>

  {/* Goals */}
  <div className="grid grid-cols-3 border-b border-gray-300">
    <div className="p-4 font-semibold">Goals</div>
    <div className="p-4 border-l border-gray-300"></div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      Template goals
    </div>
  </div>

  {/* Meeting scheduling */}
  <div className="grid grid-cols-3 border-b border-gray-300">
    <div className="p-4 font-semibold">Meeting scheduling</div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      Maximum of 1 personal meetings link <br />
      Includes HubSpot branding
    </div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      1,000 personal & team meetings links <br />
      Remove HubSpot branding
    </div>
  </div>

  {/* AI Meeting Assistant */}
  <div className="grid grid-cols-3 border-b border-gray-300">
    <div className="p-4">AI Meeting Assistant</div>
    <div className="p-4 border-l border-gray-300"></div>
    <div className="p-4 flex justify-center border-l border-gray-300">
      <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">
        ✓
      </div>
    </div>
  </div>

  {/* Sales Meeting Notetaker */}
  <div className="grid grid-cols-3 border-b border-gray-300">
    <div className="p-4">Sales Meeting Notetaker (Beta)</div>
    <div className="p-4 border-l border-gray-300"></div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      This feature does not use HubSpot Credits at this time.
    </div>
  </div>

  {/* Reporting dashboard */}
  <div className="grid grid-cols-3 border-b border-gray-300">
    <div className="p-4 font-semibold">Reporting dashboard</div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      10 dashboards, 50 reports per dashboard
    </div>
    <div className="p-4 text-center border-l border-gray-300 text-gray-600">
      75 dashboards, 50 reports per dashboard
    </div>
  </div>

</div>
{/* Sales analytics */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Sales analytics</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 flex justify-center border-l border-gray-300">
    <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">
      ✓
    </div>
  </div>
</div>

{/* Custom reporting */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4">Custom reporting</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600 px-4">
    Up to 100 custom reports and 10 million events per custom reporting query
  </div>
</div>

{/* Forecasting */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4 font-semibold">Forecasting</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600">
    Default and custom forecasting and reporting
  </div>
</div>

{/* Playbooks */}
<div className="grid grid-cols-3 border-b border-gray-300">
  <div className="p-4 font-semibold">Playbooks</div>
  <div className="p-4 border-l border-gray-300"></div>
  <div className="p-4 text-center border-l border-gray-300 text-gray-600 px-4">
    Create up to 5 playbooks, and capture notes in playbooks
  </div>
</div>

{/* FOOT NOTE */}
<div className="py-6 text-center text-sm text-gray-500 border-t">
  View the <span className="text-teal-600 font-medium cursor-pointer">
    Product & Services Catalog
  </span> for full technical limits and definitions
</div>
      </div>

    
  );
}