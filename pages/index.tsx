import React from 'react';

import Layout from '../src/components/layout';

export default function Home() {
  return (
    <Layout title="Zach Ingbretsen">
      <h1>&gt; whoami</h1>
      <p>
        Professional nerd, foodie, and photographer. I am a data scientist with a passion for
        problem solving, currently working at the intersection of <b>Data Science</b>, <b>DevOps</b>
        , and <b>App Development</b>.
      </p>
      <p>
        I started my journey into programming and data analysis as an undergrad at Dartmouth
        studying social neuroscience. As a new member of my lab, I automated the manual work of
        pre-processing our data. I went on to do fMRI and behavioral data analysis with Python and
        Matlab. I stayed in the field after graduating as a lab manager, first at Dartmouth and then
        at Harvard.
      </p>
      <p>
        I am now a data scientist, working on a wide variety of problems. I continue to have a
        passion for <b>automation</b> and <b>data</b> <b>analysis</b>. I believe that systems should
        be set up so that the best way to do something is also the easy way to do it.
      </p>
      <p>
        I believe that <b>Vim</b>, <b>Git</b>, and <b>Docker</b> give you superpowers.
      </p>
    </Layout>
  );
}
