// lib/sanity.js
import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
  createClient,
} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
// import { config } from './config'

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/

// lib/config.js
export const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === 'production',
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// export const urlFor = (source) => createImageUrlBuilder(config).image(source)
