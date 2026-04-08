import React from "react";

export function Playbooks() {
  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
<div className="min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto w-full px-6 flex items-center gap-12">
    
    {/* LEFT */}
    <div className="flex-1">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Keep your team aligned
      </h1>

      <p className="text-gray-600 mb-6">
        Build a library of sales best practices and resources.
      </p>

      <p className="text-sm text-gray-500 mb-8">
        Unlock this and more with Sales Hub Professional.
      </p>

      <div className="flex gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Talk to Sales
        </button>

        <button className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-100 transition">
          Start 14-day trial
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-2">
        No commitment or credit card required.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1 flex justify-center">
      <img
        src="https://static.hsappstatic.net/upgrade-page-ui/static-1.4337/images/locked-nav-items/playbooks/playbooks-header-EN.png"
        alt="Playbook Preview"
        className="w-[420px] rounded-lg shadow-lg border"
      />
    </div>

  </div>
</div>

      {/* TITLE */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">
          Set up your team for success with sales enablement content when and where they need it
        </h2>
      </section>

      {/* FEATURE 1 */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-20 max-w-6xl mx-auto">
        <img
          src="https://static.hsappstatic.net/upgrade-page-ui/static-1.4337/images/locked-nav-items/playbooks/playbooks-body1-EN.png"
          alt="Playbook UI"
          className="w-full h-64 object-cover rounded-lg shadow"
        />

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Equip your team with handy sales playbooks
          </h2>
          <p className="text-gray-600 mb-4">
            Build sales enablement content for anything your team needs to win
            the day, from product sheets to pricing guidelines. Then search for
            and access these playbooks within your CRM.
          </p>
          <p className="text-gray-600">
            No more files saved to your desktop. With playbooks, your sales
            collateral is just a click away.
          </p>
        </div>
      </section>

      {/* FEATURE 2 */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-20 max-w-6xl mx-auto">
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Get your new hires up to speed faster
          </h2>
          <p className="text-gray-600 mb-4">
            Give new team members instant access to knowledge and workflows.
          </p>
          <p className="text-gray-600">
            Reduce ramp-up time and boost productivity.
          </p>
        </div>

        <img
          src="https://static.hsappstatic.net/upgrade-page-ui/static-1.4337/images/locked-nav-items/playbooks/playbooks-body2-EN.png"
          alt="Dashboard"
          className="w-full h-64 object-cover rounded-lg shadow"
        />
      </section>

      {/* FEATURE 3 */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-6 py-20 max-w-6xl mx-auto">
        <img
          src="https://static.hsappstatic.net/upgrade-page-ui/static-1.4337/images/locked-nav-items/playbooks/playbooks-body3-EN.png"
          alt="Analytics"
          className="w-full h-64 object-cover rounded-lg shadow"
        />

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Know your playbooks are effective
          </h2>
          <p className="text-gray-600 mb-4">
            Track usage and improve your content with real insights.
          </p>
          <p className="text-gray-600">
            Keep everything updated across your team.
          </p>
        </div>
      </section>

    {/* ===== SECTION 5 : Build Pipeline ===== */}
<div className="mt-28">

  {/* ===== TOP HEADER ===== */}
  <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12">
    
    <h2 className="text-4xl font-bold text-gray-900">
      Build Pipeline
    </h2>

    <div className="text-center mt-6 md:mt-0">
      <p className="font-semibold text-gray-800">Free Service tools</p>
      <button className="mt-3 px-5 py-2 rounded-md bg-gray-100 text-gray-500 border">
        Your current plan
      </button>
    </div>

    <div className="text-center mt-6 md:mt-0">
      <p className="font-semibold text-gray-800">Service Hub Professional</p>
      <button className="mt-3 px-6 py-2 rounded-md bg-black text-white">
        Talk to Sales
      </button>
    </div>
  </div>

  {/* ===== TABLE (ONE SINGLE BOX) ===== */}
  <div className="border border-gray-300 rounded-lg overflow-hidden">

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">Help Desk Workspace</div>
      <div className="p-6 text-center text-gray-500 md:border-l">
        
      </div>
      <div className="p-6 flex justify-center md:border-l">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Facebook Messenger integration</div>
      <div className="p-6 text-center text-gray-500 md:border-l">
        Send and receive simple messages and quick replies
      </div>
      <div className="p-6 text-center text-gray-500 md:border-l">
        Includes advanced Messenger bot branching and advanced reporting
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Custom Channels API</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 flex justify-center md:border-l">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Help desk automation</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center text-gray-500 md:border-l">
        Up to 300 workflows.
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">WhatsApp integration</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center text-gray-500 md:border-l">
        Up to 1,000 messages per month
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">Breeze Customer Agent</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center text-gray-500 md:border-l">
        100 HubSpot Credits per conversation
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">Knowledge base</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center text-gray-500 md:border-l">
        1 knowledge base per account with up to 2,000 articles.
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Knowledge base single sign-on</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center text-gray-600 md:border-l">
        Up to 2 access groups for private knowledge base
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">Customer portal</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center text-gray-600 md:border-l">
        Up to 2 access groups for customer portal
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">SLAs</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 flex justify-center md:border-l">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">Reporting dashboard</div>
      <div className="p-6 text-center md:border-l">
        10 dashboards
      </div>
      <div className="p-6 text-center md:border-l">
        75 dashboards
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Service analytics</div>
      <div className="p-6 md:border-l"></div>
     <div className="p-6 flex justify-center items-center md:border-l">
  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
    ✓
  </div>
</div>
      
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Insights dashboard</div>
      <div className="p-6 md:border-l"></div>
      
      <div className="p-6 flex justify-center items-center md:border-l">
  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
    ✓
  </div>
</div>
      
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">Live chat</div>
      <div className="p-6 text-center md:border-l">
        Includes HubSpot branding
      </div>
      <div className="p-6 text-center md:border-l">
        Remove HubSpot branding
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Conversational bots</div>
      <div className="p-6 text-center md:border-l">
        Limited features
      </div>
      <div className="p-6 text-center md:border-l">
        Additional features
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Logged-in visitor identification</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 flex justify-center items-center md:border-l">
  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
    ✓
  </div>
</div>
      
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Draggable chat widget</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 flex justify-center items-center md:border-l">
  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
    ✓
  </div>
</div>
      
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">Calling</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center md:border-l">3,000 minutes</div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Call transcription and coaching</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center md:border-l">
        750 hrs transcription/month
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Coaching Playlists</div>
      <div className="p-6 md:border-l"></div>
      
     <div className="p-6 flex justify-center items-center md:border-l">
  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
    ✓
  </div>
</div>
      
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">1-to-1 email</div>
      <div className="p-6 text-center md:border-l">
        Includes branding
      </div>
      <div className="p-6 text-center md:border-l">
        Branding removed
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">1:1 video messaging</div>
      <div className="p-6 md:border-l"></div>
     <div className="p-6 flex justify-center items-center md:border-l">
  <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
    ✓
  </div>
</div>
      
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Canned snippets</div>
      <div className="p-6 text-center md:border-l">Up to 3</div>
      <div className="p-6 text-center md:border-l">Up to 5,000</div>
    </div>

    {/* LAST ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="p-6">Email templates</div>
      <div className="p-6 text-center md:border-l">3 templates</div>
      <div className="p-6 text-center md:border-l">5,000 templates</div>
    </div>

  </div>
</div>
{/* ===== SECTION 6 : Close Deals ===== */}
<div className="mt-28">

  {/* HEADER */}
  <h2 className="text-4xl font-bold text-gray-900 mb-12">
    Close Deals
  </h2>

  {/* TABLE BOX */}
  <div className="border border-gray-300 rounded-lg overflow-hidden">

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">Customer success workspace</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 flex justify-center items-center md:border-l">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Health Score</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center md:border-l">1 score</div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Projects</div>
      <div className="p-6 flex justify-center items-center md:border-l">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
      <div className="p-6 flex justify-center items-center md:border-l">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6 font-medium">Customer feedback surveys</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center md:border-l">
        50 NPS surveys, 50 CES surveys, and 100 CSAT surveys
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Feedback Topics</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center md:border-l">
        This feature does not use HubSpot Credits at this time.
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b">
      <div className="p-6">Custom surveys</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 text-center md:border-l px-6">
        100 custom surveys. Add unlimited questions, use diverse question types 
        (star ratings, radio select, text fields), and easily share your survey 
        as a link in an email.
      </div>
    </div>

    {/* LAST ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="p-6">Post-chat feedback</div>
      <div className="p-6 md:border-l"></div>
      <div className="p-6 flex justify-center items-center md:border-l">
        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>
{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 border-t border-b">
  <div className="p-6 font-medium">Repeating tasks and task queues</div>
  <div className="p-6 md:border-l"></div>
  <div className="p-6 flex justify-center items-center md:border-l">
    <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="p-6 font-medium">Goals</div>
  <div className="p-6 md:border-l"></div>
  <div className="p-6 text-center md:border-l">
    Template goals
  </div>
</div>

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="p-6 font-medium">Playbooks</div>
  <div className="p-6 md:border-l"></div>
  <div className="p-6 text-center md:border-l">
    Create up to 5 playbooks, and capture notes in playbooks
  </div>
</div>

{/* ROW */}
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

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="p-6 font-medium">Sequences</div>
  <div className="p-6 md:border-l"></div>
  <div className="p-6 text-center md:border-l">
    5,000 sequences per account, and up to 500 email sends/user/day.
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


  );
}