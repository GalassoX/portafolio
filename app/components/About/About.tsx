import SOCIALS from '@root/data/socials';
import LinkButtons from '../LinkButtons/LinkButtons';

export default function About() {
  return (
    <section className='min-h-screen flex items-center'>
      <div className='w-1/2 border-b-2 p-2 border-port-font'>
        <h1 className='text-4xl font-semibold'>Hola!</h1>
        <p className='mt-4'>
          Soy
          <span className='font-semibold'> Rafael Marrugo</span>.
          Desarrollador FullStack autodidacta con +3 años de experiencia en programación.
        </p>
      </div>
      <div className='w-1/2'>
        <LinkButtons />
        <div className='flex justify-center mt-6'>
          <a href={SOCIALS.cv} className='flex items-center gap-2 px-14 py-2 rounded-md bg-port-blueground-100 hover:scale-110 transition-transform hover:drop-shadow'>
            <p>Mi curriculum aquí!</p>
          </a>
        </div>
      </div>
    </section>
  )
}