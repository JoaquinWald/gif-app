export const Item = ({ title, url, webp }) => {

  return (
    <div className="m-2 bg-amber-200 flex flex-wrap justify-center dark:bg-slate-700">
      <a href={webp} target='_blank'>
        <img src={url} alt={title} />
      </a>
      <p className="text-xl font-medium px-8 dark:text-slate-400">
        {title}
      </p>
    </div>
  )
}
