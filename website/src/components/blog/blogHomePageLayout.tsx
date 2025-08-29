import BlogsCards from "../blogs";
import { BlogHero } from "./blogHero";

// Mock data for demonstration - replace with your actual data fetching logic

const BlogHomePageLayout = () => {
    return(
        <>
        <BlogHero/>
        <BlogsCards limit={4} sort="-date_created" />
        </>
       
    )
}
export default BlogHomePageLayout;