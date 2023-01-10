import React from 'react';

// Component Imports
import SectionHeader from '../../../ui/section-header';
import ContactForm from './contact-form';
import ContactInfo from './contact-info/index';

// Config Imports
import { sectionHeaderLabel } from '../../../../languagepack';

export default function Contact() {
    const { contact } = sectionHeaderLabel
    return (
        <section id="contact">
            <div className="container">
                <div className="roww resumo_fn_contact">
                    <SectionHeader
                        subTitle={contact.subTitle}
                        title={contact.title}
                        description={contact.description}
                    />
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
        </section>
    )
}
