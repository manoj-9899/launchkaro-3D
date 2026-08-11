export interface ProcessStep {
  title: string
  /** The concrete thing the client receives at this step. */
  deliverable: string
}

export interface ProcessContent {
  eyebrow: string
  title: string
  description: string
  steps: ProcessStep[]
}

/**
 * "Our Process" — written for first-time website buyers.
 * Every step names the concrete deliverable the client receives,
 * so there's never a vague "we strategize" phase.
 */
export const process: ProcessContent = {
  eyebrow: 'Our process',
  title: 'Four steps, and you know what you get at each one',
  description:
    "Most of our clients have never commissioned a website before. So every step ends with something real in your hands — not a status update.",
  steps: [
    {
      title: 'Free Audit',
      deliverable:
        "A plain-language report on WhatsApp within 48 hours: what's costing you customers online, and what to fix first.",
    },
    {
      title: 'Design Proposal',
      deliverable:
        'A visual design of your actual homepage — your photos, your rooms, your menu — with a fixed price. No commitment until you approve it.',
    },
    {
      title: 'Build & Review',
      deliverable:
        "A private preview link you open on your own phone, so you see exactly what customers will see — and we revise until you're happy.",
    },
    {
      title: 'Launch & Support',
      deliverable:
        'Your site live on your own domain, a walkthrough of how everything works, and updates handled over WhatsApp after launch.',
    },
  ],
}
