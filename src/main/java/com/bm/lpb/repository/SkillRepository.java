package com.bm.lpb.repository;

import com.bm.lpb.domain.Skill;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Skill entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SkillRepository extends JpaRepository<Skill,Long> {
    
    @Query("select distinct skill from Skill skill left join fetch skill.tasks")
    List<Skill> findAllWithEagerRelationships();

    @Query("select skill from Skill skill left join fetch skill.tasks where skill.id =:id")
    Skill findOneWithEagerRelationships(@Param("id") Long id);
    
}
