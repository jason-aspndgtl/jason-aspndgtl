import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'pages/k2c/theme';
import SEO from 'pages/k2c/pfc/components/seo';
import Layout from 'pages/k2c/pfc/components/layout';
import Banner from 'pages/k2c/pfc/sections/banner';
import Subscribe from 'pages/k2c/pfc/sections/subscribe';
import Services from 'pages/k2c/pfc/sections/services';
import VideoIntro from 'pages/k2c/pfc/sections/video-intro';


export default function IndexPage() {
  
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Professional Focused Contractors Rater"
          description="Professional focused Contractors rater from K2 Construction Insurance Servcies powered by PowerInsure"
        />
        <Banner />
        <Services />
        <VideoIntro />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
