# Executive Question Bank

15 questions to draw from in the 4:10-4:25 live Q&A (3 volunteers, ~4 min each). Mix difficulties per student so the segment teaches both "dashboard hits" and "switch to Cursor" moments.

Each question has:
- The role asking it (so students hear who the question serves)
- Difficulty: **Easy** (dashboard filter answers it directly), **Medium** (filter combo or a chart they may not have built), **Hard** (needs Cursor agent / ad-hoc analysis)
- What a strong answer sounds like (for moderator scoring)
- A follow-up if their answer is weak

Pick one Easy and one Medium-or-Hard per student so everyone has a "win" and a "stretch."

---

## Mobile & Digital

### Q1. [Easy] VP of Digital
*"Of all the negative reviews we have, what fraction are actually about the mobile app, not the in-store experience?"*

**Strong answer**: filters to stars <= 2, applies the `mobile_app_order` theme filter, reads the percentage off the chart, names a representative quote. Bonus: notes if app-related complaints skew toward any specific city.

**Weak follow-up**: "Of those, how many are about ordering specifically vs. payment or rewards?"

### Q2. [Medium] VP of Digital
*"Mobile order is supposed to make the customer experience faster. Is the data telling us it actually makes in-store satisfaction worse for non-mobile customers?"*

**Strong answer**: cross-filters. Shows reviews that mention both `mobile_app_order` AND `speed_wait_time` and looks at star distribution. Acknowledges the limits of correlational data from one channel (Yelp self-selection).

**Weak follow-up**: "What's the one experiment you'd run to actually test this?"

---

## Operations

### Q3. [Easy] VP of Operations
*"Which city has the cleanliness problem we keep hearing about?"*

**Strong answer**: city-level filter on `cleanliness` theme, ranks by share of negative cleanliness reviews. Names the top two cities with a representative quote each.

**Weak follow-up**: "Is it specific locations within those cities, or systemic?"

### Q4. [Medium] VP of Operations
*"We're considering closing 20 stores. If you had to flag the 20 worst-rated Starbucks in this dataset for me by Monday, how would you do it — and what's the risk in trusting your list?"*

**Strong answer**: shows ability to rank business_ids by mean stars + review_count threshold, BUT names the limitations: Yelp is self-selected, sample size varies, may reflect neighborhood rather than store.

**Weak follow-up**: "How would your list change if you weighted recent reviews higher?"

### Q5. [Hard] VP of Operations
*"Are our drive-thru locations meaningfully worse on speed complaints than walk-in stores? I need a number."*

**Strong answer**: switches to Cursor. Cross-tabs `drive_thru` theme presence with `speed_wait_time` theme presence and star ratings. Returns a specific percentage with a caveat.

**Weak follow-up**: "Show me three specific reviews that ground that number."

---

## Customer Experience

### Q6. [Easy] VP of Customer Experience
*"Walk me through the single worst recurring complaint in this data, and how confident you are that it's real."*

**Strong answer**: picks one theme (e.g., `drink_quality`), shows the frequency, reads two grounding quotes verbatim. Confidence answer references the sample size and the consistency of the quote pattern.

**Weak follow-up**: "Is this getting worse over time?"

### Q7. [Medium] VP of Customer Experience
*"Which complaint do we hear most from our happiest customers — the 4 and 5 star reviewers? Those are gold."*

**Strong answer**: filters to stars >= 4, surfaces themes that still appear in those reviews. Insight: "even our fans are complaining about X" is a different kind of signal than "1-star customers hate X."

**Weak follow-up**: "What would you do with that finding if you ran this team?"

### Q8. [Hard] VP of Customer Experience
*"I want to know if our service quality is consistent across our locations. What's the spread, and which stores are outliers?"*

**Strong answer**: switches to Cursor. Computes mean stars per business_id with at least N reviews, shows the distribution, calls out top and bottom 5 by business_id with city/state. Names representative quotes from outliers.

**Weak follow-up**: "What would you tell me to do about the worst outliers tomorrow morning?"

---

## Loyalty & Marketing

### Q9. [Easy] VP of Marketing
*"Are people talking about the rewards program at all, or are we wasting money on it?"*

**Strong answer**: shows `rewards_loyalty` theme frequency, breaks down sentiment by star rating. Names tone (excited / frustrated / confused).

**Weak follow-up**: "What's the most common rewards-related complaint in 1-star reviews?"

### Q10. [Medium] VP of Marketing
*"Our hypothesis is that customers who mention rewards are more loyal — they leave better reviews on average. Is that true?"*

**Strong answer**: compares mean star rating of reviews tagged `rewards_loyalty` vs. those not tagged. Acknowledges selection bias.

**Weak follow-up**: "If true, what would you build on it? If false, what would you stop doing?"

---

## The Third Place

### Q11. [Easy] VP of Store Design
*"How is the 'third place' positioning landing? Are people still treating Starbucks as a workspace?"*

**Strong answer**: filters on `atmosphere_workspace`, shows star distribution and a few representative quotes. Identifies whether the pattern is praise (good) or complaint (workspace promise eroding).

**Weak follow-up**: "Is this consistent across cities or are some markets losing the workspace use case?"

### Q12. [Hard] VP of Store Design
*"Show me a specific Starbucks location where the workspace experience seems broken, with evidence."*

**Strong answer**: switches to Cursor. Filters for `atmosphere_workspace` theme + low stars, groups by business_id, picks one with multiple complaints. Shows 2-3 grounding quotes.

**Weak follow-up**: "What's the next data you'd collect to confirm what's happening at that store?"

---

## Pricing

### Q13. [Easy] VP of Pricing
*"Are customers actually complaining about price, or is that media narrative?"*

**Strong answer**: shows `pricing_value` theme frequency overall and within 1-2 star reviews specifically. Reads one grounding quote.

**Weak follow-up**: "Has it changed over time in the data we have?"

---

## Meta / Research Craft

### Q14. [Medium] VP of Research
*"What's the biggest weakness of this analysis? Where would I be wrong to trust your numbers?"*

**Strong answer**: names at least two of: (a) Yelp reviewer self-selection bias, (b) only ~2,000 reviews across hundreds of stores, (c) thematic coding by an LLM has its own errors, (d) reviews are not evenly distributed by date. Bonus: names what they'd do to strengthen it (representative survey, in-store intercepts, exit interviews).

**Weak follow-up**: "If I gave you another 4 hours, what's the one thing you'd add?"

### Q15. [Hard] VP of Research
*"How would you adapt this exact workflow for a B2B research project we run next quarter — say, interviewing 30 enterprise customers about our partner portal?"*

**Strong answer**: maps each of the four recipes onto the B2B context. Codebook becomes themes about partner needs / workflow pain. Coding becomes interview transcript coding. Dashboard becomes a stakeholder-facing summary tool. Names the differences too (smaller N, deeper transcripts, different coding granularity).

**Weak follow-up**: "What's the one piece of this that would NOT translate?"

---

## Moderator notes

- Don't telegraph difficulty. Mix easy/hard so the audience can't predict.
- After each round, take 20 seconds to point out *which recipe the student used well*. Make the recipes the explicit currency of feedback.
- If a student gives an ungrounded answer (no quote, no number), ask "show me the row." That's the teachable moment for Recipe 3.
- If a student dazzles, surface it: "That move where you switched to Cursor mid-question — that's the workflow."
