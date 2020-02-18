import React from 'react'
import intl, {
  useIntl,
  injectIntl,
  Link,
  FormattedMessage,
  changeLocale,
  navigate,
} from 'gatsby-plugin-intl'

const getT = formatMessage => (key, params) => formatMessage({ id: key, ...params })

const useTranslation = () => getT(useIntl().formatMessage)

const withTranslation = Component =>
  injectIntl(({ intel, ...props }) => (
    <Component {...props} intl={intel} t={getT(intel.formatMessage)} />
  ))

export {
  intl,
  Link,
  FormattedMessage,
  useTranslation,
  useIntl,
  injectIntl,
  withTranslation,
  changeLocale,
  navigate,
}
