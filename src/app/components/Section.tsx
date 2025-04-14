import React from 'react'
import A from './A'
import Link from 'next/link'

export default function Section() {
  return (
    <section className="col-9 a_tbdr">
      <Link href="/cms/investor-relations" >Go To investor relation page</Link>
      <A myname="Anil" mysurname="dollor" />
    </section>
  )
}
