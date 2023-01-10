import React from 'react';

import SectionHeader from '../../../ui/section-header';
import { sectionHeaderLabel } from '../../../../languagepack'

export default function Home() {
  return (
    <section id="home">
        <div className="container">
            <div className="roww">
              <SectionHeader
                title='MERN Stack Developer'
                subTitle='Introduction'
                description={sectionHeaderLabel.about.description}
              />
            </div>
        </div>
    </section>
  )
}
