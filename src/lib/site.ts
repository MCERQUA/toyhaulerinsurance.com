export const SITE = {
  name: "Toy Hauler Insurance",
  domain: "toyhaulerinsurance.com",
  url: "https://toyhaulerinsurance.com",
  tagline: "Insurance for Toy Hauler RVs, Trailers & the Gear Inside",
  description: "Specialty insurance for toy hauler RVs and trailers — comprehensive coverage for fifth wheels, travel trailers, and the ATVs, UTVs, and motorcycles in your garage. Licensed in all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const SERVICES = [
  {
    slug: "fifth-wheel-toy-hauler-insurance",
    title: "Fifth Wheel Toy Hauler Insurance",
    short: "Comprehensive coverage for fifth wheel toy haulers — replacement cost, vacation liability, and garage contents options.",
    icon: "Truck",
    description:
      "Fifth wheel toy haulers are high-value units that demand specialty RV coverage. Comprehensive and collision on the unit, total loss replacement on newer models, vacation liability, and options for the ATVs and UTVs in your garage.",
    longDescription: `## Fifth Wheel Toy Hauler Insurance

Fifth wheel toy haulers — hitched to a pickup truck's bed, with a rear ramp-door garage section — are among the highest-value RVs on the road. Models from Keystone Fuzion, Forest River Vengeance, Heartland Cyclone, Grand Design Momentum, and others range from $40,000 to $150,000+. Standard RV policies from major carriers exist, but don't always address the toy hauler's unique dual purpose.

## Core Coverage

**Comprehensive and Collision:** Fire, theft, vandalism, hail, flooding, storm damage (comprehensive) plus impact damage from accidents (collision). These are the foundation of any fifth wheel policy.

**Total Loss Replacement:** For newer units, total loss replacement pays for a brand-new comparable unit rather than the depreciated value of your current one. On a $100K fifth wheel that's two years old, the difference between ACV and replacement cost is significant.

**Vacation Liability:** When you're set up at a campground or RV park, you're occupying a temporary "home." Vacation liability provides homeowners-style liability coverage for trip hazards, visitor injuries, and property damage occurring at your campsite.

**Emergency Expense:** If your fifth wheel is disabled far from home due to a covered loss, emergency expense coverage pays for temporary lodging and transportation while you wait for repairs.

**Personal Property:** The furnishings, electronics, clothing, and personal items inside your living quarters up to your policy's personal property limits.

## The Garage Section Gap

Standard fifth wheel RV policies provide limited personal property coverage — often $3,000–$5,000 — which may not adequately cover what's in your rear garage. An ATV or UTV alone can be worth $10,000–$40,000. See our Contents & Garage Coverage page for options.

## Roadside Assistance

Coverage for the fifth wheel unit itself when it becomes disabled (separate from the tow vehicle's roadside coverage).`,
    coverages: [
      "Comprehensive and collision coverage",
      "Total loss replacement (newer units)",
      "Vacation liability at campsites",
      "Personal property in living quarters",
      "Emergency expense / temporary lodging",
      "Roadside assistance for the trailer",
      "Ramp door and specialized component coverage",
      "Aftermarket additions: solar, generators",
    ],
    faqs: [
      {
        q: "How much does fifth wheel toy hauler insurance cost?",
        a: "Fifth wheel toy hauler insurance typically runs $400–$900/year for a mid-range policy. Higher-value units ($80K+) and those with replacement cost coverage run higher. Full-timer coverage adds to the base cost.",
      },
      {
        q: "Does my auto insurance cover my fifth wheel?",
        a: "Your auto policy covers liability while you're towing the fifth wheel (trailer liability attaches to the tow vehicle). It does NOT cover the fifth wheel's own physical damage — that requires a separate RV/trailer policy.",
      },
      {
        q: "What is total loss replacement for a fifth wheel?",
        a: "If your fifth wheel is totaled, total loss replacement pays for a comparable brand-new unit rather than the depreciated cash value. This is available on newer units (typically within 1–3 model years) and is the most valuable coverage you can add.",
      },
      {
        q: "Does my fifth wheel policy cover things stored in the garage section?",
        a: "Standard fifth wheel policies provide limited personal property coverage (often $3,000–$5,000) that may apply to items in the garage. For ATV/UTV/motorcycle values, this is almost never enough. Specialty contents endorsements or separate OHV policies are recommended.",
      },
      {
        q: "Does vacation liability work like homeowners insurance while I'm camping?",
        a: "Yes — vacation liability provides homeowners-equivalent coverage while you're set up at a campground. It covers visitor injuries at your site, trip hazards, and incidental property damage, the kinds of claims a homeowners policy would cover if you were home.",
      },
      {
        q: "Is my fifth wheel covered when it's in storage?",
        a: "Yes — comprehensive coverage applies whether the unit is being towed or in storage. Theft, fire, and weather damage at a storage facility are covered.",
      },
      {
        q: "Do aftermarket additions like solar panels count for coverage?",
        a: "Yes, permanently installed additions like solar systems, upgraded generators, and custom storage can be added to your coverage. Let us know what's been added so they're included in your policy value.",
      },
      {
        q: "What if my fifth wheel is damaged by hail?",
        a: "Hail damage is covered under comprehensive coverage. Fifth wheel toy haulers with fiberglass caps and slide-outs are particularly vulnerable to hail. Filing a comprehensive claim for hail damage is covered.",
      },
    ],
  },
  {
    slug: "travel-trailer-toy-hauler-insurance",
    title: "Travel Trailer Toy Hauler Insurance",
    short: "Insurance for bumper-pull toy hauler travel trailers — comprehensive, collision, and garage section options.",
    icon: "Home",
    description:
      "Travel trailer toy haulers are bumper-pull units with rear ramp-door garages — lighter and more maneuverable than fifth wheels but sharing the same coverage needs. Comprehensive and collision on the unit, vacation liability, contents options.",
    longDescription: `## Travel Trailer Toy Hauler Insurance

Travel trailer toy haulers — bumper-pull units hitched to a standard trailer hitch — offer the toy hauler experience in a more maneuverable, lower-profile package. Popular models include the Forest River Wildcat XX, Keystone Raptor, Lance Toy Hauler, and Coachmen Catalyst. Values range from $20,000 to $80,000+ for premium units.

## How Coverage Differs from Fifth Wheels

Travel trailers typically have lower values than fifth wheels, which affects total loss replacement thresholds. They sit closer to the ground and are more exposed to road debris. Their bumper-pull hitch design means different towing vehicle liability considerations than a fifth wheel's gooseneck-style hitch.

## Core Coverage Types

The same core coverages apply: comprehensive (fire, theft, weather, vandalism), collision (impact damage), vacation liability, personal property, and emergency expense.

## The Garage Contents Gap

The same gap exists as with fifth wheels: standard personal property limits on a travel trailer policy are rarely adequate for the toys in the garage. An ATV, dirt bike, or UTV worth $8,000–$20,000 exceeds standard limits quickly.

## Seasonal Riders

Many travel trailer owners in northern states store their units 4–6 months per year. Seasonal suspension of coverage or reduced off-season rates are available for stored units.`,
    coverages: [
      "Comprehensive and collision coverage",
      "Vacation liability at campsites",
      "Personal property in living quarters",
      "Emergency expense / temporary lodging",
      "Roadside assistance",
      "Seasonal storage rates",
      "Contents / garage section options",
      "Transit and towing coverage",
    ],
    faqs: [
      {
        q: "Is travel trailer insurance the same as fifth wheel insurance?",
        a: "The coverage types are the same, but travel trailers generally have lower values and may qualify for lower premiums. Total loss replacement thresholds may differ. The core coverages — comprehensive, collision, vacation liability — are identical.",
      },
      {
        q: "Do I need separate insurance for my travel trailer toy hauler?",
        a: "Yes. Your tow vehicle's auto policy covers liability while towing (up to the trailer liability extension). The travel trailer's physical damage requires its own policy.",
      },
      {
        q: "What's the average cost of travel trailer toy hauler insurance?",
        a: "Travel trailer toy hauler insurance typically runs $300–$700/year for standard coverage. Higher-value units and those with replacement cost coverage run higher. Adding contents/garage coverage increases the premium based on what you're insuring.",
      },
      {
        q: "Can I get insurance for a travel trailer toy hauler with a dirt bike inside?",
        a: "The travel trailer's policy covers the unit itself. For dirt bikes inside the garage, you'll need either a scheduled endorsement on the RV policy or a separate powersports policy. We help you build the right layered coverage.",
      },
      {
        q: "Does insurance cover damage from the ramp door?",
        a: "Ramp doors are part of the travel trailer unit and covered under the standard comprehensive and collision policy. If the ramp door is damaged in an accident or a covered peril, the repair is covered.",
      },
    ],
  },
  {
    slug: "toy-hauler-contents-coverage",
    title: "Toy Hauler Contents & Garage Coverage",
    short: "Standard RV policies cap personal property at $3,000–$5,000 — nowhere near enough for your ATVs, UTVs, and gear.",
    icon: "Package",
    description:
      "The biggest gap in standard toy hauler insurance is garage contents. Standard personal property limits leave your ATVs, motorcycles, UTVs, and equipment exposed. Learn your options for actually protecting what's in the garage.",
    longDescription: `## The Toy Hauler Garage Contents Coverage Gap

Most standard RV policies include $3,000–$5,000 of personal property coverage. That sounds reasonable — until you look at what's in a toy hauler's rear garage.

One Polaris RZR: $22,000. One Can-Am Maverick: $28,000. Two dirt bikes: $14,000. At any of these values, the standard personal property limit is exhausted by a single vehicle. And those "toys" are often worth more than the RV itself.

## The Coverage Problem

Standard RV policies weren't designed to cover the contents of a garage carrying off-road vehicles. Personal property coverage is designed for furniture, electronics, and clothing — not purpose-built recreational vehicles worth tens of thousands.

## Your Options

**Scheduled Personal Property on the RV Policy:** Some carriers allow you to schedule specific items at agreed value within the RV policy. This works for lower-value items but gets expensive for high-value OHV equipment.

**Separate OHV/Powersports Policies:** The cleanest solution for ATVs, UTVs, and motorcycles is a dedicated OHV policy for each vehicle. This covers them while stored AND while you're riding them — which the RV policy never would. It's usually more coverage for comparable or lower cost.

**Inland Marine / Floater:** For high-value recreational equipment, an inland marine floater can provide broader coverage with higher limits than a standard RV personal property endorsement.

## Our Recommendation

Build a layered coverage approach: RV policy for the toy hauler unit itself, separate OHV policies for the powered vehicles, and scheduled personal property for ancillary gear (generators, tools, camping equipment). This provides the broadest coverage at the most competitive combined premium.`,
    coverages: [
      "Scheduled personal property for RV policy",
      "OHV policy options for ATVs and UTVs",
      "Motorcycle coverage while stored and riding",
      "Inland marine for high-value equipment",
      "Layered coverage strategy",
      "Coverage that follows you off the ramp",
      "Theft and comprehensive for garage contents",
    ],
    faqs: [
      {
        q: "Does my toy hauler RV insurance cover my ATV?",
        a: "Standard RV personal property limits ($3,000–$5,000) may partially cover an ATV while stored in the garage — but almost certainly not at its full value. More importantly, coverage ends when you ride the ATV out of the garage. You need a separate OHV policy for riding coverage.",
      },
      {
        q: "What is the standard personal property limit on toy hauler policies?",
        a: "Most standard RV policies provide $3,000–$5,000 in personal property coverage. A single ATV or UTV typically exceeds this. For high-value recreational equipment, separate OHV policies or scheduled personal property endorsements are needed.",
      },
      {
        q: "Should I insure my UTV on my RV policy or separately?",
        a: "Separately is almost always better. A standalone OHV/UTV policy covers the vehicle while riding (not just while stored), provides dedicated limits sized for the vehicle's value, and keeps UTV claims off your RV policy history. Separate policies are usually more coverage for similar cost.",
      },
      {
        q: "What if I have multiple machines in the garage — multiple ATVs and a motorcycle?",
        a: "Each powered recreational vehicle should have its own OHV or motorcycle policy. Trying to cover multiple vehicles under RV personal property limits creates significant underinsurance. We can quote the full layered package — RV + each toy — in one conversation.",
      },
      {
        q: "Is my generator covered under my RV policy?",
        a: "Portable generators may be covered under personal property limits, or excluded as a vehicle/motor. Permanently installed generators are typically part of the RV unit itself. Check your policy and let us know if you have high-value ancillary equipment.",
      },
      {
        q: "What about tools and camping gear stored in the garage?",
        a: "Standard personal property coverage applies to general gear and camping equipment up to the policy limit. High-value tools may need scheduling. Our layered coverage strategy helps ensure everything has appropriate protection.",
      },
    ],
  },
  {
    slug: "atv-motorcycle-toy-hauler-coverage",
    title: "ATV, UTV & Motorcycle Coverage for Toy Hauler Owners",
    short: "Your RV policy ends when you ride. OHV and motorcycle policies follow your ATVs and bikes on the trail.",
    icon: "Bike",
    description:
      "ATVs, UTVs, and motorcycles need their own insurance policies — coverage that travels with them when you ride, not just while they're stored in your toy hauler's garage. We help toy hauler owners build the complete layered coverage stack.",
    longDescription: `## Why Toy Hauler Owners Need OHV Insurance

Here's the key fact most toy hauler owners don't know: your RV insurance policy's personal property coverage applies to your ATVs and UTVs only while they're stored inside the trailer. The moment you ride one down the ramp and onto the trail, you're uninsured under the RV policy.

If you crash your Polaris RZR on the trail at Moab, your toy hauler insurance won't pay for it. If another rider hits your Can-Am in the desert, your toy hauler policy won't cover your liability. You need a dedicated OHV insurance policy for each vehicle you ride.

## What OHV Insurance Covers

**Liability:** Required in some states; essential everywhere. Covers bodily injury and property damage you cause to others while operating your ATV, UTV, or side-by-side.

**Collision:** Physical damage to your OHV from impact with another vehicle, object, or rollover.

**Comprehensive:** Theft, fire, vandalism, weather damage — both while riding and while stored.

**Medical Payments:** Occupant medical bills regardless of fault.

**Uninsured Off-Road Motorist:** If another rider hits you and they have no insurance.

**Accessories Coverage:** Light bars, wheels, winches, and aftermarket equipment.

## State OHV Insurance Requirements

Many states now require liability insurance for ATVs and UTVs operating on public trails, OHV parks, or any state-managed lands. Arizona, California, New York, Michigan, and others have specific OHV insurance requirements. We write all 50 states.

## Motorcycle Coverage

If you haul dirt bikes or street motorcycles, dedicated motorcycle insurance covers them for riding — whether that's track use, trail riding, or street. We write motorcycle coverage alongside your toy hauler policy.`,
    coverages: [
      "ATV liability coverage on trails",
      "UTV / side-by-side collision and comprehensive",
      "Motorcycle coverage for dirt and street bikes",
      "Accessories and custom parts coverage",
      "Medical payments for occupants",
      "Uninsured off-road motorist coverage",
      "State OHV compliance coverage",
      "Coverage bundled with toy hauler policy",
    ],
    faqs: [
      {
        q: "Do I legally need insurance for my ATV or UTV?",
        a: "It depends on your state and where you ride. Many states require liability insurance for ATVs and UTVs operated on public lands, OHV parks, and state trails. Even where not required, liability coverage protects you from significant financial exposure.",
      },
      {
        q: "If my ATV is stolen from my toy hauler, is it covered?",
        a: "Under your toy hauler's personal property coverage, possibly — up to the personal property limit (often $3,000–$5,000). Under a separate ATV comprehensive policy, it's covered at the agreed or actual value of the ATV itself, which is almost always much better coverage.",
      },
      {
        q: "Can I insure a Polaris RZR, Can-Am Maverick, or Yamaha YXZ separately from my toy hauler?",
        a: "Yes, and this is exactly what we recommend. Each vehicle gets its own policy sized for its value, covering it while stored and while riding. We quote the full layered package.",
      },
      {
        q: "Does ATV insurance cover me on private land?",
        a: "Yes — ATV liability and comprehensive/collision coverage applies regardless of whether you're on private land, public trails, or state OHV parks (with some event exclusions for competition use).",
      },
      {
        q: "What is the average cost of ATV or UTV insurance?",
        a: "ATV insurance typically runs $100–$400/year for a standard policy. UTVs and side-by-sides run $200–$600/year depending on value, accessories, and use. Sport side-by-sides like the RZR Pro R or Can-Am X3 run at the higher end based on value.",
      },
      {
        q: "Can I bundle my toy hauler and OHV policies?",
        a: "We can quote them together and make sure your coverage layers work properly. Some carriers offer multi-policy discounts. Even if written separately, having one agent manage both ensures there are no gaps between your policies.",
      },
    ],
  },
  {
    slug: "full-timer-toy-hauler-insurance",
    title: "Full-Timer Toy Hauler Insurance",
    short: "Living in your toy hauler? Standard RV policies aren't designed for it. Full-timer endorsements fill the gap.",
    icon: "MapPin",
    description:
      "If your toy hauler is your primary residence, you need full-timer RV insurance endorsements that extend liability, personal property, and emergency expense coverage to reflect full-time living — not occasional weekend camping.",
    longDescription: `## Full-Timer Toy Hauler Insurance

The full-time RV lifestyle is growing rapidly — and toy haulers are a popular choice for full-timers who want to bring their recreational equipment wherever they go. But if you live in your toy hauler full-time, a standard RV policy is not designed for you.

## Why Standard RV Policies Fall Short for Full-Timers

Standard RV policies assume part-time recreational use. When your toy hauler is your primary residence:

- **Personal property limits are too low:** You've moved your entire life into the unit. Your furniture, electronics, clothing, tools, and valuables all need adequate coverage — not a $3,000–$5,000 recreational-use limit.
- **Liability is more like renters/homeowners:** If someone is injured at your campsite or you cause property damage at a long-term park, you need liability coverage equivalent to what homeowners insurance would provide.
- **Loss of use becomes critical:** If your home is destroyed, you need adequate emergency housing coverage to cover alternative living arrangements, not just a weekend hotel.

## Full-Timer Endorsements

Full-timer endorsements add:

- **Higher personal property limits** to reflect full-time living (typically $20,000–$50,000+)
- **Personal liability** equivalent to homeowners/renters liability
- **Medical payments** to others injured at your campsite
- **Loss of use** extended to actual alternative living cost
- **Loss assessment** if your campground assesses charges after a covered incident

## Mail Forwarding & Domicile States

Full-timers often establish legal domicile in South Dakota, Texas, or Florida for favorable vehicle registration, driver's license, and insurance rules. We write all 50 states and can accommodate full-timer domicile planning.`,
    coverages: [
      "Higher personal property limits for full-time living",
      "Full-timer liability (homeowners equivalent)",
      "Extended loss of use / alternative living",
      "Medical payments to campsite visitors",
      "Loss assessment coverage",
      "Coverage in all 50 states",
      "Domicile state flexibility (SD, TX, FL friendly)",
    ],
    faqs: [
      {
        q: "What is full-timer RV insurance?",
        a: "Full-timer RV insurance adds endorsements to a standard RV policy to address the coverage gaps that arise when an RV is your primary residence — higher personal property limits, enhanced liability (similar to homeowners), and extended loss of use coverage.",
      },
      {
        q: "Do I need full-timer insurance if I live in my toy hauler year-round?",
        a: "Yes. Standard RV policies are designed for occasional recreational use. If your toy hauler is your primary residence, you need full-timer endorsements for adequate personal property coverage and homeowners-equivalent liability protection.",
      },
      {
        q: "What domicile state should I choose as a full-timer?",
        a: "South Dakota, Texas, and Florida are the most popular domicile states for full-timers due to no state income tax, favorable vehicle registration rules, and insurance-friendly regulations. We write coverage in all three and can discuss tradeoffs.",
      },
      {
        q: "Does full-timer insurance cover the toys in my garage differently?",
        a: "Your toys (ATVs, motorcycles) still need their own OHV policies. Full-timer endorsements address your living quarter personal property — clothing, furniture, electronics — not powered recreational equipment.",
      },
      {
        q: "How much more does full-timer coverage cost than standard RV insurance?",
        a: "Full-timer coverage typically adds $200–$500/year to a standard RV policy premium, depending on the added coverage limits. Given that full-timers have all their possessions in the unit, this is one of the most important endorsements available.",
      },
    ],
  },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years Placing RV & OHV Insurance" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
  { value: 8000, suffix: "+", label: "RV & Toy Hauler Policies Placed" },
  { value: 24, suffix: " Hours", label: "Quote Turnaround" },
] as const;

