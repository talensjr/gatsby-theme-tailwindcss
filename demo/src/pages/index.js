import React from "react"
import { Link } from "gatsby"

import "../utils/globals.css"
import H1 from "../components/ui/h1"
import Layout from "../components/ui/layout"

function IndexPage() {
  return (
    <Layout>
      <H1 className="mb-4">Some examples</H1>
      <ul className="list-square md:list-disc pl-5">
        <li className="mt-4">
          <Link to="/components/alerts">Alerts</Link>
        </li>
        <li className="mt-4">
          <Link to="/components/buttons">Buttons</Link>
        </li>
        <li className="mt-4">
          <Link to="/components/cards">Cards</Link>
        </li>
        <li className="mt-4">
          <Link to="/components/forms">Forms</Link>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
