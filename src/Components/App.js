import React, { lazy, Suspense } from "react";
import Home from "./SbuComponents/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import ContactUs from './SbuComponents/ContactUs';
import Loading from "./SbuComponents/Loading";
import NotFound from "./SbuComponents/NotFound";
import SingleTodo from './SbuComponents/SingleTodo';

const AboutUs = lazy(() => import('./SbuComponents/AboutUs'));

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={
                <Suspense fallback={<Loading />}>
                    <AboutUs />
                </Suspense>
            }>
                <Route path="" element=<h2>this is default page</h2> />
                <Route path="projects" element={<h2>this is projects page</h2>} />
                <Route path="employees" element={<h2>this is employees page</h2>} />
            </Route>
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/todos/:id" element={<SingleTodo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;