export interface ProcessStep {
  title: string
  /** Dedicated homepage teaser */
  teaser: string
  /** Full concrete deliverable on detail sections */
  deliverable: string
}

export interface ProcessContent {
  eyebrow: string
  homeTitle: string
  homeDescription: string
  title: string
  description: string
  steps: ProcessStep[]
}

/**
 * "Our Process" — written for first-time website buyers.
 * Every step names the concrete deliverable the client receives.
 */
export const process: ProcessContent = {
  eyebrow: 'Our process',
  homeTitle: 'Four clear steps to launch',
  homeDescription: 'A straightforward path from initial audit to live deployment.',
  title: 'Four steps with clear deliverables',
  description: 'Concrete progress at every stage with zero guesswork.',
  steps: [
    {
      title: 'Free Audit',
      teaser:
        'Fast 48-hour diagnostic report delivered straight to your WhatsApp.',
      deliverable:
        'Plain-language report on your online presence sent on WhatsApp in 48 hours.',
    },
    {
      title: 'Design Proposal',
      teaser:
        'Custom homepage layout mockup with upfront fixed-price terms.',
      deliverable:
        'Custom visual mockup of your actual homepage with a fixed price quote.',
    },
    {
      title: 'Build & Review',
      teaser:
        'Private mobile test site revised until you are completely satisfied.',
      deliverable:
        'Private mobile preview link with revisions until you approve.',
    },
    {
      title: 'Launch & Support',
      teaser:
        'Full domain launch accompanied by ongoing post-launch WhatsApp care.',
      deliverable:
        'Live website on your domain with ongoing WhatsApp support.',
    },
  ],
}
