import Mokeup from "./mokeup"
import { Blogs } from "../../lib/data"
import NewArticle from "../../components/shared/newArticle"

const BlogsPage = () => {
  return (
    <div>
      <Mokeup />
      <NewArticle data={Blogs} />
    </div>
  )
}

export default BlogsPage