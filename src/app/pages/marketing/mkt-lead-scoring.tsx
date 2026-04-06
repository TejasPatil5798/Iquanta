import React from "react";

const Button = ({ children, className = "", variant, ...props }: any) => {
  const base = "px-6 py-2 rounded-md font-medium";
  const styles =
    variant === "outline"
      ? "border border-gray-300 text-gray-700"
      : "bg-black text-white";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export function MktLeadScoring() {
  return (
    <div className="w-full bg-white">
      {/* TOP TITLE */}
      <div className="px-6 pt-6">
        <h1 className="text-2xl font-semibold mb-4">Lead Scoring</h1>

        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <p>Lead scoring analytics page</p>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Prioritize and qualify your leads with Lead Scoring
          </h1>
          <p className="text-gray-600 mb-6">
            Understand your leads' digital body language with fit and engagement scores.
            Understand your leads' digital body language with fit and engagement scores, help shorten sales cycles and drive more conversions.

Unlock this and more with Marketing Hub Professional.
          </p>

          <div className="flex gap-4">
            <Button>Talk to Sales</Button>
            <Button variant="outline">Start 14-day trial</Button>
          </div>

          <div className="mt-4 text-sm text-blue-600">
            Start 14-day trial | View pricing
          </div>
        </div>

        {/* ✅ IMAGE FROM PUBLIC FOLDER */}
        <img src="https://static.hsappstatic.net/upgrade-page-ui/static-1.4337/images/locked-nav-items/lead-scoring/lead-scoring-header-EN.png" className="rounded-xl shadow" />
      </section>

      {/* SECTION 2 */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Prioritise your most promising leads
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <img src="https://static.hsappstatic.net/upgrade-page-ui/static-1.4337/images/locked-nav-items/lead-scoring/lead-scoring-body1-EN.png" className="rounded-xl shadow" />

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Build flexible lead scores tailored to your strategy
            </h3>
            <p className="text-gray-600">
              Create scoring rules, decay logic, and thresholds to evaluate leads effectively.
              With the flexible score builder, you have complete control over how you score your leads. Group your scoring criteria into flexible score categories, where you can define specific limits and choose whether to score actions individually or together, giving you total flexibility to fit your sales funnel. You can even set score decay per group, gradually reducing points over time if a lead becomes inactive, keeping your scores accurate. Want to award points for a single action or multiple occurrences? It's all in your hands. You can also set thresholds to trigger alerts when a lead hits the ideal score, so your team knows exactly when to engage.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-16 px-6 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Draw deeper insights from your lead data
          </h3>
          <p className="text-gray-600">
            Evaluate engagement and fit to identify high-potential leads.
            Stop treating all leads the same. Fit and engagement scoring helps you evaluate how well a lead matches your ideal customer profile and their level of interest in your brand. By scoring leads based on firmographics and interaction history, you can prioritize those who are both a strong fit and highly engaged. This dual approach provides deeper insights, empowering your teams to focus on high-potential leads and make smarter, faster decisions to accelerate conversions.
          </p>
        </div>

        <img src="https://static.hsappstatic.net/upgrade-page-ui/static-1.4337/images/locked-nav-items/lead-scoring/lead-scoring-body2-EN.png" className="rounded-xl shadow" />
      </section>

      {/* SECTION 4 */}
      <section className="bg-gray-50 py-16 px-6 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <img src="https://static.hsappstatic.net/upgrade-page-ui/static-1.4337/images/locked-nav-items/lead-scoring/lead-scoring-body3-EN.png" className="rounded-xl shadow" />

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Track lead scores with complete transparency
          </h3>
          <p className="text-gray-600">
            View score history and understand what drives conversions.
            Easily view a contact’s lead score right on their CRM record with the contact score card and score history panel. 
            This feature gives you a detailed overview of the lead’s score history and recent activities that influenced their score, making it simple for both marketers and salespeople to stay aligned.
            Effectively sharing valuable leads between Marketing and Sales is essential for your success. Now, with a clear view of how scores evolve over time and what actions drove those changes, Sales can fully trust the scores provided by Marketing. Whether it's tracking a contact’s score across different models or understanding the specific actions that led to a score increase, like downloading a case study, you can confidently tailor your outreach to meet your leads exactly where they are in their journey.
          </p>
        </div>
      </section>




      {/* ===== SECTION 5 : Generate Leads ===== */}
<div className="mt-28">

  {/* ===== TOP HEADER ===== */}
  <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12">
    
    <h2 className="text-4xl font-bold text-gray-900">
      Generate Leads
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
{/* ===== SECTION 6 : Automate Marketing ===== */}
<div className="mt-28">

  {/* HEADER */}
  <h2 className="text-4xl font-bold text-gray-900 mb-12">
    Automate Marketing
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
    // </div> 
  );
}