import React from "react";

export function ServCustomerPortal() {
  return (
    <div className="bg-white px-10 py-12 min-h-screen">

      {/* ===== SECTION 1 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Give customers control <br/>
          over their service <br/>
          experience
          </h1>

          <p className="text-gray-600 text-lg mb-6">
         Empower customers to get the help and information they need, when they 
         need it — so you can minimize repetitive tasks for support reps and increase 
         customer trust. 
          </p>

          <p className="text-gray-600 mb-6">
            Unlock this and more with Service Hub Professional.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-fit">
            <div className="mt-6 flex flex-col gap-4 w-full sm:w-80"></div>
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

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[500px]">
          <img
            src="https://www.unmatched.agency/hs-fs/hubfs/HubSpot%20Customer%20Portal.webp?width=800&name=HubSpot%20Customer%20Portal.webp"
            alt="Podcast UI"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>


      {/* ===== SECTION 2 ===== */}
      <div className="mb-20">
        
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 max-w-4xl mx-auto">
         Your customer portal is connected to your shared 
         portal and provides a home for customers to view,
          open, and reply to support tickets in one place
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[550px]">
            <img
              src="https://mbudo.com/hs-fs/hubfs/mbudo%20-%202021/Im%C3%A1genes/Blog%20Marketing/Screenshot%202022-05-12%20at%2019.16.21.png?width=1514&name=Screenshot%202022-05-12%20at%2019.16.21.png"
              alt="Distribute Episode"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
               Customer portals give customers 
               ownership over their service experience
              
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
            Customers crave information about the status of their
             service experience and want opportunities to solve 
             problems on their own.
            </p>

            <p>
            Connected to your shared inbox, your customer portal 
            keeps ticket conversations going between customers
             and reps, offers access to your company’s knowledge 
             base, and can be customized to create an optimal 
             customer experience. 
            </p>
            
           
          </div>

        </div>
      </div>


      {/* ===== SECTION 3 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
         Increase transparency and trust
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
          Customer portals provide a home base for your 
          customers to interact with your support and services
           teams. Give your customers a secure place to track 
           and manage all of their open and closed support 
           tickets—or file a new ticket—so they can move issues
            along at their own pace and be reassured that their 
            problems are being addressed.

          </p>
         
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[600px]">
          <img
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/HubSpot%20self-service%20portal.webp?width=1600&height=1278&name=HubSpot%20self-service%20portal.webp"
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
            src="https://www.newbreedrevenue.com/hs-fs/hubfs/HubSpot%20Tickets-Reporting.png?width=600&name=HubSpot%20Tickets-Reporting.png"
            alt="Share Podcast"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
          Minimize your team’s repetitive tasks
          </h2>

          

          <p>
        Customer portals are seamlessly connected to the
         HubSpot CRM platform and shared inbox, reducing the 
         risk of duplicative work. Make even more time for your
          reps to provide personalized service when you connect
           your knowledge base to your portal. Leverage 
           workflows and productivity tools, like snippets, to 
           provide quick resolutions for busy customers.

          </p>
         
        </div>

      </div>
{/* ===== SECTION 5 : SCALE SUPPORT ===== */}
<div className="mt-28">

  {/* ===== TOP HEADER ===== */}
  <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12">
    
    <h2 className="text-4xl font-bold text-gray-900">
      Scale Support
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
{/* ===== SECTION 6 : DRIVE RETENTION ===== */}
<div className="mt-28">

  {/* HEADER */}
  <h2 className="text-4xl font-bold text-gray-900 mb-12">
    Drive Retention
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
