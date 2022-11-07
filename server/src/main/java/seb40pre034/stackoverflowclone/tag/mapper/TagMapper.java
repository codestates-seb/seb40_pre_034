package seb40pre034.stackoverflowclone.tag.mapper;

import org.springframework.stereotype.Component;
import seb40pre034.stackoverflowclone.tag.entity.Tag;

import java.util.ArrayList;
import java.util.List;

@Component
public class TagMapper {
    public List<String> tagsListToStringList(List<Tag> tags) {
        List<String> result = new ArrayList<>();
        for (Tag t : tags) {
            result.add(t.getTagName());
        }
        return result;
    }
}
