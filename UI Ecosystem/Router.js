// npm i -D react-router-dom

        // src\pages\:
                // Layout.js
                // Home.js
                // Blogs.js
                // Contact.js
                // NoPage.js

                import ReactDOM from "react-dom";
                import { BrowserRouter, Routes, Route } from "react-router-dom";
                import Layout from "./pages/Layout";
                import Home from "./pages/Home";
                import Blogs from "./pages/Blogs";
                import Contact from "./pages/Contact";
                import NoPage from "./pages/NoPage";
                
                export default function App() {
                  return (
                    <BrowserRouter>
                      <Routes>
                        <Route path="/" element={<Layout />}>
                          <Route index element={<Home />} />
                          <Route path="blogs" element={<Blogs />} />
                          <Route path="contact" element={<Contact />} />
                          <Route path="*" element={<NoPage />} />
                        </Route>
                      </Routes>
                    </BrowserRouter>
                  );
                }
                
                ReactDOM.render(<App />, document.getElementById("root"));



                import { Outlet, Link } from "react-router-dom";

                const Layout = () => {
                  return (
                    <>
                      <nav>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/blogs">Blogs</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                
                      <Outlet />
                    </>
                  )
                };
                
                export default Layout;