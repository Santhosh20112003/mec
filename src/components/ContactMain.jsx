import React from 'react'
import { useParams } from 'react-router-dom'
import Contact2 from './contact/Contact2';
import Contact1 from './contact2/Contact1';

function ContactMain() {
    const { id } = useParams();
    return (
        <div>
            <Contact1 id={id} />
            <Contact2 />
        </div>
    )
}

export default ContactMain