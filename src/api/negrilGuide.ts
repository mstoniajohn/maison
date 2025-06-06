import { getApiData, postApiData } from '@/utils/getApiData'
import { NEGRIL_GUIDE_URLS } from '@/components/api/urls'

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? ''

export interface NegrilGuidePageAccessResponse {
  unlocked: boolean
  email?: string
  password?: string
}

export interface NegrilGuidePageIntro {
  title: string
  subtitle: string
  image: string
  description?: string
}

export interface NegrilGuidePageSection {
  title: string
  subtitle: string
  image: string
  description?: string
}

export interface NegrilGuideCategory {
  id: number
  pkid: number
  name: string
  image: string
  description: string
  order: number
}

export interface NegrilGuideArticle {
  id: number
  pkid: number
  title: string
  content: string
  image: string
  category: number
  category_name: string
}

export const getNegrilGuidePageIntro =
  async (): Promise<NegrilGuidePageIntro> => {
    try {
      const response = await getApiData<NegrilGuidePageIntro>({
        endpoint: NEGRIL_GUIDE_URLS.PAGE_INTRO,
      })
      return response
    } catch (error) {
      console.error('Error fetching Negril Guide page intro:', error)
      throw error
    }
  }

export const getNegrilGuidePageSections = async (): Promise<
  NegrilGuidePageSection[]
> => {
  try {
    const response = await getApiData<NegrilGuidePageSection[]>({
      endpoint: NEGRIL_GUIDE_URLS.PAGE_SECTIONS,
    })
    return response
  } catch (error) {
    console.error('Error fetching Negril Guide page sections:', error)
    throw error
  }
}

export const getNegrilGuideCategories = async (): Promise<
  NegrilGuideCategory[]
> => {
  try {
    const response = await getApiData<NegrilGuideCategory[]>({
      endpoint: NEGRIL_GUIDE_URLS.ARTICLE_CATEGORIES,
    })
    return response
  } catch (error) {
    console.error('Error fetching Negril Guide categories:', error)
    throw error
  }
}

export const getNegrilGuideArticlesByCategory = async (
  categoryName: string
): Promise<NegrilGuideArticle[]> => {
  try {
    const response = await getApiData<NegrilGuideArticle[]>({
      endpoint: NEGRIL_GUIDE_URLS.ARTICLES,
      params: {
        category_name: categoryName,
      },
    })
    return response
  } catch (error) {
    console.error(
      `Error fetching articles for category ${categoryName}:`,
      error
    )
    throw error
  }
}

export const updateNegrilGuideArticle = async (
  pkid: number,
  content: string
): Promise<NegrilGuideArticle> => {
  // get access token
  const accessToken = localStorage.getItem('accessToken')
  try {
    const response = await postApiData<NegrilGuideArticle>({
      endpoint: NEGRIL_GUIDE_URLS.ARTICLE(pkid),
      method: 'PUT',
      data: { content },
      accessToken: accessToken || undefined,
      useToken: true,
    })
    return response
  } catch (error) {
    console.error(`Error updating article ${pkid}:`, error)
    throw error
  }
}

// get page access

export async function negrilGuidePageAccess<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    // credentials: 'include',
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.detail || res.statusText)
  }
  return res.json() as Promise<T>
}

export const NegrilGuideAPI = {
  checkAccess: () =>
    negrilGuidePageAccess<NegrilGuidePageAccessResponse>(
      NEGRIL_GUIDE_URLS.PAGE_ACCESS
    ),
  requestAccess: (email: string) =>
    negrilGuidePageAccess<NegrilGuidePageAccessResponse>(
      NEGRIL_GUIDE_URLS.PAGE_ACCESS,
      {
        method: 'POST',
        body: JSON.stringify({ email }),
      }
    ),
}
