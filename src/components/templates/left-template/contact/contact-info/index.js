import React from 'react';
import { EMAIL, PHONE, ADDRESS, PHONE_STRING } from '../../../../../constants';
import { contactLabel } from '../../../../../languagepack';

export default function ContactInfo() {
    return (
        <div className="resumo_fn_contact_info">
            <p>{contactLabel.addressLabel}</p>
            <h3>{ADDRESS}</h3>
            <p>{contactLabel.phoneLabel}</p>
            <h3><a href={`tel:+${PHONE}`}>{PHONE_STRING}</a></h3>
            <p><a className="fn__link" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
    )
}
