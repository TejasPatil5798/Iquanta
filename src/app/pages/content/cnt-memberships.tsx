import React from "react";

export function CntMemberships() {
  return (
    <div className="bg-white px-10 py-12 min-h-screen">

      {/* ===== SECTION 1 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Create content for <br />
            specific segments of your <br/>
            customers
          </h1>

          <p className="text-gray-600 text-lg mb-6">
           Start creating membership-based content that gives your customers
           information that pertains specifically to them.
          </p>

          <p className="text-gray-600 mb-6">
            Unlock this and more with Content Hub Professional.
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
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Knowledge_Base_2023-24-25/KB-Email/marketing-email-see-details.png?width=2044&height=858&name=marketing-email-see-details.png"
            alt="Podcast UI"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>


      {/* ===== SECTION 2 ===== */}
      <div className="mb-20">
        
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 max-w-4xl mx-auto">
          A website that speaks to the needs of every single customer
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[550px]">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/memberships%201.jpg?width=1030&name=memberships%201.jpg"
              alt="Distribute Episode"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Deliver your web content to specific<br/>
               segments of customers
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              We get it. Prospects aren't the only people visiting your <br/>
              website. You have customers,partners,resellers,and <br/>
              other stackholders you do business with.
            </p>
            <p>
              That's where Memberships come in. With Content Hub,<br/>
              you can leverage access groups to allow only specific <br/>
              customers to access a section of your site.
            </p>
          </div>

        </div>
      </div>


      {/* ===== SECTION 3 ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Create personalixed membership pages
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            With Memberships, you'll be able to fully leverage the <br/>
             power of dynamic content and the CRM together to <br/>  
            create secure yet personalized 'profile pages' for your <br/> 
             customers.
          </p>
          <p>
            Contextualize the content shown to each user to <br/>
            provide membership-driven materials such as recent<br/>
             purchase information, upcoming appointments with<br/>
              your company, and more. With Memberships, you'll be <br/>
              able to create a membership-driven website that your <br/>
              entire customer-base can find value in.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[600px]">
          <img
            src="https://www.hubspot.com/hs-fs/hubfs/memberships%20image%20%20(1).webp?width=567&height=360&name=memberships%20image%20%20(1).webp"
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
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/website%20with%20user%20accounts;%20screenshot%20of%20how%20to%20control%20access%20to%20specific%20groups%20using%20hubspot%E2%80%99s%20content%20hub.webp?width=650&height=422&name=website%20with%20user%20accounts;%20screenshot%20of%20how%20to%20control%20access%20to%20specific%20groups%20using%20hubspot%E2%80%99s%20content%20hub.webp"
            alt="Share Podcast"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Expand how you do business
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Access to exclusive content or promotions can change<br/>
             the way you do business.
          </p>
          <br/>
          <p>
            Create exclusive content for leads and customers.<br/>
             Control access to this content easily by using access <br/>
             groups, which automatically update as new contacts <br/>
              qualify.
          </p>
        </div>

      </div>
{/* ===== SECTION 5 ===== */}
<div className="mt-28">

  {/* Top Header */}
  <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12">
    
    <h2 className="text-4xl font-bold text-gray-900">
      Create Content
    </h2>

    <div className="text-center mt-6 md:mt-0">
      <p className="font-semibold text-gray-800">Free Content tools</p>
      <button className="mt-3 px-5 py-2 rounded-md bg-gray-100 text-gray-500 border">
        Your current plan
      </button>
    </div>

    <div className="text-center mt-6 md:mt-0">
      <p className="font-semibold text-gray-800">Content Hub Professional</p>
      <button className="mt-3 px-6 py-2 rounded-md bg-black text-white">
        Talk to Sales
      </button>
    </div>
  </div>

  {/* Table */}
  <div className="border-t border-gray-300">

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
      <div className="py-6 font-medium">Ad management</div>

      <div className="py-6 flex justify-center border-l">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
          ✓
        </div>
      </div>

      <div className="py-6 flex justify-center border-l">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
          ✓
        </div>
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
      <div className="py-6 flex items-center gap-2 font-medium">
        AI assistants
      </div>

      <div className="py-6 border-l"></div>

      <div className="py-6 flex justify-center border-l">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
          ✓
        </div>
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
      <div className="py-6 font-medium">AI image generator</div>

      <div className="py-6 border-l"></div>

      <div className="py-6 flex justify-center border-l">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
          ✓
        </div>
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
      <div className="py-6 font-medium">CTAs</div>

      <div className="py-6 border-l"></div>

      <div className="py-6 border-l text-gray-600 text-center px-6">
        Includes custom targeting by device type, country, referral URL, and more.
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
      <div className="py-6 font-medium">Forms</div>

      <div className="py-6 border-l text-center text-gray-500">
        Limited features
      </div>

      <div className="py-6 border-l text-center text-gray-600">
        Remove HubSpot branding <br /> Additional features
      </div>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
      <div className="py-6 font-medium">Landing pages</div>

      <div className="py-6 border-l text-sm text-gray-600 px-6">
        Up to 30 total landing pages. Includes HubSpot branding.
      </div>

      <div className="py-6 border-l text-sm text-gray-600 px-6">
        Up to 10K landing pages. Includes custom templates, smart content,
        A/B testing, and SEO recommendations.
      </div>
    </div>
{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
  <div className="py-6 font-medium">Live chat</div>

  <div className="py-6 border-l text-center text-gray-600">
    Includes HubSpot branding
  </div>

  <div className="py-6 border-l text-center text-gray-600">
    Remove HubSpot branding
  </div>
</div>

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
  <div className="py-6 font-medium">Conversational bots</div>

  <div className="py-6 border-l text-center text-gray-500">
    Limited features
  </div>

  <div className="py-6 border-l text-center text-gray-600">
    Additional features
  </div>
</div>

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
  <div className="py-6 font-medium">Facebook Messenger integration</div>

  <div className="py-6 border-l text-center text-gray-600 px-4">
    Send and receive simple messages and quick replies
  </div>

  <div className="py-6 border-l text-center text-gray-600 px-4">
    Includes advanced bot branching and reporting
  </div>
</div>

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
  <div className="py-6 font-medium">Logged-in visitor identification</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 flex justify-center border-l">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
  <div className="py-6 font-medium">Draggable chat widget</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 flex justify-center border-l">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
  <div className="py-6 font-medium">Website pages</div>

  <div className="py-6 border-l text-sm text-gray-600 px-6">
    Up to 30 total website pages. Includes HubSpot branding. Favicon not customizable.
  </div>

  <div className="py-6 border-l text-sm text-gray-600 px-6">
    Up to 10K website pages. Includes personalization, A/B testing, and SEO recommendations.
  </div>
</div>

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
  <div className="py-6 font-medium">99.95% measured uptime</div>

  <div className="py-6 flex justify-center border-l">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 flex justify-center border-l">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* ROW */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center border-b">
  <div className="py-6 font-medium">Advanced menus</div>

  <div className="py-6 border-l text-center text-gray-600 px-4">
    Applies to website pages and blog posts
  </div>

  <div className="py-6 border-l text-center text-gray-600 px-4">
    Applies to website pages and blog posts
  </div>
</div>
{/* Apex hosting */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Apex hosting and redirects</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* XML sitemap */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Automatically-generated XML sitemap</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Cookie management */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-center">
  <div className="py-6 font-medium">Cookie Management Tools</div>

  <div className="py-6 border-l text-sm text-gray-600 px-6">
    Create up to 100 consent banners with different geotargeting rules,
    languages, and templates. Includes support for GPC signals. Allow
    visitors to update their consent preferences.
  </div>

  <div className="py-6 border-l text-sm text-gray-600 px-6">
    Create up to 100 consent banners with advanced rules, languages,
    templates, and support for GPC signals. Remove HubSpot branding.
  </div>
</div>

{/* Custom domain */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Connect a custom domain</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Security */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Custom domain security settings</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Design manager */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Design manager</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Drag and drop */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Drag-and-drop editor</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Local dev */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Local website development</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>
{/* Mobile optimization */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Mobile optimization</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Premium hosting */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Premium hosting</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Site export */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Site export</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Website structure import */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Website structure import</div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Content staging */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Content staging</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Site tree */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Site tree</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Content library */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-center">
  <div className="py-6 font-medium">Content library</div>

  <div className="py-6 border-l text-sm text-gray-600 px-6">
    Includes content library module, with HubSpot branding.
  </div>

  <div className="py-6 border-l text-sm text-gray-600 px-6">
    Includes content library module, plus gated access and remove branding.
  </div>
</div>

{/* URL mappings */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">URL mappings</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Smart content */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b">
  <div className="py-6 font-medium">Smart content for pages</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>
{/* Content embed */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Content embed</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    Up to 3 blocks per page.
  </div>
</div>

{/* A/B testing */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">A/B testing</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Adaptive testing */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Adaptive testing</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    Test up to 5 page variations at a time.
  </div>
</div>

{/* AI translation */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">AI translation</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    Automatically translate content.
  </div>
</div>

{/* Breeze Customer Agent */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Breeze Customer Agent</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    100 HubSpot Credits per conversation
  </div>
</div>

{/* Case studies */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Case studies (Beta)</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    Up to 10,000 case studies
  </div>
</div>

{/* Content remix */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Content remix (Beta)</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    Generate up to 20 pieces of content per day.
  </div>
</div>

{/* Podcasts */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Podcasts</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    Up to 5 podcasts and 1K episodes
  </div>
</div>

{/* Video creation */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Video creation & editing</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l flex justify-center">
    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
  </div>
</div>

{/* Multi-language */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Multi-language content creation</div>

  <div className="py-6 border-l text-center px-4">
    Up to 3 supported languages
  </div>

  <div className="py-6 border-l text-center px-4">
    Unlimited supported languages
  </div>
</div>
  </div>
</div>
{/* ===== SECTION 6 : Manage Content ===== */}
<div className="mt-32">

  {/* Heading */}
  <h2 className="text-4xl font-bold text-gray-900 mb-12">
    Manage Content
  </h2>

  {/* Table */}
  <div className="border-t border-gray-300">

    {/* Reporting dashboard */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
      <div className="py-6 font-medium">Reporting dashboard</div>

      <div className="py-6 border-l text-center px-4">
        10 dashboards, 50 reports per dashboard
      </div>

      <div className="py-6 border-l text-center px-4">
        75 dashboards, 50 reports per dashboard
      </div>
    </div>

    {/* Website traffic */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
      <div className="py-6">Website traffic analytics</div>

      <div className="py-6 border-l text-center">
        Standard web analytics dashboard
      </div>

      <div className="py-6 border-l text-center">
        Customizable website traffic analytics
      </div>
    </div>

    {/* Contact attribution */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
      <div className="py-6">Contact create attribution</div>

      <div className="py-6 border-l"></div>

      <div className="py-6 border-l text-center px-4">
        Track up to 10,000 logged contact interactions
      </div>
    </div>

    {/* SEO analytics */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
      <div className="py-6">SEO analytics</div>

      <div className="py-6 border-l"></div>

      <div className="py-6 border-l flex justify-center">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>

    {/* Google Search Console */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
      <div className="py-6">Google Search Console integration</div>

      <div className="py-6 border-l"></div>

      <div className="py-6 border-l flex justify-center">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>

    {/* SEO recommendations */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
      <div className="py-6 font-medium">
        SEO recommendations & optimizations
      </div>

      <div className="py-6 border-l text-center">
        Basic recommendations.
      </div>

      <div className="py-6 border-l text-center px-4">
        Advanced recommendations, full site auditing, and topics.
      </div>
    </div>

    {/* HubDB */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
      <div className="py-6 font-medium">HubDB</div>

      <div className="py-6 border-l"></div>

      <div className="py-6 border-l flex justify-center">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>

    {/* Dynamic pages */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
      <div className="py-6">Dynamic pages</div>

      <div className="py-6 border-l"></div>

      <div className="py-6 border-l flex justify-center">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>

    {/* Memberships */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Memberships</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    Up to 2 access groups.
  </div>
</div>
  {/* Member blog */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Member blog</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    Up to 2 access groups.
  </div>
</div>
    
    {/* Password-protected pages*/}
    <div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
      <div className="py-6">Password-protected pages</div>

      <div className="py-6 border-l"></div>

      <div className="py-6 border-l flex justify-center">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">✓</div>
      </div>
    </div>
      {/* Video hosting & management */}
<div className="grid grid-cols-1 md:grid-cols-3 border-b items-stretch">
  <div className="py-6 font-medium">Video hosting & management</div>

  <div className="py-6 border-l"></div>

  <div className="py-6 border-l text-center px-4">
    Up to 150 videos
  </div>
</div>
{/* Footnote row */}
          <div className="py-6 border-t text-sm text-gray-500 col-span-3 text-center">
            View the Product & Services Catalog for full technical limits and definitions
          </div>
  </div>
</div>

    </div>
  );
}
