import React from 'react';
import github from '../../assets/cover/github.jpeg';
import linkedin from '../../assets/cover/linkedin.jpeg';
import { FaMobileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiDownload } from 'react-icons/fi';
import { IoMdShare } from 'react-icons/io';

function Footer() {
    return (
        <section className='my-5'>
            <h1 id='footer' className='intro'><IoMdShare /> Socials & More</h1>

            <section className='flex-column center'>
                <div className='card'>
                    <div className='cardTitle'>
                        <FaLinkedin /> LinkedIn
                    </div>

                    <a href='https://www.linkedin.com/in/diptanshu-bhawsar-503b201aa/' target={'_blank'} rel="noreferrer">
                        <img className='screenshot' alt='LinkedIn profile screenshot' src={linkedin}></img></a>
                </div>

                <div className='card'>
                    <a href="mailto://diptanshubhawsar50@gmail.com"><FiMail /> Email</a>
                    <br />
                    <a href="tel:758.297.4834"><FaMobileAlt /> Phone</a>
                    <br />
                    <a href="https://flowcv.com/resume/tqh16tr3cm" target={'_blank'} rel="noreferrer"><FiDownload /> Resume</a>
                </div>
                <div className='card'>
                    <div className='cardTitle'><FaGithub /> GitHub</div>
                    <a href='https://github.com/diptanshug' target={'_blank'} rel="noreferrer"><img className='screenshot' alt='GitHub profile screenshot' src={github}></img></a>
                </div>
            </section>
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
        </section>
    )
}

export default Footer;