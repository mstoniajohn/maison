/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import MuiLink from '@mui/material/Link'

export const NextLinkComposed = React.forwardRef(function NextLinkComposed(
  props: any,
  ref
) {
  const {
    to,
    linkAs,
    href,
    replace,
    scroll,
    passHref,
    shallow,
    prefetch,
    locale,
    ...other
  } = props

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
    >
      <a ref={ref} {...other} />
    </NextLink>
  )
})

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const MuiNextLink = React.forwardRef(function Link(props: any, ref) {
  // const { state } = React.useContext(Store);
  // const { darkMode } = state;
  const {
    activeClassName = 'active',
    as: linkAs,
    className: classNameProps,
    href,
    noLinkStyle,
    normal = false,
    role, // Link don't have roles.
    ...other
  } = props

  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  })

  const isExternal =
    typeof href === 'string' &&
    (href.indexOf('http') === 0 ||
      href.indexOf('mailto:') === 0 ||
      href.indexOf('tel:') === 0)

  if (isExternal) {
    if (noLinkStyle) {
      return <a className={className} href={href} ref={ref} {...other} />
    }

    return (
      <MuiLink
        className={className}
        href={href}
        ref={ref}
        {...other}
        sx={{
          textDecoration: 'none',
          color: `${normal ? 'secondary.main' : 'primary.main'}`,
          '&:hover': {
            color: `${normal ? 'primary.main' : 'secondary.main'}`,
          },
        }}
      />
    )
  }

  if (noLinkStyle) {
    return (
      <NextLinkComposed className={className} ref={ref} to={href} {...other} />
    )
  }

  return (
    <MuiLink
      component={NextLinkComposed}
      linkAs={linkAs}
      className={className}
      sx={{
        textDecoration: 'none',
        color: `${normal ? 'secondary.main' : 'primary.main'}`,
        '&:hover': {
          color: `${normal ? 'primary.main' : 'secondary.main'}`,
          textDecoration: 'underline',
        },
      }}
      // color={`${darkMode ? 'primary' : 'text.primary'}`}
      ref={ref}
      to={href}
      {...other}
    />
  )
})

export default MuiNextLink
