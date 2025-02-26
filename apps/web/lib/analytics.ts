import mixpanel from 'mixpanel-browser'

import { MIXPANEL_TOKEN } from '@campsite/config'

mixpanel.init(MIXPANEL_TOKEN)

export function track(event: string, properties?: Record<string, any>) {
  mixpanel.track(event, properties)
}

export function identify(distinctId: string) {
  mixpanel.identify(distinctId)
}
