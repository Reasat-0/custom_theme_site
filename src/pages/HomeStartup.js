import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import Banner from '../component/banner/Banner';
import Blog from '../component/blog/Blog';
import Brand from '../component/brand/Brand';
import Counter from '../component/counterup/Counter';
import CtaLayout from '../component/cta/CtaLayout';
import Project from '../component/project/Project';
import { ServiceDark } from '../component/service/ServiceDark';
import Testimonial from '../component/testimonial/Testimonial';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';

const HomeStartup = () => {

    return (
        <>
        <SEO title="Home Startup"/>
        <ColorSwitcher />
        <main className="main-wrapper">
        <Header />
        <Banner />
        <ServiceDark />
        <Project />
        <Counter/>
        <Testimonial />
        <Brand />
        <Blog />
        <CtaLayout />
        <Footer />
        </main>
        </>
    )
}

export default HomeStartup;

