const GIFT_CARD_URLS = {
  POST: '/gift_cards/',
  GET: '/gift_cards/',
  PUT: '/gift_cards/',
  DELETE: '/gift_cards/',
  SEND_GIFT_CARD: '/gift_cards/send_gift_card/',
}

const USER_URLS = {
  REGISTER_: `/v1/auth/users/`,
  LOGIN: `/v1/auth/jwt/create/`,
  ACTIVATE: `/v1/auth/users/activation/`,
  RESEND_ACTIVATION: `/v1/auth/users/resend_activation/`,
  GET_USER_INFO: `/v1/auth/users/me/`,
  ALL_USERS: `/users/all/`,
  REFRESH: `/v1/auth/jwt/refresh/`,
  VERIFY_TOKEN: `/v1/auth/jwt/verify/`,
  ADMIN_STATUS_: `/check_status/`,
  SEND_RESET_PASSWORD_EMAIL: `/v1/auth/users/reset_password/`,
  RESET_PASSWORD_CONFIRMATION_: `/v1/auth/users/reset_password_confirm/`,
}

const PRESS_URLS = {
  POST: '/press/',
  GET: '/press/',
  PUT: (pkid: number) => `/press/${pkid}/`,
}

const NEGRIL_GUIDE_URLS = {
  PAGE_INTRO: '/skylark/negril-guide-page-intro/',
  PAGE_SECTIONS: '/skylark/negril-guide-page-sections/',
  ARTICLE_CATEGORIES: '/skylark/negril-guide-article-categories/',
  ARTICLES: '/skylark/negril-guide-articles/',
  ARTICLE: (pkid: number) => `/skylark/negril-guide-articles/${pkid}/`,
  PAGE_ACCESS: '/skylark/negril-guide-page-access/',
}

export { GIFT_CARD_URLS, USER_URLS, PRESS_URLS, NEGRIL_GUIDE_URLS }
