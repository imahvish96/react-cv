import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect'

import profileThumb from '../../../../assets/svg/profile.svg'

export default function Panel() {

    const resizeOnScroll = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 200,
          right = document.getElementById("resumo_fn_right");
          const left = document.getElementById("resumo_fn_left");
    
        if (distanceY > shrinkOn) {
          right.classList.add("smaller");
          left.classList.add("inc");
        } else {
          right.classList.remove("smaller");
          left.classList.remove("inc");
        }
      }


    useEffect(() => {
        window.addEventListener("scroll", resizeOnScroll);
    },[]);

      

    return (
        <div className="right_in">
            <div className="right_top">
                <div className="border1"></div><div className="border2"></div>

                <div className="img_holder">
                    <img src={profileThumb} alt="" />
                    <div className="abs_img" data-bg-img="img/right.jpg"></div>
                </div>
                <div className="title_holder">
                    <h5>Hi There! I am</h5>
                    <h3>
                        <span className="animated_title" id="typewriter">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Mahvish Faridi",
                                        "MERN Stack Developer",
                                        "MEAN Stack Developer",
                                        "Freelancer",
                                        "Graphic Designer"
                                    ] 

                                }}
                            />
                        </span>
                    </h3>
                </div>
            </div>
            <div className="right_bottom">
                <a href="#contact">
                    <span className="circle"></span>
                    <span className="text">I’m available. Hire me</span>
                </a>
            </div>
        </div>
    )
}
