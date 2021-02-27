import React from 'react';
import { Img, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';

const WhoamiPage = () => {
  const { file } = useStaticQuery(
    graphql`
      {
        file(relativePath: { eq: "zach_crop.jpg" }) {
          childImageSharp {
            id
            fixed(width: 300) {
              src
            }
          }
        }
      }
    `
  );
  return (
    <Layout title="About Me">
      <h1>&gt; whoami</h1>
      <img
        alt="I'm this guy. Picture of me."
        src={file.childImageSharp.fixed.src}
        className="whoami-image"
      />
      <p>
        Professional nerd, foodie, and photographer. I am a data scientist with a passion for
        problem solving, currently working at the intersection of <b>Data Science</b>, <b>DevOps</b>
        , and <b>App Development</b>.
      </p>
      <p>
        I started my journey into programming and data analysis as an undergrad at Dartmouth
        studying social neuroscience. As a new member of my lab, I was tasked with manually cleaning
        up our data files in Excel (things like dropping unnecessary columns, re-ordering columns,
        filling blank cells). This was before Pandas or the Tidyverse, but I still felt like there
        was a better way.
      </p>
      <p>
        I automated the manual work of pre-processing our data, and went on to be the primary
        developer/tech support for the lab. I went on to do fMRI and behavioral data analysis with
        Python and Matlab. I stayed in the field after graduating as a lab manager, first at
        Dartmouth and then at Harvard.
      </p>
      <p>
        I continue to have a passion for <b>automation</b> and <b>data</b> <b>analysis</b>. I
        believe that systems should be set up so that the best way to do something is also the easy
        way to do it. <b>Python</b> was the first programming language I loved, and <b>R</b> has
        become a new favorite.
      </p>
      <p>
        I believe that <b>Vim</b>, <b>Git</b>, and <b>Docker</b> give you superpowers.
      </p>
    </Layout>
  );
};

export default WhoamiPage;
