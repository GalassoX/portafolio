import Projects from './components/Projects/Projects';
import About from './components/About/About';

export default function Home() {
  return (
    <main className='bg-port-blueground-300 flex justify-center text-white'>
      <div className='w-3/4'>
        <div className=''>
          <About />
        </div>
        <div className=''>
          {/* @ts-ignore Async Server Component */}
          <Projects />
        </div>
        <footer className='text-center mt-4 p-2 drop-shadow-md rounded-t-md'>
          <a href='https://github.com/GalassoX/portafolio' target="_blank" rel="noopener noreferrer" className='text-sm italic text-port-blueground-100'>Hecho por GalassoX - 2023</a>
        </footer>
      </div>
    </main>
  )
}
