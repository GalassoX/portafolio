import SOCIALS from "@root/data/socials";

export default function LinkButtons() {
  return (
    <div className="flex justify-center gap-5">
      <div>
        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
          <p className='bi bi-github text-5xl hover:scale-110 transition-transform text-port-font hover:drop-shadow'></p>
        </a>
      </div>
      <div>
        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">
          <p className='bi bi-linkedin text-5xl hover:scale-110 transition-transform text-port-font hover:drop-shadow'></p>
        </a>
      </div>
      <div>
        <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer">
          <p className='bi bi-twitter text-5xl hover:scale-110 transition-transform text-port-font hover:drop-shadow'></p>
        </a>
      </div>
      <div>
        <a href={SOCIALS.mail} target="_blank" rel="noopener noreferrer">
          <p className='bi bi-envelope-fill text-5xl hover:scale-110 transition-transform text-port-font hover:drop-shadow'></p>
        </a>
      </div>
    </div>
  )
}
