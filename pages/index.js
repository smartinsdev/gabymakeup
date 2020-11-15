import Head from 'next/head'
import Link from 'next/link';

import Section from '../components/section1';
import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gaby Makeups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="text-4xl font-bold leading-tight mb-5 capitalize"> Makeup Artist. invest in yourself</h1>
                <p className="text-xl">Makeup By Gaby does makeup from weddings, fashion shoots, special occasions, film and runway events to matric dance makeup, Gaby offers a professional, high-end and experienced makeup service.</p>

                <div className="py-5">
                    <Link href="/contact">
                      <a className="transition duration-500 ease-in-out transform hover:scale-110 text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3">Contact Me</a>
                    </Link>
                </div>

              </div>
              <div className="lg:w-5/12 order-2 fade-in-x">
                <img src="womanmakeup.jpg"
                style={{transform: "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"}} alt="" className="rounded" />
              </div>
          </div>
      </Section>

      <Section bg="bg-gray-200">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 fade-in-y">
              <Card 
                title="Glamour Makeup" 
                description="Looking glamorous is well within reach for all of us. Glamour is a sign of confidence as a woman, that is, being outstanding, glamorous and absolutely flawless in facial appearance without any exception."
                textButton="Gallery"
                srcImage="gallery.jpg"
                link="/galery"
              />
              <Card 
                title="Bridal Makeup"
                description="One cannot skip the importance of perfect make-up for both the bride and bridesmaids. This will decide how beautiful, fashionably elegant and sophisticated you will look on your long awaited special day."
                textButton="Pricing"
                srcImage="pricing.jpg"
                link="/pricing"
              />
              <Card 
                title="Essential Makeup"
                description="A woman is always on her “A” game when she feels fashionably elegant and sophisticated. Women who tend to ruminate rather than act are less likely to feel comfortable in new day to day situations."
                textButton="View More"
                srcImage="viewmore.jpg"
                link="/services"
              />
            </div>
      </Section>
    </div>
  )
}
