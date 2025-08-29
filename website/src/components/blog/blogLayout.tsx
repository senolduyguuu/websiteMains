import BlogFeed from "./blogFeed"
import BlogDetailHero from "./blogDetailHero"

const BlogLayout = () => {
    return(
        <div className="bg-foreground">
    <BlogDetailHero/>
    <BlogFeed/>
        </div>
    
        
       
    )
}
export default BlogLayout