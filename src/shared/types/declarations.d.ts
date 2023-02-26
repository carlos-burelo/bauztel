import React from 'react'

export declare global {
  interface FC<T = object> {
    (props: Props<T>): JSX.Element
  }
  interface Page<T = object> {
    (props: PageProps): Promise<JSX.Element> | JSX.Element
  }
  type Props<T> = { children?: React.ReactNode } & T
  type PageProps = {
    params: Record<string, string>
    searchParams: URLSearchParams
  }
}