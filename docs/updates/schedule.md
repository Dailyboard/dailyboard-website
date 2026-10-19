# Fortnightly Dailyboard updates

Status: **not activated**. The first manual run created website PR #6, a working public preview and one accepted #it report. The current runtime has no schedule-management tool and Computer Use rejected access to the Codex application. Do not interpret this document as an installed schedule or use a direct application-database edit to bypass that restriction.

## Proposed schedule

- Every two weeks, Monday at 20:00, Europe/Warsaw (local evening chosen for the unspecified hour).
- First recurring run: November 2, 2026 at 20:00 Europe/Warsaw.
- Local workstation execution is required for repositories, application screenshots and preview hosting.
- Reference recurrence: `DTSTART;TZID=Europe/Warsaw:20261102T200000` and `RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=MO;BYHOUR=20;BYMINUTE=0;BYSECOND=0`.
- Before activation, inspect existing schedules for this task and verify the displayed next run in the supported scheduler. The host and application must remain available for local scheduled work.

## Task prompt

Run the dailyboard-updates skill in Dailyboard/dailyboard-website. Locate its reviewed checkout and read `.agents/skills/dailyboard-updates/SKILL.md`, `docs/updates/editions.json`, existing edition notes and open PRs first. Until PR #6 is merged, its review checkout is `/Users/kordian-codex/Code/dailyboard/dailyboard-website-update-2026-10-19`; do not create a second first edition.

Gather merged product PRs since the appropriate recorded cutoff and pending eligible changes, cross-check Jira, and distinguish shipped features from designs, internal work and the iOS prototype. Prepare one concise Polish internal report with related tickets and PR links for Dailyboard.io #it (C059D1DJYP8), using Kordian's dedicated app identity. This destination is explicitly authorized by Kuba in Slack thread 1792422327.074229; check for previous delivery before sending and record Slack acceptance.

Prepare or update the English public article in a website PR, with linked agenda, highlights, real demo-data screenshots, performance/reliability coverage and brief fixes. Follow the one-edition Calendar exception and all recorded editorial decisions. Build, review desktop/mobile rendering, inspect the final diff, provide a verified public static-site preview and hand off the PR for review. Do not merge or publish without approval. Keep internal-delivery and public-publication checkpoints separate. Resume existing drafts and preserve pending changes rather than duplicating output. Report concrete blockers and never claim a schedule, message or publication succeeded without evidence.

Source: Kuba's voice message 1792425981.459909, October 19, 2026. Scheduling guidance checked against https://developers.openai.com/training/walkthroughs/scheduled-tasks .
