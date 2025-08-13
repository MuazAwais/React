const NewArticle = ({ data }) => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-2 ">
        <h1 className="text-3xl font-bold my-8">All Posts</h1>
        <hr className="my-4 border-t border-gray-300" />
        {data.map((item) => (
          <div key={item.id} className="max-w-[1160px] mx-auto flex flex-col lg:flex-row my-7">
            <div className="flex flex-col gap-4 max-w-[480px] mr-[20px] h-[350px]">
              <img src={item.img} alt={item.title} className="h-[350px]" />
            </div>
            <div className="max-w-[660px]">
              <h3 className="text-[25px] font-bold">{item.title}</h3>
              <div className="flex gap-2 item-center py-5">
                <div className="max-w-[30px] py-1">
                  <img src={item.authorAvatar} alt="" />
                </div>
                <div className="text-[12px] ">
                  <p className="font-bold">{item.authorName}</p>
                  <div className="flex gap-3">
                    <p>{item.date}</p>
                    <span className="font-extrabold" >.</span>
                    <p>3 Min Read</p>
                  </div>
                </div>
              </div>
              <p>{item.content}</p>
              <button className="bg-[#ff5959] text-white font-bold text- px-5 py-2 rounded-md mt-[40px] hover:bg-[#fd9696] hover:shadow-lg active:text-black">
                Read full article...
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArticle;
