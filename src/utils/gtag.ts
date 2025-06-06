// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const GA_TRACKING_ID = 'UA-119326640-1'
export const GA_TRACKING_ID_4 = 'G-Z2Z78V7EFB'

export const pageview = (url: URL) => {
  window.gtag('config', 'UA-119326640-1', {
    page_path: url,
  })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
