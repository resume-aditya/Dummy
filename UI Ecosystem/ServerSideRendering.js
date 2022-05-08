// Server-side rendering (SSR) is a technique for rendering a client-side single page application (SPA) on the server
// and then sending a fully rendered page to the client. 
// This allows for dynamic components to be served as static HTML markup.

// This approach can be useful for search engine optimization (SEO) when indexing does not handle JavaScript properly.


// If you call ReactDOM.hydrate() on a node that already has this server-rendered markup, React will preserve it and only attach event handlers, allowing you to have a very performant first-load experience.