
const NewArticle = ({ data }) => {
  return (
    <>
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-3xl font-bold my-8">All Posts</h1>
      <hr className="my-4 border-t border-gray-300" />
      {data.map((item) => (
        <div key={item.id} className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-4 w-[480px]">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="w-[480px]">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default NewArticle;