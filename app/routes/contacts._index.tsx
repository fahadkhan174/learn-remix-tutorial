import { LinksFunction } from '@remix-run/node';
import React from 'react'

type Props = {}

export const links: LinksFunction = () => [
  { rel: "next", href: ""}
];

const Contacts = (props: Props) => {
  return (
    <div>Contacts</div>
  )
}

export default Contacts