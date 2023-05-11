export default function LoadingProjects() {
  return (
    <div className="flex items-center flex-col my-40">
      <div className='animate-spin w-min'>
        <i className="bi bi-arrow-clockwise text-5xl"></i>
      </div>
      <p className="italic font-bold">Obteniendo información de los proyectos...</p>
    </div>
  )
}