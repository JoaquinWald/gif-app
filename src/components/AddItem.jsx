import { useFetchGifs } from "../hooks/useFetchGifs"
import { Item } from "./Item";

export const AddItem = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <div>

      <section className="flex justify-center">
        <h3 className="text-3xl w-auto px-4 text-black text-center mt-8 mb-8 bg-amber-200 rounded-xl dark:bg-slate-400">
          {category}
        </h3>
      </section>

      {
        isLoading && (<h2 className="dark:text-slate-400">Loading...</h2>)
      }

      <div className="grid md:grid-cols-2 lg:grid-cols-4 m-1 ">
        {
          images.map(({ id, title, url, webp }) => (
            <Item
              key={id}
              id={id}
              title={title}
              url={url}
              webp={webp}
            />
          ))
        }
      </div>
    </div>
  )
}
