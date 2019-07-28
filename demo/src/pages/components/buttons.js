import React from "react"
import H1 from "../../components/ui/h1"
import Layout from "../../components/ui/layout"

import "../../utils/globals.css"

function Buttons() {
  return (
    <Layout>
      <H1>Buttons</H1>

      <h2 className="mt-16 mb-4">Simple</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>

      <h2 className="mt-16 mb-4">Pill</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>

      <h2 className="mt-16 mb-4">Outline</h2>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Button
      </button>

      <br />
      <a
        href="https://tailwindcss.com/components/buttons/"
        rel="noopener noreferrer"
        target="_blank"
        className="mt-16 inline-block text-teal-600 underline"
      >
        More on tailwind's official documentation...
      </a>
    </Layout>
  )
}

export default Buttons
