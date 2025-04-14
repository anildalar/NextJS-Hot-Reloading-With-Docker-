import React from 'react'
interface Page {
  params: {
    slug: string;
  };
}

export default function page({params }: Page) {
  const { slug } = params;
  return (
    <div>IT'S ALL ABOUT FOOD {slug}</div>
  )
}
