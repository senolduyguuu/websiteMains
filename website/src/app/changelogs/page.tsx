import ChangelogFeed from "@/components/changelogs/changelogFeed"
import ChangelogsLayout from "@/components/changelogs/changelogsLayout"

const Changelogs = () => {
    return(
     <div className="bg-foreground">
     <ChangelogsLayout/>
     <ChangelogFeed/>
     </div>
    
        
       
    )
}
export default Changelogs