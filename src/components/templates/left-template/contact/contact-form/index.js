/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Input from '../../../../ui/input';
import Textarea from '../../../../ui/text-area';
import Button from '../../../../ui/button';

import { contactLabel } from '../../../../../languagepack';


export default function ContactForm() {
    return (
        <form className="contact_form" action="/" method="post" autocomplete="off" data-email="frenifyteam@gmail.com">
            <div className="success" data-success="Your message has been received, we will contact you soon."></div>
            <div className="empty_notice"><span>{contactLabel.error}</span></div>
            <div className="items_wrap">
                <div className="items">
                    <Input 
                        label={contactLabel.nameInputLabel}
                        type="text"
                        half={true}
                    />
                    <Input 
                        label={contactLabel.emailInputLabel}
                        type="text"
                        half={true}
                    />
                    <Input
                        label={contactLabel.phoneInputLabel}
                        type="text"
                    />
                    <Textarea
                        label={contactLabel.messageInputLabel}
                    />
                    <Button
                        label={contactLabel.sendMessageBtn}
                        type="button"
                    />
                </div>
            </div>
        </form>
    )
}