export const TESTIMONIALS: readonly { quote: string; name: string; role: string; location: string }[] = [];

export const FAQS = [
  {
    q: "What insurance do I need for a toy hauler?",
    a: "At minimum: comprehensive and collision on the toy hauler unit itself, vacation liability, and personal property coverage. Additionally, ATVs, UTVs, and motorcycles in the garage need their own OHV/powersports policies for riding coverage — the RV policy doesn't cover them once they're off the ramp.",
  },
  {
    q: "Does my auto insurance cover my toy hauler trailer?",
    a: "Your auto policy's trailer liability coverage extends to the toy hauler while it's being towed (physical damage to others you cause). It does NOT cover the toy hauler's own physical damage — that requires a separate RV/trailer policy.",
  },
  {
    q: "How much does toy hauler insurance cost per year?",
    a: "Toy hauler insurance typically runs $400–$900/year for a standard policy covering the unit. Higher-value fifth wheels, total loss replacement coverage, full-timer endorsements, and contents coverage for high-value gear all increase the premium.",
  },
  {
    q: "Does toy hauler insurance cover the ATVs and UTVs inside the garage?",
    a: "Standard personal property coverage (often $3,000–$5,000) may partially cover stored ATVs and UTVs, but almost never at their full value. The moment you ride them, the RV policy's coverage ends. Separate OHV insurance policies provide proper coverage for recreational vehicles.",
  },
  {
    q: "What is vacation liability on a toy hauler policy?",
    a: "Vacation liability provides homeowners-style liability coverage while you're camped and set up. It covers visitor injuries at your campsite, trip hazards, and incidental property damage — the kinds of claims your homeowners insurance would cover if you were at home.",
  },
  {
    q: "Do I need full-timer insurance if I live in my toy hauler?",
    a: "Yes. Standard RV policies assume recreational use. If your toy hauler is your primary residence, full-timer endorsements are needed for higher personal property limits and homeowners-equivalent liability coverage.",
  },
  {
    q: "Can I insure a fifth wheel and my ATVs together?",
    a: "We can quote them together and ensure your coverage layers work seamlessly — no gaps, no overlapping claims headaches. We typically write the RV policy plus OHV policies for each vehicle in the garage as a package.",
  },
  {
    q: "How do I get a toy hauler insurance quote?",
    a: "Call 844-967-5247 or submit a quote request. We'll ask for: year/make/model of your toy hauler, estimated value, what you haul in the garage (make/model/value of ATVs/UTVs/bikes), and how you use the unit (recreational, seasonal, or full-time). Same-day quotes available.",
  },
] as const;

export const CREDENTIALS = [
  "Licensed in All 50 States",
  "NPN #8608479",
  "Founded 2005",
  "A.M. Best A+ Rated Carriers",
  "Toy Hauler & RV Specialists",
  "Same-Day Certificates",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
