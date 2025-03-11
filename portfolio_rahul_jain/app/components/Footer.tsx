import Image from 'next/image'

interface SocialLink {
  href: string
  icon: string
}

const socialLinks: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/rahul-jain-4109421b7', icon: 'linkedin-ico.png' },
  { href: 'https://github.com/Rahuljain-tech', icon: 'github-ico.png' },
  { href: '#', icon: 'twitter-ico.png' },
  { href: '#', icon: 'yt-ico.png' },
  { href: '#', icon: 'insta-ico.png' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 border-b-2 border-blue-500 inline-block pb-1">
              Social
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={link.href}
                  className="hover:opacity-80 transition-opacity duration-200"
                >
                  <Image
                    className="rounded-full bg-gray-800 p-1"
                    src={`/assets/png/${link.icon}`}
                    alt="social icon"
                    width={30}
                    height={30}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-gray-200 mb-2">Rahul Jain</h4>
            <p className="text-gray-400 text-sm">Developer & Designer</p>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          &copy; Copyright {new Date().getFullYear()}. Made with ❤️ by
          <a 
            rel="noreferrer" 
            target="_blank" 
            href="#" 
            className="text-blue-400 hover:text-blue-300 ml-1"
          >
            Rahul Jain
          </a>
        </div>
      </div>
    </footer>
  )
}