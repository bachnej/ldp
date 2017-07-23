package com.bm.lpb.service.mapper;

import com.bm.lpb.domain.*;
import com.bm.lpb.service.dto.SkillDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Skill and its DTO SkillDTO.
 */
@Mapper(componentModel = "spring", uses = {TaskMapper.class, })
public interface SkillMapper extends EntityMapper <SkillDTO, Skill> {
    
    
    default Skill fromId(Long id) {
        if (id == null) {
            return null;
        }
        Skill skill = new Skill();
        skill.setId(id);
        return skill;
    }
}
