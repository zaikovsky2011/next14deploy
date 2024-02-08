'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';

export default function Home() {
	useEffect(() => {
    gsap.registerPlugin(Observer);

    let sections = document.querySelectorAll("section"),
  images = document.querySelectorAll(".bg"),
  headings = gsap.utils.toArray(".section-heading"),
  outerWrappers = gsap.utils.toArray(".outer"),
  innerWrappers = gsap.utils.toArray(".inner"),
 
  currentIndex = -1,
  wrap = gsap.utils.wrap(0, sections.length),
  animating;

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

function gotoSection(index, direction) {
  index = wrap(index); // make sure it's valid
  animating = true;
  let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => animating = false
      });
  if (currentIndex >= 0) {
    // The first time this function runs, current is -1
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(images[currentIndex], { yPercent: -15 * dFactor })
      .set(sections[currentIndex], { autoAlpha: 0 });
  }
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
      yPercent: i => i ? -100 * dFactor : 100 * dFactor
    }, { 
      yPercent: 0 
    }, 0)
    .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
    

  currentIndex = index;
}

Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => !animating && gotoSection(currentIndex - 1, -1),
  onUp: () => !animating && gotoSection(currentIndex + 1, 1),
  tolerance: 10,
  preventDefault: true
});

gotoSection(0, 1);

  }, []);

  return (
    <main>
      <section className='first w-screen h-screen bg-white'>
  	<div class="outer">
    <div className='inner flex flex-col justify-end bg-gradient-to-t from-customPurple-900 to-customDarkPurple-900'>
			<video autoPlay loop muted playsInline className=' z-10'>
				<source src="/videos/aqualang.mp4" type='video/mp4; codecs=hvc1' />		
			</video>
			<div className=' w-[1440px] h-[415px] bg-gradient-to-t from-customBlue-600 to-customBlue-100'></div>
			<Image src={'/images/moon.png'} width={150} height={150} className=' absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
				<Image src={'/images/mountains_back.png'} width={1297} height={244} className=' absolute mb-[110px]'/>
				<Image src={'/images/mountains.png'} width={1440} height={198} className=' absolute mb-[100px]'/>
				<Image src={'/images/earth2.png'} width={1440} height={133} className=' absolute'/>

    </div>
  </div>
</section>
<section className='second w-screen h-screen bg-yellow-300'>
  <div class="outer">
    <div class="inner">
      <div class="bg">
        <h2 class="section-heading">Animated with GSAP</h2>
      </div>
    </div>
  </div>
</section>
<section className='third w-screen h-screen bg-cyan-400'>
  <div class="outer">
    <div class="inner">
      <div class="bg">
        <h2 class="section-heading">GreenSock</h2>
      </div>
    </div>
  </div>
</section>
			</main>
  );
};
