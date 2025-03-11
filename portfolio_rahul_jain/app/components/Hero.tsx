import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { href: 'https://www.linkedin.com/in/rahul-jain-4109421b7', icon: 'linkedin-ico.png' },
  { href: 'https://github.com/Rahuljain-tech', icon: 'github-ico.png' },
  { href: '#', icon: 'twitter-ico.png' },
  { href: '#', icon: 'yt-ico.png' },
  { href: '#', icon: 'insta-ico.png' },
]

export default function Hero() {
  return (
    <section className="text-white bg-gradient-to-r from-[#1F4068] to-[#1F4068] min-h-screen py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-[3px] text-center font-bold mb-12">
          Hey, My name is Rahul Jain
        </h1>
        
        {/* Two Column Layout - Image and Text */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          {/* Image Column */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image 
                src="/assets/jpeg/dp.jpg" 
                alt="Rahul Jain" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Text Column - Conversational Style */}
          <div className="w-full md:w-3/5">
            <div className="prose prose-lg text-white max-w-none">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                Hey there! I'm <strong>Rahul Jain</strong>, a <strong>Full Stack Web Developer</strong> based in Jaipur, Rajasthan, India.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                As a B.Tech student in Computer Science Engineering, I've built a strong foundation in C++, Java, and Python. I'm passionate about developing web and mobile applications that solve real problems.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Some of my projects include an online food ordering website and an Android journal app. I've also explored machine learning, creating a movie recommendation model that I'm particularly proud of.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                I thrive in collaborative environments and I'm always looking for opportunities to contribute to dynamic teams while expanding my skills in software development.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-10">
              <Link 
                href="/#projects" 
                className="bg-white text-[#333] uppercase tracking-[2px] inline-block font-bold rounded-md shadow-lg hover:-translate-y-1 transition-transform duration-300 py-4 px-8 text-lg"
              >
                View My Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Links Sidebar */}
      <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 border-2 border-[#eee]">
        {socialLinks.map((link, index) => (
          <div key={index} className="w-16">
            <a 
              href={link.href}
              className={`w-full block p-4 border-b-2 border-[#eee] hover:bg-white/10 transition-colors duration-300 ${
                index === socialLinks.length - 1 ? 'border-b-0' : ''
              }`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={`/assets/png/${link.icon}`}
                alt="social icon"
                className="w-full"
                width={30}
                height={30}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}