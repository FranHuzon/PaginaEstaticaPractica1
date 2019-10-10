import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hola Fran</h1>
    <p>Bienvenido a tu nuevo sitio Gatsby.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/post-1/">Go to post-1</Link>
    <Link to="/post-2/">Go to post-2</Link>
    <Link to="/post-3/">Go to post-3</Link> 
 </Layout>
)

export default IndexPage
