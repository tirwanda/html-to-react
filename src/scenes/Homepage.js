import React from 'react'
import Fade from 'react-reveal/Fade'

import Header from "parts/Header"
import Section from "elements/Section"
import Clients from "parts/Clients"

import HeroImage from "assets/images/hero-image.png"

export default function Homepage() {
    return (
        <div className="body-warp">
            <Header></Header>
            <main className="site-content">
                <Section className="hero ilustration-section-01" isCenteredContent>
                    <div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
								<Fade bottom delay={350}>
                                    <h1
									    className="mt-0 mb-16"
									    data-reveal-delay="200"
								    >
									    Landing template for startups
								    </h1>
                                </Fade>
								<div className="container-xs">
									<Fade bottom delay={700}>
                                        <p
										    className="mt-0 mb-32"
										    data-reveal-delay="400"
									    >
										    Our landing page template works on all
										    devices, so you only have to set it up
										    once, and get beautiful results forever.
									    </p>
                                    </Fade>
								</div>
							</div>
							<Fade bottom delay={950}>
                                <div
                                    className="hero-figure illustration-element-01"
                                    data-reveal-value="20px"
                                    data-reveal-delay="800"
                                >
								    <img
									    className="has-shadow"
									    src={HeroImage}
									    alt="Hero"
									    width="896"
									    height="504"
								    />
							    </div>
                            </Fade>
						</div>
					</div>
                </Section>
            </main>
            <Clients></Clients>
        </div>
    )
}
