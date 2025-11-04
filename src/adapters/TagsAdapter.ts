import { TagElement } from "@/Models/GeneralProduct";
import { Tag } from "@/Models/Tag";

export const TAGS_ADAPTER = (tags: TagElement[]):Tag[] =>{
    const adaptedTags: Tag[] = tags.map(tag=>{

        return {
            displayName: tag.tag.displayName,
            id: tag.tag.id,
            name: tag.tag.name
        }
    })
    return adaptedTags
}