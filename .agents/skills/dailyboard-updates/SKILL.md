---
name: dailyboard-updates
description: Prepare Dailyboard release roundups from merged PRs, with a concise internal Slack report and a user-facing blog article, screenshots, review PR and live preview. Use for the recurring fortnightly update or a manual edition, not deployment or generic Jira status reports.
---

# Dailyboard updates

Produce two outputs from one evidence set: a Polish internal summary for the current review thread and an English public article in dailyboard-website. Follow the current user's scope and publishing authority. The agreed series is **Dailyboard, Forward — <edition date>** (proposed in the first review edition).

## Resume and establish the interval

Read `docs/updates/editions.json` and existing edition notes, open website PRs and the relevant Slack thread before creating anything. Resume an existing draft; never create duplicate editions, PRs, previews, or Slack posts. Treat stored message IDs as delivery evidence, not proof someone read the message. On an uncertain send, check the destination before retrying.

First edition starts July 1, 2026. Freeze an exact source cutoff for each run. Later public editions cover changes since the last **published** edition, retaining unpublished eligible work. Keep an independent internal-report cutoff: an internal report may succeed while the article remains in review. Draft creation or PR merge alone must not advance the public publication checkpoint; verify the live article before recording publication. An existing unmerged edition should be updated rather than duplicated. Carry forward relevant merged-but-not-deployed work until release, and identify it as pending internally.

## Gather evidence

Use merged Dailyboard product PRs as the primary record; page through all results and inspect descriptions, follow-up comments and relevant implementation. Group several PRs for one feature into one item, while preserving all source links. Jira supplies context and a cross-check. Kuba's October 19 clarification: closed tickets without PR coverage may be cleanup, duplicates or abandoned scope; do not present them as shipped work. Do not invent a Jira key for a PR that has none. Distinguish implementation, documentation/design, merged, deployed and verified. Check the actual mobile prototype/distribution state; mobile web is not an App Store launch.

## Editorial decisions

- Lead with user outcomes, explain where a feature is and how to use it.
- Include a short agenda of one-sentence bullets; link highlights to their sections. A small change may be completely described in its bullet.
- Highlights have useful detail and real screenshots or short GIFs showing the released interaction on fictional/demo data. Do not substitute proposed designs or generated screenshots for the application. Record capture environment and limitations. Avoid forcing a screenshot for an invisible backend/process improvement; illustrate a relevant user flow when useful.
- Performance improvements always deserve consideration. Describe the concrete work and intended experience without unsupported speed claims or percentages.
- Reliability work matters even when individual PRs are technical. Explain the collective effort to reduce recurring errors and detect/respond to new problems; do not claim zero bugs or instant guaranteed fixes. Include a concise fixes section, grouping low-level items as other bug fixes and improvements where appropriate.
- Frequently requested features can be highlights even if technically small. Password recovery is such a feature; Kuba confirmed it works in production on October 19, 2026.
- Omit the Google Calendar availability expansion from the **first edition only**, per Kuba. This is not a general rule against communicating availability changes.
- Explain material consequences, such as permanent deletion of integration-owned imports when removing a member.
- Keep PR/Jira implementation links in internal evidence, not in customer-facing copy by default.

## Internal report

Current delivery override (Kuba, October 19, 2026): the first #it report was deleted by Kuba and publication is paused. Return summaries in Slack thread `1792422327.074229` through the bridge's final reply. Do not independently send to #it or enable the schedule until instructed. Preserve the deleted message as historical evidence, not an active report or a completed interval.

Use Slack mrkdwn and this structure:
- Title: `*IT Review — <start date>–<end date>*`.
- A short introduction stating the reporting period and scope.
- One flat bullet list per initiative, using the actual Jira epic name; tasks without an epic go under `*Pozostałe*`. Include APP tasks closed during the interval and currently In Progress at the cutoff. Fetch current Jira status and epic membership; do not infer epic groups from PR themes. Label each item's status and give a concise one-sentence description with Jira and related PR links where available.
- Include closed tasks without PR coverage for completeness, but identify them as cleanup/duplicates/abandoned scope where confirmed, or as lacking implementation evidence. Never imply they shipped. In Progress tasks are ongoing work, not released features. Public article selection remains based on PR/deployment evidence.
- End by stating that the user update is prepared as a blog draft, with the existing article PR and preview links.

Resume the existing report draft. Check history before delivery and record the destination and delivery state without treating a deleted report as the next edition's cutoff. A future change of destination requires current user authorization; the original #it request is superseded by this review pause.

## Article, verification and review

Reuse `src/content/posts/*.mdx`, the existing BlogPost layout and content schema. Assets go in `public/images/updates/<edition>/`. Build with the repository's working lockfile (the first run found Yarn lockfile usable and npm lockfile stale). Do not change unrelated dependencies or layout. Check desktop and phone rendering, agenda anchors, image loading/alt text and copy against evidence. Inspect final diff before creating a review PR. Do not merge/publish without the user's approval.

Serve only the built public site for preview, never the repository or private source notes. Keep the preview alive independently of a terminal call and verify its public URL after launch. Reuse an existing task-specific preview; don't stop unrelated tunnels. A local preview still depends on the host staying available.

## Recurrence

Kuba requested every two weeks on Monday evening, Europe/Warsaw. Run the first complete procedure manually before enabling the recurring schedule. Use an explicit local evening time and first-run date; inspect existing schedules before creating one. Prefer the supported scheduler and verify the displayed next run. Do not treat a config file as proof of an active schedule or invent successful scheduled-run evidence.

Source: Kuba's Slack thread `1792422327.074229`, October 19, 2026, including audio message `1792425981.459909` requesting the two outputs, review preview and fortnightly cadence. Revisit editorial rules when Kuba or Adam provides new feedback.
