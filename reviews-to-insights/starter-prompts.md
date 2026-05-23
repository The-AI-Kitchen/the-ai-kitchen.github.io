# Starter prompts

Copy-paste prompts for the hands-on exercise. Use them as written, or steal from them. Each prompt is designed to drop into Cursor agent mode or Claude.ai with minimal editing.

---

## Prompt 0. Critique my three exec questions

**Use in**: Claude.ai or Cursor (Ask mode)
**When**: you drafted your three questions in `src/App.tsx` and want pressure-testing before you build charts against them

```
I'm playing the role of a User Researcher at Starbucks corporate. I have to
write three questions that a Starbucks VP would actually pay me to answer
using 2,000 Yelp reviews. Here are my drafts:

1. <paste your first question>
2. <paste your second question>
3. <paste your third question>

Critique each one as if you were the VP. For each:

- Is the question specific enough that a chart could answer it? Or is it too
  vague to know when I've answered it?
- Is it about a real Starbucks decision someone could act on this quarter, or
  is it a curiosity?
- If the question is weak, rewrite it to be stronger. Keep the same topic.

End with: which of the three questions is the strongest, and why.
```

---

## Prompt 1a. Find candidate themes the starter codebook misses

**Use in**: Cursor agent mode in the project (it needs file access)
**When**: Task 2, step 1 — before you draft a new theme, identify a real gap in the existing codebook

```
Open `public/starbucks_reviews_coded.csv`. Filter to 1-star and 2-star
reviews. Read the `text` column for 30 of them, picked at random across
cities. The existing codebook has these 10 themes:

mobile_app_order, speed_wait_time, drink_quality, barista_service,
atmosphere_workspace, drive_thru, cleanliness, food_quality, pricing_value,
rewards_loyalty.

Tell me the top 3 recurring complaints from these 30 reviews that are NOT
already covered by those 10 themes. For each candidate:

- A short name for the theme (5 words or fewer).
- A one-sentence description of what it captures.
- 3 verbatim example phrases pulled from the reviews you read.

Be conservative. If a complaint is already covered by an existing theme, do
not list it as a candidate — say so and move on.
```

---

## Prompt 1. Extend the starter codebook

**Use in**: Claude.ai or Cursor (Ask mode)
**When**: after you've read 20-30 reviews from your chosen city and spotted a recurring topic the starter codebook misses

```
You are a senior user researcher. Below is our starter codebook for analyzing
Starbucks Yelp reviews:

<paste contents of data/starbucks_codebook_starter.json here>

And here are 20 reviews I just read that mention something the codebook does
not currently capture:

<paste 20 reviews here>

Propose ONE new theme to add to the codebook. Return a JSON object with these
fields, matching the existing schema:

- id: snake_case
- name: display name
- definition: 1-2 sentences. Distinguish it from existing themes.
- examples: 3 verbatim phrases from the reviews above that would trigger this theme
- business_question: which corporate decision-maker cares about this theme and what would they want to know

Be conservative. If the topic is fully covered by an existing theme, say so and stop.
```

---

## Prompt 2. Re-run thematic coding on a small subset

**Use in**: Cursor agent mode in the project (so it can read files and run Python)
**When**: after you extended the codebook, to see how the addition changes the picture

```
Take the first 100 reviews from data/starbucks_reviews.csv. Apply my updated
codebook at data/starbucks_codebook_starter.json. For each review:

1. Read the review text.
2. Decide which themes apply (zero, one, or several).
3. For each applied theme, find the exact verbatim quote span that supports it
   (max ~25 words). If you can't find a verbatim quote, do not apply the theme.
4. Output a row with: review_id, stars, city, themes (pipe-separated theme IDs),
   themes_with_quotes_json.

Write the output to data/starbucks_reviews_coded_100.csv.

Show me the count of reviews per theme at the end, and flag any reviews where
you considered applying my new theme but ultimately did not.
```

---

## Prompt 3. Generate a chart

**Use in**: Cursor agent mode, inside example-dashboard/ or your fork of the starter template
**When**: when you have a specific exec question you want to chart

```
I want to add a chart to my dashboard that answers this exec question:

"<paste your exec question here, e.g. 'Are 1-star reviews dominated by mobile
app complaints in any specific city?'>"

The data is at ../data/starbucks_reviews_coded.csv. The schema is:
review_id, business_id, business_name, city, state, stars, date, text,
themes (pipe-separated), themes_with_quotes_json.

Constraints:
- React + recharts (matching the existing dashboard).
- The chart should be filterable by the same filters as the other charts on
  this page (city, star rating, theme).
- Include a 1-sentence chart title that names the exec question.
- Show one representative quote beneath the chart when the user clicks a bar.

Generate the chart component and wire it into the existing page layout.
```

---

## Prompt 4. Ground an insight bullet

**Use in**: Claude.ai
**When**: writing the insight memo and you want to pressure-test that your claim is grounded

```
I'm writing a 1-page research memo for Starbucks corporate. Here is one of my
insight bullets:

"<paste your bullet, e.g. 'Mobile app frustration is the dominant complaint
in 1-2 star reviews, accounting for 38% of negative reviews.'>"

Here is the supporting data:

<paste the relevant filtered rows from your coded CSV — 10-20 rows showing the
reviews that map to this bullet, including the quote spans>

Critique this bullet as if you were the Starbucks VP of Research:

1. Is the claim defensible from this data, or am I overreaching?
2. Are the supporting quotes actually about what I claim they are about?
3. What's the strongest counter-question a skeptical exec would ask?
4. Rewrite the bullet in a more defensible way if needed.
```

---

## Prompt 5. Live exec Q&A — ad-hoc analysis

**Use in**: Cursor agent mode during the 4:10-4:25 Q&A block
**When**: the VP asks you a question your dashboard doesn't directly answer

```
The Starbucks VP just asked me: "<paste their question here>"

The data is at ../data/starbucks_reviews_coded.csv. Schema reminder:
review_id, business_id, business_name, city, state, stars, date, text, themes.

Help me answer in under 60 seconds. Do the analysis, return a single number or
short answer, and pull 2 representative quotes that ground it. Keep the
analysis simple — I need to be able to defend the method live.
```

---

## Prompt 6. Stress-test your dashboard before the Q&A

**Use in**: Claude.ai with the link to your dashboard repo, or paste your code
**When**: 10 minutes before the Q&A starts, if you want a pre-flight check

```
Below is the code for my Starbucks reviews dashboard:

<paste the main component file>

Imagine you are the Starbucks VP of Research about to interview the person
who built this. List the 5 toughest questions you would ask them. For each
question, predict whether the dashboard as-is can answer it directly, and if
not, what the researcher would need to do (Cursor agent? new filter? new
chart?) to answer in under a minute.
```

---

## Tips

- **Run prompts in order.** Each one builds on the previous. Skipping prompt 1 means your dashboard answers the same questions everyone else's does.
- **Iterate inside each prompt.** Generated output is a draft. Spot something off? Reply "actually, also check X" — don't start over.
- **Save what works.** When the AI gives you a good chart or a good critique, copy the prompt + output into a `prompts-i-kept.md` file. This becomes your prompt library for the next portfolio piece.
