import React from "react";
import {MDXProvider} from "@mdx-js/tag";
import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {Heading1, Heading2, Paragraph, Preformatted} from "../components/ArticleComponents";

export default class ArticleLayout extends React.Component {
    state = {
        h1: Heading1,
        h2: Heading2,
        p: Paragraph,
        pre: Preformatted
    };

    render() {
        return (
            <div className="root">
                <Head>{/* <title>{title}</title> */}</Head>
                <header>
                    <Nav />
                </header>
                <MDXProvider components={this.state}>
                    <main className="main">
                        <article className="section container article" {...this.props} />
                    </main>
                </MDXProvider>
                <Footer />
            </div>
        );
    }
}
